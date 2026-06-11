import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          e.target.reset();

          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-950 via-green-950/20 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mt-4">
              Let's Work <span className="text-green-400">Together</span>
            </h2>
          </div>
        </FadeIn>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-6 text-center text-green-400 font-semibold">
            ✅ Message sent successfully!
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <FadeIn>
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/60 rounded-2xl flex gap-4">
                <Mail className="text-green-400" />
                <div>
                  <h3 className="text-white">Email</h3>
                  <p className="text-gray-400">plabonmdk@gmail.com</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-2xl flex gap-4">
                <Phone className="text-green-400" />
                <div>
                  <h3 className="text-white">Phone</h3>
                  <p className="text-gray-400">+880 1717-448042</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-2xl flex gap-4">
                <MapPin className="text-green-400" />
                <div>
                  <h3 className="text-white">Location</h3>
                  <p className="text-gray-400">Gaibandha, Bangladesh</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* FORM */}
          <FadeIn delay={0.2}>
            <form
              onSubmit={sendEmail}
              className="bg-slate-900/60 rounded-3xl p-8"
            >
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 rounded-xl bg-slate-950 text-white"
                required
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-3 rounded-xl bg-slate-950 text-white"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full mb-4 p-3 rounded-xl bg-slate-950 text-white"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-green-500 py-3 rounded-xl text-white"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;