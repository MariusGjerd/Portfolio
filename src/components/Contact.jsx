import { useState, useRef} from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send('service_xxsjq8q', 'template_nkqzzyr', {
      from_name: form.name,
      to_name: 'Marius',
      from_email: form.email,
      to_email: 'mariusgjerd@gmail.com',
      message: form.message
    },
    'Xa33ZC1mEwesb8oqM'
    )
    .then(() => {
      alert('Takk for din hendvendelse! Jeg kommer tilbake til deg så fort som mulig :)');

      setForm({
        name: '',
        email: '',
        message: ''
      })

    }, (error) => {
      setLoading(false)

      console.log(error)

      alert('Ops! Noe gikk galt. Email ble ikke sendt')
    })
    
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0-75] bg-[#f4e7d4] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#0d3b4a] font-medium mb-4">Your Name</span>
            <input 
            type="text" 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="what's your name?"
            className="bg-[#0d3b4a] py-4 px-6 placeholder:text-[white] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#0d3b4a] font-medium mb-4">Your Email</span>
            <input 
            type="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="what's your email?"
            className="bg-[#0d3b4a] py-4 px-6 placeholder:text-[white] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#0d3b4a] font-medium mb-4">Your Message</span>
            <textarea
            rows="7"  
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="what do you want to say?"
            className="bg-[#0d3b4a] py-4 px-6 placeholder:text-[white] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
          type="submit"
          className="bg-[#0d3b4a] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper (Contact, "contact")