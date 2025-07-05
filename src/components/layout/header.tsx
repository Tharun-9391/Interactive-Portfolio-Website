'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => (
    <Link
      href={href}
      onClick={() => isMobile && setMobileMenuOpen(false)}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {label}
    </Link>
  );
  
  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Tharun Teja</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold">Tharun Teja</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} isMobile />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
