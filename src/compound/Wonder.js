import React from "react";
import { Take } from "./Take";
export function Wonder() {
  return (
    <>
      <div className="card">
        <h2>welcome To Wonderland</h2>
        <button onClick={Take}>TakeTicket</button>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/6b/23/2b/6b232be8c82a18691b98767e295dbdf6.jpg)",
          height: "900px",
          textAlign: "center",
          color: "orange",
          fontFamily: "bold",
        }}
      >
        {" "}
        <h1> Wonder Land </h1>
      </div>
    </>
  );
}
