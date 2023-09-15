const accardions = document.querySelectorAll(".accardion_lists");

accardions.forEach((item) => {
  item.addEventListener("click", (e) => {
    accardions.forEach((item2) => {
      if (item2 !== item && item2.classList.contains("active")) {
        item2.classList.remove("avtive");
      }

    //   kod-2 AI 
    
      if (item2 !== item && item2.classList.contains("active")) {
        item2.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});


