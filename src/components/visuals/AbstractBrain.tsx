import { motion } from 'framer-motion';

const synapses = [
    { x1: 50, y1: 50, x2: 30, y2: 25, color: "#38b6ff" },
    { x1: 50, y1: 50, x2: 70, y2: 25, color: "#a78bfa" },
    { x1: 50, y1: 50, x2: 25, y2: 55, color: "#34d399" },
    { x1: 50, y1: 50, x2: 75, y2: 55, color: "#f59e0b" },
    { x1: 50, y1: 50, x2: 35, y2: 80, color: "#ec4899" },
    { x1: 50, y1: 50, x2: 65, y2: 80, color: "#38b6ff" },
    { x1: 30, y1: 25, x2: 15, y2: 15, color: "#38b6ff" },
    { x1: 70, y1: 25, x2: 85, y2: 15, color: "#a78bfa" },
    { x1: 25, y1: 55, x2: 10, y2: 60, color: "#34d399" },
    { x1: 75, y1: 55, x2: 90, y2: 60, color: "#f59e0b" },
    { x1: 35, y1: 80, x2: 20, y2: 90, color: "#ec4899" },
    { x1: 65, y1: 80, x2: 80, y2: 90, color: "#38b6ff" },
    { x1: 30, y1: 25, x2: 70, y2: 25, color: "#a78bfa" },
    { x1: 25, y1: 55, x2: 75, y2: 55, color: "#34d399" },
    { x1: 35, y1: 80, x2: 65, y2: 80, color: "#ec4899" },
];

const outerNodes = [
    { cx: 15, cy: 15, r: 2.5 },
    { cx: 85, cy: 15, r: 2.5 },
    { cx: 10, cy: 60, r: 2 },
    { cx: 90, cy: 60, r: 2 },
    { cx: 20, cy: 90, r: 2 },
    { cx: 80, cy: 90, r: 2 },
];

const innerNodes = [
    { cx: 30, cy: 25, r: 3.5, color: "#38b6ff" },
    { cx: 70, cy: 25, r: 3.5, color: "#a78bfa" },
    { cx: 25, cy: 55, r: 3, color: "#34d399" },
    { cx: 75, cy: 55, r: 3, color: "#f59e0b" },
    { cx: 35, cy: 80, r: 3, color: "#ec4899" },
    { cx: 65, cy: 80, r: 3, color: "#38b6ff" },
];

export default function AbstractBrain({ className = "" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 100 105" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <radialGradient id="brainCenter" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#38b6ff" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#38b6ff" stopOpacity="0" />
                    </radialGradient>
                    <filter id="brainGlow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central glow */}
                <circle cx="50" cy="50" r="35" fill="url(#brainCenter)" />

                {/* Orbiting rings */}
                <motion.ellipse
                    cx="50" cy="50" rx="30" ry="20"
                    stroke="#38b6ff" strokeWidth="0.3" fill="none" opacity="0.15"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                />
                <motion.ellipse
                    cx="50" cy="50" rx="25" ry="35"
                    stroke="#a78bfa" strokeWidth="0.3" fill="none" opacity="0.1"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                />

                {/* Synapses (connections) */}
                {synapses.map((s, idx) => (
                    <motion.line
                        key={`synapse-${idx}`}
                        x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
                        stroke={s.color}
                        strokeWidth="0.4"
                        strokeOpacity={0.2}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.6 }}
                    />
                ))}

                {/* Pulse along synapses */}
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                    <motion.circle
                        key={`pulse-${idx}`}
                        r={1}
                        fill={synapses[idx].color}
                        filter="url(#brainGlow)"
                        animate={{
                            cx: [synapses[idx].x1, synapses[idx].x2],
                            cy: [synapses[idx].y1, synapses[idx].y2],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 2,
                            delay: idx * 0.5,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Inner nodes */}
                {innerNodes.map((n, idx) => (
                    <motion.g key={`inner-${idx}`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
                    >
                        <circle cx={n.cx} cy={n.cy} r={n.r * 2} fill={n.color} opacity={0.08} />
                        <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color} opacity={0.25} />
                        <circle cx={n.cx} cy={n.cy} r={n.r * 0.5} fill={n.color} opacity={0.7} />
                    </motion.g>
                ))}

                {/* Outer nodes */}
                {outerNodes.map((n, idx) => (
                    <motion.circle
                        key={`outer-${idx}`}
                        cx={n.cx} cy={n.cy} r={n.r}
                        fill="#38b6ff" opacity={0.15}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.08 }}
                    />
                ))}

                {/* Center core */}
                <motion.circle
                    cx="50" cy="50" r="8"
                    fill="#38b6ff" opacity={0.08}
                    animate={{ r: [8, 10, 8], opacity: [0.08, 0.15, 0.08] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="50" cy="50" r="5"
                    fill="#38b6ff" opacity={0.15}
                    animate={{ r: [5, 6, 5], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="50" cy="50" r="3" fill="#38b6ff" opacity={0.5} />
                <circle cx="50" cy="50" r="1.5" fill="#ffffff" opacity={0.8} />
            </svg>
        </div>
    );
}
