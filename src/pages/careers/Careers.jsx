import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => {
        return (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>{career.location}</p>
          </Link>
        );
      })}
    </div>
  );
}

export const careerLoader = async () => {
  const data = await fetch("http://localhost:4000/careers");
  if (!data.ok) {
    throw Error("Could Not Find Careers");
  }
  return data.json();
};
