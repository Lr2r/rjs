import { resolve } from "path";

export const metadata = {
  title: "Home",
};

const URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getMovies() {
  // await new Promise((resolve)=> setTimeout(resolve, 10000));
  const response = await fetch(URL);
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie: any, index: number) => (
        <li key={index}>
          {movie.list_name}
        </li>
      ))}
    </div>
  );
}