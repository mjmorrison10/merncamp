import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";

function Nav() {
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();

  function logout() {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  }

  if (state && state.toke) router.push("/")
  
  return (
    <nav className="nav bg-primary d-flex justify-content-end">
      <Link href="/">
        <a className={`nav-link text-light logo ${
                current === "/" && "active"
              }`}>Social_Media_Site</a>
      </Link>

      {state !== null ? (
        <>
          <Link href="/user/dashboard">
            <a
              className={`nav-link text-light ${
                current === "/user/dashboard" && "active"
              }`}
            >
              {state && state.user && state.user.name}
            </a>
          </Link>
          <a onClick={logout} className="nav-link text-light">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link href="/login">
            <a className={`nav-link text-light ${
                current === "/login" && "active"
              }`}>Login</a>
          </Link>
          <Link href="/register">
            <a className={`nav-link text-light ${
                current === "/register" && "active"
              }`}>Register</a>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Nav;
