import Navbar from "./Navbar";

const HeroBanner = () => {
  return (
    <section className="w-full py-8 px-6 bg-gradient-to-r from-green-200 via-blue-100 to-purple-200">
      {/* Navbar at top */}
      <Navbar />

      <div className="max-w-6xl mx-auto text-center">


        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight py-4 pb-10">
          The Ultimate Documents <br /> Management App
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-xl mx-auto mb-2">
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



        <div className="w-full py-1 px-6  flex justify-center items-center" >
          <div className="relative" style={{ perspective: "2500px" }}>
            {/* Main Tilted Image */}
            <img
              src="/dashboard.png"
              alt="App Preview"
              className="rounded-2xl shadow-2xl border border-gray-200"
              style={{
                transform: "rotateX(18deg) scale(0.95)", // tilt + thoda zoom out
                transformOrigin: "center bottom", // neeche se tilt
                boxShadow: "0px 15px 40px rgba(0,0,0,0.25)", // outline shadow
                backfaceVisibility: "hidden", // extra side na dikhe
              }}
            />

            {/* ---- Realistic Multi-Layer Shadow ---- */}
            {/* Inner Dark Shadow (close to screen) */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[65%] h-8 bg-black/30 blur-lg rounded-full"
              style={{ transform: "rotateX(75deg)" }}
            />

            {/* Outer Soft Shadow (spread out) */}
            <div
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/10 blur-2xl rounded-full"
              style={{ transform: "rotateX(75deg)" }}
            />
          </div>
        </div>
        

      </div>

    </section>

  );
};
export default HeroBanner;
