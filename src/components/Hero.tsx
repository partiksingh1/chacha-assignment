import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-5xl mx-auto px-4 text-left">
                {/* Small intro text */}
                <p className="text-lg mb-4 font-bold">👋 HEY , I AM ERICA</p>

                {/* Big gradient text */}
                <h1
                    className="text-4xl md:text-6xl font-extrabold leading-tight"
                    style={{
                        background:
                            "linear-gradient(151.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    A YOUNG CREATIVE
                    <br />DESIGNER BASED IN <br />SAN DIEGO
                </h1>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
                    <button className="bg-black font-extralight text-white border border-white px-6 py-2 rounded-3xl">
                        MY WORKS
                    </button>
                    <button className="bg-white font-extralight text-black px-6 py-2 rounded-3xl">
                        LET&apos;S TALK
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
