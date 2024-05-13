import { Form, Select } from "antd";

const CustomSelect = ({
  label,
  name,
  placeholder,
  mode,
  required,
  options,
  loading,
  disabled,
  defaultValue,
}) => {
  return (
    <Form.Item
      label={label}
      initialValue={defaultValue}
      name={name}
      rules={[{ required: required, message: `${label} is required` }]}
    >
      <Select
        mode={mode || undefined}
        loading={loading}
        disabled={disabled}
        placeholder={placeholder || null}
        allowClear
        size="large"
        options={options}
      />
    </Form.Item>
  );
};

export default CustomSelect;
