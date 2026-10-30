import React from "react";

const ProductCard = ({ image, title, price, desc ,setProccess,setProductData}) => {
  return (
    <div className="group relative w-[300px]">

      {/* Glow background */}
      {/* <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition"></div> */}

      {/* Card */}
      <div className="relative  backdrop-blur-[2px] border border-white/10 rounded-2xl overflow-hidden transform transition duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105 shadow-xl">

        {/* Image */}
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 text-white">

          <h2 className="text-lg font-bold tracking-tight">
            {title}
          </h2>

          <p className="text-white/60 text-sm mt-2 leading-relaxed">
            {desc}
          </p>

          {/* Price */}
          <div className="mt-4 text-xl font-bold text-white">
            {price}PKR
          </div>

          {/* Button */}
          <button onClick={() => {
            setProccess(true)
            setProductData({title:title,price:price,desc:desc})
            }} className="mt-4 w-full py-2 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition">
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;