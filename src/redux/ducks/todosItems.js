const ADD_ITEM = "addItem";
const DELETE_ITEM = "deleteItem";
const TOGGLE_ITEM = "toggleItem";
const LOAD_ITEM = "loadItems";
const EDIT_ITEM = "editItem";

export const addItem = (payload) => ({
    type: ADD_ITEM,
    payload: payload
})

export const deleteItem = (payload) => ({
    type: DELETE_ITEM,
    payload: payload
})

export const toggleItem = (payload) => ({
    type: TOGGLE_ITEM,
    payload: payload
})

export const loadItems = (payload) => ({
    type: LOAD_ITEM,
    payload: payload
})

export const editItem = (payload) => ({
    type: EDIT_ITEM,
    payload: payload
})

const initialState = {
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case TOGGLE_ITEM:
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload ? {...item, completed: !item.completed}: item)
            };
        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload.id ? {...item, title: action.payload.title}: item)
            };
        case LOAD_ITEM:
            return { ...state, items: action.payload }
        default:
            return state;
    }
}
