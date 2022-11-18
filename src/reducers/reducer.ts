export default (state: any, action: any) => {
  switch (action.type) {
    case "create":
      return {
        creating: action.payload,
      };
    case "rename":
      return {
        rename: action.payload,
      };
    case "delete":
      return {
        delete: action.payload,
      };
    default:
      return state;
  }
};
