import React from "react";

import "./App.css";
import { FaAccusoft } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!v
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();

function App() {
  const notify = () => {
    toast.warn("Basic Notification", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    toast.error(CustomToast, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <FaAccusoft color="purple" size="10rem" onClick={notify} />
    </div>
  );
}

export default App;
