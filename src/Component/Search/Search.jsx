import { useState } from "react";
import "./search.css";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickSearch = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className={`search-input ${
          isOpen ? "open" : ""
        } border-2 border-red-500`}
        placeholder="Search"
      />
      <button onClick={handleClickSearch} className="search-button -ml-5">
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default Search;
