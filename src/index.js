import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Bu dosya stil tanımlamalarını içeriyor olabilir
import App from "./App"; // Varsayılan olarak oluşturulan ana bileşen
import reportWebVitals from "./reportWebVitals"; // Web istatistikleri raporu

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(); // Web istatistikleri raporunu çağırmak
