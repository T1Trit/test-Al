
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productsSlice";
import { useNavigate } from "react-router-dom";

const CreateProductPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        price: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newProduct = { ...formData, id: Date.now().toString(), isLiked: false };
        dispatch(addProduct(newProduct));
        navigate("/products"); // ѕеренаправл€ем на главную страницу после создани€
    };

    return (
        <div className="create-product">
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <label>
                    Image URL:
                    <input type="text" name="image" value={formData.image} onChange={handleChange} required />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProductPage;
