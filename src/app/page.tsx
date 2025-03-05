import { getPopularMovies } from "@/lib/tmdb";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const movies = await getPopularMovies();

  if (!movies || movies.length === 0) {
    return (
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Popular Movies 🎬</h1>
        <p className="text-red-500">No movies found. Please try again later.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Popular Movies 🎬</h1>
      
      {/* Tambahkan tombol lihat semua */}
      <div className="flex justify-end mb-4">
        <Link href="/movies" className="text-blue-500 hover:underline">
          View All Movies →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.slice(0, 8).map((movie:any) => ( // Hanya menampilkan 8 film pertama
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <Card className="p-4 cursor-pointer hover:shadow-lg transition">
              <Image
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
                alt={movie.title}
                width={300}
                height={300}
                priority
                className="rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
