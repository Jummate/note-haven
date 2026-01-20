import { Link } from 'react-router-dom';
import {
  CONTACT_URL,
  HOMEPAGE_URL,
  PRIVACY_POLICY_URL,
  TERMS_OF_SERVICE_URL,
} from '../constants/urls';

const TermsOfService = () => {
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
            <span>Notes</span>
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
                purposes. By using this app, you acknowledge that it's a
                personal project meant to showcase technical skills, not a
                commercial product.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last updated: January 17, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About This Project
            </h2>
            <p className="text-gray-700 mb-4">
              Notes is a full-stack portfolio project demonstrating:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>User authentication and authorization</li>
              <li>CRUD operations with a database</li>
              <li>RESTful API design</li>
              <li>Modern frontend development</li>
              <li>Responsive UI/UX design</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Developer:</strong> [Your Name]
              <br />
              <strong>Source Code:</strong>{' '}
              <a
                href="https://github.com/Jummate/notes-haven"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>{' '}
              (optional)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Using the Demo
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              What You Can Do
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Create an account and test the app</li>
              <li>Write notes and organize with tags</li>
              <li>Test all features freely</li>
              <li>Provide feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              What You Should NOT Do
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Store sensitive or important information</li>
              <li>Use offensive, illegal, or harmful content</li>
              <li>
                Attempt to break or exploit the system (DDoS, SQL injection,
                etc.)
              </li>
              <li>Create spam accounts or abuse the service</li>
              <li>Expect 100% uptime or data permanence</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Your Content
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You own any content you create</li>
              <li>
                This is a demo, so{' '}
                <strong>backup anything you want to keep</strong>
              </li>
              <li>Content may be deleted during maintenance</li>
              <li>
                I won't use your notes for any purpose except maintaining the
                demo
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Service Availability
            </h2>
            <p className="text-gray-700 mb-4">
              Since this is a portfolio project:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The service may go offline for updates or maintenance</li>
              <li>Features may change without notice</li>
              <li>The entire project might be discontinued</li>
              <li>Data may be reset periodically</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              I'll try to keep it running, but no guarantees!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Privacy and Data
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Read the{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{' '}
                for data handling details
              </li>
              <li>Your data is handled with care, but this is a demo</li>
              <li>
                <strong>Don't store anything you can't afford to lose</strong>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No Warranty
            </h2>
            <p className="text-gray-700 mb-4">
              This app is provided "as is" for demonstration purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No guarantee of uptime or functionality</li>
              <li>No warranty of any kind</li>
              <li>Not liable for lost data or any damages</li>
              <li>Use at your own risk</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This is a personal project, not a commercial service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Acceptable Use
            </h2>
            <p className="text-gray-700 mb-4">Please be respectful:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Don't try to hack or break the app</li>
              <li>Don't post illegal or offensive content</li>
              <li>Don't spam or abuse the system</li>
            </ul>
            <p className="text-gray-700 mt-4">If I notice abuse, I may:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Delete the account</li>
              <li>Block access</li>
              <li>Report serious violations to hosting provider</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Account Termination
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>You can delete your account anytime</strong> in Settings.
            </p>
            <p className="text-gray-700 mb-4">
              I reserve the right to terminate accounts that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violate these terms</li>
              <li>Abuse the system</li>
              <li>Post prohibited content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Feedback and Questions
            </h2>
            <p className="text-gray-700 mb-4">
              I'd love to hear your feedback on this project!
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
              Found a bug? Have suggestions? Please let me know!
            </p>
          </section>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              For Potential Employers/Recruiters
            </h3>
            <p className="text-gray-700 mb-3">This project demonstrates:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Full-stack development (frontend + backend + database)</li>
              <li>Authentication and security best practices</li>
              <li>RESTful API design</li>
              <li>Modern React/frontend frameworks</li>
              <li>Database design and management</li>
              <li>Responsive UI/UX implementation</li>
              <li>
                Understanding of production requirements (privacy, terms, etc.)
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Summary
            </h3>
            <p className="text-gray-700">
              This is a portfolio demo. Use it freely to test features, but
              don't store important data. Be respectful, and feel free to
              contact me with feedback!
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

export default TermsOfService;
