import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Space,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
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
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function GuestBookForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="90">+90</Option>
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
        onFinish={onFinish}
        initialValues={{
          prefix: "91",
        }}
        scrollToFirstError
      >
        <Space
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
          <Form.Item name="title" label="Title">
          <Select
            allowClear
            style={{"width":"80px"}}
          >
            <Option value="Mr.">Mr.</Option>
            <Option value="Mrs.">Mrs.</Option>
            <Option value="others">other</Option>
        </Select>
          </Form.Item>
          <Form.Item name="firstName" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <Input />
          </Form.Item>
        </Space>

        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    fieldKey={[fieldKey, "title"]}
                    rules={[
                      { required: true, message: "Missing title of name" },
                    ]}
                  >
                    <Select
            allowClear
            style={{"width":"80px"}}
          >
            <Option value="Mr.">Mr.</Option>
            <Option value="Mrs.">Mrs.</Option>
            <Option value="others">other</Option>
        </Select>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    fieldKey={[fieldKey, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="First Name"/>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    fieldKey={[fieldKey, "last"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="Last Name"/>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
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
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
