import { useGoogleLogin } from "@react-oauth/google";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";

const GoogleButton = ({ isSignUp }) => {
  const { auth } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (googleToken) => {
      try {
        await auth({
          googleToken,
        });
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log(error),
  });

  return (
    <Button
      btnClass="w-full bg-gray-200 text-black py-2 flex justify-center mt-1"
      btnTxt={!isSignUp ? "Sign in with Google" : "Sing up with Google"}
      onClick={() => googleLogin()}
      icon={<FcGoogle size={25} className="mx-1" />}
    />
  );
};

export default GoogleButton;
