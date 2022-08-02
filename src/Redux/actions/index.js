// import charAPI from "../../services/charAPI";
import { SET_CHARACTER_DETAILS } from "./actionTypes";

const setCharacterInfo = (char) => ({
  type: SET_CHARACTER_DETAILS,
  payload: char,
});

export function getCharacterDetails(id) {
  const url = 'https://thronesapi.com/api/v2/Characters/';
  return async (dispatch) => {
    try {
      const result = await fetch(`${url}${id}`);
      const data = await result.json();
      dispatch(setCharacterInfo(data));
    } catch (error) {
      console.error(error.message);
    }
  }
}

// export function getCharacterDetails(id) {
//   const url = 'https://thronesapi.com/api/v2/Characters/';
//   return async (dispatch) => {
//     try {
//       fetch(`${url}${id}`)
//       .then((response) => response.json())
//       .then((data) => dispatch(setCharacterInfo(data)))
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// }

// export const getCharacterDetails = (id) => async (dispatch) => (
//   charAPI(id)
//     .then((charDetails) => dispatch(setCharacterInfo(charDetails)))
// );

// export function getCharacterDetails(id) {
//   return async (dispatch) => {
//     charAPI(id)
//       .then((charDetails) => dispatch(setCharacterInfo(charDetails)))
//   }
// }
