import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../redux/feature/createCocktailSlice";
import SpinnerLoading from "../component/shared/SpinnerLoading";
import { Link } from "react-router-dom";


const Home = () => {
  const [modifyCocktail, setModifyCocktail] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.cocktailapp,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const sortCocktail = cocktails.map((item) => {
        const {
          idDrink,
          strAlcoholic,
          strCategory,
          strGlass,
          strDrinkThumb,
          strDrink,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifyCocktail(sortCocktail);
    } else {
      setModifyCocktail([]);
    }
  }, [cocktails]);
  if (loading) {
    return <SpinnerLoading />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!cocktails) {
    return (
      <Layout>
        <h2>No cocktail found on this name ..</h2>
      </Layout>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          {modifyCocktail.map((item) => (
            <div className="col-md-3 mt-3 m-1" key={item.id}>
              <div className="card m-2" style={{ width: "18rem", border: '2px solid gray', borderRadius: '6px'}}>
                <img src={item.img} className="card-img-top" width={'100%'} alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link
                    to={`/productdetail/${item.id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
