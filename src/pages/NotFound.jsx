import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum
        asperiores a dolor temporibus officiis architecto numquam praesentium,
        quam ea.
      </p>

      <h3>
        Go to <Link to="/">Homepage</Link>
      </h3>
    </div>
  );
}
