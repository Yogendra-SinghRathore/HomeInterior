import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xreldlzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will contact you shortly.",
          confirmButtonColor: "#3085d6",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Formspree error");
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-12">
          <h2 className="text-center mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit} className="card shadow-sm p-4">
            {/* Name */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <textarea
                className="form-control"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
