import React from 'react'

import HTML from '../../assets/images/skills/html.png'
import CSS from '../../assets/images/skills/css.png'
import JAVASCRIPT from '../../assets/images/skills//javascript.png'
import TAILWIND from '../../assets/images/skills/tailwind.png'
import REACT from '../../assets/images/skills/react.png'
import GITHUB from '../../assets/images/skills/github.png'
import MONGODB from '../../assets/images/skills/mongodb.png'
import NODEJS from '../../assets/images/skills/nodejs.png'
import REDUX from '../../assets/images/skills/redux.png'


const Skills = () => {
  return (
    <div name='skills' className=' text-gray-300 w-full min-h-screen p-4 pt-12'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-green-600 text-blue-700'>TECH SKILLS</p>
          <p className='py-4 text-orange-600 text-lg'>These are the technologies I've worked with:</p>
        </div>

        {/* Grid Container */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 sm:px-14'>
          {[{img: HTML, name: "HTML"}, {img: CSS, name: "CSS"}, {img: JAVASCRIPT, name: "JavaScript"}, {img: REACT, name: "React"}, {img: REDUX, name: "Redux"}, {img: TAILWIND, name: "Tailwind"}, {img: MONGODB, name: "MongoDB"}, {img: NODEJS, name: "NodeJS"}, {img: GITHUB, name: "GitHub"}].map((skill,index) => (
           <div
           data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
             <div 
             key={skill.name} className={`bg-blue-600 bg-skill rounded-lg p-2 cursor-pointer hover:scale-110 duration-500 box-shadow-main  `}>
              <img className='w-20 mx-auto ' src={skill.img} alt={`${skill.name} icon`} />
              <p className='my-4 text-white'>{skill.name}</p>
            </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Skills