import { useGoogleLogin } from "@react-oauth/google";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../../contexts/AuthContext";

const GoogleButton = ({ isSignUp }) => {
  const { auth } = useAuthContext();

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
      className="w-full bg-gray-200 text-black py-2 flex justify-center mt-1"
      onClick={() => googleLogin()}
    >
      <FcGoogle size={25} className="mx-1" />
      {!isSignUp ? "Sign in with Google" : "Sing up with Google"}
    </Button>
  );
};

export default GoogleButton;
