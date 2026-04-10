import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Research() {
  const { t } = useLanguage();

  const researchAreas = [
    {
      title: "Immersive VR 3D Modeling Systems",
      description:
        "Developing innovative VR systems for direct 3D modeling operations including resize, translate, rotate, and Boolean operations. Creating intuitive interaction techniques for CAD modeling in immersive virtual environments.",
      image:
        "https://images.unsplash.com/photo-1603982490701-fa98e79b23ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGNvbXB1dGVyJTIwaW50ZXJhY3Rpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1NjYwMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      keyFocus: [
        "Direct 3D modeling operations in VR",
        "Unity and C# development for CAD systems",
        "Integration with FreeCAD and Creo",
        "Presented at CAD 2021 conference",
      ],
    },
    {
      title: "Autonomous Vehicle HMI & Passenger Experience",
      description:
        "Developing AR/VR interfaces for autonomous vehicles with focus on trust, passenger experience, and usability. Conducting comprehensive user studies to assess workload, cognitive load, and user acceptance.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzU2NjAxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      keyFocus: [
        "7 user studies on trust and passenger experience",
        "AR interface visualizations for autonomous vehicles",
        "NASA-TLX workload assessment",
        "Eye-tracking and physiological data analysis (GSR)",
      ],
    },
    {
      title: "VR Simulation & Prototyping",
      description:
        "Designing and developing immersive VR simulators for prototyping and testing novel AR interface visualizations. Creating VR environments for autonomous vehicle research and 3D modeling operations.",
      image:
        "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXQlMjB1c2VyfGVufDF8fHx8MTc3NTY2MDE0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      keyFocus: [
        "VR autonomous vehicle simulator development",
        "Unity and C# development",
        "Meta Quest Pro, HTC Vive, Valve integration",
        "Immersive 3D modeling systems",
      ],
    },
    {
      title: "Usability Evaluation & Activity Analysis",
      description:
        "Conducting operator activity analysis, usability testing, and workload assessment using qualitative and quantitative methods. Translating user insights into actionable HMI requirements and design recommendations.",
      image:
        "https://images.unsplash.com/photo-1545579833-0e15a2cdb26b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NjAxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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

      {/* Methodology */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("research.methodology")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("research.userCentered")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("research.userCenteredDesc")}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("research.iterative")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("research.iterativeDesc")}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
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