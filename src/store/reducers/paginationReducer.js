import { CHANGE_PAGE } from "../actions/paginationActions";
import { CHANGE_TOTAL_PAGE } from "../actions/paginationActions";



const initialState = {
  selectedPage: 2,
  totalPage: null,
  range: 8,
};

export default function paginationReducer(
  
  state = initialState,
  { type, payload }) 
  {
  switch (type) {
    case CHANGE_PAGE:
      let newState={...state}
      newState.selectedPage = payload;
      return newState;
    case CHANGE_TOTAL_PAGE:
      state.totalPage=payload;
      return state;
    default:
      return state;
  }
}