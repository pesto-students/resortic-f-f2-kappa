import resort2 from "../assets/resort-images/resort2.jpg";
import resort5 from "../assets/resort-images/resort5.jpg";
import resort6 from "../assets/resort-images/resort6.jpg";
import resort7 from "../assets/resort-images/resort7.jpg";
import resort9 from "../assets/resort-images/resort9.jpg";
import resort10 from "../assets/resort-images/resort10.jpg";
import resort11 from "../assets/resort-images/resort11.jpg";
import resort12 from "../assets/resort-images/resort12.jpg";
import resort13 from "../assets/resort-images/resort13.jpg";
import resort15 from "../assets/resort-images/resort15.jpg";
import resort19 from "../assets/resort-images/resort19.jpg";
import resort20 from "../assets/resort-images/resort20.jpg";
import resort21 from "../assets/resort-images/resort21.jpg";
import resort22 from "../assets/resort-images/resort22.jpg";
import resort24 from "../assets/resort-images/resort24.jpg";
import resort25 from "../assets/resort-images/resort25.jpg";
import room1 from "../assets/rooms/room-1.jpg";
import room2 from "../assets/rooms/room-2.jpg";
import room3 from "../assets/rooms/room-3.jpg";
import room4 from "../assets/rooms/room-4.jpg";

let debounceTimer;
export const debounce = (cb, delay) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    cb();
    debounceTimer = undefined;
  }, delay);
};

export const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const imagArr = [
  resort2,
  resort5,
  resort6,
  resort7,
  resort9,
  resort10,
  resort11,
  resort12,
  resort13,
  resort15,
  resort19,
  resort20,
  resort21,
  resort22,
  resort24,
  resort25,
];

export const getRandomImage = () => {
  return imagArr[randomNumber(0, 16)];
};

export const roomArr = [room1, room2, room3, room4];

export const getRoomImage = () => {
  return roomArr[randomNumber(0, 4)];
};
