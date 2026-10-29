const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.getElementById("loveButton").addEventListener("click", () => {
  showToast("Hyunn, kamu hebat! Aku percaya sama kamu. ♡");
  for (let i = 0; i < 7; i++) {
    const heart = document.createElement("span");
    heart.textContent = ["♡", "✦", "♥"][i % 3];
    heart.style.cssText = `position:fixed;left:${35 + Math.random() * 30}%;top:${48 + Math.random() * 15}%;z-index:30;pointer-events:none;color:#cbd4ff;font-size:${16 + Math.random() * 18}px;animation:floatHeart 1.5s ease-out forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1550);
  }
});

const style = document.createElement("style");
style.textContent = "@keyframes floatHeart{0%{opacity:0;transform:translateY(12px) scale(.7)}25%{opacity:1}100%{opacity:0;transform:translateY(-90px) scale(1.25)}}";
document.head.appendChild(style);

document.querySelectorAll(".check").forEach(button => {
  button.addEventListener("click", () => {
    const isDone = button.classList.toggle("done");
    button.setAttribute("aria-pressed", String(isDone));
    button.textContent = isDone ? "♥" : "✓";
  });
});

const messages = [
  "Hari yang berat bukan berarti hidupmu buruk. Besok selalu punya kesempatan baru.",
  "Kamu sudah bertahan dan berusaha sejauh ini. Beri dirimu sedikit apresiasi, ya.",
  "Nggak perlu membandingkan perjalananmu dengan orang lain. Waktumu juga berharga.",
  "Satu langkah kecil hari ini tetap lebih baik daripada menyerah pada dirimu sendiri.",
  "Semoga hari ini ada hal sederhana yang bikin Hyunn tersenyum. Kamu pantas bahagia.",
  "Kalau capek, istirahat dulu. Kamu boleh pelan-pelan, yang penting tetap menyayangi diri sendiri."
];
let lastMessage = 0;
document.getElementById("newMessage").addEventListener("click", () => {
  let next = Math.floor(Math.random() * messages.length);
  if (messages.length > 1) while (next === lastMessage) next = Math.floor(Math.random() * messages.length);
  lastMessage = next;
  const target = document.getElementById("dailyMessage");
  target.animate([{opacity:0, transform:"translateY(5px)"},{opacity:1, transform:"translateY(0)"}], {duration:350});
  target.textContent = messages[next];
});

const surprise = document.getElementById("surprise");
document.getElementById("surpriseButton").addEventListener("click", () => {
  surprise.classList.toggle("hidden");
  if (!surprise.classList.contains("hidden")) surprise.scrollIntoView({behavior:"smooth", block:"center"});
});
document.getElementById("closeSurprise").addEventListener("click", () => surprise.classList.add("hidden"));

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
  document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
  link.classList.add("active");
}));
