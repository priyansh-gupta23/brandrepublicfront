import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    query:null,
    errors: [],
}

export const  queryReducer = createSlice({
    name: 'query',
    initialState,
    reducers:{
        addquery: (state, action) => {
            state.query = action.payload;
        },
        iserror: (state, action) => {
            state.errors.push(action.payload);
        },
        removeerror: (state, action) => {
            state.errors = [];
        }
    }
});

export const { addquery, 
    iserror, 
    removeerror
} = queryReducer.actions;

export default queryReducer.reducer;
