import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{ background: '#f4f0e9', color: '#f4f0e9'}}
  contentArrowStyle={{borderRight: '7px solid #f4f0e9', backgroundolor: '#f4f0e9'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
  <div className="flex justify-center items-center w-full h-full">
    <img 
    src={experience.icon}
    alt={experience.company_name}
    className="w-[60%] h-[60%] object-contain"
    />
  </div>}
  >
    <div>
      <h3 className="text-[#975b37] text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-[#975b37] text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
      <li 
      key={`experience-point-${index}`}
      className="text-[#092837] text-[14px] pl-1 tracking-wider"
      >
        {point}
      </li>))}
    </ul>
    
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
      <p className="sm:text-[18px] text-[14px] text-[#975b37] uppercase tracking-wider">What i have done so far</p>
      <h2 className="text-[#975b37] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (<ExperienceCard key={index} experience={experience}/>))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")