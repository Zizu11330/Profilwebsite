const track = document.getElementById("imageTrack");

let mouseDownAt = 0;
let prevPercentage = 0;
let percentage = 0;
let dragging = false;

track.addEventListener("mousedown", (e) => {
  mouseDownAt = e.clientX; // Store initial mouse down position
  dragging = true;
  track.style.transition = "none"; // Disable smooth transition while dragging
});

track.addEventListener("mouseup", () => {
  dragging = false;
  prevPercentage = percentage;
});

track.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  const mouseDelta = e.clientX - mouseDownAt;
  const maxDelta = window.innerWidth / 3;

  // Calculate the new percentage based on mouse movement
  percentage = prevPercentage + (mouseDelta / maxDelta) * 100;

  // Restrict movement so that images don’t scroll beyond visible area
  percentage = Math.max(
    Math.min(percentage, 80),
    -(((track.children.length - 1) * 100) / track.children.length)
  );

  // Apply the calculated percentage to translate images
  track.style.transform = `translateX(${percentage}%)`;
});