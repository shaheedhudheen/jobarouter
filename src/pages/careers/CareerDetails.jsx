import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  //   const { id } = useParams;
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        cupiditate maiores cum facere, odit nobis voluptatibus iure quaerat in
        itaque, libero consequatur harum repudiandae illum aut eveniet! Minima,
        nihil ipsam.
      </div>
    </div>
  );
}

export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const data = await fetch("http://localhost:4000/careers/" + id);

  if (!data.ok) {
    throw Error("Could Not Find Data");
  }
  return data.json();
};
