'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'CodeCast Canvas',
    description: 'It is a dynamic web platform designed for streamers and developers to showcase their coding profiles. It features an interactive UI, embedded videos, and personalized sections to highlight skills, projects, and live coding content — all in one stylish, responsive page.',
    image: '/code1.jpg',
    tags: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript','Tailwind CSS','YouTube Embed','Vercel'],
    aiHint: 'streamer dashboard',
    liveUrl: 'https://code-streamer.vercel.app/',
  },
  {
    title: 'Interactive Portfolio Website',
    description: 'Developed a personal portfolio website using Next.js to showcase my projects, skills, and experience.Implemented a responsive and modern UI with interactive elements and smooth navigation.',
    image: '/port.jpg',
    tags: ['Next.js', 'Vercel', 'Tailwind CSS', 'Framer Motion','CSS Modules','HTML','CSS','JavaScript'],
    aiHint: 'portfolio website',
    liveUrl: '#',
  },
  {
    title: 'Time Series Data Visualization',
    description: 'An interactive Streamlit dashboard for visualizing and predicting time-series data like COVID-19 cases, deaths, and future trends using machine learning models. It also allows users to upload and explore their own time-series datasets with customizable visualizations across multiple chart types.',
    image: '/time.png',
    tags: ['Python', 'Pandas', 'Streamlit', 'Matplotlib','Streamlit Charts','ML models'],
    aiHint: 'time series analysis',
    liveUrl: 'https://time-series-data-visualization.streamlit.app/',
  },
  {
    title: 'Hospital Mangement',
    description: 'A full-stack hospital appointment web service that allows patients to register, log in, and book doctor appointments based on specialization, availability, and time slots. Admins and doctors can manage schedules, view patient details, and monitor appointment statuses through secure, role-based dashboards.',
    image: '/hosp.jpg',
    tags: ['Python', 'MySQL', 'HTML', 'CSS','JavaScript'],
    aiHint: 'appointment system',
    liveUrl: 'https://hospital-management-nxee.onrender.com',
  },
  {
    title: 'College Predictor',
    description: 'A machine learning–powered web service that predicts suitable engineering colleges for students based on entrance scores, GPA, gender, and extracurriculars. The platform supports secure user registration/login and displays top recommended colleges after intelligent analysis of previous admission data.',
    image: '/col.jpg',
    tags: ['Python', 'Pandas', 'NumPy', 'SQLite','Scikit-learn','HTML','CSS','JavaScript'],
    aiHint: 'addmission check',
    liveUrl: '#',
  },
  
  
];

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground mt-2">A selection of my recent work.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                    <CardContent className="p-0 flex-grow flex flex-col">
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={project.aiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 p-4">
                          <h3 className="font-headline text-xl font-semibold text-white">{project.title}</h3>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex-grow" />
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                          {project.tags.length > 3 && (
                             <Badge variant="outline">+{project.tags.length - 3} more</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
                    <DialogDescription className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                         <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-6 py-4">
                    <div className="space-y-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                        data-ai-hint={project.aiHint}
                      />
                      <p>{project.description}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Project Details</h4>
                      <p>More details about the project can be placed here, such as the problem statement, my role, and the outcomes. This could be a more in-depth explanation of the technologies used and the challenges faced.</p>
                       <Button asChild variant="outline">
                         <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                           <ExternalLink className="mr-2 h-4 w-4" />
                           View Live Project
                         </Link>
                       </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          {projects.length > 4 && !showAllProjects && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" onClick={() => setShowAllProjects(true)}>
                View More Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

