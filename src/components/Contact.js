import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const ref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jas krrish",
          from_email: form.email,
          to_email: "jashehz@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );

    console.log(form);
  };

  return (
    <div className="max-w-7xl mx-auto z-20 p-5 items-center flex flex-col">
      <img
        className="h-40 w-30 relative"
        src="/images/track degin.png"
        alt="/"
      />
      <h1 className="text-2xl text-center text-white absolute my-20 py-5">
        Contact Us
      </h1>

      <div className="w-full flex space-x-5 overflow-x-hidden px-10 snap-x snap-mandatory mt-5"></div>
      <div className="bg-[#1e2320]/40 backdrop-blur-md w-fit pl-4 pr-10 rounded-lg">
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-4 my-3"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {" "}
            <label className="flex flex-col my-2 flex-grow">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-[#1e2320] py-4 px-6 text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
            <label className="flex flex-col my-2 flex-grow">
              <span className="text-white font-medium mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-[#1e2320] py-4 px-6 text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
          </div>
          <label className="flex flex-col my-2">
            <span className="text-white font-medium mb-2">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Add Your Subject"
              className="bg-[#1e2320] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col my-2">
            <span className="text-white font-medium mb-2">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to convey?"
              className="bg-[#1e2320] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="w-full my-4 px-4 py-2 font-semibold text-lg bg-white rounded-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
