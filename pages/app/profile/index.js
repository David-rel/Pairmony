import { useRedirectFunctions, withAuthInfo } from '@propelauth/react'
import React, { use, useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Link from 'next/link'
import { useLogoutFunction } from '@propelauth/react'
import { CloudinaryContext, Image as CloudinaryImage } from 'cloudinary-react'
import { client, q } from '../../../utils/fauna'

const Profile = withAuthInfo((props) => {
  const logoutFunction = useLogoutFunction()
  const [age, setAge] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [images, setImages] = useState([])
  const [likedByData, setLikedByData] = useState([])
  const [likesData, setLikesData] = useState([])

  const { redirectToAccountPage } = useRedirectFunctions()

  const propelAuth = require('@propelauth/node')

  const { fetchUserMetadataByUserId } = propelAuth.initBaseAuth({
    authUrl: process.env.NEXT_PUBLIC_AUTH_URL, // The base URL where your authentication pages are hosted. You can find this under the Backend Integration section for your project at https://app.propelauth.com.
    apiKey: process.env.NEXT_PUBLIC_AUTH_API, // You can manage your api keys under the Backend Integration section for your project.
  })

  useEffect(() => {
    const fetchMetadata = async () => {
      const user = await fetchUserMetadataByUserId(`${props.user.userId}`)
      setImages([
        user.metadata.image1,
        user.metadata.image2,
        user.metadata.image3,
        user.metadata.image4,
        user.metadata.image5,
        user.metadata.image6,
      ])
      setDescription(user.metadata.description)
      setAge(user.metadata.age)
      setLocation(user.metadata.location)
    }
    fetchMetadata()
  }, [])

  useEffect(() => {
  async function getAllLikedData() {
    try {
      const response = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('likes'))),
          q.Lambda((x) => q.Get(x))
        )
      )

      let likes = []
      let likedBy = []

      for (let like of response.data) {
        if (like.data.userIdThatLiked == props.user.userId) {
          const user = await fetchUserMetadataByUserId(`${like.data.userIdThatGotLiked}`);
          if (!likes.some(u => u.userId === user.userId)) {
            likes.push(user);
          }
        }

        if (like.data.userIdThatGotLiked == props.user.userId) {
          const user = await fetchUserMetadataByUserId(`${like.data.userIdThatLiked}`);
          if (!likedBy.some(u => u.userId === user.userId)) {
            likedBy.push(user);
          }
        }
      }
      setLikesData(likes);
      setLikedByData(likedBy);
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  getAllLikedData()
}, [])


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <>
                {' '}
                <h1 className="text-2xl font-semibold">Profile</h1>
                <div className="flex flex-col mt-5">
                  <>
                    {images.map((publicId, index) => (
                      <div key={index} className="w-1/3 p-4">
                        {publicId == null ? (
                          <>No Images Added</>
                        ) : (
                          <CloudinaryContext cloudName="dyxkxy28a">
                            <CloudinaryImage publicId={publicId} />
                          </CloudinaryContext>
                        )}
                      </div>
                    ))}
                  </>
                  <input
                    className="mt-5"
                    type="text"
                    value={description}
                    placeholder="Description"
                    maxLength="100"
                  />
                  <input
                    className="mt-5"
                    type="text"
                    placeholder="Location"
                    value={location}
                  />
                  <input
                    className="mt-5"
                    placeholder="Age"
                    type="text"
                    value={age}
                  />
                </div>
              </>
              <Link href="/app/profile/edit">
                <button className="mt-5 p-2 bg-blue-500 text-white rounded-md">
                  Edit Personal Info
                </button>
              </Link>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl font-semibold">Security</h1>
              <div className="flex flex-col mt-5">
                <input
                  className="mt-5"
                  type="text"
                  value={props.user.email}
                  unselectable="on"
                />
                <input
                  className="mt-5"
                  type="text"
                  value={props.user.firstName}
                  unselectable="on"
                />
                <input
                  className="mt-5"
                  type="text"
                  value={props.user.lastName}
                  unselectable="on"
                />
                <input
                  className="mt-5"
                  type="text"
                  value={props.user.username}
                  unselectable="on"
                />
                <img
                  className="mt-5 w-20 h-20 rounded-full"
                  src={props.user.pictureUrl}
                  alt="Profile Picture"
                />
                <button
                  className="mt-5 p-2 bg-blue-500 text-white rounded-md"
                  onClick={redirectToAccountPage}
                >
                  Update Security Info
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Likes: {likesData.length}
              </h1>
              {likesData.map((user) => (
                <Link
                  href={`/app/${user.userId}?fromLikedBy=false`}
                  key={user.userId}
                  legacyBehavior
                >
                  <a className="flex items-center space-x-2 my-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.pictureUrl}
                      alt="Profile Picture"
                    />
                    <div>
                      <div className="font-bold">{user.username}</div>
                      <div>{`${user.firstName} ${user.lastName}`}</div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Liked By: {likedByData.length}
              </h1>
              {likedByData.map((user) => (
                <Link
                  href={`/app/${user.userId}?fromLikedBy=true`}
                  key={user.userId}
                  legacyBehavior
                >
                  <a className="flex items-center space-x-2 my-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.pictureUrl}
                      alt="Profile Picture"
                    />
                    <div>
                      <div className="font-bold">{user.username}</div>
                      <div>{`${user.firstName} ${user.lastName}`}</div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/app">
                <button className="p-2 bg-blue-500 text-white rounded-md">
                  Back
                </button>
              </Link>
              <button
                className="p-2 bg-blue-500 text-white rounded-md"
                onClick={logoutFunction}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Profile
