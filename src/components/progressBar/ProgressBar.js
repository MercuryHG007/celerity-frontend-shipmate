import React from 'react'
import Step from './Step'

function ProgressBar() {
  const steps = [
    {
      num: 1,
      title: "Search"
    },
    {
      num: 2,
      title: "Recommended Services"
    },
    {
      num: 3,
      title: "Results"
    },
    {
      num: 4,
      title: "Booking"
    }
  ]

  return (
    <div
      className="flex flex-row justify-center items-center mt-[9vh] pt-16 gap-1 relative"
    >
      {steps.map((step) => (
        <Step
          key={step.num}
          num={step.num}
          title={step.title}
        />
      ))}
    </div>
  )
}

export default ProgressBar