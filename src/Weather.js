import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=ad08724a8362612bf966360e7b25eb54&units=metric`;
  axios.get(url).then(handleResponse);

  return <div className="Weather">Hello from Weather</div>;
}
