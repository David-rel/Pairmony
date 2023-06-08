import Link from 'next/link'
import { CloudinaryContext, Image as CloudinaryImage } from 'cloudinary-react'
import { Carousel } from 'react-responsive-carousel'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const { fetchUserMetadataByUserId } = require('@propelauth/node').initBaseAuth({
  authUrl: process.env.NEXT_PUBLIC_AUTH_URL,
  apiKey: process.env.NEXT_PUBLIC_AUTH_API,
})
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { withAuthInfo } from '@propelauth/react'


const UserProfile = withAuthInfo((props) => {
  const router = useRouter()
  const userId = router.query.userId
  const [userData, setUserData] = useState(null)
  const { fromLikedBy } = router.query

  useEffect(() => {
    if (userId) {
      fetchUserMetadataByUserId(userId).then((data) => setUserData(data))
    }
  }, [userId])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <Link href="/app">
        <button
          style={{
            marginBottom: '2rem',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '5px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            '&:hover': {
              backgroundColor: '#0051a7',
            },
          }}
        >
          Back
        </button>
      </Link>
      <h1 className="text-center font-semibold text-5xl">User Profile</h1>

      {userData && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <img
            src={userData.pictureUrl}
            alt="Profile picture"
            style={{
              borderRadius: '50%',
              width: '200px',
              height: '200px',
              alignSelf: 'center',
            }}
          />
          <h2>username:{userData.username}</h2>
          <h3>
            name: {userData.firstName} {userData.lastName}
          </h3>

          <h4>Description: {userData.metadata.description}</h4>
          <h4>Age: {userData.metadata.age}</h4>
          <h4>Location: {userData.metadata.location}</h4>

          <CloudinaryContext cloudName="dyxkxy28a">
            <Carousel autoPlay autoFocus>
              {['image1', 'image2', 'image3', 'image4', 'image5', 'image6'].map(
                (imageKey, index) =>
                  userData.metadata[imageKey] && (
                    <div key={index}>
                      <CloudinaryImage publicId={userData.metadata[imageKey]} />
                    </div>
                  )
              )}
            </Carousel>
          </CloudinaryContext>
          {fromLikedBy == 'true' ? (
            <Link
            href={`/app/chat/talk?sender=${props.user.userId}&receiver=${userData.userId}`}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Message
            </button>
          </Link>
          ): (
            <></>
          )}
        </div>
      )}
    </div>
  )
})

export default UserProfile
