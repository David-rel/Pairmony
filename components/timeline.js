import React from 'react'

const TimelineItem = ({ year, title, description, isFirst, isLast }) => (
  <div className="relative">
    <div className="timeline-point">
      <div className="timeline-point-inner"></div>
    </div>
    <div
      className={`timeline-content ${
        isFirst ? 'left-0' : isLast ? 'right-0' : 'left-1/2'
      }`}
      style={{
        transform: isFirst
          ? 'none'
          : isLast
          ? 'translateX(-100%)'
          : 'translateX(-50%)',
      }}
    >
      <h4 className="font-bold mb-1">{year}</h4>
      <h5 className="font-bold mb-2">{title}</h5>
      <p>{description}</p>
    </div>
  </div>
)

const Timeline = ({ data }) => (
  <div className="bg-white text-black px-4 py-8">
    <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
    <div className="timeline w-full">
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isFirst={index === 0}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  </div>
)

export default Timeline
