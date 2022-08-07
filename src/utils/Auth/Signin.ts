import { TSignIp } from "../../../typings";
import { Toast, toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const SignIn = ({ email, password }: TSignIp) => {
  let history = useNavigate();
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
};
