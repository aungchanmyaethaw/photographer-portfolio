const Slide = ({ image, name, content, currentCls }) => {
  return (
    <article className={currentCls}>
      <img
        src={image}
        alt={name}
        className="w-[5rem] h-[5rem] rounded-full border-2 border-light mb-4"
      />
      <h4 className="text-base lg:text-[1.315rem] font-bold font-heading text-secondary mb-4  capitalize">
        {name}
      </h4>
      <p className="text-light font-paragraph text-center text-sm  lg:text-base w-3/4 ">
        {content}
      </p>
    </article>
  );
};

export default Slide;
