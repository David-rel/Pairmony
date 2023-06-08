import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { client, q } from '../../../../utils/fauna'
import { withAuthInfo } from '@propelauth/react'
import Link from 'next/link'

const Talk = withAuthInfo((props) => {
  const router = useRouter()
  const { sender, receiver } = router.query

  // State to track if query parameters are loaded
  const [isQueryLoaded, setIsQueryLoaded] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    // Only set isQueryLoaded to true if sender and receiver are defined
    if (sender && receiver) {
      setIsQueryLoaded(true)
    }
  }, [sender, receiver])

  useEffect(() => {
    // Only run getChatPeopleData if sender and receiver are loaded
    if (isQueryLoaded) {
      getChatPeopleData()
    }
  }, [sender, receiver, isQueryLoaded])

  async function getChatPeopleData() {
    try {
      const response = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('chat'))),
          q.Lambda((x) => q.Get(x))
        )
      )

      const matchedChat = response.data.find(
        (item) =>
          (item.data.messageIdOne === sender &&
            item.data.messageIdTwo === receiver) ||
          (item.data.messageIdOne === receiver &&
            item.data.messageIdTwo === sender)
      )

      if (matchedChat) {
        fetchMessages()
      }

      if (!matchedChat) {
        const createChatResponse = await client.query(
          q.Create(q.Collection('chat'), {
            data: {
              messageIdOne: sender,
              messageIdTwo: receiver,
            },
          })
        )
        console.log('Created new chat:', createChatResponse)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  async function fetchMessages() {
    try {
      const response = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('messages'))),
          q.Lambda((x) => q.Get(x))
        )
      )
      console.log(response.data)

      const matchedMessages = response.data.filter(
        (item) =>
          (item.data.recieverId === sender &&
            item.data.senderId === receiver) ||
          (item.data.recieverId === receiver && item.data.senderId === sender)
      )

      setMessages(matchedMessages)
      console.log(matchedMessages)
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  async function sendMessage() {
    if (newMessage !== '') {
      try {
        const message = {
          data: {
            senderId: props.user.userId,
            recieverId: sender === props.user.userId ? receiver : sender,
            message: newMessage,
          },
        }

        const response = await client.query(
          q.Create(q.Collection('messages'), message)
        )
        console.log('Message sent:', response)
        setNewMessage('')
        setMessages([...messages, response])
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-blue-500 text-white p-4">
    <Link href="/app/chat" legacyBehavior>
    <a className="text-white">&#8592; Back</a>
        </Link>
</div>
      {/* Chat area */}
      <div className="overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              props.user.userId === message.data.senderId
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            <div
              className={`py-2 px-4 rounded-lg ${
                props.user.userId === message.data.senderId
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-black'
              }`}
            >
              {message.data.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="fixed bottom-0 w-full flex justify-between items-center p-4 bg-gray-200">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border rounded-lg p-2 flex-grow mr-4"
          type="text"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white rounded-lg p-2">Send</button>
      </div>
      </div>
  )
})

export default Talk
