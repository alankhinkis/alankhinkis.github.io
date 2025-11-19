import { Code, Database, FileText, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Data',
    icon: <Code className="h-5 w-5" />,
    skills: ['Python', 'SQL', 'Git'],
  },
  {
    title: 'Libraries & ML',
    icon: <Database className="h-5 w-5" />,
    skills: ['pandas', 'numpy', 'scikit-learn', 'TensorFlow'],
  },
  {
    title: 'Tools & Notebook',
    icon: <FileText className="h-5 w-5" />,
    skills: ['Jupyter Notebook', 'matplotlib', 'Excel'],
  },
  {
    title: 'Other Skills',
    icon: <Wrench className="h-5 w-5" />,
    skills: ['Market Research', 'Data Visualization', 'Cloud/DevOps Basics'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-6 space-y-4 hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-base">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
