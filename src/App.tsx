import { Routes, Route } from "react-router-dom"

import { CategoryLayout } from "./cases/categories/components/category-layout"
import { CategoryForm } from "./cases/categories/components/category-form"

import { BrandLayout } from "./cases/brands/components/brand-layout"
import { BrandForm } from "./cases/brands/components/brand-form"

import { ProductLayout } from "./cases/products/components/product-layout"
import { ProductForm } from "./cases/products/components/product-form"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="wrapper">
      <main>
        <Routes>
          {/* CATEGORIES */}
          <Route path="/categories" element={<CategoryLayout />} />
          <Route path="/categories/new" element={<CategoryForm />} />
          <Route path="/categories/:id" element={<CategoryForm />} />

          {/* BRANDS */}
          <Route path="/brands" element={<BrandLayout />} />
          <Route path="/brands/new" element={<BrandForm />} />
          <Route path="/brands/:id" element={<BrandForm />} />

          {/* PRODUCTS */}
          <Route path="/products" element={<ProductLayout />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductForm />} />
        </Routes>
      </main>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
