import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineData = [
  {
    icon: Briefcase,
    date: 'October-2024',
    title: 'Data Science Intern',
    company: 'Skilltimate Technologies',
    description: 'Completed a Data Science internship focused on data analysis and visualization.Built basic machine learning models using Python and real-world datasets.Worked on data preprocessing, feature engineering, and model evaluation.Used tools like Pandas, Matplotlib, and Scikit-learn during the internship.',
  },
  {
    icon: Briefcase,
    date: 'April-2023',
    title: 'Junior Developer',
    company: 'Skilltimate Technologies',
    description: 'Worked as a Junior Developer contributing to frontend and backend development.Built and maintained web applications using HTML, CSS, JavaScript, and Python.Assisted in developing and debugging web-based projects.Worked with frameworks and tools to improve user interface and functionality.',
  },
  {
    icon: Award,
    date: '2024',
    title: 'Runner, CollegeFest',
    company: 'Vishesh 2024',
    description: 'Won second place for developing an interactive gesture recognition game using hand symbols.Utilized computer vision with OpenCV and Mediapipe to detect and respond to hand gestures.',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Experience & Timeline</h2>
          <p className="text-muted-foreground mt-2">My journey through academia and the professional world.</p>
        </div>
        <div className="timeline max-w-3xl mx-auto">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <item.icon />
              </div>
              <div className="pl-8">
                <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                <h4 className="font-semibold text-primary mb-2">{item.company}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
