import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl text-center mt-5 font-semibold">
          Register Your Account
        </h1>
        <div className="card-body py-5 ">
          <from>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Enter Your Full name" />
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="font-normal text-base text-center">
               Already Have An Account ?{' '}
                <Link to="/auth/login" className="text-red-500">
                  Login
                </Link>{' '}
              </p>
            </fieldset>
          </from>
        </div>
      </div>
    </div>
  );
}

export default Register