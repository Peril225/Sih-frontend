import { TSignIp } from "../../../typings";
import { toast } from "react-hot-toast";
import { LOGIN } from "../../Redux/Login/action";

export const SignIn = ({ email, password, history, dispatch }: TSignIp) => {
  toast("Loading ...", { position: "top-right" });
  fetch(import.meta.env.VITE_BASE_URL + "/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  })
    // Handling edge Cases
    .then((resp) => {
      // for (var pair of) {
      // }
      resp
        .json()
        .then((ress) => {
          if ((resp.status as number) !== 200) {
            // console.log(ress.errMsg, "hehe");
            toast.error(`${ress.errMsg}`);
            return;
          } else {
            localStorage.setItem(
              "auth-token",
              resp.headers.get("auth-token") as string
            );
            dispatch(LOGIN());

            const run = () => {
              // console.log("verify 0");
              setTimeout(() => {
                // console.log("verify 1");
                history("/Dashboard");
              }, 2000);
            };
            run();
            toast.success("Succes u can Login now");
            // console.log(ress, resp, "dang it");
          }
        })
        .catch((Err) => {
          toast.error(`ERROR WHILE LOGIN ${Err}`);
          // console.log(Err, "hehe failed");
        });
    });
  // .catch((err) => console.log(err, "messed up"));
};
