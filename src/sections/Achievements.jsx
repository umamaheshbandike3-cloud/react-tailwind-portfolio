import { Trophy, Medal, Star, Award, Target, Zap } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Best ML Project Award",
    description: "Recognized for outstanding loan default prediction model with 96.2% accuracy",
    organization: "Rubix Data Science Competition",
    date: "2024",
    type: "award",
    icon: Trophy,
    color: "text-yellow-500",
    highlight: "First place among 50+ participants",
  },
  {
    id: 2,
    title: "Excellence in Data Analysis",
    description: "Achieved exceptional performance in exploratory data analysis and feature engineering",
    organization: "Rayalaseema University",
    date: "2023",
    type: "recognition",
    icon: Medal,
    color: "text-orange-500",
    highlight: "Top 5% in academic performance",
  },
  {
    id: 3,
    title: "Innovation in Computer Vision",
    description: "Developed novel CNN architecture for rice leaf disease detection",
    organization: "Agricultural AI Research Lab",
    date: "2024",
    type: "achievement",
    icon: Star,
    color: "text-purple-500",
    highlight: "95% accuracy in disease classification",
  },
  {
    id: 4,
    title: "Certified Data Scientist",
    description: "Multiple professional certifications validating data science expertise",
    organization: "IABAC, NASSCOM, DataMites",
    date: "2024",
    type: "certification",
    icon: Award,
    color: "text-blue-500",
    highlight: "3 industry-recognized certifications",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Started Data Science Journey",
    description: "Began Bachelor's degree and first machine learning course",
    icon: Target,
    achieved: true,
  },
  {
    year: "2025",
    title: "First ML Project",
    description: "Built first machine learning project for real-world application",
    icon: Zap,
    achieved: true,
  },
  {
    year: "2026",
    title: "Professional Certifications",
    description: "Completed IABAC, NASSCOM, and DataMites certifications",
    icon: Award,
    achieved: true,
  },
  {
    year: "2025",
    title: "Graduation & Job Search",
    description: "Complete degree and actively seeking data scientist opportunities",
    icon: Star,
    achieved: false,
  },
];

const stats = [
  { value: "96.2%", label: "Best Model Accuracy", description: "Loan Default Prediction" },
  { value: "10+", label: "ML Projects", description: "Successfully deployed" },
  { value: "3", label: "Certifications", description: "Industry recognized" },
  { value: "50+", label: "Models Built", description: "Across different domains" },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Excellence &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Recognition for outstanding work in data science, machine learning, and academic excellence.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.id}
                className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{achievement.organization}</span>
                      <span className="text-xs text-primary font-medium">{achievement.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey Timeline */}
        <div className="glass rounded-3xl p-8 border border-primary/30 animate-fade-in animation-delay-600">
          <h3 className="text-2xl font-bold mb-8 text-center">Journey Milestones</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={idx}
                  className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                    milestone.achieved
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-surface border border-border/50 opacity-60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    milestone.achieved ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-medium mb-1">{milestone.year}</div>
                  <div className="text-sm font-semibold mb-2">{milestone.title}</div>
                  <div className="text-xs text-muted-foreground">{milestone.description}</div>
                  {milestone.achieved && (
                    <div className="mt-3 text-xs text-primary font-medium">✓ Achieved</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center animate-fade-in animation-delay-800">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Future Aspirations</h3>
            <p className="text-muted-foreground mb-6">
              Continuing to push boundaries in data science, specializing in deep learning and AI research while contributing to innovative solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Deep Learning Research
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                AI Ethics
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Open Source Contributions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
