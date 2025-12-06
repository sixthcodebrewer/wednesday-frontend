import backgroundBanner from "../../assets/backendBanner.png";
import introText from "../../assets/introText.png";
import UniversityImage from "../../assets/UniversityImage.png";


export default function Landingpage() {
    return (
        <>
            <div
                className="relative flex flex-col items-center justify-center mt-16 h-[80vh] bg-cover bg-center md:flex-row lazy"
                style={{
                    backgroundImage: `url(${backgroundBanner})`,
                }}
            >
            
                <div className="p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16 z-10">
                    <img
                        src={introText}
                        alt="Illustration of Academic GPS connecting seekers and experts"
                        className="w-full h-auto mx-auto max-w-4xl"
                        loading="lazy"
                    />
                </div>

                
                <div className="absolute bottom-0 right-0 p-0 m-0 z-0">
                    <img
                        src={UniversityImage}
                        alt="Illustration of Academic GPS connecting seekers and experts"
                        className="block h-auto w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] object-contain"
                        loading="lazy"
                    />
                </div>
            </div>

           
            <section className="relative w-full flex flex-col items-center z-20 -mt-16">
                <div className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center border border-gray-200 backdrop-blur-md">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
                        Quick Search
                    </h2>
                    <p className="text-gray-600 mb-6 text-center max-w-xl">
                        Instantly find Samskrita Universities, Scholars, and Programs. Start typing to explore the world of Samskrita!
                    </p>
                </div>
            </section>
        </>
    );
}
