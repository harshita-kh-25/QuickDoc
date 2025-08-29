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
    <section className=" py-20 px-6 ">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
          Smart Tools for Efficient Document Management
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Streamline your document workflows, boost productivity, and ensure compliance with powerful features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}

            className="bg-white/40 backdrop-blur-md shadow-md border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all"
          >
            <div className="mb-6">
              <img src={tool.icon} alt={tool.title} className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-400 text-sm">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EDToolsSection;
