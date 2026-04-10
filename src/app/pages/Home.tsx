import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { BookOpen, FlaskConical, Mail, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                {t("hero.subtitle")}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t("hero.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/research"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t("hero.viewResearch")}
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {t("hero.getInTouch")}
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774638794582-a24f0604342d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZXNlYXJjaGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU2NjAxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Research workspace"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</div>
              <div className="text-gray-600 dark:text-gray-400">{t("stats.publications")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-400">{t("stats.projects")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">{t("stats.awards")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">{t("stats.citations")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("researchAreas.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("researchAreas.accessible")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("researchAreas.accessibleDesc")}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("researchAreas.multimodal")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("researchAreas.multimodalDesc")}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t("researchAreas.arvr")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("researchAreas.arvrDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("highlights.title")}
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">October 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("highlights.bestPaper")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("highlights.bestPaperDesc")}
              </p>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">2022 - 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("highlights.grant")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("highlights.grantDesc")}
              </p>
            </div>
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">2022 - 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("highlights.keynote")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("highlights.keynoteDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            {t("cta.contactMe")}
          </Link>
        </div>
      </section>
    </div>
  );
}