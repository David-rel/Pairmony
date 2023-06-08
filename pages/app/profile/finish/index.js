import { useEffect, useState } from 'react'
import { CloudinaryContext, Image as CloudinaryImage } from 'cloudinary-react'
import UploadWidget from '@/components/UploadWidget'
import { withAuthInfo } from '@propelauth/react'
import Router from 'next/router'
import { client, q } from '../../../../utils/fauna'

const ImageUploadComponent = withAuthInfo((props) => {
  const [uploadedImages, setUploadedImages] = useState([])
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const propelAuth = require('@propelauth/node')

  const { updateUserMetadata, fetchUserMetadataByUserId } =
    propelAuth.initBaseAuth({
      authUrl: process.env.NEXT_PUBLIC_AUTH_URL, // The base URL where your authentication pages are hosted. You can find this under the Backend Integration section for your project at https://app.propelauth.com.
      apiKey: process.env.NEXT_PUBLIC_AUTH_API, // You can manage your api keys under the Backend Integration section for your project.
    })

  useEffect(() => {
    async function getAllUsers() {
      let count = 0
      try {
        const response = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection('users'))),
            q.Lambda((x) => q.Get(x))
          )
        )

        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].data.userId == props.user.userId) {
            count++
          }
        }
        if (count == 0) {
          const user = {
            userId: `${props.user.userId}`,
          }
          try {
            const response = await client.query(
              q.Create(q.Collection('users'), { data: user })
            )

            console.log(response)
          } catch (error) {
            console.error('An error occurred:', error)
          }
        }
      } catch (error) {
        console.error('An error occurred:', error)
      } finally {
        updateUserBase()
      }
    }

    async function updateUserBase() {
      //delete any duplicate users that have the same userId
      ;(async () => {
        try {
          // Fetch all documents from the 'users' collection
          const response = await client.query(
            q.Map(
              q.Paginate(q.Documents(q.Collection('users'))),
              q.Lambda((x) => q.Get(x))
            )
          )

          // Group users by userId
          const groups = response.data.reduce((acc, user) => {
            acc[user.data.userId] = [...(acc[user.data.userId] || []), user]
            return acc
          }, {})

          // Loop through groups and delete duplicates
          for (const group in groups) {
            if (groups[group].length > 1) {
              // Keep one user, delete the rest
              for (let i = 1; i < groups[group].length; i++) {
                const user = groups[group][i]
                await client.query(q.Delete(user.ref))
              }
            }
          }
        } catch (error) {
          console.error('An error occurred: ', error)
        }
      })()
    }

    getAllUsers()
  }, [])

  useEffect(() => {
    async function test() {
      const data = await fetchUserMetadataByUserId(`${props.user.userId}`)
      if (
        data.metadata.age != null &&
        data.metadata.description != null &&
        data.metadata.location != null &&
        data.metadata.image1 != null &&
        data.metadata.image2 != null &&
        data.metadata.image3 != null &&
        data.metadata.image4 != null &&
        data.metadata.image5 != null &&
        data.metadata.image6 != null
      ) {
         Router.push('/app')
      }
    }

    test()
  }, [])

  const handleUpload = (error, result) => {
    if (result.event === 'success') {
      if (uploadedImages.length < 6) {
        setUploadedImages((prev) => {
          // Check if adding this image would exceed the limit
          if (prev.length < 6) {
            return [...prev, result.info.public_id]
          } else {
            // alert('You cannot upload more than 6 images.')
            return prev
          }
        })
      } else {
        // alert('You cannot upload more than 6 images.')
      }
    }
  }

  const handleSave = async () => {
    console.log(uploadedImages[0])
    if (
      uploadedImages.length < 6 ||
      description === '' ||
      age === '' ||
      location === ''
    ) {
      alert('Please fill out all fields and upload 6 images')
      return
    }

    await updateUserMetadata(`${props.user.userId}`, {
      metadata: {
        image1: `${uploadedImages[0]}`,
        image2: `${uploadedImages[1]}`,
        image3: `${uploadedImages[2]}`,
        image4: `${uploadedImages[3]}`,
        image5: `${uploadedImages[4]}`,
        image6: `${uploadedImages[5]}`,
        description: description,
        age: age,
        location: location,
      },
    })

    alert('Profile created successfully!')
    Router.push('/app/profile')
  }

  return (
    <div className="flex flex-wrap justify-around">
      <h1 className="font-bold text-3xl">FINISH SETTING UP YOUR ACCOUNT</h1>
      <UploadWidget onUpload={handleUpload} multiple>
        {({ open }) => (
          <button
            onClick={open}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload 6 Images (if you try to upload more than 6, it will just take
            the first picks)
          </button>
        )}
      </UploadWidget>

      {uploadedImages.map((publicId, index) => (
        <div key={index} className="w-1/3 p-4">
          <CloudinaryContext cloudName="dyxkxy28a">
            <CloudinaryImage publicId={publicId} />
          </CloudinaryContext>
        </div>
      ))}

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="my-4 w-full p-2 border-2 border-gray-300 rounded"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        className="my-4 w-full p-2 border-2 border-gray-300 rounded"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="my-4 w-full p-2 border-2 border-gray-300 rounded"
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  )
})

export default ImageUploadComponent
