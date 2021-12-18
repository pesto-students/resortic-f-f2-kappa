import { Form, Input, Button, Divider, Row, Col } from "antd";
import { MobileOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { useDispatch } from "react-redux";

// import GmailBtn from "./GmailBtn";
// import FacebookBtn from "./FacebookBtn";

const LoginModal1 = () => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const handleMobileNumber = (e) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      setMobile(value);
    }
  };

  const setUpRechaptcha = () => {
    const auth = getAuth();
    window.fName = "Sachi";
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            onSubmitNumber();
            console.log("Recaptcha created");
          },
        },
        auth
      );
    }
  };

  const onSubmitNumber = (event) => {
    dispatch({ type: "CHANGE_TAB", tab: "tab_2" });
    event.preventDefault();
    const reg = /^[6-9]\d{9}$/;
    if (reg.test(mobile)) {
      setUpRechaptcha();
      let phoneNumber = `+91${mobile}`;
      const appVerifier = window.recaptchaVerifier;
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          console.log(confirmationResult);
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code)
          dispatch({ type: "UPDATE_MOBILE", mobile: `+91${mobile}` });
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please enter valid number.");
    }
  };

  return (
    <>
      <Form layout="vertical">
        <Form.Item
          rules={[{ required: true, message: "Please enter mobile number." }]}
        >
          <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="Enter Mobile number"
            maxLength={10}
            addonBefore="+91"
            value={mobile}
            onChange={handleMobileNumber}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={onSubmitNumber}
            block
            disabled={mobile.split("").length === 10 ? false : true}
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginModal1;
