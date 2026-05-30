"use client";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message Sent Successfully");

        setFormData({
          fullName: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent transition-all duration-300">
      <div className="absolute top-20 left-10 w-44 h-44 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>

           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left leading-tight mb-8 md:mb-12">
              Contact Me
          </h1>


          <div className="space-y-4 md:space-y-6">
            <div className="glass-card rounded-[28px] p-5 md:p-6 flex items-start gap-4 md:gap-5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-400/20">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="opacity-70">preetabh.work@gmail.com</p>
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-5 md:p-6 flex items-start gap-4 md:gap-5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-400/20">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="opacity-70">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-5 md:p-6 flex items-start gap-4 md:gap-5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-400/20">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="opacity-70">+91 9452900378</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[28px] md:rounded-[36px] p-5 sm:p-7 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">Send Message</h3>
              <p className="opacity-70 text-sm">
                Let’s discuss your next project.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div>
              <label className="block mb-3 font-medium">Full Name</label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none backdrop-blur-xl focus:border-blue-400 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-3 font-medium">Phone Number</label>

              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none backdrop-blur-xl focus:border-green-400 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-3 font-medium">Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none backdrop-blur-xl focus:border-purple-400 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block mb-3 font-medium">Message</label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none backdrop-blur-xl focus:border-pink-400 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 md:py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              <Send className="w-5 h-5" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
