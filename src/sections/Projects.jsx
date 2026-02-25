import { ArrowUpRight, Github, ExternalLink, Search } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";
const projects = [
  {
    title: "Heart Disease Prediction",
    description:
      "Built a classification model using clinical and demographic data. Applied feature scaling, encoding, and optimized Logistic Regression with GridSearchCV.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    tags: ["Machine Learning", "Logistic Regression", "GridSearchCV", "Classification"],
    link: "https://github.com/umamaheshbandike3-cloud/Heart-Deices-Prediction-",
    github: "https://github.com/umamaheshbandike3-cloud/Heart-Deices-Prediction-",
    liveDemo: "#",
  },
  {
    title: "Loan Amount Prediction",
    description:
      "Developed a predictive model for loan amount approval using machine learning algorithms and feature engineering techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Regression", "Feature Engineering", "Machine Learning", "Prediction"],
    link: "https://github.com/umamaheshbandike3-cloud/Prediction-Loan-amount",
    github: "https://github.com/umamaheshbandike3-cloud/Prediction-Loan-amount",
    liveDemo: "#",
  },
  {
    title: "Employee Performance Prediction",
    description:
      "Created a predictive model using LightGBM to forecast employee performance. Implemented feature selection and cross-validation for robust results.",
    image: "https://static.vecteezy.com/system/resources/previews/050/546/577/non_2x/a-group-of-businesspeople-stands-on-different-sections-of-a-chart-with-the-highest-one-holding-a-trophy-an-illustration-of-the-competition-to-be-a-successful-and-inspiring-entrepreneur-vector.jpg",
    tags: ["LightGBM", "Feature Selection", "Cross-Validation", "Regression"],
    link: "https://github.com/umamaheshbandike3-cloud/Employee-Performace-Prediction",
    github: "https://github.com/umamaheshbandike3-cloud/Employee-Performace-Prediction",
    liveDemo: "#",
  },
  {
    title: "Rice Leaf Disease Detection",
    description:
      "Designed a CNN-based image classification model. Applied image preprocessing and data augmentation techniques for plant disease detection.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    tags: ["CNN", "Deep Learning", "Computer Vision", "Image Classification"],
    link: "https://github.com/umamaheshbandike3-cloud/Rice-Leaf-Disease-Detection",
    github: "https://github.com/umamaheshbandike3-cloud/Rice-Leaf-Disease-Detection",
    liveDemo: "#",
  },
  {
    title: "Walk Run Time Prediction",
    description:
      "Built a time series prediction model for walk/run performance analysis using advanced machine learning techniques and temporal feature engineering.",
    image: "https://www.sensormedica.com/wp-content/uploads/2024/07/Treadmill-1.1-1-scaled.jpg",
    tags: ["Time Series", "Regression", "Feature Engineering", "Performance Analysis"],
    link: "https://github.com/umamaheshbandike3-cloud/Walk-Run-Time-Prediction",
    github: "https://github.com/umamaheshbandike3-cloud/Walk-Run-Time-Prediction",
    liveDemo: "#",
  },
];

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Data Science
            <span className="font-serif italic font-normal text-white">
              {" "}
              Projects.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my machine learning and deep learning projects, from classification models to computer vision applications.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-300">
          <div className="glass rounded-2xl p-4 border border-primary/20">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveDemo}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    title="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.liveDemo}
                      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                      title="View Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching "{searchTerm}".</p>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
