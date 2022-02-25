import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);

  const router = useRouter();

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      let res = error.response
      if (res.status === 401 && res.config &&!res.config.__isRetryRequest) {
        setState(null)
        window.localStorage.removeItem('auth')
        router.push("/login")
      }
      // return Promise.reject(error);
    }
  );

  // axios.interceptors.response.use(
  //   console.log("intersector engage"),
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     console.log("test---");
  //     let res = error.response;
  //     console.log("error handling --->", res.config);
  //     if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
  //       setState(null);
  //       window.localStorage.removeItem("auth");
  //       router.push("/login");
  //     }
  //     // return Promise.reject(error);
  //   }
  // );

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };