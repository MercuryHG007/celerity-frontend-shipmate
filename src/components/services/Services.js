import {
  ScaleIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import ServiceCard from './ServiceCard'

const data = [
  {
    icon: ScaleIcon,
    iconColor: "#47A7FF",
    title: "Freight Services",
    content: "Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door."
  },
  {
    icon: BriefcaseIcon,
    iconColor: "red",
    title: "Business Services",
    content: "We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level."
  },
  {
    icon: GlobeAltIcon,
    iconColor: "orange",
    title: "Shipping & Logistics",
    content: "Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs."
  },
  {
    icon: UsersIcon,
    iconColor: "#47A7FF",
    title: "24/7 Support",
    content: "Receive support from our experts all over the world at every stage of the process, 24/7."
  }
]

function Services() {
  return (
    <div
      className='flex flex-col justify-center items-center gap-10'
    >
      <div
        className="text-3xl font-semibold "
      >
        Services
      </div>
      <div
        className="flex flex-row gap-6"
      >
        {data.map((item) => (
          <ServiceCard 
            key={item.title}
            icon={item.icon}
            iconColor={item.iconColor}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  )
}

export default Services