import React, { useState } from "react";
import { contact } from "../data";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the image is 50% in view
  });
  const [namePlaceholder, setNamePlaceholder] = useState("Your name");
  const [companyPlaceholder, setCompanyPlaceholder] = useState("Company name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Your Email");
  const [subjectPlaceholder, setSubjectPlaceholder] = useState("Subject");
  const [messagePlaceholder, setMessagePlaceholder] = useState("Your message");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_laqigjr",
      "template_x1ufy9j",
      e.target,
      "23fEShGQQkPj7ivg6"
    );
    alert("Your message has send");
    // perform form submission logic here...
    // reset input placeholders to initial values
    e.target.reset();
    setNamePlaceholder("Your name");
    setCompanyPlaceholder("Company name");
    setEmailPlaceholder("Your Email");
    setSubjectPlaceholder("Subject");
    setMessagePlaceholder("Your message");
  };

  const handleFocus = (setter) => () => {
    setter("");
  };

  const handleBlur = (value, setter) => (event) => {
    if (event.target.value.trim() === "") {
      setter(value);
    }
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/* */}
        <div className="flex flex-col items-center text-center">
          <h2
            ref={ref}
            className={`section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before-left-40 before:hidden before:lg:block duration-1000 ${
              inView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            Contact me
          </h2>
          <p className="subtitle ">
            Im based in Sydney, Australia. You can contact me view following:
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* info*/}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 ">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row  gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14  h-14 flex items-start  justify-center mt-2 mb-4 lg:mb-0 text-2xl ">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1 ">{title}</h4>
                    <p className="mb-1 ">{subtitle}</p>
                    <p className="text-accent font-normal"> {description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {/*form */}
            <form
              className="space-y-8 w-full max-w-[780]"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-8">
                <input
                  required
                  className="input"
                  name="from_name"
                  type="text"
                  placeholder={namePlaceholder}
                  onFocus={handleFocus(setNamePlaceholder)}
                  onBlur={handleBlur("Your name", setNamePlaceholder)}
                  onChange={(e) => setNamePlaceholder(e.target.value)}
                />
                <input
                  required
                  className="input"
                  type="text"
                  name="company_from"
                  placeholder={companyPlaceholder}
                  onFocus={handleFocus(setCompanyPlaceholder)}
                  onBlur={handleBlur("Company name", setCompanyPlaceholder)}
                  onChange={(e) => setCompanyPlaceholder(e.target.value)}
                />
                <input
                  required
                  className="input"
                  type="email"
                  name="email_from"
                  placeholder={emailPlaceholder}
                  onFocus={handleFocus(setEmailPlaceholder)}
                  onBlur={handleBlur("Your Email", setEmailPlaceholder)}
                  onChange={(e) => setCompanyPlaceholder(e.target.value)}
                />
              </div>
              <input
                required
                name="subject"
                type="text"
                className="input"
                placeholder={subjectPlaceholder}
                onFocus={handleFocus(setSubjectPlaceholder)}
                onBlur={handleBlur("Subject", setSubjectPlaceholder)}
                onChange={(e) => setSubjectPlaceholder(e.target.value)}
              />
              <textarea
                required
                className="textarea"
                name="message"
                placeholder={messagePlaceholder}
                onFocus={handleFocus(setMessagePlaceholder)}
                onBlur={handleBlur("Your message", setMessagePlaceholder)}
                onChange={(e) => setMessagePlaceholder(e.target.value)}
              />
              <button
                className="btn btn-lg bg-accent hover:bg-accent-hover"
                type="submit"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
