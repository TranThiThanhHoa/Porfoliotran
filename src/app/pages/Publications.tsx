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
    {
      title:
        "Trust and Passenger Experience in AR-Enhanced Autonomous Vehicles: An Eye-Tracking Study",
      authors: "Tran, T.T.H., et al.",
      venue:
        "IEEE VR - IEEE Conference on Virtual Reality and 3D User Interfaces",
      year: 2025,
      type: "conference",
      doi: "10.1109/VR.2025.xxxxx",
    },
    {
      title:
        "Workload Assessment in Autonomous Vehicle Interfaces Using NASA-TLX and Physiological Measures",
      authors: "Tran, T.T.H., et al.",
      venue:
        "ISMAR - IEEE International Symposium on Mixed and Augmented Reality",
      year: 2024,
      type: "conference",
      doi: "10.1109/ISMAR.2024.xxxxx",
    },
    {
      title:
        "Designing AR Visualizations for Autonomous Vehicle Passenger Interfaces",
      authors: "Tran, T.T.H., et al.",
      venue:
        "ICAT-EGVE - International Conference on Artificial Reality and Telexistence",
      year: 2024,
      type: "conference",
    },
    {
      title:
        "VR-Based Prototyping Platform for Autonomous Vehicle HMI Design",
      authors: "Tran, T.T.H., et al.",
      venue:
        "IEEE VR - IEEE Conference on Virtual Reality and 3D User Interfaces",
      year: 2024,
      type: "conference",
      doi: "10.1109/VR.2024.xxxxx",
    },
    {
      title:
        "Cognitive Load Analysis in AR-Augmented Autonomous Driving Experiences",
      authors: "Tran, T.T.H., et al.",
      venue:
        "ISMAR - IEEE International Symposium on Mixed and Augmented Reality",
      year: 2023,
      type: "conference",
    },
    {
      title:
        "Immersive VR System for Direct 3D Modeling Operations",
      authors: "Tran, T.T.H., et al.",
      venue:
        "CAD - Computer-Aided Design and Applications Conference",
      year: 2021,
      type: "conference",
      doi: "10.14733/cadconfP.2021.xxx",
    },
    {
      title:
        "User Experience Design Guidelines for Autonomous Vehicle AR Interfaces",
      authors: "Tran, T.T.H., et al.",
      venue:
        "ICAT-EGVE - International Conference on Artificial Reality and Telexistence",
      year: 2023,
      type: "conference",
    },
    {
      title:
        "Eye-Tracking Based Evaluation of AR Information Display in Autonomous Vehicles",
      authors: "Tran, T.T.H., et al.",
      venue:
        "IEEE VR - IEEE Conference on Virtual Reality and 3D User Interfaces",
      year: 2023,
      type: "conference",
    },
    {
      title:
        "Comparative Study of Interaction Techniques in VR Modeling Environments",
      authors: "Tran, T.T.H., et al.",
      venue: "CAD - Computer-Aided Design and Applications",
      year: 2022,
      type: "journal",
      doi: "10.14733/cadaps.2022.xxx",
    },
    {
      title:
        "Design and Evaluation of Trust-Building Interfaces for Autonomous Vehicles",
      authors: "Tran, T.T.H., et al.",
      venue:
        "ISMAR - IEEE International Symposium on Mixed and Augmented Reality",
      year: 2022,
      type: "conference",
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

      {/* Stats */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {publications.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {t("publications.total")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {publications.reduce(
                  (sum, p) => sum + (p.citations || 0),
                  0,
                )}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {t("stats.citations")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {publications.filter((p) => p.award).length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {t("stats.awards")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                4
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {t("publications.hindex")}
              </div>
            </div>
          </div>
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
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              ORCID
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}