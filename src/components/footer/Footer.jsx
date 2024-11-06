import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black' data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
    <div className="py-2 text-center  text-white mt-12 text-2xl ">Made with ❤️ by Muneeb ©️&nbsp; {new Date().getFullYear()}</div>
  </div>
  )
}

export default Footer