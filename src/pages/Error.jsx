import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-4">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="text-3xl font-bold tracking-tight mt-4 sm:text-5xl">
            Page not found
          </h1>
          <p className="text-lg leading-tight mt-6">
            Sorry, we couldn't find the page you are looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <div className="text-center">
        <h4 className="font-bold text-4xl">There was an error...</h4>
      </div>
    </main>
  );
};

export default Error;
