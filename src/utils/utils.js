import resort1 from "../assets/resort1.jpg";
import resort2 from "../assets/resort2.jpg";
import resort3 from "../assets/resort3.jpg";
import resort4 from "../assets/resort4.jpg";
import resort5 from "../assets/resort5.jpg";
import resort6 from "../assets/resort6.jpg";
import resort7 from "../assets/resort7.jpg";
import resort8 from "../assets/resort8.jpg";
import resort9 from "../assets/resort9.jpg";
import resort10 from "../assets/resort10.jpg";
import resort11 from "../assets/resort11.jpg";
import resort12 from "../assets/resort12.jpg";
import resort13 from "../assets/resort13.jpg";
import resort15 from "../assets/resort15.jpg";
import resort16 from "../assets/resort16.jpg";
import resort18 from "../assets/resort18.jpg";
import resort19 from "../assets/resort19.jpg";
import resort20 from "../assets/resort20.jpg";
import resort21 from "../assets/resort21.jpg";
import resort22 from "../assets/resort22.jpg";
import resort23 from "../assets/resort23.jpg";
import resort24 from "../assets/resort24.jpg";
import resort25 from "../assets/resort25.jpg";

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

const imagArr = [
  resort1,
  resort2,
  resort3,
  resort4,
  resort5,
  resort6,
  resort7,
  resort8,
  resort9,
  resort10,
  resort11,
  resort12,
  resort13,
  resort15,
  resort16,
  resort18,
  resort19,
  resort20,
  resort21,
  resort22,
  resort23,
  resort24,
  resort25,
];

export const getRandomImage = () => {
  return imagArr[randomNumber(1, 25)];
};
