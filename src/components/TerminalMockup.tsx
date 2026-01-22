import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusSquare, LogIn, CheckCircle2, UserCircle2 } from 'lucide-react';

const TerminalMockup = () => {
    const [displayText, setDisplayText] = useState("");
    const [showSteps, setShowSteps] = useState(false);
    const fullText = "How do I calibrate the secondary pressure sensor on Unit 04?";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) {
                clearInterval(interval);
                setTimeout(() => setShowSteps(true), 600);
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        { n: 1, text: "Isolate the primary manifold and verify zero-state pressure." },
        { n: 2, text: "Connect the digital calibrator to the Unit 04 test port (Alpha)." },
        { n: 3, text: "Adjust the trim pot until the output stabilizes at 4.02mA." },
    ];

    return (
        <div className="relative group w-full max-w-xl mx-auto lg:mx-0">
            {/* Subtle glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            <motion.div
                initial={{ rotateY: 5, rotateX: 2, scale: 0.98, opacity: 0 }}
                animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white/90 backdrop-blur-xl rounded-[28px] border border-slate-200 shadow-2xl overflow-hidden ring-1 ring-slate-900/5"
            >
                {/* Header Bar */}
                <div className="bg-slate-50/50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="size-2 rounded-full bg-slate-200" />
                        <div className="size-2 rounded-full bg-slate-200" />
                        <div className="size-2 rounded-full bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-slate-100/50">Knowledge OS</span>
                    </div>
                    <div className="w-10" /> {/* Spacer */}
                </div>

                <div className="p-6">
                    {/* Input Field */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2.5">
                            <UserCircle2 size={12} className="text-slate-400" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Field Request</span>
                        </div>
                        <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 text-sm md:text-base font-semibold text-slate-800 shadow-inner flex items-center min-h-[3.5rem]">
                            <span className="leading-tight">"{displayText}"</span>
                            {displayText.length < fullText.length && (
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="w-0.5 h-5 bg-primary ml-1"
                                />
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-6 mb-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Procedural Answer</span>
                                <AnimatePresence>
                                    {showSteps && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100 text-[8px] font-black uppercase tracking-widest shadow-sm"
                                        >
                                            <CheckCircle2 size={8} strokeWidth={3} />
                                            Validated
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-2">
                                <AnimatePresence>
                                    {showSteps && steps.map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.4 }}
                                            className={`p-3 rounded-xl border flex gap-3 transition-all duration-500 ${i === 0 ? 'bg-white border-primary/20 shadow-lg shadow-primary/5 ring-1 ring-primary/5' : 'bg-slate-50/30 border-slate-100 text-slate-500'}`}
                                        >
                                            <div className={`w-5 h-5 rounded flex items-center justify-center text-[9px] font-black flex-shrink-0 ${i === 0 ? 'bg-primary text-white shadow-sm' : 'bg-slate-100 text-slate-400'}`}>
                                                {step.n}
                                            </div>
                                            <p className={`text-[12px] font-semibold leading-snug ${i === 0 ? 'text-slate-900' : 'text-slate-500'}`}>
                                                {step.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <AnimatePresence>
                                {showSteps && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 1.6 }}
                                        className="h-full flex flex-col gap-4"
                                    >
                                        <div className="bg-amber-50/40 border border-amber-100 rounded-xl p-4 shadow-sm relative overflow-hidden group/insight">
                                            <div className="flex items-center gap-2.5 mb-2">
                                                <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white text-[8px] font-black">JS</div>
                                                <div>
                                                    <div className="text-[10px] font-bold text-slate-900">J. Smith</div>
                                                    <div className="text-[8px] font-bold text-amber-700 uppercase tracking-wider">Chief Tech</div>
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-slate-700 leading-relaxed font-semibold italic">
                                                "Always double-check the seal integrity before repressurizing."
                                            </p>
                                        </div>

                                        <div className="bg-white border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                                            <div className="flex items-center gap-4 w-full">
                                                <div className="relative size-10 flex-shrink-0">
                                                    <svg className="size-full -rotate-90">
                                                        <circle cx="20" cy="20" r="17" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                                                        <motion.circle
                                                            cx="20" cy="20" r="17" fill="none" stroke="#3AB6FF" strokeWidth="4" strokeLinecap="round"
                                                            initial={{ strokeDasharray: 107, strokeDashoffset: 107 }}
                                                            animate={{ strokeDashoffset: 107 - (0.98 * 107) }}
                                                            transition={{ duration: 2, delay: 2.2 }}
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                        <span className="text-[10px] font-black text-slate-900 tracking-tighter">98%</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">Confidence</span>
                                                    <span className="text-[10px] font-bold text-emerald-600">High Reliability</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-3 shadow-inner space-y-2">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Sources</span>
                                                <span className="text-[8px] font-bold text-primary bg-primary/10 px-1 py-0.5 rounded">3 Docs</span>
                                            </div>
                                            <div className="space-y-1 text-left">
                                                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-600">
                                                    <div className="size-1 rounded-full bg-primary" />
                                                    Manual v4.2
                                                </div>
                                                <div className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-600">
                                                    <div className="size-1 rounded-full bg-primary" />
                                                    CAD Schematic
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all border border-slate-800">
                            <PlusSquare size={14} />
                            <span>Create Work Order</span>
                        </button>
                        <button className="flex-1 bg-white border border-slate-200 text-slate-900 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
                            <LogIn size={14} />
                            <span>Log Intervention</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TerminalMockup;
