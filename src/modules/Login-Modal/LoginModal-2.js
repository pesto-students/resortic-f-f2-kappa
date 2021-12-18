import { Form, Input, Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import axios from "../../axios";
import * as APIS from "../../constant/Apis";

const LoginModal2 = ({ logInHandler, setUserId }) => {
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = useState(30);
  const { Text } = Typography;
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.loginModalReducer.mobile);

  const handleBack = () => {
    dispatch({ type: "CHANGE_TAB", tab: "tab_1" });
  };

  const handleOTPNumber = (e) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      setOtp(value);
    }
  };

  const resendOTP = () => {
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, mobile, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code)
        dispatch({ type: "UPDATE_MOBILE", mobile: "" });

        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerUser = (mobile) => {
    axios
      .post(APIS.registerUserApi, { mobile: mobile })
      .then((response) => {
        console.log("resgister response", response);
        loginUserHandler(mobile);
        // localStorage.setItem(
        //   "resortic_localstorage",
        //   JSON.stringify({
        //     token: response.data.data.data.token,
        //     mobile: mobile,
        //     userId: response.data.data.data.userId,
        //   })
        // );
        // logInHandler(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const loginUserHandler = (userMobileNumber) => {
    axios
      .post(APIS.loginApi, { mobile: userMobileNumber })
      .then((response) => {
        console.log("login response", response, response.data.data.code);
        if (response.data.data.code === 404) {
          registerUser(userMobileNumber);
        } else {
          console.log("user logged in", response);
          localStorage.clear();
          localStorage.setItem(
            "resortic_localstorage",
            JSON.stringify({
              token: response.data.data.data.token,
              mobile: userMobileNumber,
              userId: response.data.data.data.usertableId,
            })
          );
          setUserId(userMobileNumber);
          logInHandler(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const onSubmitOTP = (event) => {
    let code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("User is signed in.", user);
        const userMobileNumber = mobile.slice(3, 13);
        loginUserHandler(userMobileNumber);
        dispatch({ type: "CHANGE_TAB", tab: "tab_1" });
        setOtp("");
        dispatch({ type: "TOGGLE_MODAL" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let timer;

    timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <Form layout="vertical">
      <Form.Item
        rules={[{ required: true, message: "Please enter mobile number." }]}
      >
        <Input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOTPNumber}
          maxLength={6}
        />
      </Form.Item>
      <div style={{ textAlign: "right", margin: "5px" }}>
        <Text>Didn't got OTP?</Text>
        {"  "}
        <Button
          size="small"
          onClick={resendOTP}
          disabled={counter === 0 ? false : true}
        >
          {counter > 0 ? counter : "Resend OTP"}
        </Button>
      </div>
      <Form.Item>
        <Button
          onClick={onSubmitOTP}
          type="primary"
          disabled={otp.split("").length === 6 ? false : true}
          block
        >
          Submit
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleBack} block danger>
          Back
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginModal2;
