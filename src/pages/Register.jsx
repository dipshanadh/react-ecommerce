import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Form
        method="POST"
        className="card w-full max-w-sm p-4 bg-base-100 border border-neutral shadow-lg space-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>

        <FormInput label="Username" name="username" type="text" />
        <FormInput label="Email" name="identifier" type="email" />
        <FormInput label="Password" name="password" type="Password" />

        <div className="mt-4">
          <SubmitBtn />
        </div>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="link link-hover link-primary underline">
            Login
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Register;
