import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full  p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{ max: 45, scale: 1, speed: 450}}
        className="bg-[#fadb00] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-[#ff2a2a] text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-[#c7c7c7] text-[17px] max-w-3xl leading-[30px]'>
    As a Full Stack Developer, I bring extensive expertise in a wide range of cutting-edge technologies,
    focusing on creating seamless and efficient web applications. My technology stack includes JavaScript,
    Node.js, PostgreSQL, HTML, SASS, Tailwind, Vite, and React to name some, which enables me to develop robust and scalable
    solutions for diverse industries. My primary focus as a developer is to deliver high-quality, user-centric
    applications that provide an exceptional user experience. I offer a comprehensive suite of services, including
    custom web application development, API integration, data management, and responsive design. Driven by a passion
    for innovation and a commitment to client satisfaction, I strive to continually hone my skills, staying abreast
    of the latest industry trends and best practices to deliver outstanding results for every project.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title}
        index={index} {...service}/>
      ))}
    </div>

    </>
  )
}

export default SectionWrapper (About, "about")