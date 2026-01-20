import {
  CONTACT_URL,
  HOMEPAGE_URL,
  PRIVACY_POLICY_URL,
  TERMS_OF_SERVICE_URL,
} from '../constants/urls';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <a
            href={HOMEPAGE_URL}
            className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">
              ✍️
            </div>
            <span>Notes Haven</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Portfolio Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-2xl">📚</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong className="font-semibold">Portfolio Project:</strong>{' '}
                This is a demonstration app built to showcase full-stack
                development skills. Feel free to explore and reach out with
                feedback!
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          I'd love to hear your feedback or answer any questions about this
          project.
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
              📧
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Email Me
            </h3>
            <p className="text-gray-600 mb-3">
              Questions, feedback, or just want to connect?
            </p>
            <a
              href="mailto:omololujumat@gmail.com"
              className="text-blue-600 hover:underline font-medium"
            >
              omololujumat@gmail.com →
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
              💼
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600 mb-3">Connect with me professionally</p>
            <a
              href="https://linkedin.com/in/omololu-jumat-1405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium text-md"
            >
              View Profile →
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
              💻
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-600 mb-3">
              Check out the source code and other projects
            </p>
            <a
              href="https://github.com/Jummate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              @Jummate →
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About This Project
          </h2>
          <p className="text-gray-700 mb-4">
            Notes Haven is a full-stack note-taking application built to
            demonstrate modern web development practices. It includes user
            authentication, CRUD operations, real-time data syncing, and a
            clean, responsive interface.
          </p>
          <p className="text-gray-700 mb-6">
            This project showcases my ability to build production-ready
            applications from concept to deployment, including proper security
            practices, user experience design, and attention to detail.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Django
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Python
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              PostgreSQL
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              JWT Auth
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              REST API
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Responsive Design
            </span>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Project Links
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Jummate/notes-haven"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                💻 View Source Code
              </a>
              <Link
                to={HOMEPAGE_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                🏠 Back to App
              </Link>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Feedback Welcome!
          </h2>
          <p className="text-gray-700 mb-4">
            Found a bug? Have suggestions for improvements? Want to discuss the
            technical decisions behind this project? I'd love to hear from you!
          </p>
          <p className="text-gray-700">
            Whether you're a potential employer, fellow developer, or just
            someone interested in the project, feel free to reach out through
            any of the channels above.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex justify-center gap-8 flex-wrap text-sm text-gray-600">
          <Link
            to={PRIVACY_POLICY_URL}
            className="hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to={TERMS_OF_SERVICE_URL}
            className="hover:text-blue-600 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to={CONTACT_URL}
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
