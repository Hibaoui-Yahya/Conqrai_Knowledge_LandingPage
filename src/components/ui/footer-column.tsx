import { Sms, Location, Call } from 'iconsax-react';

const data = {
    contact: {
        email: 'hello@conqrai.com',
        phone: '+1 866 316-8665',
        address: 'Montreal, Canada',
    },
    company: {
        name: 'Conqrai',
        description:
            'We transform documents, data, and human expertise into a single intelligent system, giving your teams clarity, continuity, and decision power.',
    },
    links: {
        company: [
            { text: 'ConqrAI Pages', href: '#' },
        ],
        solutions: [
            { text: 'ConqrKnowledge', href: 'https://app.conqrknowledge.com' },
            { text: 'ConqrOCR', href: 'https://app.conqrocr.com/' },
            { text: 'ConqrTopTalent', href: '#' },
        ],
        compliance: [
            { text: 'Data Compliance', href: '#' },
            { text: 'Data Security', href: '#' },
            { text: 'Access Control', href: '#' },
        ],
        footer: [
            { text: 'Privacy Policy', href: '#' },
            { text: 'Terms of Use', href: '#' },
        ]
    }
};

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const socialLinks = [
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/conqrai' },
];

export default function Footer4Col() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0b0f14] border-t border-[#1f2937]/60 w-full">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-20">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-xs">
                        <div className="flex items-center">
                            <img src="/dark_mode_logo-removebg-preview.png" alt="Conqrai Logo" className="h-9 w-auto" />
                        </div>

                        <p className="text-[#9ca3af] mt-6 leading-relaxed text-[14px] font-medium">
                            {data.company.description}
                        </p>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 text-[#9ca3af] text-sm font-medium">
                                <Sms className="size-4 text-[#38b6ff]" variant="TwoTone" />
                                <a href={`mailto:${data.contact.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#38b6ff] transition-colors">{data.contact.email}</a>
                            </div>
                            <div className="flex items-center gap-3 text-[#9ca3af] text-sm font-medium">
                                <Call className="size-4 text-[#38b6ff]" variant="TwoTone" />
                                <a href={`tel:${data.contact.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#38b6ff] transition-colors">{data.contact.phone}</a>
                            </div>
                            <div className="flex items-center gap-3 text-[#9ca3af] text-sm font-medium">
                                <Location className="size-4 text-[#38b6ff]" variant="TwoTone" />
                                <span>{data.contact.address}</span>
                            </div>
                        </div>

                        <ul className="mt-8 flex gap-3">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex size-10 items-center justify-center rounded-xl glass-card-strong text-[#9ca3af] hover:text-[#38b6ff] hover:border-[#38b6ff]/30 transition-all"
                                    >
                                        <span className="sr-only">{label}</span>
                                        <Icon className="size-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 flex-1 max-w-2xl">
                        <div>
                            <p className="text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.2em] mb-8">Company</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.company.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#38b6ff] transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.2em] mb-8">Solutions</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.solutions.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#38b6ff] transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[12px] font-bold text-[#e5e7eb] uppercase tracking-[0.2em] mb-8">Compliance</p>
                            <ul className="space-y-4 text-sm">
                                {data.links.compliance.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#38b6ff] transition-colors font-medium">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-[#1f2937]/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2">
                        <p className="text-[13px] font-bold text-[#6b7280] tracking-tight uppercase">
                            &copy; {currentYear} {data.company.name}. All rights reserved.
                        </p>
                        {data.links.footer.map((link) => (
                            <a
                                key={link.text}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12px] font-bold text-[#6b7280] hover:text-[#38b6ff] transition-colors uppercase tracking-widest"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#6b7280]">
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
