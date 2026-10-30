import { useState } from "react"
import { SquareX } from 'lucide-react';
const Form = ({ data, setProccess }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const sender = (e) => {
        e.preventDefault();

        const message = `
🛒 New Order

📦 Product: ${data.title}
💰 Price: Rs ${data.price}
📝 Description: ${data.desc}

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}
  `;

        const encodedMessage = encodeURIComponent(message);

        const whatsappNumber = "923134307889"; // without +, no spaces

        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
        setAddress("")
        setName("")
        setName("")
        setProccess(false)
    };
    return (
        <section id='form' onSubmit={(e) => { sender(e) }} className='left-0 font-mono right-0 bottom-0 flex justify-center items-center bg-black/40 fixed backdrop-blur-sm z-910 top-0'>
            <form className="w-[90%] max-w-md bg-[#000000] text-white flex flex-col gap-6 py-10 px-8 border border-white/10 rounded-2xl shadow-lg">

                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        One Time Form
                    </h2>
                    <SquareX onClick={() => { setProccess(false) }} />

                </div>

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-white/60">
                        Name
                    </label>
                    <input
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 px-1 transition-all duration-300 placeholder:text-white/30"
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm text-white/60">
                        Phone
                    </label>
                    <input
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone"
                        className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 px-1 transition-all duration-300 placeholder:text-white/30"
                    />
                </div>

                {/* Address */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="text-sm text-white/60">
                        Address
                    </label>
                    <input
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text"
                        id="address"
                        placeholder="Enter your address"
                        className="bg-transparent border-b border-white/20 focus:border-white outline-none py-2 px-1 transition-all duration-300 placeholder:text-white/30"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="mt-4 border border-white/20 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                    Checkout
                </button>
            </form>
        </section>
    )
}

export default Form