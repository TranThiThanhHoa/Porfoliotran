import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import vrModelingImage from "../../imports/image.png";
import setUpImage from "../../imports/SetUp.png";
import userSetupImage from "../../imports/userSetup.png";

interface Project {
  title: string;
  description: string;
  status: "active" | "completed" | "upcoming";
  image: string;
  duration: string;
  team?: string;
  funding?: string;
  tags: string[];
  links?: {
    website?: string;
    github?: string;
    paper?: string;
  };
}

export function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "AR/VR Interfaces for Autonomous Vehicles",
      description:
        "Conducted 7 comprehensive user studies on trust, passenger experience, and usability in autonomous vehicles. Developed and tested novel AR interface visualizations using VR simulation environments. Performed workload and cognitive analysis using NASA-TLX, eye-tracking, and physiological data (GSR).",
      status: "completed",
      image: userSetupImage,
      duration: "09/2022 - 10/2025",
      team: "Bruce H. Thomas, Guillaume Moreau, James Walsh and Etienne Peillard",
      funding: "Australian Research Centre for Interactive and Virtual Environments, IRL Crossing and IMT Atlantique",
      tags: ["AR/VR", "Autonomous Vehicles", "User Studies", "HMI"],
    },
    {
      title: "Immersive VR Modeling System",
      description:
        "Developed an innovative VR modeling system supporting direct 3D modeling operations including resize, translate, rotate, and Boolean operations. Managed complete development cycle from concept to prototype, user study, and publication. Presented outcomes at CAD 2021 conference.",
      status: "completed",
      image: vrModelingImage,
      duration: "02/2021 - 07/2021",
      team: "Romain Pinqie, Gilles Foucault",
      tags: ["VR", "3D Modeling", "Unity", "HTC Vive"],
    },
    {
      title: "AVATAR Project - Digital Twin VR Simulation (Erasmus+)",
      description:
        "Led a team of 5 students from 4 European universities on a digital twin VR simulation project. Managed project timeline, tasks, code reviews, and cross-cultural collaboration. Contributing to an open-source 3D modeling program in VR with focus on team coordination and technical excellence.",
      status: "completed",
      image: setUpImage,
      duration: "02/2021 - 06/2021",
      funding: "Erasmus+ Program",
      tags: ["VR", "Digital Twin", "Team Leadership", "Open Source"],
    },
  ];


  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">{t("projects.title")}</h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {t("projects.duration")}: {project.duration}
                    </div>
                    {project.team && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Users size={16} className="mr-2" />
                        {t("projects.team")}: {project.team}
                      </div>
                    )}
                    {project.funding && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{t("projects.funding")}:</span>{" "}
                        {project.funding}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                        >
                          <ExternalLink size={14} />
                          Website
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                      )}
                      {project.links.paper && (
                        <a
                          href={project.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                        >
                          <ExternalLink size={14} />
                          Paper
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("research.methodology")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("research.userCentered")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("research.userCenteredDesc")}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("research.iterative")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("research.iterativeDesc")}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("research.empirical")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("research.empiricalDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.collaboration")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t("projects.collaborationDesc")}
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("cta.contactMe")}
          </a>
        </div>
      </section>
    </div>
  );
}