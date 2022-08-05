import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import * as dotenv from "dotenv";
// import

// interface how the response is retured
interface resp {
  body: {
    id: string;
  };
}

function Signup() {
  // dotenv.config();
  // states to store FORM DATA
  const [Firstname, setFirstname] = useState<string>("");
  const [username, setusername] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confirm, setconfirm] = useState<string>("");

  useEffect(() => {
    // Component did Mount function
    console.log(import.meta.env.VITE_BASE_URL, "urll");
  }, []);

  // ASYNC Signup submit function
  const Submit = () => {
    // verify FORMDATA is valid
    console.log(Firstname, username, email, password, confirm, "here");

    if (Firstname && username && email && password && confirm) {
      // valid email verification using regex
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (mailformat.test(email)) {
        // password handling
        if (password.trim() == confirm.trim()) {
          toast("Loading ...", { position: "top-right" });
          // POSTING request
          fetch(import.meta.env.VITE_BASE_URL + "/auth/register", {
            method: "POST",
            body: JSON.stringify({
              name: username,
              email: email,
              password: password,
            }),
            headers: { "Content-Type": "application/json" },
          })
            // Handling edge Cases
            .then((resp) => {
              if ((resp.status as number) !== 200) {
                toast.error("Email or User Aleady Exist");
                throw "errr";
              }
              resp
                .json()
                .then((ress) => {
                  toast.success("Succes u can Login now");
                  console.log(ress, "dang it");
                })
                .catch((Err) => {
                  toast.error("EInvalid Email");
                  console.log(Err, "hehe failed");
                });
            })
            .catch((err) => console.log(err, "messed up"));
        } else {
          alert("pws dont match");
        }
      } else {
        toast.error("Email Is invalid");
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
                  <h1 className='font-bold text-3xl text-gray-900'>REGISTER</h1>
                  <p>Enter your information to register</p>
                </div>
                <div>
                  <div className='flex -mx-3'>
                    <div className='w-1/2 px-3 mb-5'>
                      <label className='text-xs font-semibold px-1'>
                        First name
                      </label>
                      <div className='flex'>
                        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                          <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                        </div>
                        <input
                          type='text'
                          className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                          placeholder='Triffiny'
                          onChange={(e) => setFirstname(e.target.value)}
                          value={Firstname}
                        />
                      </div>
                    </div>
                    <div className='w-1/2 px-3 mb-5'>
                      <label className='text-xs font-semibold px-1'>
                        User Name
                      </label>
                      <div className='flex'>
                        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                          <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                        </div>
                        <input
                          type='text'
                          className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                          placeholder='Smith'
                          onChange={(e) => setusername(e.target.value)}
                          value={username}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex -mx-3'>
                    <div className='w-full px-3 mb-5'>
                      <label className='text-xs font-semibold px-1'>
                        Email
                      </label>
                      <div className='flex'>
                        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                          <i className='mdi mdi-email-outline text-gray-400 text-lg'></i>
                        </div>
                        <input
                          type='email'
                          className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                          placeholder='Triffinysmith@example.com'
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
                  <div className='flex -mx-3'>
                    <div className='w-full px-3 mb-5'>
                      <label className='text-xs font-semibold px-1'>
                        Confirm Password
                      </label>
                      <div className='flex'>
                        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                          <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                        </div>
                        <input
                          type='password'
                          className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                          placeholder='************'
                          onChange={(e) => setconfirm(e.target.value)}
                          value={confirm}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex -mx-3'>
                    <div className='w-full px-3 mb-5'>
                      <button
                        className='block w-full max-w-xs mx-auto bg-gray-500 hover:bg-gray-700 focus:bg-gray-700 text-white rounded-lg px-3 py-3 font-semibold'
                        onClick={() => Submit()}
                      >
                        REGISTER NOW
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

export default Signup;
