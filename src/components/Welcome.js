import "../stylesheets/Form.css";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <div className="bg-neutral w-85 max-w-prose text-center m-auto">
      <h2 className="font-bold">Te damos la bienvenida</h2>
      <p>
        <span className="text-bold text-orange-500">NoStateNode</span> es un
        espacio para compartir ideas, recursos y buscar financiación para
        proyectos. Para comenzar debes crear una cuenta, si ya la tienes inicia
        sesión. Gracias.
      </p>
      <div className="m-4 py-2">
        <Link
            className="bg-orange-600 py-2 outline-none hover:bg-orange-400 border-none px-3 text-black font-bold border rounded"
            to="/register"
          >
            Registrarse
          </Link>
      </div>
    </div>
  );
}
