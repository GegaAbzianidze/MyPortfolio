import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_ho1n3em",
        "template_yuvgud3",
        form.current,
        "IkBPdO6ooOKKn6Cpy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send email!");
        }
      );
  };

  return (
    <div>
      <h2 className="text-2xl mb-4 text-center w-full">Contact Form</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="from_name"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="reply_to"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            required
            rows="4"
            className="textarea w-full textarea-bordered"
          />
        </div>
        <div className="flex space-x-4">
          <input
            type="submit"
            className="btn btn-primary"
            value="Send"
          />
        </div>
        <p>{status}</p>
      </form>
      <div className="divider">OR</div>
      <h2 className="text-2xl mb-4 text-center w-full">Contact Info</h2>
      {/* phone number */}
      <div className="flex justify-center">
        <h1>
          <a href="tel:+995 571 13 25 02" className="hover:link">
            +995 571 13 25 02
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ContactForm;

