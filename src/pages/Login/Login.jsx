import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/services/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    const res = await login(data);
    console.log(res);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          name="email"
          placeholder="Email"
          {...register("email")}
          className="outline outline-1 rounded py-1 outline-gray-400 px-4"
        />
        <input
          type="text"
          id="password"
          placeholder="Password"
          {...register("password")}
          className="outline outline-1 rounded py-1 outline-gray-400 px-4"
        />
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
