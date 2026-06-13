"use client";

import { motion } from "framer-motion";
import  Footer  from "@/components/Footer";
import Navbar from "./Navbar";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  Heart,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed First",
    desc: "Every millisecond matters. We obsess over performance so your media loads instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by Design",
    desc: "Your content is yours. Security is built into every layer.",
  },
  {
    icon: Globe,
    title: "Accessible to All",
    desc: "Powerful tools should be usable by everyone.",
  },
  {
    icon: Heart,
    title: "Crafted with Care",
    desc: "Every interaction is polished and delightful.",
  },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
<Navbar/>
      {/* Hero */}
      <section className="relative bg-hero">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold leading-[1.05] max-w-3xl mx-auto"
          >
            Built for creators who refuse to <span className="text-gradient">compromise</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
Lumina was born from a simple belief: managing, transforming, and delivering media shouldn&apos;t require a room full of engineers. We&apos;re building the platform we wished existed.          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-secondary mb-3">Our story</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">From frustration to platform.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2024, our team was shipping a high-traffic visual product. We were juggling five different tools for storage, compression, AI edits, and CDN delivery. Each tool had its own pricing, its own quirks, and its own failure modes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We thought: what if one platform handled the entire pipeline? Upload once, transform with AI, optimize automatically, and deliver anywhere — all through a clean, modern interface.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That idea became Lumina. Today, thousands of teams use Lumina to power their visual experiences, from startups to Fortune 500s.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border glass p-8 text-center">
              <Sparkles className="size-12 mx-auto mb-4 text-secondary" />
              <div className="text-5xl font-bold mb-2">2M+</div>
              <p className="text-muted-foreground text-sm mb-6">media assets processed daily</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl glass p-4">
                  <div className="text-2xl font-bold">99.99%</div>
                  <p className="text-xs text-muted-foreground mt-1">Uptime SLA</p>
                </div>
                <div className="rounded-xl glass p-4">
                  <div className="text-2xl font-bold">300+</div>
                  <p className="text-xs text-muted-foreground mt-1">Edge locations</p>
                </div>
                <div className="rounded-xl glass p-4">
                  <div className="text-2xl font-bold">&lt;50ms</div>
                  <p className="text-xs text-muted-foreground mt-1">p95 latency</p>
                </div>
                <div className="rounded-xl glass p-4">
                  <div className="text-2xl font-bold">4.9/5</div>
                  <p className="text-xs text-muted-foreground mt-1">User rating</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-secondary mb-3">Our values</p>
            <h2 className="text-4xl md:text-5xl font-bold">What drives us.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Principles that shape every decision we make — from product design to infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl glass p-6 hover:border-primary/50 transition"
              >
                <div className="size-11 rounded-xl bg-brand grid place-items-center mb-5 shadow-glow">
                  <v.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 pt-12">
        <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden glass p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-hero opacity-70 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
              Ready to transform your <span className="text-gradient">media workflow</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join thousands of teams who trust Lumina to power their visual experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition">
                Start free today <ArrowRight className="size-4" />
              </a>
              <a href="mailto:hello@lumen.io" className="inline-flex items-center gap-2 rounded-lg glass px-6 py-3 text-sm font-semibold hover:bg-card transition">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}