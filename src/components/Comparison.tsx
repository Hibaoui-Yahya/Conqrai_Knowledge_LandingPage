import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';

const features = [
    {
        label: "Knowledge Base",
        traditional: "Static PDFs / Wikis",
        llm: "Unverified Web Data",
        conqrai: "Grounded Internal IP",
    },
    {
        label: "Accuracy Guarantee",
        traditional: { text: "Reliant on Human Memory", icon: "x" },
        llm: { text: "High Hallucination Risk", icon: "warn" },
        conqrai: { text: "100% Traceable Answers", icon: "check" },
    },
    {
        label: "Expert Validation",
        traditional: "Isolated / Informal",
        llm: "None / Random",
        conqrai: "Expert-in-the-Loop Workflow",
    },
    {
        label: "Field Readiness",
        traditional: "Fragmented & Slow",
        llm: "Surface Level Only",
        conqrai: "Actionable Execution Guides",
    },
];

function CellContent({ data }: { data: string | { text: string; icon: string } }) {
    if (typeof data === 'string') return <span>{data}</span>;

    return (
        <div className="flex items-center gap-2">
            {data.icon === 'x' && <X className="text-red-400 flex-shrink-0" size={16} />}
            {data.icon === 'warn' && <AlertTriangle className="text-amber-400 flex-shrink-0" size={16} />}
            {data.icon === 'check' && <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={16} />}
            <span>{data.text}</span>
        </div>
    );
}

const Comparison = () => {
    return (
        <section className="py-12 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10 md:mb-20 leading-tight tracking-tight">
                    Engineered for operations. <br />
                    <span className="text-primary">Beyond search and generic AI.</span>
                </h2>

                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto rounded-[32px] border border-slate-200 bg-white shadow-lg">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="py-6 lg:py-8 px-6 lg:px-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Key Feature</th>
                                <th className="py-6 lg:py-8 px-6 lg:px-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Traditional Docs</th>
                                <th className="py-6 lg:py-8 px-6 lg:px-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Generic LLMs</th>
                                <th className="py-6 lg:py-8 px-6 lg:px-10 text-[11px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 border-b border-primary/10">Conqrai</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {features.map((f, i) => (
                                <tr key={i}>
                                    <td className="py-6 lg:py-8 px-6 lg:px-10 font-semibold text-slate-900 leading-tight">{f.label}</td>
                                    <td className="py-6 lg:py-8 px-6 lg:px-10 text-slate-500 font-medium"><CellContent data={f.traditional} /></td>
                                    <td className="py-6 lg:py-8 px-6 lg:px-10 text-slate-500 font-medium"><CellContent data={f.llm} /></td>
                                    <td className="py-6 lg:py-8 px-6 lg:px-10 font-semibold text-slate-900 bg-primary/5"><CellContent data={f.conqrai} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile card stack */}
                <div className="md:hidden space-y-4">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
                                <h3 className="text-sm font-bold text-slate-900">{f.label}</h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                <div className="px-5 py-3 flex justify-between items-center gap-3">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">Traditional</span>
                                    <span className="text-sm text-slate-500 font-medium text-right"><CellContent data={f.traditional} /></span>
                                </div>
                                <div className="px-5 py-3 flex justify-between items-center gap-3">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">Generic LLMs</span>
                                    <span className="text-sm text-slate-500 font-medium text-right"><CellContent data={f.llm} /></span>
                                </div>
                                <div className="px-5 py-3 flex justify-between items-center gap-3 bg-primary/5">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest shrink-0">Conqrai</span>
                                    <span className="text-sm font-semibold text-slate-900 text-right"><CellContent data={f.conqrai} /></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;
