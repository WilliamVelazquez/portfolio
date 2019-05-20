const NAV_HEIGHT = 25;
const OFFSET_TOP = 20;

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("toTopBtn").style.display = "block";
    document.getElementById("toTopBtn").classList.add('hidden');
  } else {
    // document.getElementById("toTopBtn").style.display = "none";
    document.getElementById("toTopBtn").classList.remove('hidden');
  }
}

export const scrollToClassElementBottom = (elementClass) => {
  if (typeof window !== 'undefined') {
    const element = document.querySelector(`.${elementClass}`)
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': (element.scrollHeight-NAV_HEIGHT) //Element height - nav height
    });
  }
}

export const scrollToClassElement = (elementClass) => {
  if (typeof window !== 'undefined') {
    const element = document.querySelector(`.${elementClass}`)
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': (element.offsetTop-OFFSET_TOP-NAV_HEIGHT) //Element height - minus offset - minus nav height
    });
  }
}