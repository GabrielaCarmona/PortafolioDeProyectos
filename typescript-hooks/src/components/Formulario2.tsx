import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {
  const { formulario, handleCHange } = useForm({
    ciudad: "Poza Rica",
    postal: 93250,
  });

  const { ciudad, postal } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input
          type="text"
          className="form-control"
          name="ciudad"
          onChange={handleCHange}
          value={ciudad}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Código Postal:</label>
        <input
          type="number"
          className="form-control"
          name="postal"
          onChange={handleCHange}
          value={postal}
        />
      </div>

      <pre>{JSON.stringify(formulario)} </pre>
    </form>
  );
};
