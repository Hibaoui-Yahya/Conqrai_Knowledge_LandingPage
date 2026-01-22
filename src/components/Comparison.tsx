import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-20 leading-tight tracking-tight">
                    Engineered for operations. <br />
                    <span className="text-primary">Beyond search and generic AI.</span>
                </h2>

                <div className="overflow-x-auto rounded-[32px] border border-slate-200 bg-white shadow-lg">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="py-8 px-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Key Feature</th>
                                <th className="py-8 px-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Traditional Docs</th>
                                <th className="py-8 px-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">Generic LLMs</th>
                                <th className="py-8 px-10 text-[11px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 border-b border-primary/10">Conqrai</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="py-8 px-10 font-semibold text-slate-900 leading-tight">Knowledge Base</td>
                                <td className="py-8 px-10 text-slate-500 font-medium">Static PDFs / Wikis</td>
                                <td className="py-8 px-10 text-slate-500 font-medium">Unverified Web Data</td>
                                <td className="py-8 px-10 font-semibold text-slate-900 bg-primary/5">Grounded Internal IP</td>
                            </tr>
                            <tr>
                                <td className="py-8 px-10 font-semibold text-slate-900 leading-tight">Accuracy Guarantee</td>
                                <td className="py-8 px-10 text-slate-500 font-medium">
                                    <div className="flex items-center gap-2">
                                        <X className="text-red-400 flex-shrink-0" size={18} />
                                        <span>Reliant on Human Memory</span>
                                    </div>
                                </td>
                                <td className="py-8 px-10 text-slate-500 font-medium">
                                    <div className="flex items-center gap-2">
                                        <AlertTriangle className="text-amber-400 flex-shrink-0" size={18} />
                                        <span>High Hallucination Risk</span>
                                    </div>
                                </td>
                                <td className="py-8 px-10 font-semibold text-slate-900 bg-primary/5">
                                    <div className="flex items-center gap-2 text-primary">
                                        <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                                        <span>100% Traceable Answers</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-8 px-10 font-semibold text-slate-900 leading-tight">Expert Validation</td>
                                <td className="py-8 px-10 text-slate-500 font-medium">Isolated / Informal</td>
                                <td className="py-8 px-10 text-slate-500 font-medium">None / Random</td>
                                <td className="py-8 px-10 font-semibold text-slate-900 bg-primary/5">Expert-in-the-Loop Workflow</td>
                            </tr>
                            <tr>
                                <td className="py-8 px-10 font-semibold text-slate-900 leading-tight">Field Readiness</td>
                                <td className="py-8 px-10 text-slate-500 font-medium">Fragmented & Slow</td>
                                <td className="py-8 px-10 text-slate-500 font-medium">Surface Level Only</td>
                                <td className="py-8 px-10 font-semibold text-slate-900 bg-primary/5 italic">Actionable Execution Guides</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
