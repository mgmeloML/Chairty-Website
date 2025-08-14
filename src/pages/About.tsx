import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-center text-blue-100">
            Pathways to Empower UK is committed to breaking generational cycles of poverty through empowerment, education, and entrepreneurship.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Diverse team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
              <p className="text-lg text-slate-700">
                Pathways to Empower UK is a charity committed to ending generational poverty in the UK's Black communities by unlocking potential and enabling transformation — one person at a time.
              </p>
              <p className="text-lg text-slate-700">
                Founded by changemakers who understand the barriers our communities face, we exist to:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Help people change careers, not just jobs.
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Turn business dreams into sustainable enterprises.
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Take good careers to greatness.
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Break generational dependency through mindset and skills.
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Create a culture of mentorship, giving back, and rising together.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
                <p className="text-lg text-slate-700">
                  To alleviate poverty and empower Black minority individuals in the UK through practical support, mentorship, education, and entrepreneurship.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
                <p className="text-lg text-slate-700">
                  A thriving UK where Black communities lead in innovation, leadership, and prosperity — no longer defined by struggle, but by strength.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Empowerment</h3>
              <p className="text-slate-700">
                We don't do for people; we build capacity in people.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Excellence</h3>
              <p className="text-slate-700">
                We raise the bar for what's possible.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Equity</h3>
              <p className="text-slate-700">
                We address root causes, not symptoms.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Integrity</h3>
              <p className="text-slate-700">
                We are transparent and accountable to those we serve.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Legacy</h3>
              <p className="text-slate-700">
                We measure success not by income, but by impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Full */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Full Mission Statement</h2>
          <p className="text-xl leading-relaxed">
            To alleviate poverty and empower Black minority individuals across the UK by equipping them with the tools, knowledge, mentorship, and community support to transition from survival to significance whether they are restarting their journey, scaling their potential, or giving back to uplift others.
          </p>
        </div>
      </section>

      {/* Vision Statement Full */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Full Vision Statement</h2>
          <p className="text-xl leading-relaxed">
            A thriving UK where Black communities are no longer overrepresented in poverty statistics and underrepresented in prosperity but are seen, heard, and empowered as innovators, entrepreneurs, professionals, and community leaders shaping a just and flourishing society.
          </p>
        </div>
      </section>
    </div>
  );
}