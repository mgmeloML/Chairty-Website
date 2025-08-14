import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-bold text-2xl mb-4">Pathways to Empower UK</h2>
          <p className="text-slate-300 mb-4">
            Empowering Black minority individuals in the UK to break barriers, transform careers, launch businesses, and give back to uplift others.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-slate-300 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-slate-300 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-slate-300 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-slate-300 hover:text-white" />
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-slate-300 hover:text-white">About Us</Link></li>
            <li><Link to="/programs" className="text-slate-300 hover:text-white">Programs</Link></li>
            <li><Link to="/team" className="text-slate-300 hover:text-white">Our Team</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg mb-3">Get Involved</h3>
          <ul className="space-y-2">
            <li><Link to="/get-involved" className="text-slate-300 hover:text-white">Join a Program</Link></li>
            <li><Link to="/get-involved" className="text-slate-300 hover:text-white">Become a Mentor</Link></li>
            <li><Link to="/donate" className="text-slate-300 hover:text-white">Donate</Link></li>
            <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h3 className="font-bold text-lg mb-3">Newsletter</h3>
          <p className="text-slate-300 mb-3">Stay updated with our latest news and programs</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-800 text-white border-slate-700"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="container mt-8 pt-4 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Pathways to Empower UK. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacy-policy" className="text-slate-400 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-slate-400 text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}