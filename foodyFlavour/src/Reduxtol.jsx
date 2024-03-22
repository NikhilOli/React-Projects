import React from 'react'

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        //action: function
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false,
            });
        },
        deleteTask: (state, action) => {
            state.splice(action.payload, 1)
        }
    }

})
// Extract the action creators and reducer from the slice
const { actions, reducer } = counterSlice;

// Create the Redux store
const store = configureStore({
    reducer: {
        counter: reducer,
        // You can add more reducers here
    },
});

// Export the action creators
export const { increment, decrement } = actions;

export default store;

        </div >
    )
}

export default Reduxtol