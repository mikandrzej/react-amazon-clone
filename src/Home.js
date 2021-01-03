import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
          alt="background"
        />

        <div className="home__row">
          <Product
            id="123456"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            id="1234567"
            title="Cyberpunk 2077 - PlayStation 4"
            image="https://images-na.ssl-images-amazon.com/images/I/81iR0aGNJ5L._SL1500_.jpg"
            rating={3}
            price={49.99}
          />
          <Product
            id="12345678"
            title="Mario Kart 8 Deluxe - Nintendo Switch"
            image="https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._SL1500_.jpg"
            rating={5}
            price={59.9}
          />
        </div>
        <div className="home__row">
          <Product
            id="123456"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            id="1234567"
            title="Cyberpunk 2077 - PlayStation 4"
            image="https://images-na.ssl-images-amazon.com/images/I/81iR0aGNJ5L._SL1500_.jpg"
            rating={3}
            price={49.99}
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567"
            title="Cyberpunk 2077 - PlayStation 4"
            image="https://images-na.ssl-images-amazon.com/images/I/81iR0aGNJ5L._SL1500_.jpg"
            rating={3}
            price={49.99}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
