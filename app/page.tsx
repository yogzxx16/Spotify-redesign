import Image from "next/image";
import PremiumButton from "./components/PremiumButton";

export default function Home() {
  return (
    
    <main id="top" className="pt-24 min-h-screen bg-black text-white px-6">


      <div className="relative z-10">
  {/* your existing h1, p, buttons stay here */}


  {/* Hero Section */}
  
<section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none opacity-20">
  <Image
    src="/ai-wave-bg.png"
    alt="AI sound wave background"
    fill
    className="object-cover"
    priority
  />
</div>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/40 to-black"></div>


<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),transparent_0%)]"></div>


    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_0_30px_rgba(34,197,94,0.15)]">

  Music that understands your mood
</h1>


    <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
  Discover playlists powered by AI — personalized, adaptive, and made just for you.
</p>


    <div className="flex gap-4 justify-center mt-8">
  <a
    href="#trending"
    className="inline-block border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/30"
  >
    Trending Now
  </a>

  <PremiumButton text="Get Premium" href="#premium" />
</div>



  </section>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-16"></div>

  {/* Features Section */}
  <div className="absolute inset-x-0 -top-24 h-48 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.3),transparent_70%)]"></div>

 <section id="features" className="max-w-6xl mx-auto py-20">

    <h2 className="text-3xl font-bold text-center mb-12">
      AI-Powered Features
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-green-500 transition
">
       <h3 className="text-xl font-semibold mb-3 text-green-400">

          AI Mood Detection
        </h3>
        <p className="text-gray-400">
          Music recommendations based on your mood — calm, focused, happy, or energetic.
        </p>
      </div>

      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-green-500 transition
">
       <h3 className="text-xl font-semibold mb-3 text-green-400">

          Smart Discovery
        </h3>
        <p className="text-gray-400">
          Discover new artists and tracks with AI-powered suggestions tailored to you.
        </p>
      </div>

      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-green-500 transition
">
       <h3 className="text-xl font-semibold mb-3 text-green-400">
          Daily AI Mix
        </h3>
        <p className="text-gray-400">
          Fresh playlists generated every day using listening behavior and trends.
        </p>
      </div>
    </div>
  </section>
  <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-16"></div>

    {/* Music Preview Section */}
 <section id="trending" className="max-w-7xl mx-auto py-20">

    <h2 className="text-3xl font-bold mb-10">
      Trending Now
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      
     {/* Card 1 */}
<div className="bg-zinc-900 p-4 rounded-xl cursor-pointer group transition transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">

  <div className="aspect-square rounded-lg mb-4 relative overflow-hidden">

  <Image
    src="/albums/album0001.jpg"
    alt="Album cover"
    fill
    className="object-cover"
  />

  {/* Play button overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40">
    <div className="bg-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
      ▶
    </div>
  </div>
</div>


  <h4 className="font-semibold">Believer</h4>
  <p className="text-sm text-gray-400">Imagine Dragons</p>
</div>


      {/* Card 2 */}
<div className="bg-zinc-900 p-4 rounded-xl cursor-pointer group transition transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">

  <div className="aspect-square rounded-lg mb-4 relative overflow-hidden">

  <Image
    src="/albums/album002.jpg"
    alt="Album cover"
    fill
    className="object-cover"
  />

  {/* Play button overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40">
    <div className="bg-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
      ▶
    </div>
  </div>
</div>


  <h4 className="font-semibold">Blinding Lights</h4>
  <p className="text-sm text-gray-400">The Weekend</p>
</div>


     {/* Card 3 */}
<div className="bg-zinc-900 p-4 rounded-xl cursor-pointer group transition transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">

 <div className="aspect-square rounded-lg mb-4 relative overflow-hidden">
  <Image
    src="/albums/album003.jpg"
    alt="Album cover"
    fill
    className="object-cover"
  />

  {/* Play button overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40">
    <div className="bg-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
      ▶
    </div>
  </div>
</div>


  <h4 className="font-semibold">I Wanna Be Yours</h4>
  <p className="text-sm text-gray-400">Arctic Monkeys</p>
</div>

     {/* Card 4 */}
<div className="bg-zinc-900 p-4 rounded-xl cursor-pointer group transition transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">

  <div className="aspect-square rounded-lg mb-4 relative overflow-hidden">
  <Image
    src="/albums/album0004.jpg"
    alt="Album cover"
    fill
    className="object-cover"
  />

  {/* Play button overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40">
    <div className="bg-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
      ▶
    </div>
  </div>
</div>


  <h4 className="font-semibold">Oru Pere Varalaaru (Jana Nayagan) </h4>
  <p className="text-sm text-gray-400">Anirudh Ravichander</p>
</div>

    </div>
  </section>
  <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-16"></div>


    {/* Plans Section */}
  <section id="premium" className="max-w-5xl mx-auto py-20 text-center">

    <h2 className="text-3xl font-bold mb-12">
      Choose Your Plan
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Free Plan */}
      <div className="border border-zinc-800 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Free</h3>
        <ul className="text-gray-400 mb-6 space-y-2">
          <li>Ads supported</li>
          <li>Limited skips</li>
          <li>Basic AI recommendations</li>
        </ul>
        <a
  href="#top"
  className="inline-block border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/30"
  
>
  Get Started
</a>

      </div>

      {/* Premium Plan */}
      <div className="bg-zinc-900 p-8 rounded-xl border border-green-500 relative">
        <span className="absolute -top-3 right-6 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
  MOST POPULAR
</span>

        <h3 className="text-2xl font-semibold mb-4">Premium</h3>
        <ul className="text-gray-400 mb-6 space-y-2">
          <li>No ads</li>
          <li>Offline listening</li>
          <li>Advanced AI personalization</li>
        </ul>
        <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/30"
>
          Upgrade to Premium
        </button>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="border-t border-zinc-800 py-6 text-center text-gray-500 text-sm">
    Spotify AI Rebrand — Built with Next.js & Tailwind CSS  
    <br />
    © 2025 — Educational Project
  </footer>
  <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* Logo */}
   <div className="flex items-center gap-2">
  <Image
    src="/albums/spotify-logo.png"
    alt="Spotify Logo"
    width={32}
    height={32}
  />
 
  <a href="#top" className="text-xl font-bold tracking-tight hover:text-green-500 transition">
        Spotify
      </a>

</div>


    {/* Links */}
    <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
      <a href="#features" className="hover:text-white transition">
        Features
      </a>
      <a href="#trending" className="hover:text-white transition">
        Trending
      </a>
      <a href="#premium" className="hover:text-white transition">
        Premium
      </a>
    </div>

    {/* CTA */}
   <a
  href="#premium"
  className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-4 py-2 rounded-full font-semibold text-sm transition"
>
  Get Premium
</a>

  </div>
</nav>


</main>

  );
}
