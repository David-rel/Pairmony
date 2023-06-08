import React, { useEffect, useState } from 'react'
import { client, q } from '../../../utils/fauna'
import { withAuthInfo } from '@propelauth/react'
import Link from 'next/link'

const Chat = withAuthInfo((props) => {
  const propelAuth = require('@propelauth/node')
  const [chats, setChats] = useState([])

  const { fetchUserMetadataByUserId } = propelAuth.initBaseAuth({
    authUrl: process.env.NEXT_PUBLIC_AUTH_URL,
    apiKey: process.env.NEXT_PUBLIC_AUTH_API,
  })

  useEffect(() => {
    async function getChatPeopleData() {
      try {
        const response = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection('chat'))),
            q.Lambda((x) => q.Get(x))
          )
        )

        console.log(response.data)
        let chats = []

        for (let i = 0; i < response.data.length; i++) {
          const user = await fetchUserMetadataByUserId(
            `${response.data[i].data.messageIdOne}`
          )
          const user2 = await fetchUserMetadataByUserId(
            `${response.data[i].data.messageIdTwo}`
          )
          if (
            user.userId === props.user.userId) {
            chats.push(user2)
            }
            if(user2.userId === props.user.userId) {
              chats.push(user)
            }
           
        }

        setChats(chats)

        console.log(chats)

      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    getChatPeopleData()
  }, [])

  return (
    <div className="container mx-auto">
      <div className="bg-blue-500 text-white p-4">
        <Link href="/app" legacyBehavior>
          <a className="text-white">&#8592; Back</a>
        </Link>
      </div>
      <h1 className="text-2xl font-bold my-4">Chat</h1>
      <div className="grid grid-cols-2 gap-4 pl-4">
        {chats.map((chat) => (
          <Link
            key={chat.userId} // Add key prop here
            href={`/app/chat/talk?sender=${props.user.userId}&receiver=${chat.userId}`}
          >
            <div className="border p-4 flex items-center rounded-md shadow-md">
              <img
                src={chat.pictureUrl} // Replace with the actual profile picture URL
                alt={chat.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-medium">
                  {chat.firstName} {chat.lastName}
                </h2>
                <p className="text-gray-600">@{chat.username}</p>
                <p className="text-sm text-gray-500">
                  Click to continue chatting
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default Chat
