import { useContext, useState } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";
import Swal from "sweetalert2";

const Login = () => {
  const { login, isLogin } = useContext(ProductsLoadContext);

  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // event handle function
  interface LoginFormEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
  }

  const handleLogin = (e: LoginFormEvent): void => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const result = login(email, pass);

    if (result.success) {
      Swal.fire({
        title: "Login successful",
        icon: "success",
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Have issue in email and password",
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center md:w-5/12 mx-auto">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              {/* email field */}
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="mail@site.com"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              <label className="label">Password</label>
              {/* password field */}
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-red-500, text-sm">{error}</p>}
              <input
                type="submit"
                value="Login"
                className={`btn  rounded-md ${isLogin === true ? "btn-disabled" : "bg-[#ff4f00] text-white"}`}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
