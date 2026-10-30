import React from 'react'
import backlights from "../assets/car-backlights.webp";
import bottom from "../assets/car-bottom.webp";
import front from "../assets/car-front.webp";
import hood from "../assets/car-hood.webp";
import mouth from "../assets/car-mouth.webp";
import blacklights from "../assets/hunter-car-blacklights.webp";
import bumper from "../assets/Rear-bumper.webp";
import reinforcements from "../assets/reinforcemnets.webp";
import ProductCard from './ProductCard';
const products = [
    {
        id: 1,
        title: "Car Backlights",
        price: 699,
        image: backlights,
        desc: "Stylish rear lighting for better visibility and modern look."
    },
    {
        id: 2,
        title: "Car Bottom Kit",
        price: 1399,
        image: bottom,
        desc: "Full underbody kit built for protection and enhanced stance."
    },
    {
        id: 3,
        title: "Car Front Kit",
        price: 1599,
        image: front,
        desc: "Front styling kit for aggressive look and improved aerodynamics."
    },
    {
        id: 4,
        title: "Car Hood",
        price: 2999,
        image: hood,
        desc: "Durable hood replacement designed for strength and fit."
    },
    {
        id: 5,
        title: "Car Mouth Grill",
        price: 500,
        image: mouth,
        desc: "Front grill upgrade for bold appearance and airflow styling."
    },
    {
        id: 6,
        title: "Hunter Blacklights",
        price: 1200,
        image: blacklights,
        desc: "High-intensity lighting setup for night driving visibility."
    },
    {
        id: 7,
        title: "Rear Bumper",
        price: 1300,
        image: bumper,
        desc: "Strong rear bumper for protection and clean design finish."
    },
    {
        id: 8,
        title: "Reinforcements Kit",
        price: 2000,
        image: reinforcements,
        desc: "Structural reinforcement kit for durability and stability."
    },
];

const Shop = ({setProccess,setProductData}) => {
    return (
        <>
            <div className="relative min-h-screen bg-black overflow-hidden shoper">

                {/* stars layer */}
                <div className="absolute inset-0 stars"></div>
                <div className='flex flex-col relative z-10'>
                    <h2 className="text-4xl text-center md:text-6xl font-extrabold tracking-tight leading-tight uppercase pt-10 pb-18">
                        Shop Parts
                    </h2>
                    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto' id='buy'>
                        {products.map(item => (
                            <ProductCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                                setProccess={setProccess}
                                setProductData={setProductData}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </>
    )
}

export default Shop