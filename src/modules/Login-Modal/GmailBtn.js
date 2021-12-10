import Google from "../../assets/google.jpg";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";

const GmailBtn = () => {
  const dispatch = useDispatch();
  const signInWithGmail = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch({ type: "TOGGLE_MODAL" });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <img
      src={Google}
      style={{ width: "70px" }}
      alt="Loding soon"
      onClick={signInWithGmail}
    />
  );
};

export default GmailBtn;
