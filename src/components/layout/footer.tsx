import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: '#', label: 'Github' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Gmail' },
];

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tharun Teja. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button key={label} variant="ghost" size="icon" asChild>
              <Link href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
