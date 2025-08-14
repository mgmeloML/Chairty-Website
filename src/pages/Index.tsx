import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Helping Black Excellence <span className="text-blue-600">Rise</span> <br />
                <span className="text-3xl md:text-4xl">From Surviving to Thriving</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0">
                We empower Black minority individuals in the UK to break barriers, transform careers, launch businesses, and give back to uplift others.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/get-involved">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg w-full sm:w-auto">
                    Join a Program
                  </Button>
                </Link>
                <Link to="/get-involved">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-6 text-lg w-full sm:w-auto">
                    Become a Mentor
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="secondary" className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-6 text-lg w-full sm:w-auto">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Empowered professionals"
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="RISE Pathways community"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-600">We are Pathways to Empower UK</h2>
              <p className="text-lg text-slate-700">
                A charity led by purpose and powered by community. We support Black individuals who want to reinvent careers, start businesses, break the cycle of poverty, or mentor others to rise.
              </p>
              <Link to="/about">
                <Button variant="link" className="text-blue-600 p-0 flex items-center group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Programs (The "Empowering Pathways")</h2>
            <p className="text-slate-700">Each program reflects a stage of growth and empowerment:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RESET Program */}
            <Card className="bg-white border-t-4 border-t-blue-400 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-blue-600">RESET</h3>
                </div>
                <p className="text-slate-600 mb-4">For those stuck in unfulfilling or unsuitable careers</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="mr-2 bg-blue-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Career coaching
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-blue-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Skills assessments
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-blue-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Transition roadmaps
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* RISE UP Program */}
            <Card className="bg-white border-t-4 border-t-indigo-400 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-indigo-600">RISE UP</h3>
                </div>
                <p className="text-slate-600 mb-4">For aspiring entrepreneurs</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="mr-2 bg-indigo-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Business planning workshops
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-indigo-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Mentorship and strategy support
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-indigo-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Access to startup tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* REACH Program */}
            <Card className="bg-white border-t-4 border-t-green-400 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-green-600">REACH</h3>
                </div>
                <p className="text-slate-600 mb-4">For professionals or entrepreneurs looking to grow</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="mr-2 bg-green-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Leadership development
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-green-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Scaling strategy
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-green-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Investment readiness support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* RENEW Program */}
            <Card className="bg-white border-t-4 border-t-purple-400 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-purple-600">RENEW</h3>
                </div>
                <p className="text-slate-600 mb-4">For those breaking cycles of poverty and disempowerment</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="mr-2 bg-purple-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Financial literacy training
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-purple-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Mindset transformation
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-purple-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Community empowerment circles
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* RETURN Program */}
            <Card className="bg-white border-t-4 border-t-red-400 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-red-600">RETURN</h3>
                </div>
                <p className="text-slate-600 mb-4">For high achievers who want to give back</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="mr-2 bg-red-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Mentoring pathways
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-red-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Guest speaker opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-red-100 rounded-full p-1">
                      <svg className="h-3 w-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Community investment opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Guiding Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <p className="font-semibold text-blue-600">Empowerment</p>
                <p className="text-slate-600 text-sm">Not charity, but capacity-building</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <p className="font-semibold text-blue-600">Excellence</p>
                <p className="text-slate-600 text-sm">We raise the bar</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <p className="font-semibold text-blue-600">Equity</p>
                <p className="text-slate-600 text-sm">Tackling root causes, not symptoms</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <p className="font-semibold text-blue-600">Integrity</p>
                <p className="text-slate-600 text-sm">Transparent, accountable, purpose-driven</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <p className="font-semibold text-blue-600">Legacy</p>
                <p className="text-slate-600 text-sm">Success that multiplies and sustains</p>
              </div>
            </div>
            <Link to="/programs" className="mt-8 inline-block">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonials & Impact</h2>
            <p className="text-slate-700">Hear from those whose lives have been transformed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
              <svg className="h-10 w-10 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg mb-6">
                "RISE Pathway UK gave me the courage and clarity to change careers at 40. I now run my own consultancy."
              </p>
              <p className="font-semibold">— Dayo, London</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
              <svg className="h-10 w-10 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg mb-6">
                "I had the vision. They gave me the structure. Now my side hustle is my main business."
              </p>
              <p className="font-semibold">— Amina, Birmingham</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're starting out, scaling up, or ready to give back — there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg">
                Get Involved
              </Button>
            </Link>
            <Link to="/donate">
              <Button className="bg-slate-800 hover:bg-slate-900 px-8 py-6 text-lg">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}