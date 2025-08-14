import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="flex justify-center">
          <div className="relative">
            <div className="text-9xl font-bold text-slate-100">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="h-24 w-24 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-slate-600 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">
              Return to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 w-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}