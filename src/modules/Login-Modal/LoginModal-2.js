import { Form, Input, Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const LoginModal2 = () => {
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

  const onSubmitOTP = (event) => {
    let code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("User is signed in.", user);
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
