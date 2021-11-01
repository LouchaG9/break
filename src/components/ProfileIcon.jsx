import React, { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";

export default function ProfileIcon() {
  // const [theme, setTheme] = useState(theme)

  // const themeHandler = ()=> {
  //   const themes = ['#3e6990','#adbc91','#eedeab','#dabfcd','#f1c7af','#bacade', '#81a5d1']

  // }

  return (
    <>
      <div className="profile-circle master">
        <MdAccountCircle />
      </div>
      <div
        style={{ left: "20px", background: "#3e6990" }}
        className="colorOption"
        // onClick={themeHandler}
      ></div>
      <div
        style={{ left: "40px", background: "#adbc91" }}
        className="colorOption"
      ></div>
      <div
        style={{ left: "60px", background: "#eedeab" }}
        className="colorOption"
      ></div>
      <div
        style={{ left: "80px", background: "#dabfcd" }}
        className="colorOption"
      ></div>
      <div
        style={{ left: "100px", background: "#f1c7af" }}
        className="colorOption"
      ></div>
      <div
        style={{ left: "120px", background: "#bacade" }}
        className="colorOption"
      ></div>
      <div
        style={{ left: "140px", background: "#81a5d1" }}
        className="colorOption"
      ></div>
    </>
  );
}
