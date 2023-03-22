import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from '../assets'
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


const ProjectCard = ({ index, name, description, tags, image, source_code_link  }) => {
  return(
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-[#f4e7d4] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
              src={github} 
              alt="github"
              className="w-1/2 h-1/2 object-contain"  
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-[#0d3b4a] font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[#0d3b4a] text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-[#0d3b4a] text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my project showcase, where you'll find a collection of my most
        recent and exciting projects. Here, you can expect to see a diverse range
        of projects that showcase my skills in various areas, including web development,
        graphic design, and multimedia production. Each project is crafted with attention
        to detail and designed to meet the unique needs of clients and users. From responsive
        websites to engaging animations, my projects demonstrate a commitment to creativity,
        innovation, and excellence. I invite you to browse my showcase and explore the possibilities of what we can create together.
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard
        key={`project-${index}`}
        index={index}
        {...project}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper (Works, "")