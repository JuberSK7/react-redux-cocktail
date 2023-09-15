import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../redux/feature/createCocktailSlice";

const SearchBox = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch();
  const handleChange = () => {
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchCocktails({ searchText }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form>
          <div className="form-group" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              placeholder="Search Your favourite.."
              style={{ width: "250px" , marginTop: '2rem'}}
              ref={searchTerm}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
