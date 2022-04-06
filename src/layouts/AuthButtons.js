import React from "react";
import { useSelector } from "react-redux";
import { Menu, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

export default function AuthButtons() {
  const auth = useSelector((state) => state.auth.authIn.auth);
  const navigate=useNavigate();

  const dispatch = useDispatch();
  const signedOut = () => {
    localStorage.clear();
    dispatch(signOut({ auth: false, clientType: "" }));
    navigate("/login")
    window.location.reload();
  };
  return auth ? (
      <Menu.Menu position="right">
        <Menu.Item>
          <Button
            onClick={() => signedOut()}
            inverted
            color="violet"
          >
            Çıkış
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as={NavLink} to="/profil" inverted color="violet">
            Profil
          </Button>
        </Menu.Item>
      </Menu.Menu>
  ) : (
    <Menu.Menu position="right">
    <Menu.Item>
      <Button
        as={NavLink}
        to="/login"
        inverted
        color="violet"
      >
        Giriş Yap
      </Button>
    </Menu.Item>
    <Menu.Item>
      <Button as={NavLink} to="/signin" inverted color="violet">
        Kayıt Ol
      </Button>
    </Menu.Item>
  </Menu.Menu>
  );
}
