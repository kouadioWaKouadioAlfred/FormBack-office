import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function SnackBarSucces({
  messageParam,
  ouvrir,
  functionPourFermer,
}) {
  const [state, setState] = useState({
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal } = state;

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={ouvrir}
        onClose={functionPourFermer}
        key={vertical + horizontal}
      >
        <div className="bg-green-600 px-2 top-2 transition flex items-center rounded-md">
          <FaCheckCircle className="text-white text-2xl" />
          <p className="py-3 px-2   text-white">{messageParam}</p>
        </div>
      </Snackbar>
    </div>
  );
}
