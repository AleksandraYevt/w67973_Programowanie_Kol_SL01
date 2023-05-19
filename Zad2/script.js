let currentColor = null;

function changeColor(color) {
  const trafficLights = document.getElementsByClassName("traffic-light");
  
  if (currentColor !== null) {
    document.getElementById(currentColor).style.backgroundColor = "gray";
  }

  document.getElementById(color).style.backgroundColor = color;
  currentColor = color;
}

setInterval(changeTrafficLight, 5000);

function changeTrafficLight() {
  const trafficLights = document.getElementsByClassName("traffic-light");

  switch (currentColor) {
    case "red":
      document.getElementById("red").style.backgroundColor = "gray";
      document.getElementById("yellow").style.backgroundColor = "yellow";
      currentColor = "yellow";
      break;
    case "yellow":
      document.getElementById("yellow").style.backgroundColor = "gray";
      document.getElementById("green").style.backgroundColor = "green";
      currentColor = "green";
      break;
    case "green":
      document.getElementById("green").style.backgroundColor = "gray";
      document.getElementById("red").style.backgroundColor = "red";
      currentColor = "red";
      break;
    default:
      document.getElementById("red").style.backgroundColor = "red";
      currentColor = "red";
      break;
  }
}