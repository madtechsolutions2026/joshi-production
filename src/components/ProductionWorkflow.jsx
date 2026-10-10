import React from 'react';
import { Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { workflowSteps } from '../data/content';

export default function ProductionWorkflow() {
  return (
    <section id="workflow" className="py-20 sm:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#ff6200] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Under One Roof
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-tight">
            Our Production Pipeline: <br />
            <span className="text-gradient-brand">From Vision to Delivery</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-600 max-w-xl mx-auto">
            A proven studio workflow delivering high aesthetic standards, strict timelines, and budget clarity.
          </p>
        </div>

        {/* 5 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-orange-300 transition-all duration-200 flex flex-col justify-between group hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#ff6200]">
                    {step.step}
                  </span>
                  {idx < workflowSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-zinc-400 hidden md:block" />
                  )}
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-900 mb-2 group-hover:text-[#ff6200] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-200 flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6200]" />
                <span>Phase {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Hardware Specs */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xs font-semibold text-zinc-500">Camera Packages</div>
            <div className="text-sm sm:text-base font-bold text-zinc-900 mt-0.5">RED & ARRI DCI 4K/8K</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-500">Lenses</div>
            <div className="text-sm sm:text-base font-bold text-zinc-900 mt-0.5">Anamorphic & Cine Primes</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-500">Post & Color</div>
            <div className="text-sm sm:text-base font-bold text-zinc-900 mt-0.5">DaVinci Resolve Studio</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-500">Turnaround</div>
            <div className="text-sm sm:text-base font-bold text-zinc-900 mt-0.5">Fast Deliverables SLA</div>
          </div>
        </div>

      </div>
    </section>
  );
}
