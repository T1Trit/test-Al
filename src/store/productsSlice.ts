
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../api/apiService";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await apiService.get("/products");
    return response.data;
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        filter: "all",
    },
    reducers: {
        toggleLike: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload);
            if (product) product.isLiked = !product.isLiked;
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        addProduct: (state, action) => {
            state.items.push(action.payload); // Добавляем новый продукт
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload.map((product) => ({ ...product, isLiked: false }));
        });
    },
});

export const { toggleLike, deleteProduct, setFilter, addProduct } = productsSlice.actions;
export default productsSlice.reducer;