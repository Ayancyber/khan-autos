import React from 'react'
import whyUs from "../assets/whyus.webp"
const About = () => {
    return (
        <section id='whyUs' style={{ backgroundImage: `url(${whyUs})` }} className='pt-20 pb-20'>
            <h2 className="text-4xl text-center md:text-6xl font-extrabold tracking-tight leading-tight uppercase">
                Why Buy From Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 px-4">

                {/* Card 1 */}
                <div className=" border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Genuine & Reliable Parts
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                        We source only tested, high-quality components built to handle real engine stress—no fake shortcuts.
                    </p>
                </div>

                {/* Card 2 */}
                <div className=" border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Wide Vehicle Coverage
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                        From compact cars to heavy-duty machines, we provide parts that fit a wide range of vehicles.
                    </p>
                </div>

                {/* Card 3 */}
                <div className=" border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Fast Dispatch & Delivery
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                        We reduce downtime with quick processing and reliable delivery so your work keeps moving.
                    </p>
                </div>

                {/* Card 4 */}
                <div className=" border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Trusted by Mechanics
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                        Built on consistency—fair pricing, honest quality, and support that doesn't disappear after purchase.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About
