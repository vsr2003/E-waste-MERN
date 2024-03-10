import React, { useState,useEffect,useRef } from 'react';
import {toast} from 'react-toastify';
import {motion} from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

const ContactUsForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContactUsReq(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''});
  };

  const sendContactUsReq  = async(formData) => {

    const response = await fetch("http://localhost:4000/contact/sendContactMail",{

        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body:  JSON.stringify(formData),

    });
    const data = await response.json();

    if(!response.ok){
        console.log("not ok in sendContactUsReq");
        toast.error("Something went wrong",{position:'top-right',autoClose:2000})
    }
    else{
        if(data.success)
        {
          toast.success("Mail Sent",{position:'top-right',autoClose:2000});
        }
    }
  }

  

  return (
    <div className="max-w-md mx-auto" >

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <motion.label initial={{x:-20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}}  htmlFor="name" className="block mb-1">Name:</motion.label>
          <motion.input
            initial={{x:20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <motion.label initial={{x:-20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}} htmlFor="email" className="block mb-1">Email:</motion.label>
          <motion.input
            initial={{x:20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <motion.label initial={{x:-20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}} htmlFor="phone" className="block mb-1">Phone:</motion.label>
          <motion.input
            initial={{x:20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}}
            type="tel"
            id="phone"
            name="phone"
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <motion.label initial={{x:-20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}} htmlFor="message" className="block mb-1">Message:</motion.label>
          <motion.textarea
            initial={{x:20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <motion.button
        initial={{x:20}} whileInView={{x:0}} transition={{duration:1, delay:.2, type:"spring"}}
        type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</motion.button>
      </form>

    </div>
  );
};

export default ContactUsForm;
