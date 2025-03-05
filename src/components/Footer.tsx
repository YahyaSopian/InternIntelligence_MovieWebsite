export default function Footer() {
    return (
      <footer className="border-t bg-background py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Movie4u. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  }
  