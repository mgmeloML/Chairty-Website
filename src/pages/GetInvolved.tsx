import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto text-center text-blue-100">
            Join our mission to empower Black minority individuals across the UK through mentorship, education, and entrepreneurship.
          </p>
        </div>
      </section>
      
      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
            <p className="text-slate-700 text-lg">
              There are many ways to support our mission and make a difference in the lives of others.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3">Join a Program</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Apply for one of our five pathway programs designed to help you at any stage of your journey, from career reinvention to entrepreneurship.
                </p>
                <div className="mt-auto">
                  <a href="#apply-form" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                    Apply Now
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3">Become a Mentor</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Share your expertise, experience, and insights to help guide others on their journey from surviving to thriving.
                </p>
                <div className="mt-auto">
                  <a href="#mentor-form" className="text-green-600 font-medium hover:text-green-800 flex items-center">
                    Apply as Mentor
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3">Donate</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Support our programs financially and help us expand our reach to more communities across the UK.
                </p>
                <div className="mt-auto">
                  <Link to="/donate" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
                    Donate Now
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
                Who can join your programs?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-700">
                Our programs are primarily designed for Black minority individuals in the UK who are looking to advance their careers, start businesses, or give back to their communities. While we focus on these communities, we welcome anyone who shares our vision and values.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
                Are your programs free?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-700">
                We strive to make our programs as accessible as possible. Some programs are fully funded and free for participants, while others may have nominal fees to cover materials and resources. We also offer scholarships and financial assistance for those in need.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
                What qualifications do I need to become a mentor?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-700">
                We look for mentors with professional experience, relevant expertise, and a genuine commitment to helping others succeed. Specific qualifications vary by program area, but a willingness to share your knowledge and time consistently is essential.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
                How much time commitment is required for programs?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-700">
                Time commitments vary by program. Some require weekly sessions over several months, while others might involve intensive weekend workshops. We clearly outline the time expectations before you commit to ensure you can fully participate and benefit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
                Where are your programs held?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-700">
                We offer a mix of in-person and virtual programs. In-person sessions are typically held in London and other major UK cities, while our virtual programs are accessible nationwide. We're continuously expanding our geographical reach.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* Application Form */}
      <section id="apply-form" className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply for a Program</h2>
            <p className="text-slate-700">
              Take the first step toward transforming your career, business, or community impact by applying for one of our programs.
            </p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8 bg-slate-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Enter your first name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter your last name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
            </div>
            
            <div className="space-y-3">
              <Label>Which program are you interested in?</Label>
              <RadioGroup defaultValue="reset">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reset" id="reset" />
                  <Label htmlFor="reset" className="font-normal">RESET - Career Reinvention</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="riseup" id="riseup" />
                  <Label htmlFor="riseup" className="font-normal">RISE UP - Business Launch</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reach" id="reach" />
                  <Label htmlFor="reach" className="font-normal">REACH - Scaling for Success</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="renew" id="renew" />
                  <Label htmlFor="renew" className="font-normal">RENEW - Breaking Cycles</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="return" id="return" />
                  <Label htmlFor="return" className="font-normal">RETURN - Mentorship & Giving Back</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Why are you interested in this program?</Label>
              <Textarea id="message" placeholder="Tell us about your goals and what you hope to achieve..." className="min-h-[120px]" />
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Mentor Form */}
      <section id="mentor-form" className="py-16 bg-slate-100">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Become a Mentor</h2>
            <p className="text-slate-700">
              Share your expertise and experience to help others on their journey to success.
            </p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="mentor-first-name">First Name</Label>
                <Input id="mentor-first-name" placeholder="Enter your first name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-last-name">Last Name</Label>
                <Input id="mentor-last-name" placeholder="Enter your last name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-email">Email Address</Label>
                <Input id="mentor-email" type="email" placeholder="Enter your email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-phone">Phone Number</Label>
                <Input id="mentor-phone" placeholder="Enter your phone number" />
              </div>
            </div>
            
            <div className="space-y-3">
              <Label>Which area would you like to mentor in?</Label>
              <RadioGroup defaultValue="career">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="career" id="career" />
                  <Label htmlFor="career" className="font-normal">Career Development</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="font-normal">Entrepreneurship</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="leadership" id="leadership" />
                  <Label htmlFor="leadership" className="font-normal">Leadership</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="finance" id="finance" />
                  <Label htmlFor="finance" className="font-normal">Financial Literacy</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-normal">Other Skills</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Briefly describe your experience and expertise</Label>
              <Textarea id="experience" placeholder="Tell us about your professional background and how you can contribute..." className="min-h-[120px]" />
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Submit Mentor Application
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}