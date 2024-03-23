import { Route, Routes } from "react-router-dom"
import AppLayout from "./layout/app-layout"
import AboutUs from "./pages/about-us/about-us"
import Blog from "./pages/blog/blog"
import Cart from "./pages/cart/cart"
import Catalog from "./pages/catalog/catalog"
import Home from "./pages/home/home"
import Likes from "./pages/likes/likes"
import Profile from "./pages/profile/profile"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="Catalog/:catalog" element={<Catalog/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="like" element={<Likes/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="about" element={<AboutUs/>}/>
          <Route path="blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
