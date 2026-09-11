import img from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto grid min-h-80 items-center gap-10 px-6 py-10 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Build Your Ideal
        </h1>
        <h1 className=" bg-linear-to-r from-[#f97316] to-purple-600 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl">
          Development Stack
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
          Explore frontend,backend,database and tooling option,compare them side
          by side and pur together the stack that fits your next project.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-linear-to-r from-[#f97316] to-[#d91b7e] px-6 py-2 font-semibold text-white shadow-md transition hover:scale-105">
            Explore Technologies
          </button>

          <button className="rounded-2xl border-2 px-6 py-2 font-semibold transition hover:bg-[#f97316] hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={img}
          alt="Development stack"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
