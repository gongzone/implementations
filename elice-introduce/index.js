const INTRO_TEXT = '웹 개발하며 밥먹고 사는게 꿈인 원용재입니다.';
const INTEREST_TEXT = '특정 기술보다는 애플리케이션 구조 설계에 관심이 많습니다.';
const EXPECTATION_TEXT = '다양한 사람들과의 만남, 부족한 역량 채우기 입니다.';
const SAYING_TEXT = '영치기 영차, 모두 화이팅.';
const HOBBY_TEXT = '취업에 딱히 도움 안되는 이상한 것들 공부하기입니다.';
const SHY_TEXT = '가까이서 보시면 너무 부끄러워요...';

const text2 = document.querySelector('.text');
const buttons = document.querySelectorAll('.main-section-bot button');
const imgBox = document.querySelector('.img-box');
const profile = document.querySelector('.profile');
const array = [INTEREST_TEXT, EXPECTATION_TEXT, SAYING_TEXT, HOBBY_TEXT];
const imgs = [
  'image/profile1.png',
  'image/profile2.png',
  'image/profile3.png',
  'image/profile4.png',
];

const shyImgs = [
  'image/profile5.png',
  'image/profile6.png',
  'image/profile7.png',
  'image/profile8.png',
];

let fillingText = '';
let count = 0;
let timer;

const fillText = (text) => {
  text2.innerHTML = '';
  fillingText = '';
  count = 0;

  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    fillingText += text[count];

    text2.innerHTML = fillingText;

    if (count % 4 == 0) {
      if (text !== SHY_TEXT) {
        profile.src = imgs[(count % 3) + 1];
      } else {
        profile.src = shyImgs[(count % 3) + 1];
      }
    }

    count++;

    if (count > text.length - 1) {
      clearInterval(timer);
      profile.src = imgs[0];
    }
  }, 40);
};

const attachListener = () => {
  Array.from(buttons).forEach((btn, index) => {
    btn.addEventListener('click', () => {
      fillText(array[index]);
    });
  });
};

window.onload = () => {
  fillText(INTRO_TEXT);
  attachListener();
  profile.addEventListener('mouseenter', () => {
    imgBox.classList.add('scale-up');
    fillText(SHY_TEXT);
  });

  profile.addEventListener('mouseleave', () => {
    imgBox.classList.remove('scale-up');
  });
};
