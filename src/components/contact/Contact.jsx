import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    // Create a reference to the form
    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Success",
            text: "Message sent successfully",
            icon: "success"
          });
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9f8ce597-1087-4f3a-a958-63b0897b4384");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
           
            // Reset the form
            formRef.current.reset();
        }
    };

  return (
    <div className='pt-20' name='contact' data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" >
       <div className='mx-auto flex flex-col items-center'  >
          <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-green-600 text-blue-700 text-center'>CONTACT FORM</p>
          <p className='py-4 text-green-500 text-lg text-center mx-2'>Submit the form below or shoot me an email - example@example.com</p>
        </div>
        
        {/* Add formRef to the form */}
        <form ref={formRef} onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-skill rounded-md shadow-md box-shadow-main "
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom" >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter Your Name '
              className="w-full  px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter Your Email'
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Phone Number Field (Optional) */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-white font-medium">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder='Enter Your Phone No.'
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder='Write Your Message here '
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2  text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
    </div>
  )
}

export default Contact;
