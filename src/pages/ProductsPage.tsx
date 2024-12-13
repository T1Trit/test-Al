
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, toggleLike, deleteProduct } from "../store/productsSlice";
import Card from "../components/Card";

const ProductsPage: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.items);
    const filter = useSelector((state: any) => state.products.filter);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = filter === "favorites"
        ? products.filter((product: any) => product.isLiked)
        : products;

    return (
        <div className="products-page">
            <h1>Products</h1>
            <button onClick={() => dispatch({ type: "products/setFilter", payload: "all" })}>
                All
            </button>
            <button onClick={() => dispatch({ type: "products/setFilter", payload: "favorites" })}>
                Favorites
            </button>
            <div className="products-grid">
                {filteredProducts.map((product: any) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        isLiked={product.isLiked}
                        onLike={() => dispatch(toggleLike(product.id))}
                        onDelete={() => dispatch(deleteProduct(product.id))}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
