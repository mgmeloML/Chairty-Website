export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Privacy Policy</h1>
        
        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            At Pathways to Empower UK, we are committed to protecting your privacy and personal information. 
            We do not sell, trade, or share your personal details with third parties. Any data collected 
            through our website — including names, emails, and messages — is used solely for communication 
            and service delivery.
          </p>
          
          <p className="text-slate-700 leading-relaxed">
            We take reasonable steps to ensure data security and only collect the minimum information 
            necessary to serve you effectively. By using our website, you consent to our privacy practices.
          </p>
          
          <p className="text-slate-700 leading-relaxed">
            For any questions about this policy, contact us at{" "}
            <a 
              href="mailto:info@pteuk.org" 
              className="text-blue-600 hover:underline"
            >
              info@pteuk.org
            </a>
          </p>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed">
              We may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-slate-700">
              <li>Names and contact information</li>
              <li>Email addresses</li>
              <li>Messages sent through our contact form</li>
              <li>Information provided when applying for programs</li>
            </ul>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed">
              The information we collect is used for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-slate-700">
              <li>Responding to your inquiries</li>
              <li>Processing program applications</li>
              <li>Providing the services you request</li>
              <li>Sending updates about our organization and programs</li>
              <li>Improving our website and services</li>
            </ul>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We implement reasonable security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 
              100% secure, so we cannot guarantee absolute security.
            </p>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update our Privacy Policy from time to time. Any changes will be posted 
              on this page, and if the changes are significant, we will provide a more prominent 
              notice.
            </p>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a 
                href="mailto:info@pteuk.org" 
                className="text-blue-600 hover:underline"
              >
                info@pteuk.org
              </a>
            </p>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8 text-sm text-slate-500 text-center">
            <p>Last updated: July 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}