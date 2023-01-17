import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b9uu1l9', 'template_zlmhi0j', form.current, 'Jj2vKOp3D5Yc80-f6')
    .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
    });
  };

  const [formState, setFormState] = useState({ 
    name: '', email: 'aasupertwix15@gmail.com', message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const {  name, message, email } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);

      // take the data and do something with it 

    }
  };

  return (
    <div id="contactSec">
    <form ref={form}>

      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="col-12 " defaultValue={name} onBlur={handleChange} />
      </div>
      
      
      <div className="mb-3">
        <label htmlFor="email">Email address:</label>
        <label className='email' type="email" name="email"> {email}</label>
      </div>

      <div className="mb-3">
        <label className='mb-1'>Message</label>
        <div>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
      </div>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      <input type="submit" className="col-12 rounded-2" id="send" value="Send" />

    </form>
    </div>
  );
};


// function Contact() {

//   const [formState, setFormState] = useState({ 
//     name: '', email: 'aasupertwix15@gmail.com', message: '' 
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log("Form", formState);
//     }
//   }

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);

//       // take the data and do something with it 

//     }
//   };

//   return (
//     <section>
      
//       <form className="m-3" onSubmit={handleSubmit}>
//         <h1 className="mb-4 conTitle" data-testid="h1tag">Contact me</h1>
//         <div className="mb-3">
//           <label htmlFor="name " >Name:</label>
//           <input type="text" name="name" className="col-12 " defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email">Email address:</label>
//           <label className='email' type="email" name="email"  onBlur={handleChange}> {email}</label>
//         </div>
//         <div className="mb-3">
      //     <label htmlFor="message" class="mb-1">Message:</label>
      //     <div>
      //       <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
      //     </div>
          
      //   </div>
      //   {errorMessage && (
      //     <div>
      //       <p className="error-text">{errorMessage}</p>
      //     </div>
      //   )}
      //   <button data-testid="button" type="submit" className="rounded-3 col-12">Submit</button>
      // </form>
//     </section>
//   );
// }

export default Contact;