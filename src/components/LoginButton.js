import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function LoginButton() {
  const { loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <h1>Ingresando...</h1>;

  const redirectLogin = () => {
    navigate("/Login");
  };

  return (
    <button
      className="log-btn py-1 outline-none border-none px-3 font-bold border rounded mb-2"
      onClick={redirectLogin}
      type="button"
    >
      <a className="font-bold" href="#!">Ingresar</a>
    </button>
  );
}
