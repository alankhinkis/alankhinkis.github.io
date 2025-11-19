import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: 'Quantitative Research Job Simulation',
    issuer: 'J.P. Morgan',
  },
  {
    name: 'Options 101 Course',
    issuer: 'Akuna Capital',
  },
  {
    name: 'Machine Learning (Andrew Ng)',
    issuer: 'Coursera',
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Certifications</span>
          </h2>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300 animate-fade-in group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${cert.name} certificate`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
