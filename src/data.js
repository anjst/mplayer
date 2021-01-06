import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Rain",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/6fe1f08735f7c54e10e72d2f9d1bec4c78ca01bf-1024x1024.jpg",
      artist: "Psalm Trees, Guillaume Muschalle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10311",
      active: true,
      color: ["#D6B4C2", "#D9587E"],
      id: uuidv4(),
    },
    {
      name: "Sundown",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4551baea04f413236b4f3e3039efc361935a9e28-1024x1024.jpg",
      artist: "Arbour, Aarigod",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8974",
      active: false,
      color: ["#204E4B", "#70C1CC"],
      id: uuidv4(),
    },
  ];
}

export default chillHop;
