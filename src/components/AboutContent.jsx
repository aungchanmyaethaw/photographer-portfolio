import profile from "../assets/profile-image.jpg";
import { aboutContent } from "../datas";
const AboutContent = () => {
  return (
    <div className="flex flex-col items-center mt-12 mb-12">
      <div className="w-[10rem] h-[10rem] mb-6 rounded-full border-2 border-light overflow-hidden">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-[1.315rem]  text-secondary font-heading font-bold mb-10">
        Me Thomas or Tom
      </h4>

      {aboutContent.map((text, index) => (
        <p
          key={index}
          className={`${
            index !== aboutContent.length - 1 ? "mb-4" : null
          } text-light w-full lg:w-3/4`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default AboutContent;
