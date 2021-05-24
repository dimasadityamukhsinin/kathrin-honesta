// new InViewClass({target: 'div.inview', visibility: 0});
export class InViewClass {
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
  smoothScrollbar = null;
  scrolltarget = null;
  visibility = 0.1;
  inview = false;
  resizeTick = false;
  constructor(obj) {
    this.margin.top = obj.margin_top || 0;
    this.margin.right = obj.margin_right || 0;
    this.margin.bottom = obj.margin_bottom || 0;
    this.margin.left = obj.margin_left || 0;

    this.resizeTick = obj.resizeTick || false;
    this.smoothScrollbar = obj.smoothScrollbar || null;
    this.visibility = obj.visibility !== undefined ? obj.visibility : 0.1;

    this.scrolltarget = obj.target || null;
    if (typeof this.scrolltarget === "string") {
      const targetelem = document.querySelector(this.scrolltarget);
      this.scrolltarget = targetelem;
    }

    if (
      obj.enter !== null &&
      obj.enter !== undefined &&
      typeof obj.enter === "function"
    )
      this.enter = obj.enter;
    if (
      obj.exit !== null &&
      obj.exit !== undefined &&
      typeof obj.exit === "function"
    )
      this.exit = obj.exit;
    if (
      obj.always !== null &&
      obj.always !== undefined &&
      typeof obj.always === "function"
    )
      this.always = obj.always;

    if (this.smoothScrollbar !== null) {
      this.smoothScrollbar.addListener(this.trigger);
    }

    window.addEventListener("scroll", this.trigger, false);
    if (this.resizeTick) {
      window.addEventListener("resize", this.trigger, false);
    }
    this.trigger();
  }
  set(obj) {
    if (obj.margin_top) this.margin.top = obj.margin_top || 0;
    if (obj.margin_right) this.margin.right = obj.margin_right || 0;
    if (obj.margin_bottom) this.margin.bottom = obj.margin_bottom || 0;
    if (obj.margin_left) this.margin.left = obj.margin_left || 0;
    if (obj.visibility)
      this.visibility = obj.visibility !== undefined ? obj.visibility : 0.1;

    if (obj.smoothScrollbar) {
      // Reset Previous Scrollbar
      if (this.smoothScrollbar !== null) {
        this.smoothScrollbar.removeListener(this.trigger);
      }

      this.smoothScrollbar = obj.smoothScrollbar || null;

      // Re-Init Smooth Scrollbar
      // console.log('check', this.smoothScrollbar);

      if (this.smoothScrollbar !== null) {
        this.smoothScrollbar.addListener(this.trigger);
      }
    }

    if (obj.target) {
      this.scrolltarget = obj.target || null;
      if (typeof this.scrolltarget === "string") {
        const targetelem = document.querySelector(this.scrolltarget);
        this.scrolltarget = targetelem;
      }
    }

    if (
      obj.enter !== null &&
      obj.enter !== undefined &&
      typeof obj.enter === "function"
    )
      this.enter = obj.enter;
    if (
      obj.exit !== null &&
      obj.exit !== undefined &&
      typeof obj.exit === "function"
    )
      this.exit = obj.exit;
    if (
      obj.always !== null &&
      obj.always !== undefined &&
      typeof obj.always === "function"
    )
      this.always = obj.always;

    this.trigger();

    if (obj.resizeTick) {
      this.resizeTick = obj.resizeTick || false;
      window.removeEventListener("resize", this.trigger, false);
      if (this.resizeTick) {
        window.addEventListener("resize", this.trigger, false);
      }
    }
  }
  kill = () => {
    if (this.smoothScrollbar !== null) {
      this.smoothScrollbar.removeListener(this.trigger);
    }
    if (this.resizeTick) {
      window.removeEventListener("resize", this.trigger, false);
    }
    window.removeEventListener("scroll", this.trigger, false);
    // this.enter = null;
    // this.exit = null;
  };
  enter() {}
  exit() {}
  always() {}
  trigger = () => {
    if (this.scrolltarget !== null) {
      let inview = InViewDetect(
        this.scrolltarget,
        this.margin.top,
        this.margin.right,
        this.margin.bottom,
        this.margin.left,
        this.visibility
      );
      this.always(inview);
      if (inview.detected) {
        if (!this.inview) {
          this.inview = true;
          this.enter(inview);
        }
      } else {
        if (this.inview) {
          this.inview = false;
          this.exit(inview);
        }
      }
    }
  };
}

const windowHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.getElementsByTagName("body")[0].clientHeight;

// Create Percentage from Value with Min & Max value (0, 1) and set speed and buffer
export const percentAdjust = ({
  value,
  speed = 1,
  buffer = 0.1,
  offset = 0,
}) => {
  let offsetValue = value + offset;
  let newValue = (Math.abs(offsetValue) - buffer) * speed;
  if (newValue < 0) newValue = 0;
  if (newValue > 1) newValue = 1;

  newValue = Math.round(newValue * Math.sign(offsetValue) * 100000) / 100000;

  return newValue;
};

export class ScrollPassClass {
  scrolltarget = null;
  scrollpassed = false;
  detectbottom = true;
  constructor(obj) {
    this.scrolltarget = obj.target || null;
    this.detectbottom = obj.detectbottom || true;

    if (typeof this.scrolltarget === "string") {
      const targetelem = document.querySelector(this.scrolltarget);
      this.scrolltarget = targetelem;
    }

    if (
      obj.passed !== null &&
      obj.passed !== undefined &&
      typeof obj.passed === "function"
    )
      this.passed = obj.passed;
    if (
      obj.notpassed !== null &&
      obj.notpassed !== undefined &&
      typeof obj.notpassed === "function"
    )
      this.notpassed = obj.notpassed;
    if (
      obj.always !== null &&
      obj.always !== undefined &&
      typeof obj.always === "function"
    )
      this.always = obj.always;

    window.addEventListener("scroll", this.trigger, false);
    this.trigger();
  }
  set(obj) {
    if (obj.madetectbottomrgin) this.detectbottom = obj.detectbottom || true;

    if (obj.target) {
      this.scrolltarget = obj.target || null;
      if (typeof this.scrolltarget === "string") {
        const targetelem = document.querySelector(this.scrolltarget);
        this.scrolltarget = targetelem;
      }
    }
    if (
      obj.passed !== null &&
      obj.passed !== undefined &&
      typeof obj.passed === "function"
    )
      this.passed = obj.passed;
    if (
      obj.notpassed !== null &&
      obj.notpassed !== undefined &&
      typeof obj.notpassed === "function"
    )
      this.notpassed = obj.notpassed;
    if (
      obj.always !== null &&
      obj.always !== undefined &&
      typeof obj.always === "function"
    )
      this.always = obj.always;

    this.trigger();
  }
  kill = () => {
    window.removeEventListener("scroll", this.trigger, false);
  };
  passed() {}
  notpassed() {}
  always() {}
  trigger = () => {
    if (this.scrolltarget !== null) {
      let passdetect = PassDetect(this.scrolltarget, this.detectbottom);
      this.always(passdetect);
      if (passdetect.passed !== null && passdetect.passed !== undefined) {
        if (this.scrollpassed && !passdetect.passed) {
          this.scrollpassed = passdetect.passed;
          this.notpassed(passdetect);
        } else if (!this.scrollpassed && passdetect.passed) {
          this.scrollpassed = passdetect.passed;
          this.passed(passdetect);
        }
      }
    }
  };
}

const defaultReturnObj = {
  margin: null,
  target: null,
  fromCenter: 0,
  percentCenterHeight: function (arg = {}) {
    const {
      speed = 1,
      buffer = 0.1,
      offset = 0,
      height = windowHeight(),
    } = arg;

    const value = Math.round((this.fromCenter / height) * 1.5 * 100) / 100;

    let offsetValue = value + offset;
    let newValue = (Math.abs(offsetValue) - buffer) * speed;
    if (newValue < 0) newValue = 0;
    if (newValue > 1) newValue = 1;

    newValue = Math.round(newValue * Math.sign(offsetValue) * 100000) / 100000;

    return newValue;
  },
};

