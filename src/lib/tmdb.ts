export async function getPopularMovies() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
    
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();

    return data.results || []; // Pastikan selalu mengembalikan array
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return []; // Return array kosong jika terjadi error
  }
}


export async function getMovieDetails(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

export async function getGenres() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch genres");
    }

    const data = await res.json();
    return data.genres || [];
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}

export async function getMovieTrailer(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch trailer");
    }

    const data = await res.json();
    const trailer = data.results.find((video: any) => video.type === "Trailer" && video.site === "YouTube");
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
}