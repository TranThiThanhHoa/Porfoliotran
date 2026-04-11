import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import vrModelingImage from "../../imports/image.png";
import setUpImage from "../../imports/SetUp.png";
import userSetupImage from "../../imports/userSetup.png";

export function Research() {
  const { t } = useLanguage();

  const researchAreas = [
    {
      title: "Immersive VR 3D Modeling Systems",
      description:
        "Developing VR systems for direct 3D modeling operations including resize, translate, rotate, and Boolean operations. Creating intuitive interaction techniques for CAD modeling in immersive virtual environments. Designing and developing immersive VR simulators for prototyping and testing novel AR interface visualizations.",
      image: vrModelingImage,
      keyFocus: [
        "Direct 3D modeling operations in VR",
        "Unity and C# development for CAD systems",
        "Meta Quest Pro, HTC Vive, Valve integration",
        "Integration with FreeCAD and Creo",
        "Presented at CAD 2021 conference",
      ],
    },
    {
      title: "Autonomous Vehicle HMI & Passenger Experience",
      description:
        "Developing AR/VR interfaces for autonomous vehicles with focus on trust, passenger experience, and usability. Conducting comprehensive user studies to assess workload, cognitive load, and user acceptance.",
      image: userSetupImage,
      keyFocus: [
        "7 user studies on trust and passenger experience",
        "VR autonomous vehicle simulator development",
        "AR interface visualizations for autonomous vehicles",
        "NASA-TLX workload assessment",
        "Eye-tracking and physiological data analysis (GSR)",
      ],
    },
    {
      title: "Usability Evaluation & Activity Analysis",
      description:
        "Conducting operator activity analysis, usability testing, and workload assessment using qualitative and quantitative methods. Translating user insights into actionable HMI requirements and design recommendations.",
      image: setUpImage,
      keyFocus: [
        "Operator interviews and observations",
        "Behavioral and cognitive analysis",
        "Eye-tracking studies with Tobii",
        "Paper mock-ups and interface prototyping",
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t("research.title")}
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            {t("research.subtitle")}
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {area.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {t("research.keyFocus")}
                    </h3>
                    <ul className="space-y-2">
                      {area.keyFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="rounded-lg shadow-lg w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t("research.collaborations")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  IRL Crossing CNRS & IMT Atlantique
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Research collaboration on autonomous vehicle HMI and AR/VR interfaces (France, 2022-2025)
                </p>
              </div>
              <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Adelaide University
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cotutelle PhD program on Human-Machine Interaction & UX (Australia, 2022-2025)
                </p>
              </div>
              <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  TechViz
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  R&D collaboration on virtual reality and automated testing platforms (Paris, 2022)
                </p>
              </div>
              <div className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  AVATAR Project (Erasmus+)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Team leadership on digital twin VR simulation with 4 European universities (2021)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}