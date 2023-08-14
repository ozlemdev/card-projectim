import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "MSI Anakart",
      image: "https://picsum.photos/id/0/5000/3333",
      info: "3.0 GHZ 3*USB 2.0",
      adet: 1,
    },
    {
      id: 2,
      title: "Ekran Kartı",
      image: "https://picsum.photos/id/28/4928/3264",
      info: "16GB Kingston",
      adet: 1,
    },
    {
      id: 3,
      title: "RAM",
      image: "https://picsum.photos/id/12/2500/1667",
      info: "Nvdia Geforce 1050",
      adet: 1,
    },
    {
      id: 4,
      title: "MONİTÖR",
      image: "https://picsum.photos/id/3/5000/3333",
      info: "17' Monitör",
      adet: 1,
    },
  ]);

  // const title = "RAM";
  // const info = "16 GB 3600Mhz";
  //const image = "https://picsum.photos/id/2/5000/3333";
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <h1>REACT SEPET UYGULAMASI</h1>
      <h2>Listelenen Ürünler</h2>
      <div className="urunler">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket, eleman];
                //arr.push(eleman);
                setBasket(arr);
                console.log(basket);
              }}
              key={index}
              title={eleman.title}
              image={eleman.image}
              info={eleman.info}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
