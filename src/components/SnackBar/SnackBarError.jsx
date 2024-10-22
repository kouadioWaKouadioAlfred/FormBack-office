import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

export default function SnackBarError({
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
        <div className="bg-red-600 px-2 top-2 transition flex items-center rounded-md">
          <FaExclamationCircle className="text-white" />
          <p className="py-3 px-2 font-bold  text-white">{messageParam}</p>
        </div>
      </Snackbar>
    </div>
  );
}
