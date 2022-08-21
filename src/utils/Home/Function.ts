import { StatesXcolor } from "../../constants";
export const Testing = () => {
  console.log(import.meta.env.VITE_BASE_URL);
  fetch(import.meta.env.VITE_BASE_URL + "/data/pass-fail", {
    method: "POST",
    body: JSON.stringify({
      from: null,
      to: null,
      state: null,
      standard: null,
    }),
  }).then((resp) =>
    console.log(
      resp.json().then((res) => console.log(res, "successss macha")),
      "eheheeh"
    )
  );
};

export const FetchStateDropOut = () => {
  let arr;
  fetch(import.meta.env.VITE_BASE_URL + "/static/dropout/", {
    method: "POST",
    body: JSON.stringify({
      // year: 2022,
    }),
  }).then((resp) =>
    resp.json().then((res) => {
      console.log(res, "i mma cry");

      arr = res;
    })
  );
  return arr;
};
