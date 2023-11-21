import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
    id: string;
    title: string;
    slug: string;
    price: string;
    image: string;
    quantity: number;
};

type CartState = {
    cartItems: CartItem[];
    totalCartItems: number;
    totalPrice: number;
};

const cartInitialState: CartState = {
    cartItems: [],
    totalCartItems: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<CartItem>) {
            let productPrice = Number(action.payload.price);
            let indexOfCurretItem = state.cartItems
                .map((item) => item.id)
                .indexOf(action.payload.id);

            let exists = state.cartItems
                .map((item) => item.id)
                .includes(action.payload.id);

            if (!isNaN(productPrice)) {
                state.totalPrice += productPrice;
            } else {
                console.error("Product Price string is not a valid number");
            }

            if (!exists) {
                state.cartItems = [...state.cartItems, action.payload];
            } else {
                state.cartItems[indexOfCurretItem].quantity += 1;
            }

            state.totalCartItems += 1;
        },
        removeItemFromCart(state, action) {
            let indexOfCurretItem = state.cartItems
                .map((item) => item.id)
                .indexOf(action.payload);

            let productPrice = Number(state.cartItems[indexOfCurretItem].price);
            let itemQuantity = state.cartItems[indexOfCurretItem].quantity;

            if (!isNaN(productPrice)) {
                state.totalPrice -= productPrice;
            } else {
                console.error("Product Price string is not a valid number");
            }

            if (itemQuantity === 1) {
                let newCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload
                );
                state.cartItems = newCartItems;
            } else {
                state.cartItems[indexOfCurretItem].quantity -= 1;
            }

            state.totalCartItems -= 1;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
