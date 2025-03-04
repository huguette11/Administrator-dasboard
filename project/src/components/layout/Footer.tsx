export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} UniGrade. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}