import React from 'react'
import Nav from './Nav'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [formData, setFormData] = React.useState(
    { 
      user_name: "",
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
        user_name: "",
        user_email: "",
        message: ""
      })
  }

  return (
    <div className='bg-gray-800 h-screen flex flex-row'>
      <Nav/>
      <form className='bg-gray-700 p-8 rounded-lg w-5/12 h-1/2 self-center ml-80 text-center text-black flex flex-col '>
        <input className='mt-3 rounded-lg p-2' placeholder='Your Name' type="text" value={formData.user_name} name="user_name" onChange={handleForm}/>
        <input className='mt-3 rounded-lg p-2' placeholder='Your Email' type="email" value={formData.user_email} name="user_email" onChange={handleForm}/>
        <textarea className='mt-3 h-3/5 rounded-lg p-2' placeholder='Message' value={formData.message} name="message" onChange={handleForm}/>
        <button type='submit' onClick={sendEmail}
          className='self-center p-4 hover:bg-gray-400 hover:shadow-gray-600 hover:shadow-inner bg-white mt-4 w-1/4 rounded-lg text-black'
        >Submit</button>
      </form>
      
    </div>
  )
}

export default Contact