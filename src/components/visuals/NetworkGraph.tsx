import { motion } from 'framer-motion';

const nodes = [
    { x: 50, y: 30, r: 6, label: "SOPs", color: "#38b6ff" },
    { x: 20, y: 50, r: 5, label: "Reports", color: "#a78bfa" },
    { x: 80, y: 45, r: 7, label: "Expert Notes", color: "#34d399" },
    { x: 35, y: 75, r: 5, label: "Schemas", color: "#f59e0b" },
    { x: 65, y: 70, r: 6, label: "Decisions", color: "#ec4899" },
    { x: 50, y: 50, r: 10, label: "Knowledge", color: "#38b6ff" },
    { x: 15, y: 25, r: 4, color: "#38b6ff" },
    { x: 85, y: 20, r: 4, color: "#a78bfa" },
    { x: 10, y: 70, r: 3, color: "#34d399" },
    { x: 90, y: 75, r: 3, color: "#f59e0b" },
    { x: 40, y: 15, r: 3, color: "#ec4899" },
    { x: 70, y: 20, r: 3.5, color: "#38b6ff" },
    { x: 25, y: 90, r: 3, color: "#a78bfa" },
    { x: 75, y: 90, r: 3, color: "#34d399" },
];

const edges = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5],
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 4],
    [6, 0], [6, 1], [7, 0], [7, 2],
    [8, 1], [8, 3], [9, 2], [9, 4],
    [10, 0], [11, 2], [12, 3], [13, 4],
];

export default function NetworkGraph({ className = "" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#38b6ff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#38b6ff" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Edges */}
                {edges.map(([from, to], idx) => (
                    <motion.line
                        key={`edge-${idx}`}
                        x1={nodes[from].x}
                        y1={nodes[from].y}
                        x2={nodes[to].x}
                        y2={nodes[to].y}
                        stroke={nodes[from].color}
                        strokeOpacity={0.15}
                        strokeWidth={0.3}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.04, duration: 0.8 }}
                    />
                ))}

                {/* Animated pulses along edges */}
                {[0, 2, 4, 6, 8].map((edgeIdx) => {
                    const [from, to] = edges[edgeIdx];
                    return (
                        <motion.circle
                            key={`pulse-${edgeIdx}`}
                            r={0.8}
                            fill={nodes[from].color}
                            filter="url(#glow)"
                            initial={{ opacity: 0 }}
                            animate={{
                                cx: [nodes[from].x, nodes[to].x],
                                cy: [nodes[from].y, nodes[to].y],
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{
                                duration: 3,
                                delay: edgeIdx * 0.6,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node, idx) => (
                    <motion.g key={`node-${idx}`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.06, duration: 0.5, type: "spring" }}
                    >
                        {/* Glow */}
                        <circle cx={node.x} cy={node.y} r={node.r * 2.5} fill={node.color} opacity={0.06} />
                        {/* Node */}
                        <circle cx={node.x} cy={node.y} r={node.r} fill={node.color} opacity={0.2} />
                        <circle cx={node.x} cy={node.y} r={node.r * 0.6} fill={node.color} opacity={0.6} />
                        {/* Label */}
                        {node.label && (
                            <text
                                x={node.x}
                                y={node.y + node.r + 3.5}
                                textAnchor="middle"
                                fill="#9ca3af"
                                fontSize={2.5}
                                fontWeight={600}
                                fontFamily="Inter, sans-serif"
                            >
                                {node.label}
                            </text>
                        )}
                    </motion.g>
                ))}

                {/* Center pulsing ring */}
                <motion.circle
                    cx={50} cy={50} r={14}
                    stroke="#38b6ff"
                    strokeWidth={0.3}
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.3, 0.1], r: [14, 17, 14] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
