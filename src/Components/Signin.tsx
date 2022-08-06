import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import * as dotenv from "dotenv";
// import

// interface how the response is retured
interface resp {
  body: {
    id: string;
  };
}

function Signin() {
  // dotenv.config();
  // states to store FORM DATA
  let history = useNavigate();
  const [email, setemail] = useState<string>("");

  const [password, setpassword] = useState<string>("");

  useEffect(() => {
    // Component did Mount function
    console.log(import.meta.env.VITE_BASE_URL, "urll");
  }, []);

  // ASYNC Signup submit function
  const Submit = () => {
    // verify FORMDATA is valid
    console.log(email, password, "here");

    if (email && password) {
      // valid email verification using regex

      // POSTING request
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (mailformat.test(email)) {
        toast("Loading ...", { position: "top-right" });
        fetch(import.meta.env.VITE_BASE_URL + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          // Handling edge Cases
          .then((resp) => {
            console.log(resp.headers.get("auth-token"));
            // for (var pair of) {
            // }
            resp
              .json()
              .then((ress) => {
                if ((resp.status as number) !== 200) {
                  console.log(ress.errMsg, "hehe");
                  toast.error(`${ress.errMsg}`);
                  return;
                } else {
                  localStorage.setItem(
                    "auth-token",
                    resp.headers.get("auth-token") as string
                  );
                  const run = () => {
                    console.log("verify 0");
                    setTimeout(() => {
                      console.log("verify 1");
                      history("/Dashbard");
                    }, 2000);
                  };
                  run();
                  toast.success("Succes u can Login now");
                  console.log(ress, resp, "dang it");
                }
              })
              .catch((Err) => {
                toast.error(`ERROR WHILE LOGIN ${Err}`);
                console.log(Err, "hehe failed");
              });
          })
          .catch((err) => console.log(err, "messed up"));
      } else {
        toast.error("email invalid");
      }
    } else {
      alert("DUDE U HAVENT FILLED EM");
    }
  };
  return (
    // TAILWIND login component
    <div>
      <div className='App'>
        <div className='min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5'>
          <div className='bg-gray-100 text-gray-500 rounded-3xl shadow-xl  overflow-hidden w-4/5'>
            <div className='md:flex w-full'>
              <div className='hidden md:block w-1/2 bg-indigo-500'>
                <img
                  className='w-full h-full'
                  src='https://static.toiimg.com/thumb/msid-89374999,imgsize-15328,width-400,resizemode-4/89374999.jpg'
                />
              </div>
              <div className='w-full md:w-1/2 py-10 px-5 md:px-10'>
                <div className='text-center mb-10'>
                  <h1 className='font-bold text-3xl text-gray-900'>Login</h1>
                  <p>Enter your information to Login</p>
                </div>
                <div className=''>
                  <div className='flex -mx-3'>
                    <div className='w-full px-3 mb-5'>
                      <label className='text-xs font-semibold px-1'>
                        EMail
                      </label>
                      <div className='flex'>
                        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                          <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                        </div>
                        <input
                          type='text'
                          className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                          placeholder='Smith'
                          onChange={(e) => setemail(e.target.value)}
                          value={email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex -mx-3'>
                    <div className='w-full px-3 mb-4'>
                      <label className='text-xs font-semibold px-1'>
                        Password
                      </label>
                      <div className='flex'>
                        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                          <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                        </div>
                        <input
                          type='password'
                          className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                          placeholder='************'
                          onChange={(e) => setpassword(e.target.value)}
                          value={password}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center px-5'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                    />
                    <label className='ml-2 block text-sm text-gray-900'>
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <div className='flex -mx-3 pt-9'>
                    <div className='w-full px-3 mb-5'>
                      <button
                        className='block w-full max-w-xs mx-auto bg-gray-500 hover:bg-gray-700 focus:bg-gray-700 text-white rounded-lg px-3 py-3 font-semibold'
                        onClick={() => Submit()}
                      >
                        Login NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
    </div>
  );
}

export default Signin;
