const initialValue = { currTab: "tab_1", mobile: "", toggleModal: false };

function LoginModalReducer(currentState = initialValue, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...currentState,
        toggleModal: !currentState.toggleModal,
      };
    case "CHANGE_TAB":
      return {
        ...currentState,
        currTab: action.tab,
      };
    case "UPDATE_MOBILE":
      return {
        ...currentState,
        mobile: action.mobile,
      };
    default:
      return currentState;
  }
}

export default LoginModalReducer;
