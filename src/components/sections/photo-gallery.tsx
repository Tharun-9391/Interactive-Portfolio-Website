import Image from 'next/image';

const galleryImages = [
  { src: '/mine.jpg', alt: 'Gallery image 1', aiHint: 'nature landscape' },
  { src: '/vish.jpg', alt: 'Gallery image 2', aiHint: 'city skyline' },
  { src: '/micro.jpg', alt: 'Gallery image 3', aiHint: 'abstract art' },
  { src: '/pro.jpg', alt: 'Gallery image 4', aiHint: 'wildlife photography' },
  { src: '/sales.jpg', alt: 'Gallery image 5', aiHint: 'technology code' },
  { src: '/thub.jpg', alt: 'Gallery image 6', aiHint: 'space galaxy' },
  { src: '/vish1.jpg', alt: 'Gallery image 7', aiHint: 'architectural design' },
  { src: '/rbi1.jpg', alt: 'Gallery image 8', aiHint: 'food photography' },
];

// Duplicate images to create a seamless loop
const allImages = [...galleryImages, ...galleryImages];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Photo Gallery</h2>
          <p className="text-muted-foreground mt-2">A glimpse into my world.</p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max marquee group-hover:[animation-play-state:paused]">
          {allImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-64 mx-2 p-2 bg-background/50 rounded-lg shadow-md">
               <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="320px"
                  quality={100}
                  className="object-contain"
                  data-ai-hint={image.aiHint}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-transparent to-muted pointer-events-none" />
      </div>
    </section>
  );
}
