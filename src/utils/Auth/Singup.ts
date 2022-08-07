import { TSignup } from "../../../typings";
import { Toast, toast } from "react-hot-toast";

// let jay: TSignup;
// console.log(jay.);
export const Signup = ({ username, email, password }: TSignup) => {
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
};

// export const Signup = ({username,email,password} : TSignup) = {
// fetch(import.meta.env.VITE_BASE_URL + "/auth/register", {
//     method: "POST",
//     body: JSON.stringify({
//       name: username,
//       email: email,
//       password: password,
//     }),
//     headers: { "Content-Type": "application/json" },
//   })
//     // Handling edge Cases
//     .then((resp) => {
//       if ((resp.status as number) !== 200) {
//         toast.error("Email or User Aleady Exist");
//         throw "errr";
//       }
//       resp
//         .json()
//         .then((ress) => {
//           toast.success("Succes u can Login now");
//           console.log(ress, "dang it");
//         })
//         .catch((Err) => {
//           toast.error("EInvalid Email");
//           console.log(Err, "hehe failed");
//         });
//     })
//     .catch((err) => console.log(err, "messed up"));
// }
