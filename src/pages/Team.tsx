import { Card, CardContent } from "@/components/ui/card";

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our People</h1>
          <p className="text-xl max-w-3xl mx-auto text-center text-slate-300">
            Meet the dedicated leaders behind RISE Pathways UK who bring expertise, passion, and commitment to our mission.
          </p>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {/* James Ogundele */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-blue-600 p-8 text-white flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2">James Ogundele</h2>
                    <p className="text-blue-100 mb-4">Founder & Executive Director, RISE Pathways UK</p>
                    <p className="text-sm text-blue-100">FCA (Nigeria), AFA MIPA(UK), CertMH, DipMgt</p>
                  </div>
                  <div className="col-span-2 p-8">
                    <p className="text-slate-700 mb-4">
                      James Ogundele is a dynamic and visionary community leader, social entrepreneur, and chartered accountant with over three decades of multidisciplinary impact across finance, mental health, social advocacy, and faith-based leadership. He is the Founder and Executive Director of RISE Pathways UK, a charitable initiative dedicated to empowering Black and underrepresented communities in the UK through career reinvention, entrepreneurship, and mentorship.
                    </p>
                    <p className="text-slate-700 mb-4">
                      James holds a BSc in Management and Accounting from Obafemi Awolowo University, Nigeria, a CMI Diploma in Management from Kingston College (UK), and a TQUK Level 2 Certificate in Awareness of Mental Health Problems (RQF). He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and a member of The Institute of Financial Accountants (UK), holding current professional practice certificates from both.
                    </p>
                    <p className="text-slate-700 mb-4">
                      As the founder of JOS Accountants Ltd and other ventures, James is an accomplished entrepreneur with a deep commitment to economic inclusion, particularly within disadvantaged and minority communities. His expertise spans business start-up advisory, charity development, mentorship, faith leadership, and mental health advocacy.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg mt-6">
                      <h3 className="font-semibold mb-2">Community Impact</h3>
                      <p className="text-slate-700 mb-3">
                        James is also the Lead Pastor at RCCG New Wine Assembly, where he has spearheaded multiple award-winning community projects in partnership with institutions such as:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          Metropolitan Police Services
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          London Borough of Newham
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          North East NHS Cancer Alliance
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          Sport England
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          City Bridge Trust
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          The UK Government via the National Lottery Community Fund
                        </li>
                      </ul>
                      <h3 className="font-semibold mt-4 mb-2">Key Projects</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          Cancer screening awareness among Black communities
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          Mental health education and support
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          Physical activity and well-being promotion
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 bg-blue-100 rounded-full p-1">
                            <svg className="h-2 w-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          Support for low-income families during the cost-of-living crisis
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Florence Akinde */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-indigo-600 p-8 text-white flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2">Florence Akinde</h2>
                    <p className="text-indigo-100 mb-4">Pastor | Entrepreneur | Leadership Mentor | Property Expert</p>
                  </div>
                  <div className="col-span-2 p-8">
                    <p className="text-slate-700 mb-4">
                      Florence Akinde is a seasoned leader, faith minister, and accomplished entrepreneur with a distinguished track record of service, both in ministry and in the business sector. She currently serves as the Area Pastor of RCCG Kingdom Life Assembly Brighton (Region 3) and ministers alongside her husband as Associate Pastor at RCCG Kingdom Life Doncaster.
                    </p>
                    
                    <h3 className="font-semibold text-indigo-700 mt-6 mb-2">Educational Background</h3>
                    <p className="text-slate-700 mb-4">
                      Florence holds multiple postgraduate qualifications, including a Postgraduate Degree in Business Studies from the University of Greenwich and a Postgraduate Diploma in Hotel, Catering, and Institutional Management from Slough College of Higher Education. Her academic achievements have laid a strong foundation for her leadership in both public service and private enterprise.
                    </p>
                    
                    <h3 className="font-semibold text-indigo-700 mt-6 mb-2">Professional Experience</h3>
                    <p className="text-slate-700 mb-4">
                      Florence brings a wealth of senior management experience from the public sector. She previously served as an Area Manager for Southwark Council School Meals, and later as the Facilities Manager at Kingsdale Foundation School, where she was responsible for a budget exceeding £1.5 million. Her role included oversight of catering services, cleaning operations, facilities maintenance, and site security.
                    </p>
                    <p className="text-slate-700 mb-4">
                      It was during her time in this role that she developed a strong interest in real estate, eventually transitioning into full-time property management and entrepreneurship.
                    </p>
                    
                    <h3 className="font-semibold text-indigo-700 mt-6 mb-2">Entrepreneurial Achievements</h3>
                    <p className="text-slate-700 mb-4">
                      Florence Akinde is the Founder and Director of two thriving property businesses:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 mb-4">
                      <li>Omega Business Services Ltd (Doncaster)</li>
                      <li>Omega Property Services (London)</li>
                    </ul>
                    <p className="text-slate-700 mb-4">
                      Together, these companies generate a combined annual turnover of over £1 million, reflecting her dedication, innovation, and resilience in the competitive real estate sector. August 2025 marks 20 years of excellence in business — a milestone that affirms her long-standing success and leadership in the industry.
                    </p>
                    
                    <h3 className="font-semibold text-indigo-700 mt-6 mb-2">Faith, Leadership & Impact</h3>
                    <p className="text-slate-700">
                      Florence is not only a successful entrepreneur but also a dedicated intercessor, worship leader, and mentor to many. Her life is a powerful example of how faith, education, and enterprise can work hand-in-hand to transform lives and communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-slate-100">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Join Our Mission</h2>
          <p className="text-xl mb-8 text-slate-700">
            We're always looking for dedicated professionals, volunteers, and mentors who share our vision for empowering Black communities across the UK.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </a>
            <a href="/get-involved" className="bg-slate-800 text-white px-6 py-3 rounded-md hover:bg-slate-900 transition-colors">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}