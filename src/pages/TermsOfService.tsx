export default function TermsOfServicePage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Terms of Service</h1>
        
        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            By using this website, you agree to the following terms:
          </p>
          
          <div className="space-y-6 mt-6">
            <div className="border-l-4 border-blue-600 pl-4 py-1">
              <p className="text-slate-700 leading-relaxed">
                All content provided on this site is for informational purposes only.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-1">
              <p className="text-slate-700 leading-relaxed">
                Participation in our programs is subject to eligibility and availability.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-1">
              <p className="text-slate-700 leading-relaxed">
                Donations are voluntary and non-refundable.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-1">
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to update or modify these terms at any time.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-1">
              <p className="text-slate-700 leading-relaxed">
                Continued use of the site signifies acceptance of these terms.
              </p>
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed mt-6">
            For more information, contact us at{" "}
            <a 
              href="mailto:info@pteuk.org" 
              className="text-blue-600 hover:underline"
            >
              info@pteuk.org
            </a>
          </p>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Website Usage</h2>
            <p className="text-slate-700 leading-relaxed">
              The content of this website is for general information purposes only. While we 
              strive to keep the information up to date and correct, we make no representations 
              or warranties of any kind, express or implied, about the completeness, accuracy, 
              reliability, suitability or availability with respect to the website or the information, 
              products, services, or related graphics contained on the website for any purpose.
            </p>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed">
              This website contains material which is owned by or licensed to us. This material includes, 
              but is not limited to, the design, layout, look, appearance and graphics. Reproduction is 
              prohibited other than in accordance with the copyright notice, which forms part of these terms 
              and conditions.
            </p>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">External Links</h2>
            <p className="text-slate-700 leading-relaxed">
              Our website may contain links to other websites of interest. However, once you have used these 
              links to leave our site, you should note that we do not have any control over that other website. 
              Therefore, we cannot be responsible for the protection and privacy of any information which you 
              provide while visiting such sites.
            </p>
          </div>
          
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the 
              United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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