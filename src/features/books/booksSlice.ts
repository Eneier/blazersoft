import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IBook {
    name: string;
    price: number;
    category: string;
    description: string;
}

export interface IBooksState {
    books: IBook[];
}

const initialState: IBooksState = {
    books: [
        {name: 'Alice1', price: 200, category: 'Fantasy', description: 'very nice book'},
    ],
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state: IBooksState, action: PayloadAction<IBook>): IBooksState => {
            state.books = [...state.books, action.payload];
            return state;
        },
        updateBook: (state: IBooksState, action: PayloadAction<IBook>): IBooksState => {
            const updatedIndex = state.books.findIndex((book) => book.name === action.payload.name);

            if (updatedIndex !== -1) {
                state.books = state.books.map((book, index) =>
                    index === updatedIndex ? action.payload : book
                );
            }
            return state;
        },
        removeBook: (state: IBooksState, action: PayloadAction<string>): IBooksState => {
            state.books = state.books.filter((book) => book.name !== action.payload);
            return state;
        },
    },
});

export const { addBook, removeBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
