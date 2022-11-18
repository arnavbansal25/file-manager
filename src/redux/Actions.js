export const Visible = (path, visible) => {
  return {
    type: "Visible",
    path: path,
    visible: visible,
  };
};

export const Rename = (path, newName) => {
  return {
    type: "Rename",
    path: path,
    newName: newName,
  };
};

// props = {type:"directory", mimeType:"...", size:..., extension:..}
export const Create = (path, newName, props) => {
  return {
    type: "Create",
    path: path,
    newName: newName,
    props: props,
  };
};

export const Delete = (path) => {
  return {
    type: "Delete",
    path: path,
  };
};
