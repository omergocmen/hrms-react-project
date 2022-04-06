import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import { signIn, signOut } from "./store/actions/authActions";
import decodeToken from "./utilities/jwtDecoder.js/jwtDecoder";

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("token")) {
    dispatch(signIn({auth:true,clientType:decodeToken().clientType}));
  }

  const auth = useSelector((state) => state.auth.authIn);
  console.log(auth);
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
