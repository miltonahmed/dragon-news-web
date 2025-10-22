import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl text-center mt-5 font-semibold">
          Login Your Account
        </h1>
        <div className="card-body py-5 ">
          <from>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="font-normal text-base text-center">
                Don't Have An Account ?{' '}
                <Link to="/auth/register" className="text-red-500">
                  Register
                </Link>{' '}
              </p>
            </fieldset>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Login;
