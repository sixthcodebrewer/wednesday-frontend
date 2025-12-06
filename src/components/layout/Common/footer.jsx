import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import samshikshaLogo from "../../../assets/logo.svg";
import { Button } from "../../ui/button";


export default function Footer() {
   
  return (
    <footer className="w-full bg-black text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <img
                  src={samshikshaLogo}
                  alt="SamShiksha Logo"
                  width={48}
                  height={48}
                  className="object-contain w-16"
                />
            </div>
            <p className="text-sm text-gray-400">
              A repository dedicated to Samskrita experts, Samskrita Institutions, and Samskrita practitioners —
              empowering learning at every step.
            </p>
          </div>

          {/* Quick Links - Two Columns */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Button variant="link" asChild className="h-auto p-0 text-white justify-start">
                  <Link href="/">Home</Link>
                </Button>
                <Button variant="link" asChild className="h-auto p-0 text-white justify-start">
                  <Link href="/#about">About</Link>
                </Button>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Button variant="link" asChild className="h-auto p-0 text-white justify-start">
                  <Link href="/scholars">Scholars</Link>
                </Button>
                <Button variant="link" asChild className="h-auto p-0 text-white justify-start">
                  <Link href="/programs">Programs</Link>
                </Button>
                <Button variant="link" asChild className="h-auto p-0 text-white justify-start">
                  <Link href="/books">Books</Link>
                </Button>
              </nav>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-gray-400" />
                <span>vyakarana@ksu.ac.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-gray-400" />
                <span>(+91)9876543210</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>
                  Sam Shiksha 1/2 Samskrita Avenue,
                  <br />
                  Knowledge Park, New Delhi 110016
                  <br />
                  Pin Code: 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-400 border mt-4 mb-4"></div>

        <div className="text-center text-xs text-gray-50">
          © {new Date().getFullYear()} Sam Shiksha. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

