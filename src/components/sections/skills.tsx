import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillsData = {
  "Programming & Languages": ["Python", "JavaScript", "TypeScript", "SQL", "R", "Java"],
  "Data Science & ML": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib"],
  "Web Development": ["React", "Next.js", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS"],
  "Data Analytics": ["Tableau", "Power BI", "Google Analytics", "SQL", "Excel"],
  "Databases & Tools": ["PostgreSQL", "MongoDB", "Firebase", "Docker", "Git", "Jupyter"],
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Skills</h2>
          <p className="text-muted-foreground mt-2">The technologies and tools I work with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
