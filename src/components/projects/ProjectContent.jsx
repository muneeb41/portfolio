import React, { useState } from 'react'

const ProjectContent = ({project}) => {
    const [isDetails,setIsDetails] = useState(false)
    const handleIsDetails = ()=>{
        setIsDetails(!isDetails)
    }
  return (
    <div className='' >
        <div className='text-center text-xl pb-1 font-bold'>{project.name}</div>
        <img src={project.image} alt="" className='h-full w-full rounded-lg '/>
        <button className='bg-blue-600 text-white rounded-lg w-full px-2 y-3 text-lg mt-2 py-1 '
          onClick={handleIsDetails}
        >
            {isDetails?'Show Less':'Project Details'}
        </button>
        { isDetails &&  <div> 
            {/* description */}
              <div className='ml-2 mt-2'>
                <span className='font-bold text-md'>Description: </span>
                <span className='text-sm text-gray-500' >{project.description}</span>
              </div>
              <hr class="border-0 h-[1px] mx-6 my-2 mt-3 bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 rounded-full"/>
              {/* features */}
               <div className='ml-2'>
                <span className='font-bold text-lg'>Features: </span>
                <ul className='flex flex-col gap-1 ml-3 list-disc'>
                  {project.features.map(item=>{
                    return (
                        <li className='text-sm text-gray-500 '>{item}</li>
                    )
                  })}
                </ul>
               </div>
                {/* tech */}
                <hr class="border-0 h-[1px] mx-6 my-2 mt-3 bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 rounded-full"/>
                <div>
                <span className='font-bold text-lg'>  Tech used: </span> 
                <ul className='flex flex-col gap-1 ml-3 '>
                  {project.tech.map(item=>{
                    return (
                        <li className='text-sm text-gray-500 flex flex-row justify-start gap-5 my-1  '>
                            <div className='h-1 w-1 bg-black rounded-full my-auto hidden sm:flex' ></div>
                            <img src={item.image} alt=""  className='h-10 w-10'/>
                            <div className='my-auto text-lg text-gray-800'>{item.name}</div>
                        </li>
                    )
                  })}
                </ul>
                <hr class="border-0 h-[1px] mx-6 my-2 mt-3 bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 rounded-full"/>
                </div>
             </div>  }
        <div className='flex flex-col text-center  sm:flex-row  sm:justify-around'>
            <a href={project.live} target='_blank' className='bg-orange-500  text-lg text-white px-2 py-1 mt-2 rounded-lg hover-scale'>See Live</a>
            <a href={project.source} target='_blank' className='bg-green-600  text-lg text-white px-2 py-1 mt-2 rounded-lg hover-scale' >Source Code</a>
        </div>

    </div>
  )
}

export default ProjectContent