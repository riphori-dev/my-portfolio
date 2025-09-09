import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isEmail = (v: string) => /.+@.+\..+/.test(v);

  const errors = {
    name: name.trim().length === 0 ? "Your name is required." : "",
    email: email.trim().length === 0 ? "Email is required." : !isEmail(email) ? "Enter a valid email." : "",
    message: message.trim().length < 10 ? "Please write at least 10 characters." : "",
  };

  const isValid = !errors.name && !errors.email && !errors.message;

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid || status === "sending") return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg("Email service not configured. Please set EmailJS keys in .env.");
      return;
    }

    try {
      setStatus("sending");
      setErrorMsg("");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message,
        },
        { publicKey }
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTouched({});
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg("Sending failed. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400">Have a project in mind or just want to say hello?</p>
        </div>

        {status === "sent" && (
          <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-4 py-3">
            Your message has been sent. Thanks! I'll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 px-4 py-3">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                className={`w-full rounded-lg bg-slate-800 border ${touched.name && errors.name ? "border-red-500" : "border-slate-700"} px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your name"
              />
              {touched.name && errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                className={`w-full rounded-lg bg-slate-800 border ${touched.email && errors.email ? "border-red-500" : "border-slate-700"} px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="you@example.com"
              />
              {touched.email && errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, message: true }))}
              className={`w-full rounded-lg bg-slate-800 border ${touched.message && errors.message ? "border-red-500" : "border-slate-700"} px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              rows={6}
              placeholder="Tell me about your project..."
            />
            {touched.message && errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              type="submit"
              className={`btn-contrast inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isValid ? (status === "sending" ? "bg-slate-700 cursor-wait" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700") : "bg-slate-700 cursor-not-allowed"
              }`}
              disabled={!isValid || status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-6 9 6-9 6-9-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
