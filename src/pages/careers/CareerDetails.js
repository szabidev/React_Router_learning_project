import { useLoaderData, useParams } from "react-router-dom";

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:4000/careerss/" + id);

  if (!response.ok) {
    throw Error("Could not find that career");
  }

  return response.json();
};

const CareerDetails = () => {
  // useParams hook to access in this component the Route parameter id
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;
