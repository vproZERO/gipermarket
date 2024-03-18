import { Route, Routes } from "react-router-dom"
import AppLayout from "./layout/app-layout"
import Cart from "./pages/cart/cart"
import Catalog from "./pages/catalog/catalog"
import Home from "./pages/home/home"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="Catalog/:catalog" element={<Catalog/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
