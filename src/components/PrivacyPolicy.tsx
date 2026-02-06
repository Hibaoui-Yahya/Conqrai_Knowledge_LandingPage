import { X } from 'lucide-react';

const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-[#0b0f14] overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Privacy Policy</h1>
                    <button
                        onClick={onClose}
                        className="size-10 rounded-xl glass-card-strong flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#38b6ff]/30 transition-all cursor-pointer"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    <p className="text-sm text-[#9ca3af] font-medium">Effective Date: July 1, 2024</p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">1. Company Identification</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            This privacy policy applies to CONQrAI Inc. and its subsidiaries, located at 102-2727 Saint-Patrick, Montreal, Quebec, Canada, H3K 0A8.
                        </p>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We are committed to protecting your personal information and respecting your privacy in accordance with the Act respecting the protection of personal information in the private sector (R.S.Q., c. P-39.1) and the Anti-Spam Legislation (C-28).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Collection of Personal Information</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We collect the following information when you use our website:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 text-[#9ca3af] font-medium">
                            <li>IP address</li>
                            <li>Information about your online preferences and behaviors (via cookies)</li>
                        </ul>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We also collect the following information implicitly or expressly when you consent to provide your information:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 text-[#9ca3af] font-medium">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Use of Personal Information</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            The personal information we collect is used for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 text-[#9ca3af] font-medium">
                            <li>To provide requested services</li>
                            <li>To communicate relevant information</li>
                            <li>To contact you about our products and services</li>
                            <li>To improve our website and services</li>
                            <li>To comply with legal and regulatory obligations</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">4. Consent</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            By providing your personal information, you consent to its collection, use, and disclosure in accordance with this privacy policy. You have the right to withdraw your consent at any time, subject to legal restrictions.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">5. Disclosure of Information</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We will not disclose your personal information to third parties without your consent, except where required by law or necessary to perform a contract with you (e.g., to process a payment).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">6. Retention Period</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected or to comply with our legal obligations.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">7. Information Security</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We implement appropriate security measures to protect your personal information against loss, theft, or unauthorized access.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">8. Rights of Access and Rectification</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            You have the right to access your personal information that we hold and request its rectification if it is inaccurate or incomplete. To exercise this right, please contact us at the address provided below.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">9. Changes to this Policy</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            We reserve the right to modify this privacy policy. Any changes will be posted on our website with an updated effective date.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">10. Contact</h2>
                        <p className="text-[#9ca3af] leading-relaxed font-medium">
                            For any questions regarding this privacy policy or to exercise your rights, please contact us:
                        </p>
                        <div className="glass-card rounded-xl p-6 space-y-2">
                            <p className="text-white font-bold">Patrick Chenel - Data Protection Officer</p>
                            <p className="text-[#9ca3af] font-medium">patrick.chenel@conqrai.com</p>
                            <p className="text-[#9ca3af] font-medium">514-316-0281</p>
                            <p className="text-[#9ca3af] font-medium">102-2727 Saint-Patrick, Montreal, Quebec, Canada, H3K 0A8</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
