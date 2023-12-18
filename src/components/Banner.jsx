import BannerCard from "../Pages/Home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="space-y-8 md:w-1/2 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Book{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Explore our online bookstore for a vast collection of books catering
            to diverse genres. From bestsellers to hidden gems, our
            user-friendly website ensures a delightful shopping experience for
            book enthusiasts.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-2/5">
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
