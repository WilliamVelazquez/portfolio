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