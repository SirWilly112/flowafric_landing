// pages/document.js

import Link from "next/link";

export default function DocumentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero / Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">FlowAfric</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/document" className="font-semibold underline">
              Document
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Document Page</h2>
        <p className="mb-4">
          Welcome to the Document page. This is where you can display important resources,
          guides, or any documentation your users might need.
        </p>
        <p className="mb-4">
          You can add links, downloadable files, or sections here. Style it the same way as
          your About and Services pages to maintain consistency.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          © {new Date().getFullYear()} FlowAfric. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
