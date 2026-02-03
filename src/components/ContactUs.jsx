import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();

      // clean, readable email content
      formDataToSend.append(
        "Message",
        `Name: ${formData.firstName.trim()} ${formData.lastName.trim()}
Email: ${formData.email.trim()}
Mobile: ${formData.mobile.trim()}

Message:
${formData.message.trim()}`
      );

      // helps Formspree know where to reply
      formDataToSend.append("_replyto", formData.email.trim());

      const res = await fetch("https://formspree.io/f/xreldlzy", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Formspree error");
      }

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We will contact you shortly.",
        confirmButtonColor: "#3085d6",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactUs" className="section">
      <div className="container">
        <div className="section-title-box">
          <div className="section-icon"></div>
          <div className="section-title">Home / Contact Us</div>
          <div className="liner-box"></div>
        </div>

        <form onSubmit={handleSubmit} className="contactUsForm mb-0">
          <div className="row justify-content-center">
            {/* First Name */}
            <div className="mb-3 col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                name="firstName"
                placeholder="Enter Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-3 col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3 col-sm-6">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile */}
            <div className="mb-3 col-sm-6">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                className="form-control"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="mb-3 col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                name="message"
                rows="6"
                placeholder="Tell us about your project idea."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mb-0 col-12">
              <button
                type="submit"
                className="primary-button w-100 mt-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Get A Quote"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
