const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const heaven = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "radialGradient",
);
heaven.setAttribute("id", "heaven");
heaven.setAttribute("r", "75%");
const glowCenter = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
glowCenter.setAttribute("offset", "45%");
glowCenter.setAttribute("stop-color", "#ffffff");
const glowEdge = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
glowEdge.setAttribute("offset", "100%");
glowEdge.setAttribute("stop-color", "#f5a623");
heaven.append(glowCenter, glowEdge);
defs.append(heaven);

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "An excited collector grinning against a glowing yellow and white background",
);

const background = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "rect",
);
background.setAttribute("x", "0");
background.setAttribute("y", "0");
background.setAttribute("width", "200");
background.setAttribute("height", "200");
background.setAttribute("fill", "url(#heaven)");
face.append(defs, background);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
mouth.setAttribute("d", "M 65 130 Q 100 170 135 130");
mouth.setAttribute("fill", "none");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
