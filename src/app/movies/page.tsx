"use client";
import { useEffect, useState } from "react";
import { getPopularMovies, getGenres } from "@/lib/tmdb";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe untuk movie dan genre
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  genre_ids: number[];
}

interface Genre {
  id: number;
  name: string;
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const movieData = await getPopularMovies();
      const genreData = await getGenres();
      setMovies(movieData);
      setGenres(genreData);
    }
    fetchData();
  }, []);

  // Filter berdasarkan pencarian dan genre
  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenre = selectedGenre ? movie.genre_ids.includes(selectedGenre) : true;
    return matchSearch && matchGenre;
  });

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Movies 🎬</h1>

      {/* Input Pencarian */}
      <input
        type="text"
        placeholder="Search movies..."
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filter Berdasarkan Genre */}
      <select
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
        onChange={(e) => setSelectedGenre(e.target.value ? parseInt(e.target.value) : null)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

      {/* Daftar Film */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <Card className="p-4 cursor-pointer hover:shadow-lg transition">
                <Image
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
                  alt={movie.title}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No movies found.</p>
        )}
      </div>
    </main>
  );
}
