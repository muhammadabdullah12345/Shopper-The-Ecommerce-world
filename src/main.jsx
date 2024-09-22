import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// function MenItem({ item }) {
//   return (
//     <div className="flex flex-col gap-20 items-center justify-center">
//       <div className="h-48 w-48">
//         <img src={item.image} alt="item.id" />
//       </div>
//       <div className="flex items-center justify-center flex-col">
//         <div className="flex items-center justify-center gap-7">
//           <div className="max-w-[394px]">{item.description}</div>
//           <div>
//             <div>{item.title}</div>
//             <div>{item.price}</div>
//             <div>{item.rating.rate}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MenItem;
