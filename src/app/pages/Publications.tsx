import { ExternalLink, FileText, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "conference" | "journal" | "workshop";
  award?: string;
  doi?: string;
  citations?: number;
}

export function Publications() {
  const { t } = useLanguage();

  const publications: Publication[] = [
    // Journals
    {
      title:
        "The influence of virtual character actions and emotional expressions on trust in autonomous vehicles",
      authors: "Tran, T.T.H., Peillard, E., Walsh, J., Moreau, G., & Thomas, B.",
      venue: "Virtual Reality",
      year: 2026,
      type: "journal",
      doi: "10.1007/s10055-026-01334-1",
    },
    {
      title:
        "Direct Solid Modelling in Virtual Reality for Systems Architecting",
      authors: "Tran, T.T.H., Foucault, G., & Pinquié, R.",
      venue: "Procedia CIRP",
      year: 2024,
      type: "journal",
      doi: "10.1016/j.procir.2024.08.230",
    },
    // Conferences
    {
      title:
        "Trust and Safety in Autonomous Vehicles: Evaluating Contextual Visualizations for Highlighting, Prediction, and Anchoring",
      authors: "Tran, T.T.H., Peillard, E., Walsh, J., Moreau, G., & Thomas, B.",
      venue:
        "ICAT 2025: 35th International Conference on Artificial Reality and Telexistence",
      year: 2025,
      type: "conference",
      doi: "10.2312/egve.20251351",
    },
    {
      title:
        "Impact of Adding, Removing and Modifying Driving and Non-Driving Related Information on Trust in Autonomous Vehicles",
      authors: "Tran, T.T.H., Peillard, E., Walsh, J., Moreau, G., & Thomas, B.",
      venue:
        "IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)",
      year: 2025,
      type: "conference",
      doi: "10.1109/VRW66409.2025.00277",
    },
    {
      title:
        "Examining the impact of AR Weather Customization on Trust in Autonomous Vehicles",
      authors: "Lamine, T., Tran, T.T.H., Hirchoua, B., Peillard, E., & Walsh, J.",
      venue: "3rd Workshop on Seamless Reality (WSR 2025), ISMAR Workshop",
      year: 2025,
      type: "workshop",
      doi: "10.1109/ismar-adjunct68609.2025.00116",
    },
    {
      title:
        "Benchmarking of 3D Modelling in Virtual Reality",
      authors: "Tran, T.T.H., Foucault, G., & Pinquié, R.",
      venue: "Computer-Aided Design and Applications (CAD2021)",
      year: 2022,
      type: "conference",
      doi: "10.14733/cadaps.2022.1184-1190",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "conference":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "journal":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "workshop":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    }
  };

  const groupedByYear = publications.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = [];
      }
      acc[pub.year].push(pub);
      return acc;
    },
    {} as Record<number, Publication[]>,
  );

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t("publications.title")}
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            {t("publications.subtitle")}
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-blue-600 dark:border-blue-400">
                {year}
              </h2>
              <div className="space-y-6">
                {groupedByYear[year].map((pub, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-wrap items-start gap-2 mb-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(
                          pub.type,
                        )}`}
                      >
                        {pub.type}
                      </span>
                      {pub.award && (
                        <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 flex items-center gap-1">
                          <Award size={12} />
                          {pub.award}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 italic">
                      {pub.venue}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1"
                        >
                          <ExternalLink size={14} />
                          DOI
                        </a>
                      )}
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1">
                        <FileText size={14} />
                        PDF
                      </button>
                      {pub.citations !== undefined && (
                        <span className="text-gray-500 dark:text-gray-400">
                          {pub.citations} citations
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t("publications.findMore")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://orcid.org/0000-0003-1102-3585"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              ORCID
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Google Scholar
            </a>
            <a
              href="https://dblp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              DBLP
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:shadow-md">
              <div className="flex items-start gap-3">
                <Award className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    ERASMUS+ Certificate for Advanced Virtual and Augmented Reality Toolkit for Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    European Commission Program
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:shadow-md">
              <div className="flex items-start gap-3">
                <Award className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    3D Interaction Design in Virtual Reality
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    University of London, Coursera
                  </p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/58YVZLJ89MV2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:shadow-md">
              <div className="flex items-start gap-3">
                <Award className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    3D Models for Virtual Reality
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    University of London, Coursera
                  </p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/DH6J68Q6237G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:shadow-md">
              <div className="flex items-start gap-3">
                <Award className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Building Interactive 3D Characters and Social VR
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    University of London, Coursera
                  </p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/LMPVNEAREDMS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:shadow-md">
              <div className="flex items-start gap-3">
                <Award className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Machine Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    Stanford University, Coursera
                  </p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/R80DGQFLTAQK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
