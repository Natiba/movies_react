// import React, {createContext, useReducer, useEffect} from 'react';
// import AppReducer from './AppReducer'

// // initial state 

// const initialState = {
//     favorites: [],
//     watched: []
// };

// // create context

// export const  GlobalContext = createContext (initialState);

// // provider components

// export const GlobalProvider = props => {
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     // actions

// const addMovieToFavorite = movie => {
//     dispatch({type: "ADD_MOVIE_TO_FAVORITES", payload: movie})
// }

//     return (
//         <GlobalContext.Provider 
//         value={{
//             favorites: state.favorites,
//              watched: state.watched, addMovieToFavorite, 
//             }} 
//              >
//             {props.children}
//         </GlobalContext.Provider>
//     )
// }

// export default GlobalState;