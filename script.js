function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.right = (menu.style.right === "0px") ? "-220px" : "0px";
}

function showDay(day) {
  const content = document.getElementById("content");

  let data = {
    home: {
      title: "💖 Happy Valentine 💖",
      text: "Love is composed of a single soul inhabiting two bodies."
    },
    rose: {
      title: "🌹 Happy Rose Day 🌹",
      text: "A rose for my love, to show how deep my feelings grow.",
      img: "https://i.imgur.com/LZ8FJxG.png"
    },
    chocolate: {
      title: "🍫 Happy Chocolate Day 🍫",
      text: "Life is like chocolate – sweet and full of surprises!",
      img: "https://i.imgur.com/yoEzbt6.png"
    },
    hug: {
      title: "🤗 Happy Hug Day 🤗",
      text: "Sometimes a hug is all you need to feel better."
    },
    kiss: {
      title: "💋 Happy Kiss Day 💋",
      text: "Your kiss is my favorite hello and hardest goodbye."
    },
    propose: {
      title: "💍 Happy Propose Day 💍",
      text: "I can’t imagine my life without you. Will you be mine forever?"
    }
  };

  let html = `<h1>${data[day].title}</h1>
              <p class="quote">${data[day].text}</p>`;

  if (data[day].img) {
    html += `<img src="${data[day].img}" class="img">`;
  }

  content.innerHTML = html;
  toggleMenu();
}
