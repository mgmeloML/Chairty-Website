import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-800 py-20 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto text-center text-slate-300">
            Structured pathways designed to help individuals at every stage of their journey from survival to significance.
          </p>
        </div>
      </section>
      
      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">The RISE Pathways</h2>
            <p className="text-slate-700 text-lg">
              Each program is designed to meet individuals where they are and help them take their next step toward prosperity and impact.
            </p>
          </div>
          
          <Tabs defaultValue="reset" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="reset" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800">
                RESET
              </TabsTrigger>
              <TabsTrigger value="riseup" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800">
                RISE UP
              </TabsTrigger>
              <TabsTrigger value="reach" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
                REACH
              </TabsTrigger>
              <TabsTrigger value="renew" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800">
                RENEW
              </TabsTrigger>
              <TabsTrigger value="return" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-800">
                RETURN
              </TabsTrigger>
            </TabsList>
            
            {/* RESET Program */}
            <TabsContent value="reset">
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-700">RESET: Career Reinvention</CardTitle>
                      <CardDescription>For those stuck in careers that don't reflect their values or strengths</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">Program Description</h3>
                      <p className="text-slate-700 mb-4">
                        The RESET program helps individuals who feel trapped or unfulfilled in their current career path to discover and transition to work that better aligns with their talents, values, and aspirations.
                      </p>
                      <p className="text-slate-700 mb-4">
                        Through personalized coaching, skills assessment, and structured planning, participants gain the confidence and clarity to make meaningful career changes.
                      </p>
                      <div className="mt-6">
                        <Link to="/get-involved">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Apply For This Program
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">What You'll Get</h3>
                      <ul className="space-y-4">
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-blue-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Personal coaching</span>
                            <span className="text-slate-600 text-sm">
                              One-on-one sessions with experienced career coaches who understand the unique challenges faced by Black professionals
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-blue-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Skills audits</span>
                            <span className="text-slate-600 text-sm">
                              Professional assessment of your transferable skills, hidden talents, and potential growth areas
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-blue-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Transition roadmaps</span>
                            <span className="text-slate-600 text-sm">
                              Personalized step-by-step plans to guide you from your current situation to your desired career path
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* RISE UP Program */}
            <TabsContent value="riseup">
              <Card className="border-indigo-200">
                <CardHeader className="bg-indigo-50">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-indigo-700">RISE UP: Business Launch Support</CardTitle>
                      <CardDescription>For aspiring entrepreneurs who need guidance turning an idea into a real business</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">Program Description</h3>
                      <p className="text-slate-700 mb-4">
                        The RISE UP program empowers aspiring entrepreneurs with the knowledge, connections, and strategies needed to transform business ideas into viable enterprises.
                      </p>
                      <p className="text-slate-700 mb-4">
                        Through structured workshops, expert mentorship, and access to essential tools, participants will navigate the journey from concept to launch with confidence.
                      </p>
                      <div className="mt-6">
                        <Link to="/get-involved">
                          <Button className="bg-indigo-600 hover:bg-indigo-700">
                            Apply For This Program
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">What You'll Get</h3>
                      <ul className="space-y-4">
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-indigo-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Business planning workshops</span>
                            <span className="text-slate-600 text-sm">
                              Interactive sessions covering market research, business models, pricing strategies, and more
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-indigo-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Access to mentors</span>
                            <span className="text-slate-600 text-sm">
                              Connection to successful entrepreneurs who understand the specific challenges faced by Black business owners
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-indigo-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Funding pathway guidance</span>
                            <span className="text-slate-600 text-sm">
                              Information on grants, loans, angel investment, and other funding options specifically available for underrepresented entrepreneurs
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* REACH Program */}
            <TabsContent value="reach">
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-green-700">REACH: Scaling for Success</CardTitle>
                      <CardDescription>For professionals or business owners who are doing well but want to do better</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">Program Description</h3>
                      <p className="text-slate-700 mb-4">
                        The REACH program helps established professionals and business owners elevate their impact, expand their operations, and achieve the next level of success.
                      </p>
                      <p className="text-slate-700 mb-4">
                        Through advanced leadership training, strategic guidance, and connection to investment opportunities, participants will build the foundation for sustainable growth and generational success.
                      </p>
                      <div className="mt-6">
                        <Link to="/get-involved">
                          <Button className="bg-green-600 hover:bg-green-700">
                            Apply For This Program
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">What You'll Get</h3>
                      <ul className="space-y-4">
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-green-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Leadership development</span>
                            <span className="text-slate-600 text-sm">
                              Advanced training in strategic thinking, team management, and sustainable growth principles
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-green-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Growth strategy coaching</span>
                            <span className="text-slate-600 text-sm">
                              Expert guidance on scaling operations, optimizing processes, and expanding market reach
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-green-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Investment-readiness support</span>
                            <span className="text-slate-600 text-sm">
                              Preparation for seeking growth capital, including valuation guidance, pitch development, and investor connections
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* RENEW Program */}
            <TabsContent value="renew">
              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-purple-700">RENEW: Breaking the Chains</CardTitle>
                      <CardDescription>For those trapped in cycles of financial struggle</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">Program Description</h3>
                      <p className="text-slate-700 mb-4">
                        The RENEW program addresses both the practical and psychological aspects of financial empowerment, helping participants break free from cycles of dependency and build sustainable prosperity.
                      </p>
                      <p className="text-slate-700 mb-4">
                        Through financial education, mindset transformation, and community support, participants develop the tools and confidence to take control of their economic future.
                      </p>
                      <div className="mt-6">
                        <Link to="/get-involved">
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            Apply For This Program
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">What You'll Get</h3>
                      <ul className="space-y-4">
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-purple-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Financial literacy</span>
                            <span className="text-slate-600 text-sm">
                              Practical education on budgeting, saving, debt management, and building credit in a culturally relevant context
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-purple-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Wealth-building habits</span>
                            <span className="text-slate-600 text-sm">
                              Development of sustainable practices that build financial security and create intergenerational wealth
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-purple-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Confidence restoration</span>
                            <span className="text-slate-600 text-sm">
                              Tools to overcome limiting beliefs and develop a mindset of abundance and possibility
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* RETURN Program */}
            <TabsContent value="return">
              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-red-700">RETURN: Mentorship & Giving Back</CardTitle>
                      <CardDescription>For those doing well and want to lift others up</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">Program Description</h3>
                      <p className="text-slate-700 mb-4">
                        The RETURN program creates structured pathways for successful individuals to give back to their communities, multiplying their personal success into collective transformation.
                      </p>
                      <p className="text-slate-700 mb-4">
                        Through mentorship training, speaking opportunities, and impact investment guidance, participants can leverage their expertise, networks, and resources to uplift others.
                      </p>
                      <div className="mt-6">
                        <Link to="/get-involved">
                          <Button className="bg-red-600 hover:bg-red-700">
                            Apply For This Program
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-slate-800">What You'll Get</h3>
                      <ul className="space-y-4">
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-red-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">A structured giving-back platform</span>
                            <span className="text-slate-600 text-sm">
                              Organized opportunities to mentor participants in our other programs based on your expertise and availability
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-red-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Speaking opportunities</span>
                            <span className="text-slate-600 text-sm">
                              Platforms to share your journey, insights, and expertise with those who can benefit from your experience
                            </span>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="mr-3 mt-1 bg-red-100 rounded-full p-1">
                            <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold block">Community investment options</span>
                            <span className="text-slate-600 text-sm">
                              Guidance on impactful ways to invest financially in businesses and initiatives that align with your values and vision for community empowerment
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8">
            Whether you're looking to transform your career, launch a business, or give back to your community, we have a pathway designed for you.
          </p>
          <Link to="/get-involved">
            <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg">
              Apply for a Program
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}