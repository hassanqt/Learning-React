import axios from "axios";
import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "/nekoapi/v4/images/random?rating=safe&limit=100",
      );
      setImages(response.data);
      console.log(response.data)
    } catch {
      setError("Could not load images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="scrollbar-none overflow-auto flex h-[100dvh] w-full flex-col bg-zinc-950 text-white">
      <header className="border-b border-white/10 bg-zinc-950/90 px-5 py-5 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <h1 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
              Anime Girls Gallery
            </h1>
          </div>

          <button
            onClick={fetchImages}
            disabled={isLoading}
            className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            {isLoading ? "Loading..." : "Get new images"}
          </button>
        </div>
      </header>

      <section className="min-h-full flex-1 overflow-y-auto px-5 py-6 sm:px-8">
        <div className="mx-auto h-full max-w-7xl">
          {error && (
            <p className="mb-5 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </p>
          )}

          {images.length === 0 && !isLoading ? (
            <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/3 text-center">
              <div className="h-full flex flex-col justify-center items-center">
                <p className="text-base font-medium">Your gallery is ready.</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Select “Get new images” to load a fresh collection.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {images.map((image) => (
                <article
                  className="group aspect-3/4 overflow-hidden rounded-xl bg-zinc-900 shadow-sm ring-1 ring-white/10"
                  key={image.id}
                >
                  <img
                    className="size-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    src={image.url}
                    alt="Anime artwork from Neko API"
                  />
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
