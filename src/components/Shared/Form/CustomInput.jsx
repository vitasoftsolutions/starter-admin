import { Form, Input, Radio } from "antd";

const CustomInput = ({
  type,
  name,
  label,
  placeholder,
  required,
  max,
  value,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: `${label} is required` }]}
    >
      {(type === "password" && (
        <Input.Password
          placeholder={placeholder}
          size="large"
          allowClear
          max={max}
        />
      )) ||
        (type === "textarea" && (
          <Input.TextArea
            placeholder={placeholder}
            size="large"
            allowClear
            max={max}
          />
        )) ||
        (type === "radio" && <Radio value={value}>{label}</Radio>) || (
          <Input
            type={type}
            placeholder={placeholder}
            size="large"
            allowClear
            value={value}
            max={max}
          />
        )}
    </Form.Item>
  );
};

export default CustomInput;
