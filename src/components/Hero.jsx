import React from 'react'
import hero from "../assets/hero-section.webp"

const Hero = () => {
    return (
        <section
            id="home"
            style={{ backgroundImage: `url(${hero})` }}
            className="bg-cover bg-center h-screen relative"
        >
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase">
                    Precision parts.<br />
                    Built to keep you moving.
                </h1>

                <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl">
                    Quality components for engines that demand performance, durability, and trust.
                </p>

                <a href="#buy">
                    <button className="mt-8 px-6 py-3 bg-white text-black font-semibold tracking-wide hover:bg-white/90 transition">
                        Browse Parts
                    </button>
                </a>

            </div>
        </section>
    )
}

export default Hero