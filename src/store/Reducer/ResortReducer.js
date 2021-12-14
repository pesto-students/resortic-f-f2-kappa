const initialValue = { resortList: [], singleResortData: {} };

const ResortReducer = (currentState = initialValue, action) => {
  switch (action.type) {
    case "FETCH_RESORT_BY_CITY":
      return { ...currentState, resortList: action.data };
    case "FETCH_SINGLE_RESORT":
      return { ...currentState, singleResortData: action.data };
    default:
      return currentState;
  }
};

export default ResortReducer;
