import { Card, CardContent } from "@/components/ui/card";

export default function DonatePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Support Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto text-center text-blue-100">
            Your generous donation helps us empower Black communities across the UK through education, mentorship, and entrepreneurial support.
          </p>
        </div>
      </section>
      
      {/* Donation Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
            <p className="text-slate-700 mb-8">
              Your contribution, no matter the size, makes a significant impact on our ability to help individuals transition from survival to significance.
            </p>
            
            <Card className="max-w-2xl mx-auto shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">Support our mission by donating directly to RISE Pathways UK.</h3>
                
                <div className="space-y-4 mt-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p className="font-semibold text-slate-700">Bank Name:</p>
                    <p>The Co-operative Bank</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p className="font-semibold text-slate-700">Account Name:</p>
                    <p>Pathways to Empower UK</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p className="font-semibold text-slate-700">Sort Code:</p>
                    <p>08-92-50</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p className="font-semibold text-slate-700">Account Number:</p>
                    <p>63338939</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p className="font-semibold text-slate-700">Reference:</p>
                    <p>[Your Name or Purpose]</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center text-slate-600 border-t border-slate-200 pt-6">
                  <p>
                    If you'd like a receipt or confirmation of your donation, please email us at 
                    <a href="mailto:donations@risepathwaysuk.org" className="text-blue-600 hover:underline ml-1">
                      donations@pteuk.org
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
            <p className="text-slate-700">
              Here's how your donation can make a difference in the lives of those we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full inline-flex mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">£25</h3>
                <p className="text-slate-600">
                  Provides career coaching materials for one RESET program participant
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-indigo-100 p-3 rounded-full inline-flex mx-auto mb-4">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">£100</h3>
                <p className="text-slate-600">
                  Sponsors a business planning workshop for five aspiring entrepreneurs
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-green-100 p-3 rounded-full inline-flex mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">£500</h3>
                <p className="text-slate-600">
                  Funds a complete 8-week mentorship program for a young professional
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Thank You Message */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Thank You for Your Support</h2>
          <p className="text-xl mb-8 text-blue-100">
            Every donation helps us build stronger communities and create pathways to prosperity for Black individuals across the UK.
          </p>
        </div>
      </section>
    </div>
  );
}