// Detecting status of Object whether has passed a certain treshold
export const PassDetect = (target = null, detectbottom = true) => {
  let returnobj = {
    passed: false,
    detectbottom: true,
    ...defaultReturnObj,
  };
  // Get Document Height
  const vh =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName("body")[0].clientHeight;

  if (target !== null) {
    if (typeof target === "string") {
      const targetelem = document.querySelector(target);
      target = targetelem;
    }
    let _t = target.getBoundingClientRect();
    returnobj.target = _t;

    // CHECK IF OBJECT IS CENTER
    // Calculate object 'center' from viewport (distance from top - (difference between window height and object height))
    returnobj.fromCenter = _t.top - (vh - _t.height) / 2;

    // IF CENTER REACHED THE TOP
    returnobj.target.center = _t.top - _t.height / 2;

    // BOTTOM DETECTED;
    returnobj.detectbottom = detectbottom;

    if (detectbottom) {
      if (_t.bottom < vh) {
        returnobj.passed = true;
      } else {
        returnobj.passed = false;
      }
    } else {
      if (_t.top < 0) {
        returnobj.passed = true;
      } else {
        returnobj.passed = false;
      }
    }
  }
  return returnobj;
};

// Detecting status of Object Inview Currently);
export const InViewDetect = (
  target = null,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  visibility = 0.5
) => {
  let returnobj = {
    detected: false,
    visibility: 0,
    ...defaultReturnObj,
  };

  if (target !== null) {
    if (visibility > 1) {
      visibility = 1;
    }
    const visibleMultipler = 1 - visibility;

    if (typeof target === "string") {
      const targetelem = document.querySelector(target);
      target = targetelem;
    }
    let _t = target.getBoundingClientRect();
    returnobj.target = _t;

    // Get Document Height
    const vh =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName("body")[0].clientHeight;

    // calculate from center
    returnobj.target.center = _t.top + _t.height / 2;

    // calculate object 'center' from viewport (distance from top - (difference between window height and object height))
    returnobj.fromCenter = _t.top - (vh - _t.height) / 2;

    // console.log('inview detect', _t.top, vh, returnobj.fromCenter);

    const margin = {
      top: top - _t.height * visibleMultipler,
      left: left - _t.width * visibleMultipler,
      bottom:
        (window.innerHeight || document.documentElement.clientHeight) +
        _t.height * visibleMultipler -
        bottom,
      right:
        (window.innerWidth || document.documentElement.clientWidth) +
        _t.width * visibleMultipler -
        right,
    };

    returnobj.margin = margin;

    let detected = false;
    if (
      _t.top >= margin.top &&
      _t.left >= margin.left &&
      _t.bottom <= margin.bottom &&
      _t.right <= margin.right
    ) {
      detected = true;
    }
    //CALCULATE VISIBLE FROM
    let visibleLeft = Math.max(
      Math.min((_t.width - left + _t.left) / _t.width, 1),
      0
    );
    let visibleRight = Math.max(
      Math.min(
        (_t.width +
          ((window.innerWidth || document.documentElement.clientWidth) -
            right -
            _t.right)) /
          _t.width,
        1
      ),
      0
    );
    let visibleTop = Math.max(
      Math.min((_t.height - top + _t.top) / _t.height, 1),
      0
    );
    let visibleBottom = Math.max(
      Math.min(
        (_t.height +
          ((window.innerHeight || document.documentElement.clientHeight) -
            bottom -
            _t.bottom)) /
          _t.height,
        1
      ),
      0
    );

    //CALCULATE GET THE OVERALL MINIMUM VISIBLITY
    const visible = Math.min(
      visibleLeft,
      visibleRight,
      visibleTop,
      visibleBottom
    );

    returnobj.visibility = visible;
    returnobj.detected = detected;
  } else {
    returnobj.detected = false;
  }
  return returnobj;
};
