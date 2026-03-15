import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const DISPOSABLE_DOMAINS = ["mailinator.com", "10minutemail.com"];
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .refine((val) => !DISPOSABLE_DOMAINS.includes(val.split("@")[1]), {
      message: "Please use a permanent email address",
    }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  botcheck: z.string().optional(),
});

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    if (data.botcheck) return;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...data,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  const inputStyles = `w-full p-4 rounded-xl border bg-gray-50 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-brand/50 transition-all`;

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-200 mx-auto px-6">
        {/* Header Animation */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Let's build something together.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 rounded-2xl bg-brand-soft border border-brand/20 text-center animate-fade-in-up">
            <CheckCircle2 className="mx-auto text-brand mb-4" size={48} />
            <h3 className="text-2xl font-bold dark:text-white">
              Message Sent!
            </h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Staggered Input 1 */}
              <div className="animate-fade-in-up delay-100">
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className={`${inputStyles} ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Staggered Input 2 */}
              <div className="animate-fade-in-up delay-200">
                <input
                  {...register("email")}
                  placeholder="Email Address"
                  className={`${inputStyles} ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Staggered Textarea */}
            <div className="animate-fade-in-up delay-300">
              <textarea
                {...register("message")}
                rows="5"
                placeholder="How can I help you?"
                className={`${inputStyles} ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Staggered Button */}
            <div className="animate-fade-in-up delay-400">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover shadow-lg shadow-brand/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
