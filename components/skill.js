import React from 'react'

const Skill = ({ name, percentage }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded">
        <div
          className="h-4 bg-red-600 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Skill
