import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui
        magnam voluptas animi eius quae hic consectetur tenetur, esse fugit.
      </p>

      <nav>
        <NavLink to="faq">Freaquently Asked Questions</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
