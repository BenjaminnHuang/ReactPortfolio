import React from 'react'
import Nav from './Nav'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [formData, setFormData] = React.useState(
    { 
      first_name: "",
      last_name: "",
      user_email: "",
      message: ""
    }
  )

  function handleForm(e){
    const {name, value} = e.target
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }))
  }

  function sendEmail(e){
    e.preventDefault();

    emailjs.send('service_poccqb6', 'template_lx1ohbr', formData, '6jrgaHQromScvN6Ge')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      setFormData({
        first_name: "",
        last_name: "",
        user_email: "",
        message: ""
      })
  }

  return (
      <div className='h-screen bg-gray-800'>
        <div className='bg-gray-800 flex h-auto '>
          <Nav/>

          <div className='flex flex-col mx-auto justify-center h-auto'>
            <h1 className='text-center mt-36 text-white lg md:text-3xl lg:text-5xl font-Exo italic font-bold'>Contact Me!</h1>
            <form className=' mt-10 bg-gray-500 border-b-4 border-r-4 shadow-md border-gray-700 p-8 rounded-lg w-fit lg:h-full self-center text-center text-black flex flex-col hover:border-b-8 hover:border-r-8'>
              <div className='flex-col lg:flex-row flex gap-5'>
                <input className='rounded-lg p-2  lg:w-1/2 border-r-4 border-b-4 border-black focus:bg-gray-200' placeholder='First Name' type="text" value={formData.first_name} name="first_name" onChange={handleForm}/>
                <input className='rounded-lg p-2 lg:w-1/2 focus:bg-gray-200 border-r-4 border-b-4 border-black' placeholder='Last Name' type="text" value={formData.last_name} name="last_name" onChange={handleForm}/>
              </div>
              <input className='mt-8 rounded-lg p-2 focus:bg-gray-200 border-r-4 border-b-4 border-black' placeholder='Email' type="email" value={formData.user_email} name="user_email" onChange={handleForm}/>
              <textarea className='mt-8 h-3/5 rounded-lg p-2 focus:bg-gray-200 border-r-4 border-b-4 border-black' placeholder='Message...' value={formData.message} name="message" onChange={handleForm}/>
              <button type='submit' onClick={sendEmail}
                className='self-center p-4 hover:bg-gray-400 hover:shadow-gray-600 hover:shadow-inner bg-white mt-8 w-fit rounded-lg text-black'
              >Submit</button>
            </form>
          </div>
          
        </div>
      </div>
    
  )
}

export default Contact