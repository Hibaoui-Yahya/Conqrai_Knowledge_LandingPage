import React from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, User, Mail, Phone, Briefcase, MessageSquare, CheckCircle2 } from 'lucide-react';
import AbstractBrain from '@/components/visuals/AbstractBrain';

const industries = [
    "Engineering & Manufacturing",
    "Aerospace & Automotive",
    "Energy & Infrastructure",
    "R&D and Operations",
    "Digital Transformation",
    "Other",
];

const FinalCTA = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get('name') as string;
        const email = data.get('email') as string;
        const company = data.get('company') as string;
        const subject = encodeURIComponent(`Demo Request from ${name} at ${company}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${data.get('phone')}\nCompany: ${company}\nIndustry: ${data.get('industry')}\n\nMessage:\n${data.get('message')}`
        );
        window.open(`mailto:hello@conqrai.com?subject=${subject}&body=${body}`, '_blank');
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 bg-[#0b0f14] overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#38b6ff] rounded-full opacity-[0.06] blur-[200px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#38b6ff] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-badge">Get Started</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4">
                        Ready to transform your
                        <br />
                        <span className="text-gradient">enterprise knowledge?</span>
                    </h2>
                    <p className="text-lg text-[#9ca3af] font-medium max-w-2xl mx-auto">
                        Tell us about your organization and we'll show you how Conqrai can preserve, connect, and activate your institutional knowledge.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left: CTA content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card-strong rounded-3xl p-8 md:p-10 glow-border relative overflow-hidden">
                            {/* Abstract brain background */}
                            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                                <AbstractBrain className="w-full h-full" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight mb-4">
                                    The future of organizations is not artificial intelligence.
                                    <br />
                                    <span className="text-gradient">It's augmented intelligence.</span>
                                </h3>

                                <p className="text-[#9ca3af] font-medium leading-relaxed mb-8">
                                    See how your knowledge becomes a strategic asset. Talk to our team and discover how Conqrai transforms the way your organization thinks.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "Personalized demo tailored to your industry",
                                        "ROI assessment for your organization",
                                        "Technical architecture review",
                                        "On-premise deployment planning",
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="size-5 text-[#38b6ff] flex-shrink-0" />
                                            <span className="text-sm font-semibold text-[#e5e7eb]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="glass-card rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex -space-x-2">
                                            {["E", "S", "M", "A"].map((letter, i) => (
                                                <div key={i} className="size-8 rounded-full border-2 border-[#111827] flex items-center justify-center text-[10px] font-bold text-white"
                                                    style={{ backgroundColor: ["#38b6ff30", "#a78bfa30", "#34d39930", "#f59e0b30"][i] }}
                                                >
                                                    {letter}
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">50+ Enterprise Teams</div>
                                            <div className="text-[11px] text-[#9ca3af]">Already using Conqrai Knowledge</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs text-emerald-400 font-semibold">Response within 24 hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: B2B Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card-strong rounded-3xl p-8 md:p-10">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="size-16 rounded-full bg-[#38b6ff]/15 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="size-8 text-[#38b6ff]" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3">Thank you!</h3>
                                    <p className="text-[#9ca3af] font-medium">Your message is ready to send. Our team will get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-sm font-bold text-[#38b6ff] hover:text-[#2a9edf] transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-xl font-bold text-white mb-1">Request a Demo</h3>
                                    <p className="text-sm text-[#9ca3af] font-medium mb-6">Fill in your details and our team will reach out.</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Full Name */}
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6b7280]" />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Full Name"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b0f14]/60 border border-[#1f2937] text-sm font-medium text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#38b6ff]/50 focus:ring-1 focus:ring-[#38b6ff]/20 transition-all"
                                            />
                                        </div>

                                        {/* Business Email */}
                                        <div className="relative">
                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6b7280]" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Business Email"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b0f14]/60 border border-[#1f2937] text-sm font-medium text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#38b6ff]/50 focus:ring-1 focus:ring-[#38b6ff]/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Company Name */}
                                        <div className="relative">
                                            <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6b7280]" />
                                            <input
                                                type="text"
                                                name="company"
                                                required
                                                placeholder="Company Name"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b0f14]/60 border border-[#1f2937] text-sm font-medium text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#38b6ff]/50 focus:ring-1 focus:ring-[#38b6ff]/20 transition-all"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="relative">
                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6b7280]" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone (optional)"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b0f14]/60 border border-[#1f2937] text-sm font-medium text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#38b6ff]/50 focus:ring-1 focus:ring-[#38b6ff]/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Industry / Role */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6b7280]" />
                                            <select
                                                name="industry"
                                                required
                                                defaultValue=""
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b0f14]/60 border border-[#1f2937] text-sm font-medium text-white focus:outline-none focus:border-[#38b6ff]/50 focus:ring-1 focus:ring-[#38b6ff]/20 transition-all appearance-none cursor-pointer [&:invalid]:text-[#6b7280]"
                                            >
                                                <option value="" disabled className="text-[#6b7280]">Industry</option>
                                                {industries.map((ind) => (
                                                    <option key={ind} value={ind} className="bg-[#111827] text-white">{ind}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6b7280]" />
                                            <input
                                                type="text"
                                                name="role"
                                                placeholder="Your Role (optional)"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b0f14]/60 border border-[#1f2937] text-sm font-medium text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#38b6ff]/50 focus:ring-1 focus:ring-[#38b6ff]/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3.5 top-3.5 size-4 text-[#6b7280]" />
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about your challenges or what you'd like to see in the demo..."
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b0f14]/60 border border-[#1f2937] text-sm font-medium text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#38b6ff]/50 focus:ring-1 focus:ring-[#38b6ff]/20 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#38b6ff] hover:bg-[#2a9edf] text-white text-base font-bold transition-all shadow-lg shadow-[#38b6ff]/25 hover:shadow-[#38b6ff]/40 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        Request a Demo
                                        <Send className="size-4" />
                                    </button>

                                    <p className="text-[11px] text-[#6b7280] text-center font-medium">
                                        By submitting, you agree to our privacy policy. We'll never share your data.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
