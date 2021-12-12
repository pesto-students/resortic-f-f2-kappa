const PRODUCTION = false;
const VERSION = "v1";
export let API_SERVER = "";
if (!PRODUCTION) {
  API_SERVER = `http://localhost:8081/${VERSION}/`;
} else {
  API_SERVER = `http://localhost:8000/${VERSION}/`;
}
// APIS
// Guest Token Api
export const guestToken = "api/guest/token/";
// Login Apis
export const loginApi = API_SERVER + "api/login/add/";
export const logoutApi = API_SERVER + "api/login/logout/";
// User Apis
export const registerUserApi = API_SERVER + "api/user/register/";
export const updateUserApi = API_SERVER + "api/user/update/";
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
// Homepage Apis
export const getCategoryResort = API_SERVER + "api/resort/fetchCityByCategory";
// ResortList Apis
export const getResortList = API_SERVER + "api/resort/fetchByCity";
// Single Resort List Apis
export const getSingleResort = API_SERVER + "api/resort/singleResort/";
// Fetch Top 10 products
export const fetchTopTenResort = API_SERVER + "api/resort/fetchToTenResort";
