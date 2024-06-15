import Hero from "../components/Hero";

function Home() {
  return (
    <div className="h-[50vh] grid grid-cols-2">
      <Hero />
      <div className="flex justify-center items-center">
        Insert slideshow here
      </div>
    </div>
  );
}

export default Home;
