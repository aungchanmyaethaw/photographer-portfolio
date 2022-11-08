const SearchForm = () => {
  return (
    <form>
      <fieldset className="flex items-center">
        <input
          type="text"
          className="px-2 py-[5px] w-[18rem] bg-transparent  border-light border focus:outline-none  focus:border-secondary font-paragraph text-light rounded-l-md"
        />
        <button className="my-btn btn_small">Search</button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
