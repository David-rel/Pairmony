import React from 'react'

const HobbyCard = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        className="rounded-lg w-full h-40 object-cover"
        src={imageSrc}
        alt={title}
      />
      <h3 className="font-bold text-xl mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default HobbyCard
