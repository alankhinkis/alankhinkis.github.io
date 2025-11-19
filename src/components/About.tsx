import { Code2, TrendingUp, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="glass-card p-8 space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              I am currently a first-year at Cornell University studying Computer Science and Operations Research & Information Engineering who is interested in a variety of topics across applied mathematics, computer vision, statistical computing, machine learning, data science, optimization, and stochastic processes. My goal is to combine rigorous quantitative methods with practical engineering to prototype trading strategies, deliver analytic insights, and translate models into clear business recommendations.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Building predictive models & data pipelines</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Quantitative Trading</h3>
                <p className="text-sm text-muted-foreground">Developing & backtesting trading strategies</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Data Analytics</h3>
                <p className="text-sm text-muted-foreground">Translating insights into actionable recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
