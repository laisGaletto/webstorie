import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";

function App() {
  const [products, setProducts] = useState([])
  const [showSidebarCart, setShowSidebarCart] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const addCartTotal = (value) => {
    setCartTotal(cartTotal + value)
  }

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];
    if (selectedProducts.includes(productToAdd)) return;
    setSelectedProducts(selectedProducts.concat(productToAdd));
    setCartTotal(cartTotal + productToAdd.price);
  };

  const removeProductFromCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    )
    setSelectedProducts(newSelectedProducts)
  }

  return (
    <Router>
      <div className="App">
        <Navbar selectedProducts={selectedProducts} setShowSidebarCart={ setShowSidebarCart } />
        <main>
          <Routes>
            <Route path="/" element={
              <HomePage
                products={products}
                setShowSidebarCart={setShowSidebarCart}
                showSidebarCart={showSidebarCart}
                addProductToCart={addProductToCart}
                selectedProducts={selectedProducts}
                removeProductFromCart={removeProductFromCart}
                cartTotal={cartTotal}
                addCartTotal={addCartTotal}
              />
            }
            />
            <Route path="/products" element={<ProductsPage products={products} />} />
          </Routes>
        
        </main>
        <Footer/>
      </div>
    </Router>
  )

}

export default App;
