import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const Poppins = localFont({
  src: "./fonts/Poppins-ExtraBoldItalic.ttf",
  variable: "--font-Poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-[50vh] md:h-[calc(100vh-56px)]">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[50vh] md:h-[calc(100vh-56px)] px-6 md:px-16 py-6 md:py-0 gap-6 md:gap-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center gap-4 md:gap-6 items-center md:items-start text-center md:text-left order-1 md:order-1">

          <h1
            className={`text-3xl sm:text-5xl md:text-6xl font-bold leading-tight ${Poppins.className}`}
          >
            The Best URL Shortener 
          </h1>

         <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md md:max-w-xl">
            We are the most straightforward URL shortener in the world.
            Most URL shorteners track you or require login. We understand
            your privacy and have created a simple, fast and secure URL
            shortener for everyone.
          </p>

          <div className="flex flex-row sm:flex-row gap-3 w-full sm:w-auto mt-2">

            <Link href="/shorten" className="w-full sm:w-auto">
              <button className="bg-purple-600 hover:bg-purple-700 transition rounded-lg shadow-lg py-3 px-8 font-bold text-white w-full">
                Try Now
              </button>
            </Link>

            <Link href="/github" className="w-full sm:w-auto">
              <button className="bg-purple-600 hover:bg-purple-700 transition rounded-lg shadow-lg py-3 px-8 font-bold text-white w-full">
                GitHub
              </button>
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[550px] order-2 md:order-2">
          <Image
            src="/vector.jpg"
            alt="Vector Image"
            fill
            className="object-contain mix-blend-darken"
            priority
          />
        </div>

      </section>
    </main>
  );
}
