import { ArrowLeft, Download, FileText } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    // UPDATED: h-screen ensures the page itself doesn't scroll, only the PDF does.
    <main className="h-screen bg-[#0F172A] text-slate-200 font-sans flex flex-col overflow-hidden">
      
      {/* --- HEADER --- */}
      <nav className="w-full z-50 bg-[#0F172A] border-b border-slate-800 p-4 md:p-6 flex items-center justify-between shrink-0">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </Link>
        
        <div className="flex items-center gap-4">           
           <a 
             href="/resume.pdf" 
             download="Aaryan_Sharma_Resume.pdf"
             className="flex items-center gap-2 px-4 py-2 bg-[#D97706] hover:bg-[#b45309] text-white rounded-full text-sm font-bold transition-colors shadow-lg shadow-orange-900/20"
           >
             <Download size={16} />
             <span>Download PDF</span>
           </a>
        </div>
      </nav>

      {/* --- PDF VIEWER --- */}
      <div className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 flex flex-col min-h-0">
        
        {/* Mobile Fallback */}
        <div className="md:hidden flex flex-col items-center justify-center h-full text-center space-y-6">
           <div className="h-20 w-20 bg-slate-800 rounded-full flex items-center justify-center">
             <FileText size={32} className="text-[#D97706]" />
           </div>
           <div>
             <h3 className="text-xl font-bold text-white">View Resume</h3>
             <p className="text-slate-400 mt-2 px-8 text-sm">
               For the best experience, please download the resume or view on desktop.
             </p>
           </div>
           <a 
             href="/resume.pdf" 
             download="Aaryan_Sharma_Resume.pdf"
             className="text-[#D97706] border-b border-[#D97706] pb-0.5"
           >
             Download File Directly
           </a>
        </div>

        {/* Desktop Embed - FIXED */}
        {/* 1. bg-white: Forces the background behind the PDF to be white.
            2. h-full: Takes up all remaining space.
            3. rounded-lg: Rounds the corners of the frame.
        */}
        <div className="hidden md:block flex-1 bg-white rounded-lg shadow-2xl overflow-hidden relative">
          <iframe
            src="/resume.pdf"
            className="w-full h-full block border-none"
            title="Resume PDF"
          />
        </div>

      </div>
    </main>
  );
}