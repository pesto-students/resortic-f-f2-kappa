// const PRODUCTION = process.env.REACT_APP_PRODUCTION === "true";
const PRODUCTION = true;

const VERSION = "v1";

export let API_SERVER = "";
if (!PRODUCTION) {
  API_SERVER = `http://localhost:8000/${VERSION}/`;
} else {
  API_SERVER = `https://resortic-backend.herokuapp.com/${VERSION}/`;
}

// APIS

// Guest Token Api
export const guestToken = "api/guest/token/";

// Login Apis
export const loginApi = API_SERVER + "api/login/add/";
export const logoutApi = API_SERVER + "api/login/logout/";

// User Apis
export const registerUserApi = API_SERVER + "api/user/register/";
export const updateUserApi = API_SERVER + "api/user/update";
export const deleteUserApi = API_SERVER + "api/user/delete/";
export const getUserApi = API_SERVER + "api/user/get";

// Review Apis
export const addReviewApi = API_SERVER + "api/review/add/";
export const updateReviewApi = API_SERVER + "api/review/update/";
export const deleteReviewApi = API_SERVER + "api/review/delete/";
export const getReviewApi = API_SERVER + "api/review/get";

// Payment Apis
export const addPaymentApi = API_SERVER + "api/payment/add/";
export const deletePaymentApi = API_SERVER + "api/payment/delete/";
export const getRazorOrderId = API_SERVER + "api/payment/razorpayOrder";

// Booking Apis
export const addBooking = API_SERVER + "api/booking/book";
export const getBooking = API_SERVER + "api/booking/book";
export const updateBooking = API_SERVER + "api/booking/book";

// Homepage Apis
export const getCategoryResort = API_SERVER + "api/resort/fetchCityByCategory";
export const getPopularResort = API_SERVER + "api/resort/fetchToTenResort";

// ResortList Apis
export const getResortList = API_SERVER + "api/resort/fetchResortonSearch";

// Single Resort List Apis
export const getSingleResort = API_SERVER + "api/resort/singleResort/";
export const getFullResortDetails = API_SERVER + "api/resort/singleResort";
