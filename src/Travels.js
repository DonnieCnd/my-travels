import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination:"Tokyo",
    country: "Japan",
    photo:"https://www.rennes.aeroport.fr/sites/rennes.aeroport.fr/files/styles/airport_pop_up/public/gallery/destination/vol-rennes-tokyo-via-paris-cdg-amsterdam-air-france.jpg?itok=XLeAd92r",
    distance: "9706 km",
  },
  {
    destination: "New York",
    country: "United States of America",
    photo:"https://static.lexpress.fr/medias_11191/w_1887,h_1056,c_crop,x_0,y_443/w_640,h_360,c_fill,g_north/v1477034513/manhattan-4_5729899.jpg",
    distance:"5834 km",
  },
  {
    destination: "Los Angeles",
    country: "United States of America",
    photo:"https://frenchdistrict.com/californie-sud/wp-content/uploads/sites/5/2017/09/10-anecdotes-secrets-infos-los-angeles-diapo.jpg",
    distance: "9080 km",
  },
  {
    destination:"San Francisco",
    country: "United States of America",
    photo:"http://www.office-tourisme-usa.com/sites/default/files/styles/large_fat/public/media/san-francisco-travel-4.jpg?itok=qFr1PSus",
    distance:"8948 km",
  },
  {
    destination:"Phuket",
    country: "Thailand",
    photo:"http://www.statravel.fr/static/fr_division_web_live/assets/railay-phuket.jpg",
    distance: "9771 km",
  }
];

const Travels = () => (
  <div>
    {travels.map((travel, index) =>
      <Travel key={index} {...travel}/>
    )}
  </div>
);

export default Travels;