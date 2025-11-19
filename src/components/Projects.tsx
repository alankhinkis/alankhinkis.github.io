import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  results?: string;
}

const projects: Project[] = [
  {
    title: 'Kaggle — Diabetes Prediction (ML Classification)',
    description:
      'Built and tuned k-Nearest Neighbors and Decision Tree classifiers on the Pima Indians Diabetes dataset; performed feature scaling, cross-validation, and model selection to optimize performance.',
    tech: ['Python', 'pandas', 'scikit-learn', 'Jupyter Notebook'],
    github: 'https://github.com/alankhinkis',
    results: 'Achieved >80% classification accuracy',
  },
  {
    title: 'Nasdaq Futures — Intraday Trading Strategy Backtester',
    description:
      'Engineered a Python-based backtesting system for intraday futures strategies using yfinance and pandas; implemented rule-based entry/exit logic, stop-loss/take-profit mechanics, and full trade P&L tracking. Produced equity curve visualizations and per-trade analytics to evaluate strategy risk and performance.',
    tech: ['Python', 'pandas', 'matplotlib', 'yfinance'],
    github: 'https://github.com/alankhinkis',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:shadow-2xl transition-all duration-300 group animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                  {project.results && (
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 border border-primary/20">
                      <p className="text-sm font-medium gradient-text">{project.results}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn hover:border-primary"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Link */}
          <div className="text-center glass-card p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-4">Want to see more?</h3>
            <Button
              variant="outline"
              size="lg"
              className="hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://github.com/alankhinkis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>View all projects on GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
