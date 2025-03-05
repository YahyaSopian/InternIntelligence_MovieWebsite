import { getMovieDetails, getMovieTrailer } from "@/lib/tmdb";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
}

export default async function MovieDetail({ params }: { params: { id: string } }) {
  const { id } = await params; // Pastikan params.id di-await

  if (!id) {
    return <p className="text-center text-red-500">Invalid movie ID.</p>;
  }

  const movie: Movie = await getMovieDetails(id);
  const trailerUrl = await getMovieTrailer(id);

  if (!movie) {
    return <p className="text-center text-red-500">Movie not found.</p>;
  }

  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-600">{movie.overview}</p>
          <p className="mt-4 font-semibold">⭐ {movie.vote_average}</p>
          <p>📅 Release Date: {movie.release_date}</p>
        </div>
      </div>

      {/* Trailer */}
      {trailerUrl && (
  <div className="mt-6">
    <h2 className="text-2xl font-bold">🎥 Watch Trailer</h2>
    <iframe
      width="100%"
      height="400"
      src={trailerUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-presentation"
      referrerPolicy="no-referrer"
      className="mt-4"
    ></iframe>
  </div>
)}


    </main>
  );
}
