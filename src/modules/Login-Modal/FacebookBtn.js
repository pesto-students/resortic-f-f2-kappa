import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import Facebook from "../../assets/facebook.png";
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
    <img
      onClick={signinWithFacebook}
      src={Facebook}
      style={{ width: "60px", display: "block" }}
      alt="Loading soon"
    />
  );
};

export default FacebookBtn;
