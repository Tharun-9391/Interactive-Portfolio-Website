import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Tharun-9391', label: 'Github' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chanda-tharunteja-277611258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/ChandaTharun?t=IrRpJOLURnqR2DSQIJPLqg&s=08', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/chanda.tharun?igsh=YzByNGFyMG16cXhh', label: 'Instagram' },
  { icon: Mail, href: 'mailto:chandatharunteja1@gmail.com', label: 'Gmail' },
];

export default function Socials() {
  return (
    <section id="socials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Connect With Me</h2>
          <p className="text-muted-foreground mt-2">Find me on social media.</p>
        </div>
        <Card>
          <CardContent className="p-8">
            <div className="flex justify-center items-center flex-wrap gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-20 h-20 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                    <Icon className="h-10 w-10" />
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
