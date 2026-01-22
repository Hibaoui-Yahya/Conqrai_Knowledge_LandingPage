import { motion } from 'framer-motion';
import { Clock, MessageSquareOff, AlertCircle, ZapOff, FileWarning, ShieldAlert } from 'lucide-react';

const ProblemStory = () => {
    const cards = [
        {
            title: "Institutional Memory Loss",
            items: [
                { icon: Clock, text: "Technical teams waste 30% of high-value hours searching for legacy data." },
                { icon: MessageSquareOff, text: "Critical senior expertise is bottlenecked by repetitive consultations." },
                { icon: AlertCircle, text: "Tribal knowledge evaporates with every employee retirement or transition." },
            ],
            highlight: false
        },
        {
            title: "The Implementation Gap",
            items: [
                { icon: ZapOff, text: "Static SOPs fail to provide clarity in high-pressure operational scenarios." },
                { icon: FileWarning, text: "Maintenance teams rely on recollection, introducing avoidable rework." },
                { icon: ShieldAlert, text: "Procedural ambiguity leads to overlooked safety protocols and risk." },
            ],
            highlight: true
        }
    ];

    return (
        <section id="problem" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-slate-100">The Operational Reality</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Knowledge is everywhere.<br />
                        <span className="text-primary">Answers are nowhere.</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
                        In complex operations, the gap between having a manual and executing a procedure is where errors happen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            className={`p-8 md:p-12 rounded-3xl border ${card.highlight ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-100 shadow-sm'}`}
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-8">{card.title}</h3>
                            <ul className="space-y-5">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0 border border-slate-100">
                                            <item.icon size={16} />
                                        </div>
                                        <p className="text-[17px] font-semibold text-slate-600 leading-snug pt-0.5">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemStory;
