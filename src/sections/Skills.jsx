import { Brain, Database, Code, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90, color: "bg-blue-500" },
      { name: "SQL", level: 85, color: "bg-green-500" },
    ],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "Logistic Regression", level: 85, color: "bg-purple-500" },
      { name: "Random Forest", level: 80, color: "bg-indigo-500" },
      { name: "SVM", level: 75, color: "bg-pink-500" },
      { name: "XGBoost", level: 85, color: "bg-orange-500" },
      { name: "LightGBM", level: 75, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Deep Learning",
    icon: Database,
    skills: [
      { name: "ANN", level: 80, color: "bg-cyan-500" },
      { name: "CNN", level: 85, color: "bg-teal-500" },
      { name: "RNN", level: 70, color: "bg-emerald-500" },
      { name: "LSTM", level: 75, color: "bg-lime-500" },
    ],
  },
  {
    title: "Data Analysis & Tools",
    icon: BarChart3,
    skills: [
      { name: "Jupyter Notebook", level: 90, color: "bg-red-500" },
      { name: "Power BI", level: 80, color: "bg-amber-500" },
      { name: "Tableau", level: 75, color: "bg-violet-500" },
      { name: "Excel", level: 85, color: "bg-fuchsia-500" },
      { name: "GitHub", level: 80, color: "bg-rose-500" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Expertise.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Comprehensive skill set covering programming languages, machine learning algorithms, deep learning architectures, and data analysis tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIdx) => (
            <div
              key={categoryIdx}
              className="glass rounded-2xl p-8 border border-primary/20 animate-fade-in"
              style={{ animationDelay: `${(categoryIdx + 1) * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm hover:text-primary transition-colors duration-300 cursor-pointer">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-surface rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out animate-fade-in`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIdx * 150) + (skillIdx * 100) + 500}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center animate-fade-in animation-delay-800">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-lg font-semibold mb-6">Soft Skills & Methodologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Analytical Thinking",
                "Problem Solving", 
                "Communication",
                "Statistical Analysis",
                "Feature Engineering",
                "Model Optimization",
                "Data Visualization",
                "Continuous Learning"
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-surface rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
