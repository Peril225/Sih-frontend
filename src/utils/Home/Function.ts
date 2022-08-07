import React from "react";

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
