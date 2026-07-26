import { useState, type FormEvent } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlinePaperAirplane,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { personal } from "../data/portfolio";

const contactCards = [
  { icon: HiOutlineMail, label: "Email", value: personal.email },
  { icon: HiOutlineLocationMarker, label: "Location", value: personal.location },
  { icon: HiOutlinePhone, label: "Phone", value: personal.phone },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL || ""}/api/v1`,
        {
          fullName: form.name,
          email: form.email,
          message: form.message,
          contact: form.phone,
        }
      );

      toast.success(data.message || "Message sent successfully!");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        {/* Info Column */}
        <div className="lg:col-span-5">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <HiOutlineChatAlt2 size={13} />
            Contact
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Have a question or a project idea? Send me a message below.
          </p>

          <div className="mt-6 space-y-3">
            {contactCards.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-[#0b0e1b]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <c.icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">{c.label}</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#0b0e1b] lg:col-span-7"
          onSubmit={handleSubmit}
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Send Message
          </h3>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-colors focus:border-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-colors focus:border-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-colors focus:border-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={4}
                className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-colors focus:border-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-indigo-500 disabled:opacity-70"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <HiOutlinePaperAirplane className="rotate-45" size={14} />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
