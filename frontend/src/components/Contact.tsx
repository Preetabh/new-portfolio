import { useState, type FormEvent } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
  HiOutlineChatAlt2,
  HiOutlineCheck,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { personal } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    toast.success("Email copied!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      if (apiUrl) {
        const { data } = await axios.post(`${apiUrl}/api/v1`, {
          fullName: form.name,
          email: form.email,
          message: form.message,
          contact: "Website Form",
        });
        toast.success(data.message || "Message sent successfully!");
      } else {
        const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
          `Portfolio Contact from ${form.name}`
        )}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )}`;
        window.location.href = mailtoUrl;
        toast.success("Opening email client...");
      }

      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        `Portfolio Contact from ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      toast.success("Redirecting to email...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineChatAlt2 size={13} />
            Contact
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Have a project in mind or want to connect? Send a message below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-3">
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4 transition-colors hover:bg-emerald-500/15"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">
                    WhatsApp
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {personal.phone}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-300">Chat →</span>
            </a>

            <div className="flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff5722]/15 text-[#ff5722]">
                  <HiOutlineMail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#ff5722] transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white px-2.5 py-1 text-xs"
              >
                {copiedEmail ? <HiOutlineCheck className="text-emerald-500" size={13} /> : null}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400">
                <HiOutlineLocationMarker size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">{personal.location}</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/85 dark:shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#ff5722] focus:outline-none focus:ring-1 focus:ring-[#ff5722] dark:border-white/10 dark:bg-black/40 dark:text-slate-200 dark:placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#ff5722] focus:outline-none focus:ring-1 focus:ring-[#ff5722] dark:border-white/10 dark:bg-black/40 dark:text-slate-200 dark:placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your message..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#ff5722] focus:outline-none focus:ring-1 focus:ring-[#ff5722] resize-y dark:border-white/10 dark:bg-black/40 dark:text-slate-200 dark:placeholder-slate-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff5722] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#ff5722]/30 transition-all hover:bg-[#ff7043] disabled:opacity-50"
              >
                <HiOutlinePaperAirplane size={14} />
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
