import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "fijar" }
  | { type: "custom"; payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "fijar":
      return {
        ...state,
        contador: (state.contador = 100),
      };

    case "custom":
      return {
        ...state,
        contador: (action.payload),
      };

    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [ { contador }, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h4>Contador: { contador }</h4>
      <button
        onClick={() => dispatch({ type: "incrementar" })}
        className="btn btn-outline-primary"
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ type: "decrementar" })}
        className="btn btn-outline-primary"
      >
        -1
      </button>
      <button
        onClick={() => dispatch({ type: "fijar" })}
        className="btn btn-outline-primary"
      >
        100
      </button>
      <button
        onClick={() => dispatch({ type: "custom", payload: 0 })}
        className="btn btn-outline-danger"
      >
        0
      </button>
    </>
  );
};
