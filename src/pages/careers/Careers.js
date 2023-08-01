import { useLoaderData, Link } from "react-router-dom";

// loader function - have to be imported in App.js for Careers component
export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");

  if (!response.ok) {
    throw Error("Could not fetch the careers");
  }

  return response.json();
};

const Careers = () => {
  // will return the careersLoader response to this component using useLoaderData hook
  const careersData = useLoaderData();

  return (
    <div className="careers">
      {careersData.map((career) => (
        // don't have to specify careers
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;
