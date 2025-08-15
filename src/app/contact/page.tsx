import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Contact GrittySystems
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to join our ecosystem? Have questions about our apps or investment opportunities? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Get early access to beta versions of our apps
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Learn about investment opportunities with guaranteed returns
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Partner with us on new innovative projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Join our community of forward-thinking entrepreneurs
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">General inquiries</span>
                    <span className="text-slate-500">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Investment opportunities</span>
                    <span className="text-slate-500">12 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Partnership requests</span>
                    <span className="text-slate-500">48 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Press & media</span>
                    <span className="text-slate-500">6 hours</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Other Ways to Connect</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Join our community voting on new features</span>
                  </div>
                  <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Follow us for updates and announcements</span>
                  </div>
                  <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Subscribe to our newsletter for investment alerts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}