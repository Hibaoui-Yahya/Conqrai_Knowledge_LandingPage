import { motion } from 'framer-motion';

const sidebarItems = [
    { label: "Dashboard", active: true },
    { label: "Knowledge Base", active: false },
    { label: "Expert Insights", active: false },
    { label: "Analytics", active: false },
    { label: "Settings", active: false },
];

const knowledgeItems = [
    { title: "Turbine Maintenance SOP v4.2", type: "Document", confidence: 97, status: "Validated" },
    { title: "Safety Protocol Override Procedure", type: "Expert Note", confidence: 94, status: "Reviewed" },
    { title: "Q3 Compliance Audit Findings", type: "Report", confidence: 99, status: "Validated" },
    { title: "Field Inspection Checklist B-7", type: "Schema", confidence: 91, status: "Pending" },
];

const activityItems = [
    { user: "S", name: "Sarah Chen", action: "validated 3 knowledge entries", time: "2m ago", color: "#38b6ff" },
    { user: "M", name: "Mike Torres", action: "added expert insight on turbine ops", time: "5m ago", color: "#a78bfa" },
    { user: "A", name: "Anna Weber", action: "queried compliance protocol", time: "12m ago", color: "#34d399" },
];

export default function DashboardMockup({ className = "" }: { className?: string }) {
    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-[#38b6ff]/[0.04] blur-[60px] rounded-full pointer-events-none" />

            {/* Main window */}
            <div className="relative glass-card-strong rounded-2xl overflow-hidden glow-border shadow-2xl shadow-black/50">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f2937]/80 bg-[#0b0f14]/60">
                    <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-[#ef4444]/60" />
                        <div className="size-2.5 rounded-full bg-[#f59e0b]/60" />
                        <div className="size-2.5 rounded-full bg-[#22c55e]/60" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="px-4 py-1 rounded-md bg-[#111827]/80 border border-[#1f2937]/50 text-[10px] text-[#6b7280] font-medium">
                            app.conqrknowledge.com/dashboard
                        </div>
                    </div>
                    <div className="w-12" />
                </div>

                {/* Body */}
                <div className="flex min-h-[380px] md:min-h-[420px]">
                    {/* Sidebar */}
                    <div className="hidden md:flex w-48 flex-col border-r border-[#1f2937]/60 bg-[#0b0f14]/40 py-4 px-3">
                        <div className="flex items-center gap-2 px-2 mb-6">
                            <div className="size-6 rounded-lg bg-[#38b6ff]/20 flex items-center justify-center">
                                <div className="size-2.5 rounded-sm bg-[#38b6ff]" />
                            </div>
                            <span className="text-[11px] font-bold text-white tracking-tight">ConqrKnowledge</span>
                        </div>
                        <div className="space-y-1">
                            {sidebarItems.map((item) => (
                                <div
                                    key={item.label}
                                    className={`px-3 py-2 rounded-lg text-[11px] font-medium transition-all ${
                                        item.active
                                            ? 'bg-[#38b6ff]/10 text-[#38b6ff] border border-[#38b6ff]/20'
                                            : 'text-[#6b7280] hover:text-[#9ca3af]'
                                    }`}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                        {/* Storage indicator */}
                        <div className="mt-auto px-2 pt-4 border-t border-[#1f2937]/40">
                            <div className="text-[9px] text-[#6b7280] font-medium mb-1.5">Storage Used</div>
                            <div className="h-1.5 rounded-full bg-[#1f2937] overflow-hidden">
                                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#38b6ff] to-[#38b6ff]/60" />
                            </div>
                            <div className="text-[9px] text-[#6b7280] mt-1">2.4 GB / 5 GB</div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-4 md:p-5 overflow-hidden">
                        {/* Top bar */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <div className="text-sm font-bold text-white">Knowledge Dashboard</div>
                                <div className="text-[10px] text-[#6b7280] font-medium">Real-time enterprise intelligence</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1f2937]/60 text-[10px] text-[#6b7280] font-medium flex items-center gap-2 min-w-[180px]">
                                    <svg className="size-3 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    Search knowledge base...
                                </div>
                                <div className="size-7 rounded-lg bg-[#38b6ff]/10 flex items-center justify-center">
                                    <div className="size-1.5 rounded-full bg-[#38b6ff]" />
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-4 gap-3 mb-4">
                            {[
                                { label: "Total Documents", value: "2,847", change: "+12%", color: "#38b6ff" },
                                { label: "AI Accuracy", value: "98.6%", change: "+2.3%", color: "#34d399" },
                                { label: "Expert Reviews", value: "1,234", change: "+8%", color: "#a78bfa" },
                                { label: "Active Users", value: "156", change: "+15%", color: "#f59e0b" },
                            ].map((stat) => (
                                <div key={stat.label} className="rounded-xl bg-[#0b0f14]/60 border border-[#1f2937]/40 p-3">
                                    <div className="text-[9px] text-[#6b7280] font-medium mb-1">{stat.label}</div>
                                    <div className="flex items-end gap-1.5">
                                        <span className="text-lg font-black text-white leading-none">{stat.value}</span>
                                        <span className="text-[9px] font-semibold leading-none mb-0.5" style={{ color: stat.color }}>{stat.change}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Two-column layout */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                            {/* Knowledge list */}
                            <div className="md:col-span-3 rounded-xl bg-[#0b0f14]/40 border border-[#1f2937]/40 overflow-hidden">
                                <div className="px-3 py-2.5 border-b border-[#1f2937]/40 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Recent Knowledge</span>
                                    <span className="text-[9px] text-[#38b6ff] font-semibold">View all</span>
                                </div>
                                <div className="divide-y divide-[#1f2937]/30">
                                    {knowledgeItems.map((item) => (
                                        <div key={item.title} className="px-3 py-2.5 flex items-center gap-3 hover:bg-[#111827]/30 transition-colors">
                                            <div className="size-7 rounded-lg bg-[#38b6ff]/8 flex items-center justify-center text-[9px] font-bold text-[#38b6ff]">
                                                {item.type.charAt(0)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[11px] font-semibold text-white truncate">{item.title}</div>
                                                <div className="text-[9px] text-[#6b7280]">{item.type}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[10px] font-bold text-white">{item.confidence}%</div>
                                                <div className={`text-[8px] font-semibold ${item.status === 'Validated' ? 'text-[#34d399]' : item.status === 'Reviewed' ? 'text-[#38b6ff]' : 'text-[#f59e0b]'}`}>
                                                    {item.status}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Activity feed */}
                            <div className="md:col-span-2 rounded-xl bg-[#0b0f14]/40 border border-[#1f2937]/40 overflow-hidden">
                                <div className="px-3 py-2.5 border-b border-[#1f2937]/40">
                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live Activity</span>
                                </div>
                                <div className="p-3 space-y-3">
                                    {activityItems.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5">
                                            <div
                                                className="size-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
                                                style={{ backgroundColor: `${item.color}25`, color: item.color }}
                                            >
                                                {item.user}
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-[#e5e7eb]">
                                                    <span className="font-semibold">{item.name}</span>{" "}
                                                    <span className="text-[#6b7280]">{item.action}</span>
                                                </div>
                                                <div className="text-[8px] text-[#6b7280] mt-0.5">{item.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mini graph */}
                                <div className="px-3 pb-3">
                                    <div className="rounded-lg bg-[#111827]/40 border border-[#1f2937]/30 p-2.5">
                                        <div className="text-[9px] text-[#6b7280] font-medium mb-2">Queries (7d)</div>
                                        <div className="flex items-end gap-1 h-10">
                                            {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                                                <div key={i} className="flex-1 rounded-sm bg-[#38b6ff]/20 relative overflow-hidden" style={{ height: `${h}%` }}>
                                                    <div className="absolute bottom-0 inset-x-0 rounded-sm bg-[#38b6ff]/60" style={{ height: '40%' }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute -bottom-8 inset-x-0 h-20 bg-gradient-to-t from-[#0b0f14] to-transparent pointer-events-none" />
        </motion.div>
    );
}
