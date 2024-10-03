document.querySelectorAll(".layer").forEach((layer) => {
  layer.addEventListener("click", () => {
    layer.style.transition = "transform 0.5s";
    layer.style.transform = "translateX(100vw)";
  });
});
