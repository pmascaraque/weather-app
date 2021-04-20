import React, { useState } from "react";

const api = {
  key: "60eafcec4afef1397e02df3bcc16f20c",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {



  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>

              <div id="date">{dateBuilder(new Date())}</div>


      </main>
    </div>
  );
}

export default App;
