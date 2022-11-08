import hero from "../assets/hero-image.jpg";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center min-h-screen py-20 md:pb-16 lg:py-0">
      {/* first-col */}
      <div className="basis-1/2 grow flex  justify-center mb-8 lg:mb-0">
        <div className="hero-image-wrapper lg:max-w-xs md:w-2/3 sm:w-full border border-light rounded-lg overflow-hidden">
          <img src={hero} alt="hero-image" className="object-cover h-full" />
        </div>
      </div>
      {/* second-col */}
      <div className="basis-1/2 grow text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
        <h4 className="text-[1.315rem] lg:text-[1.75rem] text-secondary font-heading font-bold">
          Hi I'm Thomas
        </h4>
        <h1 className="text-[2.4rem] lg:text-[4.2rem] text-light font-heading font-normal mb-2 lg:mb-6 lg:leading-[4.5rem]">
          Photographer
        </h1>
        <p className="text-light font-paragraph w-full  lg:w-2/3 mb-6 lg:ms-0 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolores voluptate vel tempora, fugiat quasi dicta incidunt eveniet.
        </p>
        <button className="my-btn">About me</button>
      </div>
    </section>
  );
};

export default Hero;
