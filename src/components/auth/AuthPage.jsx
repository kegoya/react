import { motion } from "framer-motion";
import { ArrowRight, Github, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { colorTheme } = useTheme();

  // Haptic helper
  const triggerHaptic = () => {
    if ("vibrate" in navigator) navigator.vibrate(15);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary dark:bg-secondary px-6 py-12 transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md bg-white dark:bg-tertiary rounded-[2.5rem] shadow-2xl shadow-brand/5 border border-textsecondary/10 p-8 lg:p-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            key={isLogin ? "login-h" : "signup-h"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-extrabold text-textmain dark:text-textprimary"
          >
            {isLogin ? "Welcome Back" : "Create Account"}
          </motion.h2>
          <p className="text-textsecondary mt-2">
            {isLogin
              ? "Enter your details to continue"
              : "Join our community today"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <InputGroup icon={User} placeholder="Full Name" type="text" />
          )}
          <InputGroup icon={Mail} placeholder="Email Address" type="email" />
          <InputGroup icon={Lock} placeholder="Password" type="password" />

          {isLogin && (
            <div className="text-right">
              <button className="text-sm font-medium text-brand hover:underline cursor-pointer">
                Forgot Password?
              </button>
            </div>
          )}

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={triggerHaptic}
            className="w-full py-4 bg-brand text-white rounded-2xl font-bold hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            {isLogin ? "Sign In" : "Sign Up"}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-textsecondary/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-tertiary px-4 text-textsecondary">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Auth */}
        <button className="w-full py-3 border border-textsecondary/20 rounded-2xl flex items-center justify-center gap-3 text-textmain dark:text-textprimary hover:bg-brand-soft transition-all cursor-pointer font-medium">
          <Github size={20} />
          GitHub
        </button>

        {/* Toggle Login/Signup */}
        <p className="mt-8 text-center text-textsecondary text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              triggerHaptic();
              setIsLogin(!isLogin);
            }}
            className="text-brand font-bold hover:underline cursor-pointer ml-1"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </motion.div>
    </section>
  );
}

// Reusable Input Component to keep code clean
function InputGroup({ icon: Icon, ...props }) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-textsecondary group-focus-within:text-brand transition-colors">
        <Icon size={20} />
      </div>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 bg-primary/50 dark:bg-secondary/50 border border-textsecondary/10 rounded-2xl text-textmain dark:text-textprimary focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all"
      />
    </div>
  );
}
