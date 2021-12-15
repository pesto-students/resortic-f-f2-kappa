import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { CustomButton } from "../../atoms/CustomButton/CustomButton";
import axios from "../../../axios"
import * as APIS from "../../../constant/Apis";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

export default function GuestBookForm({ onSubmit, onSubmitFailed }) {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("resortic_localstorage"));
    if (localData.userId) {
      axios
        .get(APIS.getUserApi + "?id="+localData.userId)
        .then(function (response) {
          if(response.data.data){
            console.log("userdata:",response.data.data.data[0]);
            setUserData(response.data.data.data[0]);
            form.setFieldsValue({
              title: "Mr.",
              firstName: response.data.data.data[0].first_name,
              lastName: response.data.data.data[0].last_name,
              email:response.data.data.data[0].email,
              phone:response.data.data.data[0].mobile

            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  const numberPrefixSelector = (
    <Form.Item name="numberPrefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="44">+44</Option>
      </Select>
    </Form.Item>
  );
  const idProofPrefixSelector = (
    <Form.Item name="idProofPrefix" noStyle>
      <Select
        style={{
          width: 130,
        }}
      >
        <Option value="aadhar">Aadhar No.</Option>
        <Option value="pan">PAN No.</Option>
        <Option value="drivers_licence">Drivers Licence</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        layout="vertical"
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
        initialValues={{
          numberPrefix: "91",
          idProofPrefix: "aadhar",
          firstName: userData.first_name
        }}
        scrollToFirstError
      >
        <Row>
          <Col xs={4} sm={3}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Missing title of name" }]}
            >
              <Select allowClear>
                <Option value="Mr.">Mr.</Option>
                <Option value="Mrs.">Mrs.</Option>
                <Option value="others">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={10} sm={{ span: 6, offset: 1 }}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: "Missing first name" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={10} sm={{ span: 6, offset: 1 }}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: "Missing last name" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Row>
                  <Col xs={3} sm={3}>
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      fieldKey={[fieldKey, "title"]}
                      rules={[
                        { required: true, message: "Missing title of name" },
                      ]}
                    >
                      <Select allowClear>
                        <Option value="Mr.">Mr.</Option>
                        <Option value="Mrs.">Mrs.</Option>
                        <Option value="others">other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={10} sm={{ span: 6, offset: 1 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "first"]}
                      fieldKey={[fieldKey, "first"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={10} sm={{ span: 6, offset: 1 }}>
                    <Form.Item
                      {...restField}
                      name={[name, "last"]}
                      fieldKey={[fieldKey, "last"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={1} sm={{ span: 1, offset: 1 }}>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Guest
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Row>
          <Col xs={24} sm={16}>
            <Form.Item
              name="email"
              label="E-mail Address (Bill receipt will be sent to this email address)"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={16}>
            <Form.Item
              name="idProof"
              label="Id Proof"
              rules={[
                {
                  required: true,
                  message: "Please input any of your Id proof!",
                },
              ]}
            >
              <Input
                addonBefore={idProofPrefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={16}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={numberPrefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <CustomButton htmlType="submit" style={{ width: "100%" }}>
            Proceed Payment
          </CustomButton>
        </Form.Item>
      </Form>
    </div>
  );
}
