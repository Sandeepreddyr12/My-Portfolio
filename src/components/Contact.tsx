'use client';

import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const [msg, setMsg] = useState<string>('');


  // google spreadsheet url , for storing information.

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwKNeixDmIAb23gg_5WsAcoU8yu8VzCoCuDwwRMOECee1cifGKk6L5vR7yhdCUhOQnGQQ/exec';

  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const form = document.forms['submit-to-google-sheet' as any];
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        setMsg("Your form has been submitted, I'll be in Touch shortly");
        setTimeout(() => {
          setMsg('');
        }, 4000);

        form.reset();
      })
      .catch((error) => {
        setMsg('Error occured, while submitting your form');
        setTimeout(() => {
          setMsg('');
        }, 4000);

        // form.reset();
      });
  };

  return (
    <div id="contact me" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> sandeepreddyr97@gmail.com
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} /> +91 85220 94080
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsLinkedin size={30} />
            LinkedIn/sandeepreddy97
          </div>
        </div>

        <form
          action=""
          onSubmit={formSubmitHandler}
          name="submit-to-google-sheet"
        >
          <div className="space-y-8">
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="name">Name</label>
              <input
                name="Name"
                type="text"
                className="h-[40px] bg-transparent border text-gray-300 pl-6 font-bold border-accent"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="email">Email</label>
              <input
                name="Email"
                type="text"
                className="h-[40px] bg-transparent border border-accent text-gray-300 pl-6 font-bold"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="msg">Message</label>
              <textarea
                name="Message"
                className="bg-transparent border border-accent text-gray-300 pl-6 font-bold"
                placeholder="Any query or message"
                rows={8}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-accent p-2 px-6"
              // data-aos="zoom-in-up"
            >
              Send
            </button>
            <div className="text-center font-bold text-purple-700"> {msg}.</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
