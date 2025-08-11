import React from "react";

const LogoSection: React.FC = () => {

    return (
        <section
            className="py-10 h-100"
            style={{
                background:
                    "linear-gradient(357.27deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #000000 76.83%)",
            }}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <div className="flex items-center justify-center mt-30">
                        <img
                            src="/LogoWrapper.png"
                            className="max-w-full max-h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoSection;
