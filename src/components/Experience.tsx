import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Beats by Dre',
    role: 'Data Analytics Extern',
    period: 'Nov 2025 – Feb 2026',
    bullets: [
      'Built end-to-end sentiment analysis pipelines in Python (Colab) using pandas and scikit-learn to extract and quantify consumer sentiment and thematic trends.',
      'Designed and administered consumer surveys; analyzed quantitative and qualitative responses using both manual and AI-assisted methods to validate findings.',
      'Synthesized insights into interactive dashboards, slide decks, and a short video presentation to communicate recommendations to cross-functional stakeholders.',
    ],
  },
  {
    company: 'Kappa Theta Pi (Professional Technology Fraternity)',
    role: 'Beta Class Member',
    period: 'Oct 2025 – Present',
    bullets: [
      'Selected 1 of 11 members from ~80 applicants; completed an intensive New Member Education covering machine learning fundamentals and backend development.',
      'Collaborated with a team of five to develop a semester-long reinforcement learning system that recommends optimized schedules for Cornell students; led model development, evaluation, and iteration.',
    ],
  },
  {
    company: 'The Statler Hotel at Cornell University',
    role: 'Valet / Bellstand Attendant',
    period: 'Aug 2025 – Present',
    bullets: [
      'Deliver high-quality service to hundreds of guests weekly, coordinating with front-desk and events teams to ensure smooth guest experiences.',
      'Manage high-volume vehicle logistics at the driveway, ensuring organized, timely, and damage-free handling under fast-paced conditions.',
    ],
  },
];

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 scroll-mt-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-muted/20 transition-colors"
                  aria-expanded={expandedIndex === index}
                  aria-controls={`experience-${index}`}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                      <p className="text-base font-medium text-primary mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {expandedIndex === index && (
                  <div
                    id={`experience-${index}`}
                    className="px-6 pb-6 pt-2 space-y-3 animate-accordion-down"
                  >
                    <ul className="space-y-3 pl-14">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-foreground/90 leading-relaxed flex items-start gap-2 animate-fade-in"
                          style={{ animationDelay: `${bulletIndex * 0.1}s` }}
                        >
                          <span className="text-primary mt-2 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Honors Section */}
          <div className="mt-12 glass-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Additional Activities
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white transition-[background-color,color] duration-500 ease-in-out cursor-default">
                Eagle Scout
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white transition-[background-color,color] duration-500 ease-in-out cursor-default">
                Ranked 99.4th percentile on GTOWizard
              </span>
              <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white transition-[background-color,color] duration-500 ease-in-out cursor-default">
                Avid hiker, skier, and camper
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
