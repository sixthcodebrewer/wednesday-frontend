import { useLocation } from "wouter";
import universityBanner from "../../assets/UniversityImage.png";
import scholarBanner from "../../assets/scholarHeader.png";
import granthas from "../../assets/granthas.png";

const Banner = () => {
  const [locations] = useLocation();

  const baseClasses =
    "flex flex-col md:flex-row flex-grow-2 justify-between items-center h-auto text-black mt-16";

  const textClasses =
    "flex flex-col text-center md:text-left md:w-1/2";

  const imgWrapperClasses =
    "md:w-1/2 flex justify-end items-end m-0 p-0"; 

  const imgClasses = "block w-full h-auto object-contain"; 

  return (
    <>
      {locations === "/universities" && (
        <div className={baseClasses}>
          <div className={textClasses}>
            <p className="m-5 text-2xl">Registered with BGPS</p>
            <p className="m-5 text-5xl font-bold text-gray-800 font-serif bg-gradient-to-r from-red-700 via-gray-500 to-black-700 text-transparent bg-clip-text">
              Samskrita Universities
            </p>
            <p className="m-5 text-xl">
              Discover a wealth of curated content, encompassing the depth of
              language studies and research. Connect with scholars and experts
              specializing in Shastric texts and disciplines across the
              country. Your quest for knowledge finds its true destination.
            </p>
          </div>
          <div className={imgWrapperClasses}>
            <img src={universityBanner} alt="" className={imgClasses} />
          </div>
        </div>
      )}

      {locations === "/scholars" && (
        <div className={baseClasses}>
          <div className={textClasses}>
            <p className="m-5 text-2xl">Registered with BGPS</p>
            <p className="m-5 text-5xl font-bold text-gray-800 font-serif bg-gradient-to-r from-red-700 via-gray-500 to-black-700 text-transparent bg-clip-text">
              Samskrita Scholars
            </p>
            <p className="m-5 text-xl">
              Discover a wealth of curated content, encompassing the depth of
              language studies and research. Connect with scholars and experts
              specializing in Shastric texts and disciplines across the
              country. Your quest for knowledge finds its true destination.
            </p>
          </div>
          <div className={imgWrapperClasses}>
            <img src={scholarBanner} alt="" className={imgClasses} />
          </div>
        </div>
      )}

      {locations === "/books" && (
        <div className={baseClasses}>
          <div className={textClasses}>
            <p className="m-5 text-2xl">Registered with BGPS</p>
            <p className="m-5 text-5xl font-bold text-gray-800 font-serif bg-gradient-to-r from-red-700 via-gray-500 to-black-700 text-transparent bg-clip-text">
              Samskrita Granthas
            </p>
            <p className="m-5 text-xl">
              Discover a wealth of curated content, encompassing the depth of
              language studies and research. Connect with scholars and experts
              specializing in Shastric texts and disciplines across the
              country. Your quest for knowledge finds its true destination.
            </p>
          </div>
          <div className={imgWrapperClasses}>
            <img src={granthas} alt="" className={imgClasses} />
          </div>
        </div>
      )}

      {locations === "/programs" && (
        <div className={baseClasses}>
          <div className={textClasses}>
            <p className="m-5 text-2xl">Registered with BGPS</p>
            <p className="m-5 text-5xl font-bold text-gray-800 font-serif bg-gradient-to-r from-red-700 via-gray-500 to-black-700 text-transparent bg-clip-text">
              Samskrita Programs
            </p>
            <p className="m-5 text-xl">
              Discover a wealth of curated content, encompassing the depth of
              language studies and research. Connect with scholars and experts
              specializing in Shastric texts and disciplines across the
              country. Your quest for knowledge finds its true destination.
            </p>
          </div>
          <div className={imgWrapperClasses}>
            <img src={granthas} alt="" className={imgClasses} />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
