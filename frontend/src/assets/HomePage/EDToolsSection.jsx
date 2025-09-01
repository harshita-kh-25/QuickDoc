import React from "react";

const tools = [
  {
    title: "Real-Time Document Capture",
    description: "Instantly scan, upload, and digitize documents for centralized access.",
    icon: "/icons/scan.svg",
  },
  {
    title: "Automated Classification",
    description: "Tag and categorize documents using AI-based metadata extraction.",
    icon: "/icons/classify.svg",
  },
  {
    title: "Workflow Automation",
    description: "Route documents through approval and review chains effortlessly.",
    icon: "/icons/workflow.svg",
  },
  {
    title: "Compliance & Audit Ready",
    description: "Track document changes with full version history and access logs.",
    icon: "/icons/compliance.svg",
  },
];

const EDToolsSection = () => {
  return (
    <section className="relative py-20 px-6 text-white">
      {/* Background with Radial Gradient and Blue Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(3,28,60,1) 0%, rgba(0,0,0,1) 80%)] opacity-70 z-0"></div>
      <div className="absolute inset-0 flex justify-start items-top pointer-events-none z-10">
        <div className="w-[500px] h-[500px] bg-blue-700 opacity-30 rounded-full blur-[160px]" />
      </div>

      {/* Heading and Description */}
      <div className="max-w-7xl mx-auto text-center mb-16 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Smart Tools for Efficient Document Management
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Streamline your document workflows, boost productivity, and ensure compliance with powerful features.
        </p>
      </div>

      {/* Tools Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] backdrop-blur-md shadow-md border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all"
          >
            <div className="mb-6">
              <img src={tool.icon} alt={tool.title} className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-sm">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EDToolsSection;
