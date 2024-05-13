import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utilities/lib/verifyToken";
import { setUser } from "../../redux/services/auth/authSlice";
import { GlobalUtilityStyle } from "../../styles/styled";
import CustomForm from "../../components/Shared/Form/CustomForm";
import CustomInput from "../../components/Shared/Form/CustomInput";
import { Button } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.access);
      dispatch(setUser({ user: user, token: res.access }));
      toast.success("Logged in successfully!", { id: toastId, duration: 2000 });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid credentials. Please try again!", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <GlobalUtilityStyle>
      <div className="h-screen flex justify-center items-center bg-excel/10">
        <div className="lg:w-[500px] bg-white rounded-3xl p-10">
          <h1 className="text-center mb-10 text-5xl font-extrabold">Log In</h1>
          <CustomForm onSubmit={onSubmit} className="flex flex-col gap-6">
            <CustomInput
              label="Email or Username"
              type={"text"}
              required={true}
              name={"email"}
              placeholder={"Enter Email or Username"}
            />
            <CustomInput
              label="Password"
              type={"password"}
              name={"password"}
              required={true}
              placeholder={"Enter Password"}
            />
            <Button
              htmlType="submit"
              loading={isLoading}
              className="font-bold w-full pt-2 pb-8 rounded-full"
              type="primary"
            >
              Enter
            </Button>
          </CustomForm>
        </div>
      </div>
    </GlobalUtilityStyle>
  );
};

export default Login;
