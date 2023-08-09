import { useState } from "react";
import emailjs from "emailjs-com";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    reply_to: "",
    from_name: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      reply_to: formData.reply_to,
      from_name: formData.from_name,
      message: formData.message,
    };

    emailjs
      .send(
        "service_ho1n3em",
        "template_yuvgud3",
        emailData,
        "IkBPdO6ooOKKn6Cpy"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatus("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Failed to send email!");
      });
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <form onSubmit={sendEmail} className="space-y-4 w-2/3 md:w-1/2">
          <h2 className="text-2xl mb-4 text-center w-full">Contact Form</h2>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Recipient's email address"
              required
              className="input input-bordered w-full"
              value={formData.reply_to}
              onChange={(e) =>
                setFormData({ ...formData, reply_to: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              required
              className="input input-bordered w-full"
              value={formData.from_name}
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Body"
              value={formData.message}
              required
              className="textarea w-full textarea-bordered"
              rows={4}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
          {status === "Email sent successfully!" ? (
            <div className="alert alert-success">
              <div className="flex-1">
                <h1>Email sent successfully</h1>
              </div>
            </div>
          ) : status === "Failed to send email!" ? (
            <div className="alert alert-error">
              <div className="flex-1">
                <h1>Failed to send email</h1>
              </div>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className="divider">OR</div>
      <h2 className="text-2xl mb-4 text-center w-full">Contact Info</h2>
      {/* phone number */}
      <div className="flex justify-center p-5">
        <h1>
          <a href="tel:+995 571 13 25 02" className="hover:link">
            +995 571 13 25 02
          </a>
        </h1>
      </div>
    </div>
  );
};

export default GetInTouch;
