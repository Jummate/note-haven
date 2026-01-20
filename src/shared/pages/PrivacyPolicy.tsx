import { Link } from 'react-router-dom';
import {
  CONTACT_URL,
  HOMEPAGE_URL,
  PRIVACY_POLICY_URL,
  TERMS_OF_SERVICE_URL,
} from '../constants/urls';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <Link
            to={HOMEPAGE_URL}
            className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">
              ✍️
            </div>
            <span>Notes Haven</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Portfolio Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong className="font-semibold">
                  Portfolio Project Notice:
                </strong>{' '}
                This is a demonstration application built for portfolio
                purposes. While fully functional, it is not intended for
                production use or storing sensitive information.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: January 17, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notes Haven is a portfolio project showcasing full-stack
              development skills including authentication, data storage, and
              user interface design. This policy explains how the demo handles
              user data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Information You Provide
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Email address</strong> - Used for account authentication
              </li>
              <li>
                <strong>Password</strong> - Hashed and stored securely using
                bcrypt/similar
              </li>
              <li>
                <strong>Notes content</strong> - Everything you write in the app
              </li>
              <li>
                <strong>Tags</strong> - Organization labels you create
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Automatically Collected
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Basic usage data</strong> - Login times, feature usage
                (for demo analytics)
              </li>
              <li>
                <strong>Session data</strong> - To keep you logged in
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This demonstration app uses your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide the note-taking functionality</li>
              <li>Demonstrate authentication and authorization</li>
              <li>Sync notes across browser sessions</li>
              <li>Show CRUD (Create, Read, Update, Delete) operations</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
              <p className="text-blue-800">
                <strong>Important:</strong> Since this is a portfolio project:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-blue-700">
                <li>Data may be reset periodically</li>
                <li>The service may go offline at any time</li>
                <li>
                  <strong>
                    Please don't store anything sensitive or important
                  </strong>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Storage and Security
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Passwords are <strong>hashed</strong> using industry-standard
                algorithms
              </li>
              <li>Notes are stored in a database (PostgreSQL/etc.)</li>
              <li>Basic security practices are implemented</li>
              <li>
                <strong>
                  However, this is a demo - treat all data as publicly visible
                </strong>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-4">You can:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>View all your notes</li>
              <li>Delete your account and all data</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To delete your account: [Settings → Delete Account] or contact me
              directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Retention
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Data persists while the demo is active</li>
              <li>I may periodically clear the database for maintenance</li>
              <li>Deleted accounts are removed within 7 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">This project may use:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hosting services (Vercel)</li>
              <li>Database services (NeonDB)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              These are for demonstration purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-700 mb-4">
              This is a portfolio project by <strong>[Your Name]</strong>.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:omololujumat@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  omololujumat@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/Jummate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @Jummate
                </a>
              </p>
              <p className="text-gray-700">
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://linkedin.com/in/omololu-jumat-1405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Omololu Jumat
                </a>
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              For questions about the project or code, feel free to reach out!
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Summary
            </h3>
            <p className="text-gray-700">
              This is a demo app. Your data is handled securely for
              demonstration purposes, but don't store anything important. You
              can delete your account anytime. Questions? Contact me directly.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 flex-wrap text-sm text-gray-600">
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

export default PrivacyPolicy;
