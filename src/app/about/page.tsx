export default function AboutPage() {
    return (
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About This Website</h1>
        <p className="text-gray-600">
          This movie website is built as part of the Intern Intelligence Frontend Development Internship.
          It provides movie information using The Movie Database (TMDB) API and showcases modern frontend development skills.
        </p>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Features:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>🎬 Browse popular movies</li>
            <li>🔍 Search and filter movies</li>
            <li>📄 View detailed movie information</li>
            <li>📱 Fully responsive design</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">About the Developer</h2>
          <p className="text-gray-600">
            Developed by <strong>Yahya Sopian</strong>, a passionate web developer learning advanced frontend technologies.
          </p>
        </div>
      </main>
    );
  }
  