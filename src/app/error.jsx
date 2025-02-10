"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        Something went wrong!!!
      </h1>
      <h1 className="text-center text-4xl text-red-500">{error.message}</h1>
      <div className="flex justify-center mt-5">
        <button className="btn  btn-error" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
