import React from "react";
import { Code2, Network } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-3 transition-all duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl animate-fadeInUp">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with glow */}
      <div className="relative mb-6 flex justify-center">
        <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 rounded-full blur-2xl group-hover:opacity-50 transition-all duration-500" />
        <Icon className="w-14 h-14 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-center items-center space-x-3 text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed text-left">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Research & Development ",
      company: "K.S.R College of Engineering",
      period: "Published in 2024",
      description:
        "Worked on 'Social Media Sentiment Analysis on Climate Change: A Hybrid Model with BiLSTM and PMI', combining deep learning with natural language processing to analyze environmental discourse on social media.",
    },
    {
      icon: Code2,
      title: "Web Development Intern",
      company: "Codesoft",
      period: "2024",
      description:
        "Developed full-stack applications using React, Node.js, and MongoDB, focusing on building responsive user interfaces and robust backend APIs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[#04081A]" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 mt-10">
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Professional Journey
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            "Transforming ideas into digital reality, one project at a time"
          </p>
        </div>

        {/* Centered Experience Cards */}
        <div className="flex justify-center gap-10 flex-wrap max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default ExperienceSection;
