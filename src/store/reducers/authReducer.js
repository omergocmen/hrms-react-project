import { SIGN_IN, SIGN_OUT } from "../actions/authActions";

const initialState = {
  authIn:{},
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      state.authIn=payload
      return state;
    case SIGN_OUT:
      state.authIn=payload
      return state;
    default:
      return state;
  }
}
