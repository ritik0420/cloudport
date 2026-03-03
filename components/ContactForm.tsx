'use client';

import React from "react";

export function ContactForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Placeholder: replace with API call or email provider integration
    // e.g. await fetch("/api/contact", { method: "POST", body: formData });
    console.log("Contact form submission (dummy):", Object.fromEntries(formData));
    form.reset();
    alert("This is a demo form. Wire it to your backend or email service.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-900 bg-slate-950/40 p-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-[11px] font-medium text-slate-200"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 transition placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-[11px] font-medium text-slate-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 transition placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="subject"
          className="text-[11px] font-medium text-slate-200"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 transition placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
          placeholder="How can I help?"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-[11px] font-medium text-slate-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 transition placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
          placeholder="Share a bit about your project, timelines, and how you prefer to work."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-primary-500 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:bg-primary-400"
      >
        Send message
      </button>
    </form>
  );
}

