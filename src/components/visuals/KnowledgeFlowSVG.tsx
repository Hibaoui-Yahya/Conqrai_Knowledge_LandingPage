import { motion } from 'framer-motion';

export default function KnowledgeFlowSVG({ className = "" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="flowLine1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#38b6ff" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="pulse1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#38b6ff" stopOpacity="0" />
                        <stop offset="40%" stopColor="#38b6ff" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="pulse2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                        <stop offset="40%" stopColor="#a78bfa" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#34d399" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                    </linearGradient>
                    <filter id="flowGlow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connection line 1: Capture to Connect */}
                <motion.path
                    d="M 80 60 C 120 60, 140 60, 170 60"
                    stroke="url(#flowLine1)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                />

                {/* Connection line 2: Connect to Act */}
                <motion.path
                    d="M 230 60 C 270 60, 290 60, 320 60"
                    stroke="url(#flowLine1)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1 }}
                />

                {/* Animated pulse dot 1 */}
                <motion.circle
                    r="3"
                    fill="#38b6ff"
                    filter="url(#flowGlow)"
                    animate={{
                        cx: [80, 170],
                        cy: [60, 60],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                    }}
                />

                {/* Animated pulse dot 2 */}
                <motion.circle
                    r="3"
                    fill="#34d399"
                    filter="url(#flowGlow)"
                    animate={{
                        cx: [230, 320],
                        cy: [60, 60],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                    }}
                />

                {/* Arrow heads */}
                <motion.polygon
                    points="166,55 174,60 166,65"
                    fill="#a78bfa"
                    opacity={0.6}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                />
                <motion.polygon
                    points="316,55 324,60 316,65"
                    fill="#34d399"
                    opacity={0.6}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                />

                {/* Data particles floating up from Capture node */}
                {[0, 1, 2].map((i) => (
                    <motion.rect
                        key={`particle-${i}`}
                        x={55 + i * 15}
                        width={3}
                        height={3}
                        rx={0.5}
                        fill="#38b6ff"
                        opacity={0.4}
                        animate={{
                            y: [80, 40],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            delay: i * 0.8,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />
                ))}

                {/* Data particles connecting at Connect node */}
                {[0, 1].map((i) => (
                    <motion.circle
                        key={`connect-particle-${i}`}
                        r={2}
                        fill="#a78bfa"
                        opacity={0.4}
                        animate={{
                            cx: [185 + i * 20, 200],
                            cy: [40 + i * 40, 60],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 1.2 + 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Lightning bolt particles at Act node */}
                <motion.path
                    d="M 340 48 L 337 58 L 343 58 L 340 68"
                    stroke="#34d399"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
