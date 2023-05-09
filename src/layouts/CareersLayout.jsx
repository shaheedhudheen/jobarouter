import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h1>Careers</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        expedita iusto repudiandae placeat commodi sequi quas adipisci debitis
        ea ut?
      </p>

      <Outlet />
    </div>
  );
}
