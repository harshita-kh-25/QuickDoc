
const HeroBanner = () => {
  return (
    <section className="relative w-full py-10 text-white ">
     
      {/* Navbar at top */}
      

      <div className="max-w-6xl mx-auto text-center z-10 relative">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight py-4 pb-10">
          The Ultimate Documents <br /> Management App
        </h1>

        {/* Subheading */}
        <p className=" max-w-xl mx-auto mb-2">
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

        {/* Tilted Image Section with Modern Shadow */}
        <div className="relative flex justify-center items-center mt-10" style={{ perspective: "2000px" }}>
           {/* Background Gradient with Blur */}
      <div className="absolute inset-0 bg-gradient-radial from-[#031c3c] via-[#0F0F0F] to-[#0F0F0F] opacity-80 z-0 top-[100px]"></div>

      {/* Radial Blur Effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
        <div className="w-[1500px] h-[800px] bg-blue-700 opacity-30 rounded-full blur-[160px]" />
      </div>

          {/* Main Tilted Image */}
          <img
            src="/dashboard.png"
            alt="App Preview"
            className="rounded-2xl shadow-2xl border border-gray-800 relative z-10"
            style={{
              transform: "rotateX(12deg) scale(0.96)",
              transformOrigin: "center bottom",
              backfaceVisibility: "hidden",
            }}
          />

          {/* Elliptical Stage Shadow 
          <div
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[70%] h-12 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.84) 0%, rgba(189, 59, 59, 0) )",
             
            }} 
          />*/}
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
