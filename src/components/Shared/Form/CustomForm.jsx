import { Form } from "antd";

const CustomForm = ({ onSubmit, children, fields }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => {
        onSubmit(values);
      })
      .catch((error) => {
        console.error("Validation error:", error);
      });
  };

  return (
    <Form
      form={form}
      fields={fields}
      onFinish={onFinish}
      layout="vertical"
      autoComplete="on"
    >
      {children}
    </Form>
  );
};

export default CustomForm;
