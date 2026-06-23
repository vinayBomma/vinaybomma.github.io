import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xpwjqdek");

  return (
    <section
      id="contact"
      className="bg-white py-20 transition-colors duration-300 dark:bg-primary/95"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Say hello</h2>
        <p className="section-description">
          Have feedback, a collaboration idea, or a product question? Send a
          note and I will get back to you.
        </p>

        <div className="max-w-lg mx-auto mt-12">
          {state.succeeded ? (
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
              <h3 className="text-xl font-medium text-green-700 dark:text-green-400 mb-2">
                Thank You!
              </h3>
              <p className="text-green-600 dark:text-green-300">
                Your message has been sent successfully. I'll get back to you
                soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-7 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-white/5 sm:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-accent focus:ring-accent dark:border-white/10 dark:bg-gray-800 dark:text-white"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-accent focus:ring-accent dark:border-white/10 dark:bg-gray-800 dark:text-white"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-accent focus:ring-accent dark:border-white/10 dark:bg-gray-800 dark:text-white"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-full bg-accent px-4 py-3 font-medium text-white transition-colors duration-300 hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
              <ValidationError
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
