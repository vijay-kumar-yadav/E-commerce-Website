import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import "./App.css";
import Cards from "./components/Card/Cards";
import Carts from "./components/Cart/Carts";
import Navbar from "./components/Navbar/Navbar";
import productList from "./productList.json";
//    fetch("https://fakestoreapi.com/products")

function App() {
  const [cart, setCart] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const incCart = (product) => {
    const findProductIndex = cart.findIndex((data) => data.id === product.id);
    cart[findProductIndex].quantity += 1;
    setCart([...cart]);
    console.log(cart);
  };
  const decCart = (product) => {
    const findProductIndex = cart.findIndex((data) => data.id === product.id);
    cart[findProductIndex].quantity -= 1;
    if (cart[findProductIndex].quantity === 0) {
      cart.splice(findProductIndex, 1);
    }
    setCart([...cart]);
    console.log(cart);
  };
  useEffect(() => {
    if (isDarkTheme) {
      document.body.style.backgroundColor = "grey";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [isDarkTheme]);
  const renderNavAndBody = () => (
    <Grid stretched>
      <Cards
        products={productList}
        addCart={setCart}
        carts={cart}
        setIsDarkThemes={setIsDarkTheme}
        isDarkThemes={isDarkTheme}
      />
    </Grid>
  );
  return (
    <>
      <Grid.Row>
        <Navbar
          carts={cart}
          setIsDarkThemes={setIsDarkTheme}
          isDarkThemes={isDarkTheme}
        />
      </Grid.Row>
      <Routes>
        <Route path="/" element={renderNavAndBody()} />
        <Route
          path="/cart"
          element={
            <Carts
              addCart={setCart}
              isDarkThemes={isDarkTheme}
              incCarts={incCart}
              decCarts={decCart}
              carts={cart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
