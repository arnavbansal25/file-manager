import React, { useEffect, useRef, useState } from "react";
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
import { isEditable } from "@testing-library/user-event/dist/utils";
import { download } from "../utils/utilityFunctions";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useDispatch } from "react-redux";
import { Rename, Create, Delete } from "../redux/Actions";

interface Props {
  path: string;
  name: string;
  size: number;
  type: string;
  children?: Props[];
  extension?: string;
  mimeType?: string;
  level: number;
  isCheckedParent?: boolean;
}

function useOutsideAlerter(ref: any, setIsEditable: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsEditable(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const RecursiveFolder = ({
  path,
  name,
  size,
  type,
  children,
  extension,
  mimeType,
  level,
  isCheckedParent
}: Props) => {
  const [isEditable, setIsEditable] = useState(false);
  const ref = useRef(null);
  useOutsideAlerter(ref, setIsEditable);

  const hasChildren = children && children.length;

  const [isVisible, setIsVisible] = useState(false);

  const [fileName, setFileName] = useState(name);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [isSelected, setIsSelected] = useState(isCheckedParent);

  const expand = () => {
    setIsVisible(!isVisible);
  };

  function mouseOver(event: any) {
    setIsHover(true);
  }
  function mouseOut(event: any) {
    setIsHover(false);
    event.target.style.background = "";
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setIsEditable(false);
      dispatch(Rename(path, fileName));
    }
  };

  const dispatch = useDispatch();

  // console.log("lll", name, isCheckedParent, isSelected);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          paddingLeft: `${level * 20}px`,
          backgroundColor: isHover ? "#39373d" : "transparent",
        }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        <div
          style={{
            color: "#b6b6b7",
            marginRight: "10px",
          }}
        >
          {isSelected || isCheckedParent ? (
            <CheckBoxIcon
              onClick={() => setIsSelected(false)}
              style={{ fontSize: "18px" }}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              onClick={() => setIsSelected(true)}
              style={{ fontSize: "18px" }}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            cursor: "pointer",
            color: "#b6b6b7",
          }}
          onClick={expand}
          // onMouseOver={mouseOver}
          // onMouseOut={mouseOut}
        >
          {hasChildren ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {isVisible ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
              &nbsp;
            </div>
          ) : (
            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
          )}
          {isEditable ? (
            <input
              ref={ref}
              style={{
                all: "unset",
                fontSize: "20px",
                cursor: "text",
                width: "100px",
                paddingBottom: "2px",
                borderBottom: "1px dashed #fff",
              }}
              type="text"
              value={fileName.split(".")[0]}
              onChange={(e) => {
                setFileName(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <div style={{ fontSize: 20 }}>{fileName}</div>
          )}
        </div>
        <div style={{ marginLeft: "20px" }}>
          {isHover ? (
            <div style={{ color: "#b6b6b7", display: "flex", gap: "10px" }}>
              <EditIcon
                onClick={() => setIsEditable(true)}
                style={{ cursor: "pointer", fontSize: 20 }}
              />
              {hasChildren ? (
                <></>
              ) : (
                <DownloadIcon
                  onClick={() => download(mimeType || "", fileName)}
                  style={{ fontSize: 20, cursor: "pointer" }}
                />
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {isVisible ? (
        hasChildren &&
        children.map((child) => (
          <>
            <RecursiveFolder {...child} isCheckedParent={isSelected} />
          </>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

// RecursiveFolder.defaultProps = {isCheckedParent: false};

export default RecursiveFolder;
