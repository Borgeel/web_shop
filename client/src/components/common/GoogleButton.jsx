import { useGoogleLogin } from "@react-oauth/google";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";
import { googleTokenHandler, request } from "../../api";

const GoogleButton = ({ isSignUp }) => {
  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (googleToken) => {
      const response = await googleTokenHandler({
        googleToken,
      });
      console.log(response);
    },
    onError: (error) => console.log(error),
  });

  return (
    <Button
      buttonClass="w-full bg-gray-200 text-black py-2 rounded flex justify-center mt-1"
      buttonTxt={!isSignUp ? "Sign in with Google" : "Sing up with Google"}
      onClick={() => googleLogin()}
      icon={<FcGoogle size={25} className="mx-1" />}
    />
  );
};

export default GoogleButton;
