
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage"; // ����������� ��������
import { Provider } from "react-redux";
import store from "./store/store";

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/create-product" element={<CreateProductPage />} /> {/* ����� ������� */}
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
        </Router>
    </Provider>
);

export default App;
