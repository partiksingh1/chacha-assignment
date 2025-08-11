import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section className="bg-[#FEFAEE]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">

                {/* Right section - text (mobile first order) */}
                <div className="order-1 md:order-2 flex-1 my-auto">
                    <p className="text-red-500 font-light mb-2">ABOUT</p>
                    <h2 className="text-2xl md:text-5xl font-light mb-4 leading-snug">
                        CRAFTING UNIQUE <br /> BRAND EXPERIENCES <br /> SINCE 2014
                    </h2>
                    <p className="text-gray-700 mb-6">
                        With a Visual Arts degree, my journey began in graphic design, crafting logos
                        and marketing materials. Video editing followed, where meticulous attention to
                        detail set my work apart, and I ventured into 3D modeling for immersive experiences.
                    </p>
                    <button className="border-2 px-6 py-3 rounded-3xl">
                        SCHEDULE A CALL WITH
                    </button>
                </div>

                {/* Left section - image */}
                <div className="order-2 md:order-1 flex-1">
                    <img
                        src="/Image.png"
                        alt="About me"
                        className="w-3/4 h-auto object-cover mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
