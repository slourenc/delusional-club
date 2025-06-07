'use client';

import { useState, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqItems = [
    {
      question: "SHIPPING INFORMATION",
      answer: "Worldwide shipping available. Standard delivery 5-7 business days. Express delivery 2-3 business days. All packages tracked and insured."
    },
    {
      question: "SIZING GUIDANCE",
      answer: "Refer to our size chart for accurate measurements. If between sizes, we recommend sizing up. Contact us for specific fit questions."
    },
    {
      question: "RETURN POLICY",
      answer: "30-day return window for unworn items with original tags. Customer responsible for return shipping unless item is defective."
    },
    {
      question: "PAYMENT METHODS",
      answer: "We accept all major credit cards, PayPal, and selected cryptocurrency payments. All transactions secured with SSL encryption."
    },
    {
      question: "PRODUCT AUTHENTICITY",
      answer: "All items are 100% authentic DELUSIONAL CLUB merchandise. Each item includes authenticity verification upon request."
    },
    {
      question: "BULK ORDERS",
      answer: "Contact us directly for bulk orders over 10 items. Special pricing and customization options available for qualified orders."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Contact Header */}
        <div className="text-center mb-12">
          <div className="winxp-window px-6 py-3 mb-6 inline-block">
            <h1 className="text-3xl md:text-4xl font-bold font-mono text-red-400 uppercase">
              SECURE CONTACT
            </h1>
          </div>
          <p className="font-mono text-sm text-gray-300 max-w-2xl mx-auto">
            ENCRYPTED COMMUNICATION CHANNEL - ALL TRANSMISSIONS MONITORED
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Connection Status */}
            <div className="winxp-window p-4">
              <h3 className="font-mono text-sm text-red-400 mb-3 uppercase">CONNECTION STATUS</h3>
              <div className="font-mono text-xs text-gray-300 space-y-1">
                <p>SERVER: OPERATIONAL</p>
                <p>ENCRYPTION: AES-256</p>
                <p>LOCATION: CLASSIFIED</p>
                <p>UPTIME: 99.97%</p>
                <p suppressHydrationWarning>
                  LAST PING: {isLoaded ? new Date().toLocaleTimeString() : 'CONNECTING...'}
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="winxp-window p-4">
              <h3 className="font-mono text-sm text-red-400 mb-3 uppercase">CONTACT PROTOCOLS</h3>
              <div className="space-y-3 font-mono text-xs text-gray-300">
                <div>
                  <div className="text-red-400">PRIMARY EMAIL:</div>
                  <div>contact@delusional-club.com</div>
                </div>
                <div>
                  <div className="text-red-400">BUSINESS INQUIRIES:</div>
                  <div>business@delusional-club.com</div>
                </div>
                <div>
                  <div className="text-red-400">SUPPORT:</div>
                  <div>support@delusional-club.com</div>
                </div>
                <div>
                  <div className="text-red-400">RESPONSE TIME:</div>
                  <div>24-48 HOURS</div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="winxp-window p-4">
              <h3 className="font-mono text-sm text-red-400 mb-3 uppercase">SECURITY NOTICE</h3>
              <div className="font-mono text-xs text-gray-300 space-y-2">
                <p>All communications are logged and encrypted.</p>
                <p>Do not transmit sensitive financial information via unsecured channels.</p>
                <p>Response times may vary based on inquiry complexity.</p>
                <p>Automated systems filter all incoming messages.</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="winxp-window p-6">
            <h3 className="font-mono text-sm text-red-400 mb-6 uppercase">SECURE MESSAGE TRANSMISSION</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="font-mono text-sm text-green-400 mb-2">MESSAGE TRANSMITTED</div>
                <div className="font-mono text-xs text-gray-300">
                  Your message has been encrypted and sent.<br/>
                  Expect response within 24-48 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-xs text-red-400 uppercase block mb-2">
                    IDENTIFICATION:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter identification..."
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-red-400 uppercase block mb-2">
                    CONTACT VECTOR:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter secure email..."
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-red-400 uppercase block mb-2">
                    MESSAGE TYPE:
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full"
                  >
                    <option value="general">GENERAL INQUIRY</option>
                    <option value="order">ORDER STATUS</option>
                    <option value="support">TECHNICAL SUPPORT</option>
                    <option value="business">BUSINESS PROPOSAL</option>
                    <option value="press">PRESS INQUIRY</option>
                    <option value="wholesale">WHOLESALE REQUEST</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-red-400 uppercase block mb-2">
                    ENCRYPTED MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    rows={6}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="winxp-button w-full py-3 font-mono text-sm uppercase tracking-wider"
                >
                  TRANSMIT MESSAGE
                </button>
                
                <div className="font-mono text-xs text-gray-500 text-center">
                  By submitting, you acknowledge message encryption and logging.
                </div>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-16">
          <div className="text-center mb-8">
            <div className="winxp-window px-6 py-3 mb-6 inline-block">
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-red-400 uppercase">
                KNOWLEDGE DATABASE
              </h2>
            </div>
            <p className="font-mono text-sm text-gray-300 max-w-2xl mx-auto">
              FREQUENTLY ACCESSED INFORMATION - SEARCH DATABASE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="winxp-window p-4">
                <h3 className="font-mono text-sm font-bold text-red-400 mb-3 uppercase">
                  {item.question}
                </h3>
                <p className="font-mono text-xs text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-16 text-center">
          <div className="winxp-window p-4 inline-block">
            <div className="font-mono text-xs text-red-400">
              <p>SYSTEM OPERATIONAL - ALL CHANNELS MONITORED</p>
              <p>UNAUTHORIZED ACCESS WILL BE PROSECUTED</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage; 