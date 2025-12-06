import books from "../../assets/Globe.svg";
import about from "../../assets/about.png";

export default function About() {
    return (
        <>
            <div className="flex flex-row justify-center m-5 p-5">
                <img
                    src={about}
                    alt="about"
                    className="w-2/3 max-w-3/5 max-h-10 object-contain px-4"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-between mr-5 mb-5 ml-5 p-5" id="about">

                <div className="flex flex-col md:text-left md:w-1/2">

                    <p className="text-xl font-bold text-black mb-4 mt-1 ml-1">Connecting You to the World of Samskrita</p>
                    <p className="text-xl text-left text-black mb-4 mt-1 ml-1 lg:w-10/12 sm:text-center md:text-left ">Sam-Shiksha is your gateway to exploring the rich world of Samskrita.
                        Whether you're a student eager to learn, a scholar seeking deeper knowledge,
                        or someone simply curious about the language, we make it easy to access resources,
                        connect with experts, and discover educational opportunities. Our goal is to build a bridge between ancient wisdom and modern learners,
                        offering everything you need to start or continue your Samskrita journey.</p>
                </div>
                <div className="flex justify-center mt-8 md:mt-0 md:w-1/2">
                    <img className="max-w-full h-auto slide-in" src={books} alt="book" />
                </div>
            </div>
        </>
    )
}