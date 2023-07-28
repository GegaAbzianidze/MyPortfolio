import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ho1n3em", // Replace with your service ID from EmailJS
        "template_yuvgud3", // Replace with your template ID from EmailJS
        e.target,
        "IkBPdO6ooOKKn6Cpy" // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setStatus("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div>
      <h2 className="text-2xl mb-4 text-center w-full">Contact Form</h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="textarea w-full textarea-bordered"
          />
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => window.my_modal_1.close()}
          >
            Close
          </button>
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
