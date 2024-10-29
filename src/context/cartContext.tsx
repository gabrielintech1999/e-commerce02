// import { createContext, useContext, useReducer, ReactNode } from "react";

// // Definindo o tipo do estado
// interface CartState {
//   name: string;
// }

// // Definindo o tipo das ações (pode ser expandido conforme necessário)
// type CartAction = { type: string; payload?: any };

// // Estado inicial
// const initialValue: CartState = {
//   name: "Gabriel",
// };

// // Reducer que gerencia o estado do carrinho
// function cartReducer(state: CartState, action: CartAction): CartState {
//   switch (action.type) {
//     case "SET_NAME":
//       return { ...state, name: action.payload };
//     default:
//       return state;
//   }
// }

// // Tipo do contexto (estado e dispatch)
// interface CartContextType {
//   state: CartState;
//   dispatch: React.Dispatch<CartAction>;
// }

// // Criando o contexto com valor inicial nulo
// const cartContext = createContext<CartContextType | undefined>(undefined);

// // Tipo das props do CartProvider
// interface CartProviderProps {
//   children: ReactNode;
// }

// // Componente Provider que envolve o contexto
// export function CartProvider({ children }: CartProviderProps) {
//   const [state, dispatch] = useReducer(cartReducer, initialValue);

//   return (
//     <cartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </cartContext.Provider>
//   );
// }

// // Hook personalizado para usar o contexto
// export const useCart = () => {
//   const context = useContext(cartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
