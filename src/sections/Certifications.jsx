import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "IABAC Certified Data Scientist",
    issuer: "International Association of Business Analytics Certifications",
    date: "2024",
    description: "Professional certification validating expertise in data science, machine learning, and business analytics.",
    credentialId: "IABAC-DS-2024",
    verificationLink: "#",
    icon: "🏆",
  },
  {
    title: "NASSCOM Certified Data Scientist",
    issuer: "National Association of Software and Service Companies",
    date: "2024",
    description: "Industry-recognized certification demonstrating proficiency in data science and AI technologies.",
    credentialId: "NASSCOM-DS-2024",
    verificationLink: "#",
    icon: "🎯",
  },
  {
    title: "DataMites Certified AI Engineer",
    issuer: "DataMites™",
    date: "2024",
    description: "Comprehensive certification in artificial intelligence, machine learning, and deep learning technologies.",
    credentialId: "DM-AIE-2024",
    verificationLink: "#",
    icon: "🤖",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Professional Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Industry
            <span className="font-serif italic font-normal text-white">
              {" "}
              Recognition.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Professional certifications validating my expertise in data science, machine learning, and artificial intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Icon and Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <Award className="w-6 h-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-sm text-muted-foreground">Issued by:</span>
                  <p className="text-sm font-medium">{cert.issuer}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Date:</span>
                  <p className="text-sm font-medium">{cert.date}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Credential ID:</span>
                  <p className="text-sm font-mono">{cert.credentialId}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Verification Link */}
              <a
                href={cert.verificationLink}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
              >
                <span>Verify Certificate</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in animation-delay-600">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-lg font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These certifications represent my commitment to staying current with industry standards and best practices in data science and artificial intelligence. I continuously update my skills to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
