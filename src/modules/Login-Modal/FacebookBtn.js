import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";

const FacebookBtn = () => {
  const dispatch = useDispatch();
  const signinWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        dispatch({ type: "TOGGLE_MODAL" });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      style={{ fill: "#000000" }}
      onClick={signinWithFacebook}
    >
      <linearGradient
        id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
        x1="9.993"
        x2="40.615"
        y1="9.993"
        y2="40.615"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#2AA4F4"></stop>
        <stop offset="1" stop-color="#007AD9"></stop>
      </linearGradient>
      <path
        fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
      ></path>
      <path
        fill="#fff"
        d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
      ></path>
    </svg>
    // <img
    //   onClick={signinWithFacebook}
    //   src={Facebook}
    //   style={{ width: "60px", display: "block" }}
    //   alt="Loading soon"
    // />
  );
};

export default FacebookBtn;
