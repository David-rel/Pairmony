import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faComment,
  faThumbsDown,
  faForward,
  faHeart,
  faStar,
  faCaretUp,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useRedirectFunctions, withAuthInfo } from '@propelauth/react'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'
import { client, q } from '../../utils/fauna'
import { css, keyframes } from '@emotion/react'

const slideIn = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`

const propelAuth = require('@propelauth/node')

const { fetchUserMetadataByUserId } = propelAuth.initBaseAuth({
  authUrl: process.env.NEXT_PUBLIC_AUTH_URL,
  apiKey: process.env.NEXT_PUBLIC_AUTH_API,
})

const TinderUI = withAuthInfo((props) => {
  const { redirectToLoginPage } = useRedirectFunctions()
  const [users, setUsers] = useState([])
  const [likeData, setLikeData] = useState([])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(1)
  const [showDescription, setShowDescription] = useState(false)

  if (!props.isLoggedIn) {
    redirectToLoginPage()
  }

  async function handleButtonClickedLikeOrLove() {
    const user = {
      userIdThatLiked: `${props.user.userId}`,
      userIdThatGotLiked: `${users[currentUserIndex].userId}`,
    }
    try {
      const response = await client.query(
        q.Create(q.Collection('likes'), { data: user })
      )
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      alert(`you liked ${users[currentUserIndex].username}`)
      setCurrentUserIndex((currentIndex) => (currentIndex + 1) % users.length)
      window.location.reload()
    }
  }

  useEffect(() => {
    async function getAllLikedData() {
      try {
        const response = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection('likes'))),
            q.Lambda((x) => q.Get(x))
          )
        )

        try {
          const responseUser = await client.query(
            q.Map(
              q.Paginate(q.Documents(q.Collection('users'))),
              q.Lambda((x) => q.Get(x))
            )
          )

          

          //if the user that got liked is the same as the user and the main user is the one that liked

          let usersArray = []
          let check = 0;

          for (let i = 0; i < responseUser.data.length; i++) {
            const data = await fetchUserMetadataByUserId(
              `${responseUser.data[i].data.userId}`
            )

            for (let j = 0; j < response.data.length; j++) {
              if (
                responseUser.data[i].data.userId ==
                response.data[j].data.userIdThatGotLiked
              ) {
                if (
                  response.data[j].data.userIdThatLiked == props.user.userId
                ) {
                  check = 1;
                }
              }
            }

            if(check == 1){
              check = 0;
              continue
            }

            if (data.userId == props.user.userId) {
              continue
            }

            usersArray.push(data)
            console.log(usersArray)
           
          }

          setUsers(usersArray)
        } catch (error) {
          console.error('An error occurred:', error)
        }
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    getAllLikedData()
  }, [])

  const handleButtonClick = () => {
    setCurrentUserIndex((currentIndex) => (currentIndex + 1) % users.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((currentIndex) => (currentIndex % 6) + 1)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((currentIndex) => ((currentIndex + 4) % 6) + 1)
  }

  const currentUser = users[currentUserIndex]
  console.log(currentUser)

  if (props.isLoggedIn && currentUser) {
    return (
      <div>
        <div className="flex flex-col h-screen justify-between">
          <div className="flex justify-between px-4 py-2">
            <Link
              className="flex justify-center items-center focus:outline-none bg-black w-12 h-12 rounded-full"
              href="/app/profile"
            >
              <FontAwesomeIcon icon={faUser} className="text-white" size="lg" />
            </Link>
            <button className="flex justify-center items-center focus:outline-none w-12 h-12 rounded-full">
              <h1 className="text-2xl font-bold">Pairmony♥️</h1>
            </button>
            <Link href="/app/chat">
            <button className="flex justify-center items-center focus:outline-none bg-black w-12 h-12 rounded-full">
              <FontAwesomeIcon
                icon={faComment}
                className="text-white"
                size="lg"
              />
            </button>
            </Link>
          </div>

          <div className="flex justify-center items-center py-6 flex-grow">
            <div className="relative w-2/6 h-full rounded-lg overflow-hidden">
              <button
                className="absolute z-10 top-1/2 left-2 text-white border border-black rounded-full bg-black"
                onClick={handlePrevImage}
              >
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
              </button>
              <Image
                src={`https://res.cloudinary.com/dyxkxy28a/image/upload/v1685671558/${
                  users[currentUserIndex].metadata['image' + currentImageIndex]
                }.jpg`}
                layout="fill"
                objectFit="cover"
                priority
              />
              <button
                className="absolute z-10 top-1/2 right-2 text-white border border-black rounded-full bg-black"
                onClick={handleNextImage}
              >
                <FontAwesomeIcon icon={faCaretRight} size="2x" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-shadow">
                <button onClick={() => setShowDescription(!showDescription)}>
                  <FontAwesomeIcon
                    icon={showDescription ? faCaretDown : faCaretUp}
                    className="text-white"
                    size="lg"
                  />
                </button>
                <p className="font-bold text-4xl">
                  {users[currentUserIndex].firstName}{' '}
                  {users[currentUserIndex].lastName}
                </p>
                <p>
                  {users[currentUserIndex].metadata.age},{' '}
                  {users[currentUserIndex].metadata.location}
                </p>

                {showDescription && (
                  <p
                    css={css`
                      animation: ${slideIn} 0.5s ease-out;
                    `}
                  >
                    {users[currentUserIndex].metadata.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-around p-4 bg-gray-200">
            <button
              className="focus:outline-none bg-red-500 p-2 rounded-full"
              onClick={handleButtonClick}
            >
              <FontAwesomeIcon
                icon={faThumbsDown}
                className="text-white"
                size="2x"
              />
            </button>
            <button
              className="focus:outline-none bg-yellow-500 p-2 rounded-full"
              onClick={handleButtonClick}
            >
              <FontAwesomeIcon
                icon={faForward}
                className="text-white"
                size="2x"
              />
            </button>
            <button
              className="focus:outline-none bg-green-500 p-2 rounded-full"
              onClick={handleButtonClickedLikeOrLove}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white"
                size="2x"
              />
            </button>
            <button
              className="focus:outline-none bg-blue-500 p-2 rounded-full"
              onClick={handleButtonClickedLikeOrLove}
            >
              <FontAwesomeIcon icon={faStar} className="text-white" size="2x" />
            </button>
          </div>
        </div>
      </div>
    )
  }

    if (props.isLoggedIn && currentUser == undefined) {
      return (
        <div>
          <div className="flex flex-col h-screen">
            <div className="flex justify-between px-4 py-2">
              <Link
                className="flex justify-center items-center focus:outline-none bg-black w-12 h-12 rounded-full"
                href="/app/profile"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-white"
                  size="lg"
                />
              </Link>
              <button className="flex justify-center items-center focus:outline-none w-12 h-12 rounded-full">
                <h1 className="text-2xl font-bold">Pairmony♥️</h1>
              </button>
              <button className="flex justify-center items-center focus:outline-none bg-black w-12 h-12 rounded-full">
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-white"
                  size="lg"
                />
              </button>
            </div>
            <div className='pt-96'>
              <h1>You somehow liked everybody *cough*hoer*cough*</h1>
              <h1>go chat with all of them now</h1>
            </div>
          </div>
        </div>
      )
    }
 
})

export default TinderUI
