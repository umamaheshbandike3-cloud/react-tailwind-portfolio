import { Brain, Lightbulb, Target, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Building predictive models using Logistic Regression, Random Forest, SVM, XGBoost, and ensemble methods.",
  },
  {
    icon: TrendingUp,
    title: "Deep Learning",
    description:
      "Designing neural networks including ANN, CNN, RNN, LSTM for computer vision and sequential data analysis.",
  },
  {
    icon: Target,
    title: "Data Analysis",
    description: "Performing EDA, feature engineering, and statistical analysis to extract meaningful insights from data.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Applying analytical thinking and technical skills to solve real-world business challenges through data.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Data Science &
              <span className="font-serif italic font-normal text-white">
                {" "}
                Machine Learning.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Aspiring Data Scientist with strong foundations in Machine Learning, Deep Learning, and Statistical Analysis. Hands-on experience through internship projects involving end-to-end ML pipelines, model optimization, and real-world datasets.
              </p>
              <p>
                Proficient in Python, SQL, data visualization, and predictive modeling with a passion for continuous learning. Successfully built multiple classification and regression models, achieving high accuracy through feature engineering and hyperparameter tuning.
              </p>
              <p>
                Certified Data Scientist with expertise in computer vision, natural language processing, and statistical analysis. Committed to leveraging data-driven insights to solve complex business problems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to transform raw data into actionable insights through advanced machine learning techniques and statistical analysis."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
