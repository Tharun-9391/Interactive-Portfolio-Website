import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const certificates = [
  { name: 'Deloitte', image: '/deliote.jpg', aiHint: 'certificate award' },
  { name: 'codechef', image: '/codechef.jpg', aiHint: 'certificate award' },
  { name: 'LinkedIn Course', image: '/link.jpg', aiHint: 'certificate award' },
  { name: 'Python For Datascience', image: '/nptel2.jpg', aiHint: 'certificate award' },
  { name: 'Python', image: '/python.png', aiHint: 'certificate award' },
  { name: 'Data Analytics', image: '/data.jpg', aiHint: 'certificate award' },
  { name: 'Data Base Management System', image: '/dbms.png', aiHint: 'certificate award' },
];

const allCertificates = [...certificates, ...certificates];

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Certificates</h2>
          <p className="text-muted-foreground mt-2">My professional certifications and credentials.</p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max marquee-ltr group-hover:[animation-play-state:paused]">
          {allCertificates.map((cert, index) => (
            <div key={index} className="flex-shrink-0 w-96 p-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative bg-muted/50">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          layout="fill"
                          objectFit="contain"
                          className="transition-transform duration-300 group-hover:scale-105 p-2"
                          data-ai-hint={cert.aiHint}
                        />
                      </div>
                      <div className="p-4 border-t">
                        <h3 className="font-headline text-lg text-center truncate">{cert.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="p-0 bg-transparent border-none max-w-4xl w-auto">
                  <Image
                      src={cert.image}
                      alt={cert.name}
                      width={1200}
                      height={900}
                      className="rounded-lg object-contain"
                      data-ai-hint={cert.aiHint}
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      </div>
    </section>
  );
}
