import React from 'react'
import ProjectCart from './ProjectCart';

const TimeLine = ({data}) => {
  return (
    <div className='mb-3' >
       {
        data.map((item,index)=>{

            return (
                <ProjectCart project={item} isEven={index%2==0 ?true:false} key={index}  />
            )
        })
       }
    </div>
  )
}

export default TimeLine