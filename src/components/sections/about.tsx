import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function About() {
  return (
    <section id="about" className="bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground mt-2">A little bit about my journey and passions.</p>
        </div>
        <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 flex items-center justify-center bg-secondary/30 p-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src="/mine.jpg"
                      alt="A portrait of Tharun Teja"
                      width={350}
                      height={350}
                      className="rounded-full object-cover aspect-square shadow-2xl ring-4 ring-white/10 cursor-pointer transition-transform duration-300 hover:scale-105"
                      data-ai-hint="profile picture"
                    />
                  </DialogTrigger>
                  <DialogContent className="p-0 bg-transparent border-none max-w-2xl w-auto">
                    <Image
                      src="/mine.jpg"
                      alt="A portrait of Tharun Teja"
                      width={800}
                      height={800}
                      className="rounded-lg object-contain aspect-square"
                      data-ai-hint="profile picture"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">A Fusion of Data, AI, and Code</h3>
                <p className="text-muted-foreground mb-4">
                  Hello! I&apos;m Tharun Teja, a passionate developer with a deep fascination for the stories data can tell and the intelligent systems we can build with it. My journey into technology started with a curiosity for how things work, which quickly evolved into a career path focused on creating meaningful and efficient solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  As a full-stack developer, I enjoy building seamless, user-centric applications from the ground up. As a data science enthusiast, I thrive on uncovering insights from complex datasets and leveraging AI to solve real-world problems. This dual passion allows me to bridge the gap between powerful backend logic and intuitive frontend design, creating products that are both smart and accessible.
                </p>
                <div className="flex justify-start">
                  <Button asChild className="btn-glowing" >
                    <Link href="/resume.pdf" download>
                      <span />
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4"/>
                        Download Resume
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
