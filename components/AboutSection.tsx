"use client";
import {motion} from "motion/react"
import { Cloud, Sparkles, Cpu, Rocket } from "lucide-react";
import Footer from "@/components/Footer";
import { about } from "@/config/About";
import Background_Gradient from "./Background_Gradient";

export default function AboutSection  ()  {
  return (
    <Background_Gradient>
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          About Lumina AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        > 
        {about.description}
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center ">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold mb-4"
          >
            Our Mission
          </motion.h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Lumina, we believe content creation should be seamless,
            intelligent, and accessible. Our mission is to empower individuals
            and teams with AI-driven tools that automate media optimization —
            letting you focus on creativity while we handle the heavy lifting.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold mb-10"
          >
            What Makes Lumina AI Different
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered",
                desc: "Leverage advanced AI models to automatically enhance, tag, and compress media efficiently.",
              },
              {
                icon: Cloud,
                title: "Cloud-Native",
                desc: "Built with Cloudinary for reliable media storage, transformations, and CDN delivery.",
              },
              {
                icon: Cpu,
                title: "Developer-Friendly",
                desc: "Integrate easily with our API and SDKs for fast, programmatic media workflows.",
              },
              {
                icon: Rocket,
                title: "Lightning Fast",
                desc: "Optimized edge delivery and caching for instant media rendering across the globe.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
              >
                <item.icon className="mx-auto text-purple-500 mb-4" size={36} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 text-center ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Powered by Modern Tech
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Lumina AI is built using cutting-edge web technologies for both
            performance and scalability.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Cloudinary", "Tailwind CSS", "Framer Motion", "Vercel"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Ready to Transform Your Media?
        </motion.h2>
        <p className="max-w-xl mx-auto text-lg mb-8 text-purple-100">
          Join Lumina AI today and experience how easy media optimization can
          be.
        </p>
        <a
          href="/signup"
          className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-50 transition-all"
        >
          Get Started
        </a>
      </section>
      <Footer/>
    </Background_Gradient>
  );
}


