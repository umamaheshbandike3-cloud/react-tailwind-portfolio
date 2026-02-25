import { useState } from 'react';

const resumeData = {
  personal: {
    name: "BANDIKE MAHESH",
    contact: {
      email: "umamaheshbandike3@gmail.com",
      phone: "+91 7997843067",
      linkedin: "https://www.linkedin.com/in/maheshbandike/",
      github: "https://github.com/umamaheshbandike3-cloud",
      location: "Hebbal, Bengaluru, Karnataka, Pincode: 560006"
    }
  },
  summary: "Aspiring Data Scientist with strong foundations in Machine Learning, Deep Learning, and Statistical Analysis. Hands-on experience through internship projects involving end-to-end ML pipelines, model optimization, and real-world datasets. Proficient in Python, SQL, data visualization, and predictive modeling with a passion for continuous learning.",
  
  skills: {
    technical: [
      { category: "Programming", items: ["Python", "SQL"] },
      { category: "Machine Learning", items: ["Logistic Regression", "Random Forest", "SVM", "XGBoost", "LightGBM"] },
      { category: "Deep Learning", items: ["ANN", "CNN", "RNN", "LSTM", "Computer Vision"] },
      { category: "Data Analysis", items: ["EDA", "Feature Engineering", "PCA", "Statistical Analysis"] },
      { category: "Tools", items: ["Jupyter Notebook", "GitHub", "Power BI", "Tableau", "Excel"] }
    ],
    soft: ["Analytical Thinking", "Problem Solving", "Communication"]
  },
  
  experience: [
    {
      title: "Data Scientist Intern",
      company: "Rubix",
      duration: "2024",
      achievements: [
        "Developed multiple end-to-end Machine Learning projects using real-world datasets.",
        "Performed data preprocessing, feature engineering, and exploratory data analysis.",
        "Built and optimized models using Logistic Regression, Random Forest, SVM, and XGBoost.",
        "Evaluated models using accuracy, confusion matrix, precision, recall, and F1-score."
      ]
    }
  ],
  
  projects: [
    {
      title: "Heart Disease Prediction",
      company: "Rubix",
      category: "Machine Learning",
      achievements: [
        "Built a classification model using clinical and demographic data.",
        "Applied feature scaling, encoding, and optimized Logistic Regression with GridSearchCV.",
        "Evaluated performance using accuracy and classification metrics."
      ]
    },
    {
      title: "Loan Default Prediction", 
      company: "Rubix",
      category: "Machine Learning",
      achievements: [
        "Performed EDA and feature engineering on financial datasets.",
        "Addressed class imbalance using SMOTE.",
        "Achieved 96.2% accuracy using XGBoost."
      ]
    },
    {
      title: "Employee Performance Prediction",
      company: "Rubix", 
      category: "Machine Learning",
      achievements: [
        "Built predictive models using HR analytics data.",
        "Compared Logistic Regression, SVM, Random Forest, XGBoost, and LightGBM."
      ]
    },
    {
      title: "Rice Leaf Disease Detection",
      company: "Rubix",
      category: "Deep Learning (CNN)",
      achievements: [
        "Designed a CNN-based image classification model.",
        "Applied image preprocessing and data augmentation techniques."
      ]
    }
  ],
  
  certifications: [
    "IABAC – Certified Data Scientist",
    "NASSCOM – Certified Data Scientist", 
    "DataMites – Certified AI Engineer"
  ],
  
  education: {
    university: "Rayalaseema University",
    degree: "Bachelor's Degree",
    duration: "2022–2025",
    cgpa: "7.22"
  }
};

export const generateResumePDF = () => {
  const resumeContent = `
BANDIKE MAHESH RESUME
===================

CONTACT INFORMATION
------------------
Email: umamaheshbandike3@gmail.com
Phone: +91 7997843067
Location: Hebbal, Bengaluru, Karnataka, Pincode: 560006
LinkedIn: https://www.linkedin.com/in/maheshbandike/
GitHub: https://github.com/umamaheshbandike3-cloud

PROFESSIONAL SUMMARY
---------------------
${resumeData.summary}

TECHNICAL SKILLS
----------------
${resumeData.skills.technical.map(skill => 
  `${skill.category}: ${skill.items.join(', ')}`
).join('\n')}

Soft Skills: ${resumeData.skills.soft.join(', ')}

PROFESSIONAL EXPERIENCE
----------------------
${resumeData.experience.map(exp => 
  `${exp.title} - ${exp.company}\n${exp.duration}\n${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}`
).join('\n\n')}

PROJECTS
--------
${resumeData.projects.map(project => 
  `${project.title} | ${project.category}\n${project.achievements.map(achievement => `• ${achievement}`).join('\n')}`
).join('\n\n')}

CERTIFICATIONS
--------------
${resumeData.certifications.map(cert => `• ${cert}`).join('\n')}

EDUCATION
----------
${resumeData.education.university}
${resumeData.education.degree} | ${resumeData.education.duration} | CGPA: ${resumeData.education.cgpa}
  `;

  // Create blob and download as text file
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'BANDIKE_MAHESH_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const ResumeGenerator = () => {
  return { generateResumePDF };
};
