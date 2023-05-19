let currentColor = null;

const config = {
  redTime: 3000,
  yellowTime: 1000,
  greenTime: 1000
};

function changeColor(color) {
  const trafficLights = document.getElementsByClassName("traffic-light");

  if (currentColor !== null) {
    document.getElementById(currentColor).style.backgroundColor = "gray";
  }

  document.getElementById(color).style.backgroundColor = color;
  currentColor = color;
}

function changeTrafficLight() {
  const trafficLights = document.getElementsByClassName("traffic_light");

  switch (currentColor) {
    case "red":
      document.getElementById("red").style.backgroundColor = "gray";
      document.getElementById("yellow").style.backgroundColor = "yellow";
      currentColor = "yellow";
      setTimeout(changeTrafficLight, config.yellowTime);
      break;
    case "yellow":
      document.getElementById("yellow").style.backgroundColor = "gray";
      document.getElementById("green").style.backgroundColor = "green";
      currentColor = "green";
      setTimeout(changeTrafficLight, config.greenTime);
      break;
    case "green":
      document.getElementById("green").style.backgroundColor = "gray";
      document.getElementById("red").style.backgroundColor = "red";
      currentColor = "red";
      setTimeout(changeTrafficLight, config.redTime);
      break;
    default:
      document.getElementById("red").style.backgroundColor = "red";
      currentColor = "red";
      setTimeout(changeTrafficLight, config.redTime);
      break;
  }
}

setTimeout(changeTrafficLight, config.redTime);