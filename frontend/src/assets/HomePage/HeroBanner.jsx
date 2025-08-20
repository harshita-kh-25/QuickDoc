import Navbar from "./Navbar";

const HeroBanner = () => {
  return (
    <section className="w-full py-8 px-6 bg-gradient-to-r from-green-200 via-blue-100 to-purple-200">
  {/* Navbar at top */}
  <Navbar />

  <div className="max-w-6xl mx-auto text-center">
    {/* Top label */}
    <button className="flex items-center bg-gray-100 text-white px-6 py-2   mt-20 rounded-full hover:opacity-90 transition gap-2 mb-4 mt-10 mx-auto cursor-pointer">
      <span className="bg-black text-white text-xs px-2 py-1 rounded-full">New</span>
      <span className="text-sm text-gray-600">Your Smart Management Companion &rarr;</span>
    </button> 

    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight  pb-10">
      The Ultimate Documents <br /> Management App
    </h1>

    {/* Subheading */}
    <p className="text-gray-600 max-w-xl mx-auto mb-8">
      Empowering you to take charge of your financial future with intuitive tools and personalized insights.
    </p>

    {/* CTA Buttons */}
    <div className="flex gap-4 justify-center mb-5">
      <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition cursor-pointer">
        Get Mintro App →
      </button>
      <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
        Explore Features
      </button>
    </div>

    {/* Main Layout: Cards + Phone */}
<div className="relative flex justify-center items-center" style={{ height: '800px' }}>

  {/* Left Card */}
  <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-md w-[260px] md:w-[300px] text-left">
    <h3 className="font-bold mb-2 text-lg">Goal–Based Savings</h3>
    <p className="text-gray-600 text-sm mb-4">
      Empowering you to take charge of your financial future with intuitive tools and personalized insights.
    </p>
    <div className="flex items-center gap-2 mt-4">
      <img className="w-8 h-8 rounded-full" src="/user1.jpg" alt="User 1" />
      <img className="w-8 h-8 rounded-full" src="/user2.jpg" alt="User 2" />
      <img className="w-8 h-8 rounded-full" src="/user3.jpg" alt="User 3" />
      <span className="font-semibold text-sm ml-auto">2.5M</span>
      <span className="text-gray-500 text-sm">Active Users</span>
    </div>
  </div>

  {/* Phone Image */}
  <img
    src="/banner.png"
    alt="App Preview"
    className="h-[700px] md:h-[800px] z-10 drop-shadow-2xl"
  />
  {/* Right Card */}
  <div className="absolute right-6 md:right-20 top-1/3 -translate-y-1/2  bg-white p-6 rounded-xl shadow-md w-[260px] md:w-[300px] text-left">
    <div className="flex items-center gap-2 mb-2">
      <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">⭐⭐⭐⭐⭐</div>
      <span className="font-semibold text-sm">Best on the market</span>
    </div>
    <p className="text-gray-600 text-sm mb-2">
      I love this product because the support is great. Please ...
    </p>
    <p className="font-semibold text-xs">Alex White</p>
  </div>

</div>

  </div>
</section>

  );
};
export default HeroBanner;
