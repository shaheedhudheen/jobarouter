import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("ahammed");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab itaque
        asperiores cum ratione impedit explicabo veniam dolores fuga et nulla
        accusamus quam, aliquid eum sint, nobis atque. Numquam totam ad natus
        aliquam, perferendis expedita eius culpa earum ipsa adipisci quod
        placeat exercitationem deleniti sapiente porro possimus itaque iusto
        doloremque autem, assumenda provident minima. Non dolores iure ad
        accusamus culpa totam consectetur porro labore officia. Pariatur iure
        reiciendis odio non, optio quidem totam, provident, excepturi at
        quibusdam necessitatibus. Provident aliquam pariatur, fugit nam veniam
        praesentium doloribus ratione quaerat voluptatibus quos saepe fugiat
        asperiores vero, dolores iusto? Fuga temporibus voluptates optio
        suscipit?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab itaque
        asperiores cum ratione impedit explicabo veniam dolores fuga et nulla
        accusamus quam, aliquid eum sint, nobis atque. Numquam totam ad natus
        aliquam, perferendis expedita eius culpa earum ipsa adipisci quod
        placeat exercitationem deleniti sapiente porro possimus itaque iusto
        doloremque autem, assumenda provident minima. Non dolores iure ad
        accusamus culpa totam consectetur porro labore officia. Pariatur iure
        reiciendis odio non, optio quidem totam, provident, excepturi at
        quibusdam necessitatibus. Provident aliquam pariatur, fugit nam veniam
        praesentium doloribus ratione quaerat voluptatibus quos saepe fugiat
        asperiores vero, dolores iusto? Fuga temporibus voluptates optio
        suscipit?
      </p>

      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
}
