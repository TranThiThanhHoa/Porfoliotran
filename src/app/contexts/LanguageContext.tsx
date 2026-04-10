import { createContext, useContext, useState, ReactNode, useMemo } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    research: "Research",
    publications: "Publications",
    projects: "Projects",
    contact: "Contact",
    
    // Home page
    "hero.title": "Dr. Tran Thi Thanh Hoa",
    "hero.subtitle": "Research and Development Engineer – HMI and VR",
    "hero.description": "PhD in Human Factors and Human-Machine Interaction with strong experience in operator activity analysis, usability evaluation, and interface design for complex systems. Specialized in AR/VR prototyping, autonomous vehicle interfaces, and user experience research.",
    "hero.viewResearch": "View Research",
    "hero.getInTouch": "Get in Touch",
    
    // Stats
    "stats.publications": "User Studies",
    "stats.projects": "Research Projects",
    "stats.awards": "Certifications",
    "stats.citations": "Publications",
    
    // Research Areas
    "researchAreas.title": "Research Focus Areas",
    "researchAreas.accessible": "Autonomous Vehicle HMI",
    "researchAreas.accessibleDesc": "Designing AR/VR interfaces for autonomous vehicles focusing on passenger experience, trust, and usability.",
    "researchAreas.multimodal": "User Experience Research",
    "researchAreas.multimodalDesc": "Conducting user studies using NASA-TLX, eye-tracking, and physiological data analysis to assess workload and cognitive load.",
    "researchAreas.arvr": "AR/VR Prototyping",
    "researchAreas.arvrDesc": "Developing immersive VR simulators and AR visualization systems using Unity and advanced prototyping tools.",
    
    // Recent Highlights
    "highlights.title": "Recent Highlights",
    "highlights.bestPaper": "PhD Completion – France-Australia Cotutelle",
    "highlights.bestPaperDesc": "Completed PhD in Computer Science (HMI & UX) at IMT Atlantique and Adelaide University (2022-2025).",
    "highlights.grant": "Published at IEEE VR, ISMAR, ICAT",
    "highlights.grantDesc": "Presented research on AR/UX and autonomous vehicle interfaces at leading international conferences.",
    "highlights.keynote": "7 User Studies Completed",
    "highlights.keynoteDesc": "Conducted comprehensive user studies on trust, passenger experience, and usability in autonomous vehicles using AR/VR.",
    
    // CTA
    "cta.title": "Interested in Collaboration?",
    "cta.description": "I'm always open to discussing research opportunities, partnerships, and innovative projects in HMI, AR/VR, and autonomous systems.",
    "cta.contactMe": "Contact Me",
    
    // Research page
    "research.title": "Research Areas",
    "research.subtitle": "My research focuses on human-machine interaction in autonomous vehicles, AR/VR interface design, and usability evaluation using qualitative and quantitative methods.",
    "research.keyFocus": "Key Focus Areas:",
    "research.methodology": "Research Methodology",
    "research.userCentered": "Activity Analysis & Usability Testing",
    "research.userCenteredDesc": "Conducting operator activity analysis, interviews, observations, and usability testing to assess user needs, workload, and risks in complex systems.",
    "research.iterative": "AR/VR Prototyping",
    "research.iterativeDesc": "Building VR simulators and AR interface prototypes using Unity, C#, and advanced VR hardware for testing novel visualizations.",
    "research.empirical": "Empirical Evaluation",
    "research.empiricalDesc": "Using NASA-TLX, eye-tracking (Tobii), and physiological data (GSR) to measure workload, cognitive analysis, and user experience.",
    "research.collaborations": "Collaborations & Affiliations",
    
    // Publications page
    "publications.title": "Publications",
    "publications.subtitle": "Research publications on AR/VR interfaces, autonomous vehicle HMI, and user experience presented at international conferences.",
    "publications.total": "Conference Papers",
    "publications.hindex": "Research Areas",
    "publications.findMore": "Find More Publications",
    
    // Projects page
    "projects.title": "Projects",
    "projects.subtitle": "Research and development projects in AR/VR interfaces, autonomous vehicle simulators, and immersive interaction systems.",
    "projects.active": "Active Projects",
    "projects.completed": "Completed Projects",
    "projects.duration": "Duration",
    "projects.team": "Team",
    "projects.funding": "Funding",
    "projects.status.active": "active",
    "projects.status.completed": "completed",
    "projects.collaboration": "Interested in Collaborating?",
    "projects.collaborationDesc": "I'm always open to new research collaborations, partnerships, and opportunities in HMI, AR/VR, and autonomous systems. Feel free to reach out to discuss potential projects.",
    
    // Contact page
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch for research collaborations, R&D opportunities, or general inquiries about HMI and AR/VR.",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.office": "Location",
    "contact.officeHours": "Availability",
    "contact.officeHoursNote": "* Available for immediate opportunities",
    "contact.opportunities": "Research Interests",
    "contact.opportunitiesDesc": "I'm interested in opportunities related to:",
    "contact.researchOpportunities": "Research Interests",
    "contact.currentlyAccepting": "I'm interested in opportunities related to:",
    "contact.phdStudents": "R&D Engineering Positions",
    "contact.postdoctoralResearchers": "Research Collaborations",
    "contact.summerResearchInterns": "HMI & VR Projects",
    "contact.yourName": "Your name",
    "contact.yourEmail": "Your email",
    "contact.whatIsThisAbout": "What is this about?",
    "contact.tellMeMore": "Tell me more about your inquiry...",
    "contact.sendMessage": "Send a Message",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.responseTime": "I typically respond within 2-3 business days.",
    "contact.visitors": "Industry Partners",
    "contact.visitorsDesc": "Open to collaborations with industry partners working on HMI and VR technologies.",
    "contact.academicVisitors": "Industry Partners",
    "contact.welcomeVisitingResearchers": "Open to collaborations with industry partners working on HMI and VR technologies.",
    "contact.speaking": "Conference Presentations",
    "contact.speakingDesc": "Available for presentations and talks on AR/VR, HMI, and autonomous vehicle research.",
    "contact.speakingEngagements": "Conference Presentations",
    "contact.availableForKeynotes": "Available for presentations and talks on AR/VR, HMI, and autonomous vehicle research.",
    "contact.industry": "Consulting",
    "contact.industryDesc": "Open to consulting on HMI design, usability evaluation, and AR/VR prototyping.",
    "contact.industryPartnerships": "Consulting",
    "contact.openToConsulting": "Open to consulting on HMI design, usability evaluation, and AR/VR prototyping.",
    
    // Footer
    "footer.description": "Research and Development Engineer specializing in HMI, AR/VR, and autonomous vehicle interfaces.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.copyright": "© 2026 Dr. Tran Thi Thanh Hoa. All rights reserved.",
  },
  fr: {
    // Navigation
    home: "Accueil",
    research: "Recherche",
    publications: "Publications",
    projects: "Projets",
    contact: "Contact",
    
    // Home page
    "hero.title": "Dr. Tran Thi Thanh Hoa",
    "hero.subtitle": "Ingénieure R&D – IHM et RV",
    "hero.description": "Docteure en Facteurs Humains et Interaction Humain-Machine avec une solide expérience en analyse d'activité, évaluation d'utilisabilité et conception d'interface pour systèmes complexes. Spécialisée en prototypage AR/VR, interfaces de véhicules autonomes et recherche en expérience utilisateur.",
    "hero.viewResearch": "Voir la Recherche",
    "hero.getInTouch": "Contactez-moi",
    
    // Stats
    "stats.publications": "Études Utilisateurs",
    "stats.projects": "Projets de Recherche",
    "stats.awards": "Certifications",
    "stats.citations": "Publications",
    
    // Research Areas
    "researchAreas.title": "Domaines de Recherche",
    "researchAreas.accessible": "IHM pour Véhicules Autonomes",
    "researchAreas.accessibleDesc": "Conception d'interfaces AR/VR pour véhicules autonomes axées sur l'expérience passager, la confiance et l'utilisabilité.",
    "researchAreas.multimodal": "Recherche en Expérience Utilisateur",
    "researchAreas.multimodalDesc": "Réalisation d'études utilisateurs avec NASA-TLX, eye-tracking et analyse de données physiologiques pour évaluer la charge de travail et cognitive.",
    "researchAreas.arvr": "Prototypage AR/VR",
    "researchAreas.arvrDesc": "Développement de simulateurs VR immersifs et systèmes de visualisation AR avec Unity et outils de prototypage avancés.",
    
    // Recent Highlights
    "highlights.title": "Faits Saillants Récents",
    "highlights.bestPaper": "Doctorat Complété – Cotutelle France-Australie",
    "highlights.bestPaperDesc": "Doctorat en Informatique (IHM & UX) à IMT Atlantique et Université d'Adélaïde (2022-2025).",
    "highlights.grant": "Publications à IEEE VR, ISMAR, ICAT",
    "highlights.grantDesc": "Présentation de recherches sur AR/UX et interfaces de véhicules autonomes lors de conférences internationales de premier plan.",
    "highlights.keynote": "7 Études Utilisateurs Réalisées",
    "highlights.keynoteDesc": "Conduite d'études complètes sur la confiance, l'expérience passager et l'utilisabilité dans les véhicules autonomes avec AR/VR.",
    
    // CTA
    "cta.title": "Intéressé par une Collaboration?",
    "cta.description": "Je suis toujours ouverte à discuter d'opportunités de recherche, de partenariats et de projets innovants en IHM, AR/VR et systèmes autonomes.",
    "cta.contactMe": "Contactez-moi",
    
    // Research page
    "research.title": "Domaines de Recherche",
    "research.subtitle": "Ma recherche se concentre sur l'interaction humain-machine dans les véhicules autonomes, la conception d'interfaces AR/VR et l'évaluation d'utilisabilité avec des méthodes qualitatives et quantitatives.",
    "research.keyFocus": "Domaines Clés:",
    "research.methodology": "Méthodologie de Recherche",
    "research.userCentered": "Analyse d'Activité & Tests d'Utilisabilité",
    "research.userCenteredDesc": "Réalisation d'analyses d'activité, entretiens, observations et tests d'utilisabilité pour évaluer les besoins, la charge de travail et les risques dans les systèmes complexes.",
    "research.iterative": "Prototypage AR/VR",
    "research.iterativeDesc": "Développement de simulateurs VR et prototypes d'interfaces AR avec Unity, C# et matériel VR avancé pour tester de nouvelles visualisations.",
    "research.empirical": "Évaluation Empirique",
    "research.empiricalDesc": "Utilisation de NASA-TLX, eye-tracking (Tobii) et données physiologiques (GSR) pour mesurer la charge de travail, l'analyse cognitive et l'expérience utilisateur.",
    "research.collaborations": "Collaborations et Affiliations",
    
    // Publications page
    "publications.title": "Publications",
    "publications.subtitle": "Publications de recherche sur les interfaces AR/VR, IHM de véhicules autonomes et expérience utilisateur présentées lors de conférences internationales.",
    "publications.total": "Articles de Conférence",
    "publications.hindex": "Domaines de Recherche",
    "publications.findMore": "Trouver Plus de Publications",
    
    // Projects page
    "projects.title": "Projets",
    "projects.subtitle": "Projets de recherche et développement en interfaces AR/VR, simulateurs de véhicules autonomes et systèmes d'interaction immersifs.",
    "projects.active": "Projets Actifs",
    "projects.completed": "Projets Terminés",
    "projects.duration": "Durée",
    "projects.team": "Équipe",
    "projects.funding": "Financement",
    "projects.status.active": "actif",
    "projects.status.completed": "terminé",
    "projects.collaboration": "Intéressé par une Collaboration?",
    "projects.collaborationDesc": "Je suis toujours ouverte à de nouvelles collaborations de recherche, partenariats et opportunités en IHM, AR/VR et systèmes autonomes. N'hésitez pas à me contacter pour discuter de projets potentiels.",
    
    // Contact page
    "contact.title": "Contact",
    "contact.subtitle": "Contactez-moi pour des collaborations de recherche, opportunités R&D ou questions générales sur IHM et AR/VR.",
    "contact.info": "Informations de Contact",
    "contact.email": "Courriel",
    "contact.phone": "Téléphone",
    "contact.office": "Localisation",
    "contact.officeHours": "Disponibilité",
    "contact.officeHoursNote": "* Disponible pour opportunités immédiates",
    "contact.opportunities": "Intérêts de Recherche",
    "contact.opportunitiesDesc": "Je suis intéressée par les opportunités liées à:",
    "contact.researchOpportunities": "Intérêts de Recherche",
    "contact.currentlyAccepting": "Je suis intéressée par les opportunités liées à:",
    "contact.phdStudents": "Postes d'Ingénieure R&D",
    "contact.postdoctoralResearchers": "Collaborations de Recherche",
    "contact.summerResearchInterns": "Projets IHM & RV",
    "contact.yourName": "Votre nom",
    "contact.yourEmail": "Votre courriel",
    "contact.whatIsThisAbout": "De quoi s'agit-il?",
    "contact.tellMeMore": "Dites-m'en plus sur votre demande...",
    "contact.sendMessage": "Envoyer un Message",
    "contact.name": "Nom",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.send": "Envoyer le Message",
    "contact.responseTime": "Je réponds généralement dans les 2-3 jours ouvrables.",
    "contact.visitors": "Partenaires Industriels",
    "contact.visitorsDesc": "Ouverte aux collaborations avec des partenaires industriels travaillant sur les technologies IHM et RV.",
    "contact.academicVisitors": "Partenaires Industriels",
    "contact.welcomeVisitingResearchers": "Ouverte aux collaborations avec des partenaires industriels travaillant sur les technologies IHM et RV.",
    "contact.speaking": "Présentations de Conférence",
    "contact.speakingDesc": "Disponible pour des présentations et conférences sur AR/VR, IHM et recherche sur véhicules autonomes.",
    "contact.speakingEngagements": "Présentations de Conférence",
    "contact.availableForKeynotes": "Disponible pour des présentations et conférences sur AR/VR, IHM et recherche sur véhicules autonomes.",
    "contact.industry": "Conseil",
    "contact.industryDesc": "Ouverte au conseil en conception IHM, évaluation d'utilisabilité et prototypage AR/VR.",
    "contact.industryPartnerships": "Conseil",
    "contact.openToConsulting": "Ouverte au conseil en conception IHM, évaluation d'utilisabilité et prototypage AR/VR.",
    
    // Footer
    "footer.description": "Ingénieure R&D spécialisée en IHM, AR/VR et interfaces de véhicules autonomes.",
    "footer.quickLinks": "Liens Rapides",
    "footer.connect": "Connecter",
    "footer.copyright": "© 2026 Dr. Tran Thi Thanh Hoa. Tous droits réservés.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}