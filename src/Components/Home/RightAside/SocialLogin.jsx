import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl text-primary capitalize mb-5">
        Login With Me
      </h2>
      <div className="space-y-3">
        <button className="btn btn-outline w-full capitalize">
          {' '}
          <FcGoogle size={24} />
          Login with Google
        </button>
        <button className="btn btn-outline w-full capitalize">
          <ImGithub size={24}/> Login with Github
        </button>
      </div>
    </div>
  );
}

export default SocialLogin