import { Globe, Shield, Smartphone, Zap } from "lucide-react";

const featureList = [
  {
    title: "Blazing Fast",
    desc: "Built on top of Vite and Tailwind v4 for the fastest developer experience.",
    icon: <Zap className="text-yellow-500" size={24} />,
  },
  {
    title: "Secure by Default",
    desc: "Modern security practices integrated into every component we build.",
    icon: <Shield className="text-green-500" size={24} />,
  },
  {
    title: "Mobile First",
    desc: "Your app looks stunning on iPhones, Androids, and everything in between.",
    icon: <Smartphone className="text-purple-500" size={24} />,
  },
  {
    title: "Global Scale",
    desc: "Deploy to the edge and reach users anywhere in the world instantly.",
    icon: <Globe className="text-blue-500" size={24} />,
  },
  {
    title: "Secure by Default",
    desc: "Modern security practices integrated into every component we build.",
    icon: <Shield className="text-green-500" size={24} />,
  },
];

export default function Features() {
  return (
    /* Section Background: Using bg-tertiary/30 for a subtle contrast from the main body */
    <section className="py-20 bg-primary dark:bg-tertiary/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-textmain dark:text-textprimary sm:text-4xl animate-fade-in-up">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-textsecondary">
            High-performance features designed for the modern web.
          </p>
        </div>

        {/* Grid: 4 columns with themed card interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((item, index) => (
            <div
              key={index}
              /* Cards: bg-primary (Light) | bg-secondary (Dark) */
              className="p-8 bg-primary dark:bg-secondary rounded-2xl shadow-sm border border-textsecondary/10 hover:border-brand/50 transition-all group cursor-default"
            >
              {/* Icon Box: group-hover:bg-brand-soft tints with theme on hover */}
              <div className="mb-4 p-3 bg-tertiary/10 dark:bg-tertiary w-fit rounded-xl group-hover:bg-brand-soft group-hover:scale-110 transition-all duration-300 text-brand">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-textmain dark:text-textprimary mb-2">
                {item.title}
              </h3>

              <p className="text-textsecondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
