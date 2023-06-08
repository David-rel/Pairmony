import { useState } from 'react'
import { CloudinaryContext, Image as CloudinaryImage } from 'cloudinary-react'
import UploadWidget from '@/components/UploadWidget'
import { withAuthInfo } from '@propelauth/react'
import Router from 'next/router'

const ImageUploadComponent = withAuthInfo((props) => {
  const [uploadedImages, setUploadedImages] = useState([])
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const propelAuth = require('@propelauth/node')

  const { updateUserMetadata } = propelAuth.initBaseAuth({
    authUrl: process.env.NEXT_PUBLIC_AUTH_URL, // The base URL where your authentication pages are hosted. You can find this under the Backend Integration section for your project at https://app.propelauth.com.
    apiKey: process.env.NEXT_PUBLIC_AUTH_API, // You can manage your api keys under the Backend Integration section for your project.
  })

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

    alert('Profile updated successfully!')
    Router.push('/app/profile')
  }

  return (
    <div className="flex flex-wrap justify-around">
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
