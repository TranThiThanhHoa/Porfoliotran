import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">{t("contact.title")}</h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("contact.info")}
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("contact.email")}</h3>
                    <a
                      href="mailto:tthithanhhoa@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      tthithanhhoa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("contact.phone")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">+33 06 64 33 75 24</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("contact.office")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Rennes, France
                      <br />
                      Available for opportunities in France and internationally
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {t("contact.officeHours")}
                </h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Availability:</span> Immediate
                  </p>
                  <p>
                    <span className="font-medium">Mobility:</span> France
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    {t("contact.officeHoursNote")}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {t("contact.researchOpportunities")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t("contact.currentlyAccepting")}
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>{t("contact.phdStudents")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>{t("contact.postdoctoralResearchers")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>{t("contact.summerResearchInterns")}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Professional Links
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://linkedin.com/in/thanh-hoa-tran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 block"
                  >
                    LinkedIn: thanh-hoa-tran
                  </a>
                  <a
                    href="https://orcid.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 block"
                  >
                    ORCID Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("contact.sendMessage")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t("contact.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder={t("contact.yourName")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t("contact.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder={t("contact.yourEmail")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t("contact.subject")} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder={t("contact.whatIsThisAbout")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t("contact.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder={t("contact.tellMeMore")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {t("contact.sendMessage")}
                </button>
              </form>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                * {t("contact.responseTime")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t("contact.academicVisitors")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("contact.welcomeVisitingResearchers")}
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t("contact.speakingEngagements")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("contact.availableForKeynotes")}
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t("contact.industryPartnerships")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("contact.openToConsulting")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}