import { useForm } from "../hooks/useForm";

interface FormData {
  nombre: string;
  email: string;
  edad: number;
}

export const Formulario = () => {
  const { formulario, handleCHange, email, nombre, edad } = useForm({
    nombre: "Gabs",
    email: "gabs@correo.correo",
    edad: 35,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          onChange={handleCHange}
          value={ nombre }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleCHange}
          value={ email }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          onChange={handleCHange}
          value={ edad }
        />
      </div>

      <pre>{JSON.stringify(formulario)} </pre>
    </form>
  );
};
