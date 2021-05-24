const at_v = { transY: 25 };

export const titleAnimationOptions = {
  easing: "linear",
  duration: 1000,
  autoplay: false,
  translateY: [{ value: [-at_v.transY, 0] }, { value: [0, at_v.transY] }],
  opacity: [
    { value: [0, 0], duration: 5 },
    { value: [0, 1], duration: 195 },
    { value: [1, 1], duration: 600 },
    { value: [1, 0], duration: 195 },
    { value: [0, 0], duration: 5 },
  ],
};

// Max Value for Image Animation
const av = { rotation: 30, transZ: 125, transY: 100 };

export const imageAnimationOptions = {
  easing: "linear",
  duration: 1000,
  autoplay: false,
  rotateX: [{ value: [av.rotation, 0] }, { value: [0, -av.rotation] }],
  translateZ: [{ value: [-av.transZ, 0] }, { value: [0, -av.transZ] }],
  translateY: [{ value: [-av.transY, 0] }, { value: [0, av.transY] }],
  opacity: [
    { value: [0, 0], duration: 100 },
    { value: [0, 1], duration: 300 },
    { value: [1, 1], duration: 150 },
    { value: [1, 0], duration: 300 },
    { value: [0, 0], duration: 100 },
  ],
};

// Max Value for Image Animation
const amc = { transY: 100 };

export const mobileContAnimOptions = {
  easing: "linear",
  duration: 1000,
  autoplay: false,
  translateY: [{ value: [amc.transY, 0] }, { value: [0, -amc.transY] }],
};
