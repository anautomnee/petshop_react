import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
import { Categories } from "../pages/Categories"
import { Category } from "../pages/Category"
import { Products } from "../pages/Products"
import { Product } from "../pages/Product"
import { Cart } from "../pages/Cart"
import { Error } from "../pages/Error"

export const MainRouter = () => {
    return <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<Error />} />
    </Routes>
}