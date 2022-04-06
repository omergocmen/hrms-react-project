export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export function signIn(auth) {
  return {
    type: SIGN_IN,
    payload: auth,
  };
}

export function signOut(auth) {
  return {
    type: SIGN_OUT,
    payload: auth,
  };
}
