import Image from "next/image";
import { ArrowUpRight, Code2, GraduationCap, MapPin, Mail, Github, Linkedin, TrendingUp, Cpu, Database, Globe, Server, Layers, Terminal, BarChart3, Bot } from "lucide-react"; 
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] p-4 sm:p-8 lg:p-12 text-slate-200 font-sans flex flex-col gap-6 transition-all duration-300">
      
      {/* 
      --- GRID LAYOUT --- 
      */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-[auto_auto_auto] gap-4 md:gap-6">
        
        {/* 
        --- CARD A: HERO --- 
        */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 bg-[#1E293B] rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706] opacity-5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex justify-between items-start z-10">
            <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border-2 border-[#D97706] shadow-lg">
              <Image 
                src="/images/headshot.jpg" 
                alt="Aaryan Sharma"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex gap-2">
               <a href="mailto:sharmaaaryan4012@gmail.com" className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:text-[#D97706] transition-colors">
                 <Mail size={18} />
               </a>
               <a href="https://github.com/sharmaaaryan4012" target="_blank" className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:text-[#D97706] transition-colors">
                 <Github size={18} />
               </a>
               <a href="https://www.linkedin.com/in/sharmaaaryan" target="_blank" className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:text-[#D97706] transition-colors">
                 <Linkedin size={18} />
               </a>
            </div>
          </div>
          
          <div className="z-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Aaryan Sharma
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
              Data Science Intern @ HERE Technologies <br />
              <span className="text-[#D97706]">Bridging the gap between data and decision-making.</span>
            </p>
          </div>
        </div>

        {/* 
        --- CARD B: University of Illinois --- 
        */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 bg-[#1E293B] rounded-3xl p-6 flex flex-col justify-between border border-slate-700 hover:border-slate-500 transition-colors group min-h-[160px]">
           <div className="flex justify-between items-start">
             <div className="p-2 bg-slate-800/50 rounded-lg">
                <MapPin className="text-[#D97706]" size={20} />
             </div>
             <span className="text-xs font-mono text-slate-500">2022-2026</span>
           </div>
           <div>
             <div className="text-lg font-bold text-white group-hover:text-[#D97706] transition-colors">University of Illinois</div>
             <div className="text-xs text-slate-400 mt-1">B.S. Mathematics & Computer Science</div>
           </div>
        </div>

        {/* 
        --- CARD C: RESUME --- 
        */}
        <Link 
          href="/resume" 
          className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 bg-[#D97706] rounded-3xl p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#b45309] transition-all shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] group min-h-[160px]"
        >
            <div className="text-[#0F172A] font-bold text-xl group-hover:scale-105 transition-transform">
              Resume
            </div>
            <div className="flex items-center gap-1 text-[#0F172A]/80 text-xs mt-1 font-medium">
               <span>PDF</span>
               <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
        </Link>

        {/* 
        --- CARD D: KELLOGG --- 
        */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 bg-[#1E293B] rounded-3xl p-6 flex items-center justify-between border border-slate-700 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
           <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-purple-900/20 via-purple-900/5 to-transparent"></div>
           
           <div className="z-10">
             <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    INCOMING
                </span>
                <span className="text-slate-500 text-[10px] font-mono">STARTS SEPT 2026</span>
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-white">Kellogg School of Management</h3>
             <p className="text-slate-400 text-sm mt-1">Master in Management (MiM), Class of 2027</p>
           </div>
           <GraduationCap className="text-slate-700 group-hover:text-purple-400 transition-colors z-10 duration-500" size={48} />
        </div>

        {/* 
        --- CARD E: FEATURED PROJECT --- 
        */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 min-h-[200px] bg-[#1E293B] rounded-3xl p-6 md:p-8 border border-slate-700 flex flex-col md:flex-row items-start justify-between gap-8 group hover:border-[#D97706]/30 transition-colors relative overflow-hidden">
           
           <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>

           <div className="z-10 flex-1">
             <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="text-[#D97706]" size={20} />
                <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">Featured Case Study</span>
             </div>
          
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#D97706] transition-colors leading-tight">
                Agentic Synthetic Healthcare Data Generator
             </h3>
             <p className="text-slate-400 max-w-2xl leading-relaxed text-sm md:text-base">
               A synthetic data generation system that utilizes <span className="text-slate-200">agentic workflows</span> to simulate realistic patient-practitioner interactions. Moving beyond traditional statistical methods, this project orchestrated agents to generate structured, <span className="text-slate-200">FHIR-compliant</span> healthcare records.
             </p>

             <div className="flex flex-wrap gap-2 mt-6">
                {["Python", "LangChain", "Pydantic", "Mesa", "fhir.resources", "SQL"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                        {tag}
                    </span>
                ))}
             </div>
           </div>

           <div className="z-10 flex flex-col justify-end w-full md:w-auto">
             <Link href="/projects/agentic-healthcare" className="w-full md:w-auto">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0F172A] hover:bg-slate-900 text-white rounded-xl font-medium transition-all border border-slate-700 hover:border-[#D97706] group-hover:translate-x-1 w-full md:w-auto">
                <Code2 size={18} />
                <span>View Architecture</span>
              </button>
            </Link>
           </div>
        </div>

        {/* 
        --- CARD F: TECH ARSENAL TICKER ---
        */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
          <div className="bg-[#1E293B]/50 rounded-2xl border border-slate-800 p-4 flex items-center justify-center overflow-hidden relative">

            <div className="flex gap-8 items-center justify-center text-slate-400 opacity-80 text-sm font-medium overflow-x-auto scrollbar-hide w-full mask-gradient-r">
               <div className="flex items-center gap-2 whitespace-nowrap"><Terminal size={14}/> Python & R</div>
               <div className="flex items-center gap-2 whitespace-nowrap"><Code2 size={14}/> C & C++</div>
               <div className="flex items-center gap-2 whitespace-nowrap"><Layers size={14}/> PyTorch & TensorFlow</div>
               <div className="flex items-center gap-2 whitespace-nowrap"><Bot size={14}/> LangChain & LLMs</div>
               <div className="flex items-center gap-2 whitespace-nowrap"><Database size={14}/> SQL & Pandas</div>
               <div className="flex items-center gap-2 whitespace-nowrap"><BarChart3 size={14}/> Tableau & PowerBI</div>
               <div className="flex items-center gap-2 whitespace-nowrap"><Globe size={14}/> React & HTML</div>
               <div className="flex items-center gap-2 whitespace-nowrap"><Server size={14}/> Docker & APIs</div>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}