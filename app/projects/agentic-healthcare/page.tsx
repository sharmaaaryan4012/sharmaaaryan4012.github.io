import { ArrowLeft, Database, GitBranch, ShieldCheck, Cpu, Network, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-200 font-sans selection:bg-[#D97706] selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium text-sm">Back to Dashboard</span>
          </Link>
          <div className="text-xs font-mono text-[#D97706] border border-[#D97706]/30 px-3 py-1 rounded-full">
            CASE STUDY: 001
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 px-6 border-b border-slate-800 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs font-bold tracking-wider">
              AI INTERN @ ONIX NETWORKING
            </span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-xs font-bold tracking-wider">
              HEALTHCARE
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Agentic Systems for Synthetic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-amber-200">
              Healthcare Data
            </span> <br />
            Generation
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Validating <strong>Agentic Workflows</strong> as a superior alternative to statistical methods. 
            Orchestrating autonomous agents to generate FHIR-compliant patient records.
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* SIDEBAR (Table of Contents) - Sticky on Desktop */}
        <aside className="hidden md:block md:col-span-3 sticky top-32 self-start">
          <div className="space-y-2 border-l border-slate-800 pl-4">
            <a href="#executive-summary" className="block text-sm text-slate-400 hover:text-[#D97706] hover:translate-x-1 transition-all">01. Executive Summary</a>
            <a href="#architecture" className="block text-sm text-slate-400 hover:text-[#D97706] hover:translate-x-1 transition-all">02. Final Architecture</a>
            <a href="#execution" className="block text-sm text-slate-400 hover:text-[#D97706] hover:translate-x-1 transition-all">03. Execution Roadmap</a>
            <a href="#impact" className="block text-sm text-slate-400 hover:text-[#D97706] hover:translate-x-1 transition-all">04. Outcome & Impact</a>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <article className="col-span-1 md:col-span-9 space-y-24">
          
          {/* 01. EXECUTIVE SUMMARY */}
          <section id="executive-summary" className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-[#D97706] font-mono text-lg">01.</span> Executive Summary
            </h2>
            <div className="prose prose-invert prose-lg text-slate-400">
              <p>
                The objective of this initiative was to validate <strong>agentic systems</strong> as a superior alternative 
                to traditional statistical methods for synthetic data generation. Healthcare was selected as the pilot domain 
                due to its high demand for data privacy and the structured nature of patient-practitioner interactions.
              </p>
              <div className="bg-[#1E293B] border-l-4 border-[#D97706] p-6 rounded-r-xl my-8">
                <h4 className="text-white font-bold mb-2">The Strategic Goal</h4>
                <p className="text-sm">
                  Deliver a system capable of simulating complex interactions to produce realistic, 
                  standard-compliant (FHIR) data, serving as a stepping stone for the organization's pivot toward agentic workflows.
                </p>
              </div>
            </div>
            
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <ShieldCheck className="text-green-500 mb-3" />
                <h3 className="text-white font-bold">FHIR Compliant</h3>
                <p className="text-xs text-slate-500 mt-1">Validated via fhir.resources</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <Database className="text-blue-500 mb-3" />
                <h3 className="text-white font-bold">10k+ Records</h3>
                <p className="text-xs text-slate-500 mt-1">Enriched Harvard Dataset</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <Cpu className="text-purple-500 mb-3" />
                <h3 className="text-white font-bold">LangGraph Core</h3>
                <p className="text-xs text-slate-500 mt-1">LLM-Driven Orchestration</p>
              </div>
            </div>
          </section>

          {/* 02. TECHNICAL ARCHITECTURE */}
          <section id="architecture" className="space-y-6">
             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-[#D97706] font-mono text-lg">02.</span> Technical Architecture
            </h2>
            <p className="text-slate-400 text-lg">
              The final Agentic System moved beyond the probabilistic limitations of our earlier Mesa prototypes. 
              The quality of the simulation depended on a "Contextual Backbone" feeding into an intelligent orchestrator.
            </p>

            {/* Architecture Diagram Visualization - FIXED LAYOUT */}
            <div className="relative mt-12 p-8 bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-[#D97706]"></div>
              
              {/* Flex Container for Desktop (Linear Flow) */}
              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                
                {/* Layer 1: Knowledge */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
                    <Database size={14} /> Knowledge
                  </div>
                  <div className="bg-[#0F172A] p-5 rounded-lg border border-slate-800 h-full">
                    <h4 className="text-white font-bold text-sm">Enriched Harvard KB</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      10,000+ Records defining the "World State".
                    </p>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="text-slate-500 hidden md:block">
                   <ArrowRight size={24} />
                </div>
                <div className="text-slate-500 block md:hidden rotate-90">
                   <ArrowRight size={24} />
                </div>

                {/* Layer 2: Orchestration (LangGraph ONLY) */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
                    <Network size={14} /> Orchestrator
                  </div>
                  <div className="bg-[#0F172A] p-5 rounded-lg border border-slate-800 h-full shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <h4 className="text-white font-bold text-sm">LangGraph Agents</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      LLM-driven decision making. Handles graph state memory and tool execution.
                    </p>
                  </div>
                </div>

                 {/* Arrow 2 */}
                 <div className="text-slate-500 hidden md:block">
                   <ArrowRight size={24} />
                </div>
                <div className="text-slate-500 block md:hidden rotate-90">
                   <ArrowRight size={24} />
                </div>

                {/* Layer 3: Output */}
                 <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 text-[#D97706] font-mono text-xs uppercase tracking-widest mb-3">
                    <Layers size={14} /> Output
                  </div>
                  <div className="bg-[#0F172A] p-5 rounded-lg border border-slate-800 h-full">
                    <h4 className="text-white font-bold text-sm">Standardized Data</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      FHIR-compliant JSON resources ready for ingestion.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 03. EXECUTION ROADMAP - REVISED TO 3 PHASES */}
          <section id="execution" className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-[#D97706] font-mono text-lg">03.</span> Execution Roadmap
            </h2>
            <div className="border-l-2 border-slate-800 ml-4 space-y-12">
              
              {/* Phase 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-800 border-2 border-slate-600"></div>
                <h3 className="text-xl font-bold text-white">Phase 1: Validation (Rule-Based)</h3>
                <p className="text-slate-400 mt-2">
                  Established the Knowledge Base utility. Produced deterministic interactions to confirm the data structure could support realistic patient scenarios before introducing agent complexity.
                </p>
              </div>

              {/* Phase 2: SEPARATE MESA PHASE */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-800 border-2 border-slate-600"></div>
                <h3 className="text-xl font-bold text-white">Phase 2: The Baseline (Mesa Simulation)</h3>
                <p className="text-slate-400 mt-2">
                  Developed a <strong>separate</strong> agent-based model using Mesa. This scaled the interactions using probabilistic rules, creating a statistical baseline to compare against the intelligent system.
                </p>
              </div>

              {/* Phase 3: THE AGENTIC SYSTEM */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[#D97706] border-2 border-[#D97706] shadow-[0_0_10px_#D97706]"></div>
                <h3 className="text-xl font-bold text-white">Phase 3: Intelligent Orchestration (LangGraph)</h3>
                <p className="text-slate-400 mt-2">
                  The final evolution. Replaced statistical rules with <strong>LLM-driven Agents</strong>. User requests now trigger automated planning and execution, maintained via shared state memory in LangGraph.
                </p>
              </div>

            </div>
          </section>

          {/* 04. OUTCOME */}
          <section id="impact" className="space-y-6">
             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-[#D97706] font-mono text-lg">04.</span> Outcome & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                <h4 className="text-white font-bold mb-2">Technical Success</h4>
                <p className="text-slate-400 text-sm">
                  Successfully validated that Agentic Workflows can produce more contextually rich healthcare data than traditional stochastic methods.
                </p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                <h4 className="text-white font-bold mb-2">Ecosystem Fit</h4>
                <p className="text-slate-400 text-sm">
                  Demonstrated how agent-based modeling fits into a production-oriented product ecosystem, balancing business priorities with technical innovation.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-[#D97706]/10 to-transparent border border-[#D97706]/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">Ready to see the code?</h3>
                <p className="text-slate-400 text-sm mt-1">
                  The architecture is modular and ready for inspection.
                </p>
              </div>
              <div className="flex gap-4">
                 <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2">
                   <GitBranch size={18} />
                   Request Repository Access
                 </button>
              </div>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}