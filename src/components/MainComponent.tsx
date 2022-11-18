import React, { useState } from "react";
import myData from "../utils/dummy.json";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FileIcon, defaultStyles } from "react-file-icon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import RecursiveFolder from "./RecursiveFolder";

import { useSelector } from "react-redux";

function MainComponent() {
  // const [data, setData] = useState(myData);

  const data = useSelector((state: any) => state.data);

  return (
    <div
      style={{
        border: "2px solid #4b4b4b",
        margin: "2% 5% 0 5%",
        padding: "10px 0 0 0",
      }}
    >
      <div
        style={{
          color: "#fff",
          padding: "0 10px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="text"
          style={{
            all: "unset",
            padding: "10px",
            backgroundColor: "#4b4b4b",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        />
        <DeleteIcon />
      </div>
      <div style={{ marginTop: "20px" }}></div>
      <RecursiveFolder {...data} />
      <div style={{ marginTop: "20px" }}></div>
    </div>
  );
}

export default MainComponent;
