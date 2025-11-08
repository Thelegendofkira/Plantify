import Link from "next/link";

import { Github, Linkedin, Mail } from "lucide-react";


const siteLinks = [
  { name: "Home", href: "/" },
];

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/Thelegendofkira", 
    icon: Github 
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mandadi-jaideep/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mandadijaideep@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (

    <footer className="bg-background border-t mt-10">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
      
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
        
          <div className="md:col-span-1">
         
            <h3 className="text-2xl font-bold text-green-500">
             Mandadi Jaideep Reddy
            </h3>
            <p className="mt-4 text-muted-foreground">
              Full-stack and Web3 developer passionate about building
              performant and secure applications.
            </p>
          </div>

        
          <div>
          
            <h4 className="text-sm font-semibold uppercase tracking-wider text-green-500">
              Sitemap
            </h4>
            <ul className="mt-4 space-y-2">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                   
                    className="text-muted-foreground hover:text-green-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

  
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-green-500">
              Find me on
            </h4>
            <div className="mt-4 flex space-x-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                
                  className="text-muted-foreground hover:text-green-500"
                >
                  <social.icon className="size-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Jaideep Reddy Mandadi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}