import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    organization: string;
    companySize: string;
    industry: string;
    message: string;
}

const initialFormData: FormData = {
    name: '',
    email: '',
    organization: '',
    companySize: '',
    industry: '',
    message: '',
};

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            setStatus('success');
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
        }
    };

    const inputClass = "w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300";
    const labelClass = "text-xs font-bold text-slate-400 uppercase tracking-widest pl-1";

    return (
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                        Ready to turn your knowledge into <span className="text-blue-200">operational power?</span>
                    </h2>
                    <p className="text-xl text-blue-100/80 mb-10 max-w-lg font-medium">
                        Join forward-thinking engineering teams using Conqrai to eliminate hesitation and ensure perfect execution.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-center text-white font-semibold">
                            <CheckCircle2 className="text-blue-300" />
                            Free deployment readiness audit
                        </div>
                        <div className="flex gap-4 items-center text-white font-semibold">
                            <CheckCircle2 className="text-blue-300" />
                            Enterprise-grade data sovereignty
                        </div>
                        <div className="flex gap-4 items-center text-white font-semibold">
                            <CheckCircle2 className="text-blue-300" />
                            Guided onboarding for your team
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[32px] p-10 shadow-2xl border border-white/20"
                >
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted</h3>
                            <p className="text-slate-500 font-medium">
                                We've sent you a confirmation email. An enterprise solutions architect will contact you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className={labelClass}>Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelClass}>Work Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="john@enterprise.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className={labelClass}>Organization</label>
                                    <input
                                        required
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="Corporation Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelClass}>Company Size</label>
                                    <select
                                        required
                                        name="companySize"
                                        value={formData.companySize}
                                        onChange={handleChange}
                                        className={`${inputClass} cursor-pointer`}
                                    >
                                        <option value="">Select size...</option>
                                        <option value="100-500">100 - 500</option>
                                        <option value="500-2000">500 - 2,000</option>
                                        <option value="2000-10000">2,000 - 10,000</option>
                                        <option value="10000+">10,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={labelClass}>Primary Industry</label>
                                <select
                                    required
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className={`${inputClass} cursor-pointer`}
                                >
                                    <option value="">Select industry...</option>
                                    <option value="manufacturing">Manufacturing & Heavy Industry</option>
                                    <option value="energy">Energy & Utilities</option>
                                    <option value="aerospace">Aerospace & Defense</option>
                                    <option value="pharmaceutical">Pharmaceuticals</option>
                                    <option value="logistics">Logistics & Supply Chain</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className={labelClass}>Strategic Requirement</label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Describe your operational knowledge challenges..."
                                />
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-3 text-sm font-medium">
                                    <AlertCircle size={18} className="shrink-0" />
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl shadow-slate-900/10 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        Submitting...
                                        <Loader2 size={20} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Book Implementation Review
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
