import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  // to access the error from careerDetailsLoader function
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default CareersError;
