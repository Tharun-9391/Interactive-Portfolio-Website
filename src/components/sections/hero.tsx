'use client';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/three/particle-background';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 p-4 flex flex-col items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Image 
              src="/mine1.jpg" 
              alt="Tharun Teja"
              width={128}
              height={128}
              className="rounded-full object-cover mb-6 shadow-2xl ring-4 ring-primary/20 cursor-pointer transition-transform duration-300 hover:scale-105"
              data-ai-hint="profile picture"
            />
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-lg w-auto">
            <Image
              src="/mine.jpg"
              alt="Tharun Teja"
              width={800}
              height={800}
              className="rounded-lg object-contain aspect-square"
              data-ai-hint="profile picture"
            />
          </DialogContent>
        </Dialog>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-fuchsia-500 to-accent animate-gradient-x">
          Tharun Teja
        </h1>
        <p className="mt-4 font-headline text-lg md:text-xl lg:text-2xl font-medium text-foreground/80">
          Data Science & AI Enthusiast | Full-Stack Developer
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          Crafting intelligent solutions from data and building immersive digital experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
