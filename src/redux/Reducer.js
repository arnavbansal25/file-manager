import myData from "../utils/dummy.json";

// Reducer is the main part of the redux store
// It sopecifies how different actions are handled

// initial state values for the reducer
const initialState = {
  data: myData,
};

const handleRename = (oldData, path, name) => {
  console.log(path, name);
  var newData = { ...oldData };
};

const handleCreate = (oldData, path, name, props) => {
  // type = props.type
  // if(type=="directory"){
  // delete directory
  // }
  // else{
  // delete file
  // }
  var newData = { ...oldData };
};

const handleDelete = (oldData, path, name) => {
  var newData = { ...oldData };
};

const handleVisible = (oldData, path, visible) => {
    var last = path.split("/");
    
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "Rename":
      return {
        ...state,
        data: handleRename({ ...state.data }, action.path, action.newName),
      };
    case "Create":
      return {
        ...state,
        data: handleCreate(
          { ...state.data },
          action.path,
          action.newName,
          action.props
        ),
      };
    case "Delete":
      return {
        ...state,
        data: handleDelete({ ...state.data }, action.path),
      };
    case "Visible":
      return {
        ...state,
        data: handleVisible({ ...state.data }, action.path, action.visible),
      };
    default:
      return state;
  }
};
