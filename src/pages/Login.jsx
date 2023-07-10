import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Form
        method="post"
        className="card w-full max-w-sm p-4 bg-base-100 border border-neutral shadow-lg space-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <FormInput
          defaultValue="test@test.com"
          label="Email"
          name="identifier"
          type="email"
        />
        <FormInput
          defaultValue="secret"
          label="Password"
          name="password"
          type="Password"
        />

        <div className="mt-4">
          <SubmitBtn />
        </div>
        <button type="button" className="btn btn-block btn-secondary">
          Guest user
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="link link-hover link-primary underline"
          >
            Register
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Login;
