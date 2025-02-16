var clickBtnElement = document.getElementById('clickBtn')
var sumElement = document.getElementById('sum')
var zElement = document.getElementById('z')
var yElement = document.getElementById('y')
var qElement = document.getElementById('q')
var uElement = document.getElementById('u')
var yclick = document.getElementById('yclick');
var x= document.getElementById('x');
var ach = document.getElementById('achievementsBtn');
var a = Number(localStorage.heroLevel) || 0;
var Plus = Number(localStorage.maksim) || 1;
var achievements = {
  "firstClick": { condition: 1, reward: 1000, unlocked: false, text: "Первый клик! +1 к" },
  "hundredClicks": { condition: 10000, reward: 10000, unlocked: false, text: "10000 кликов! +10 к" },
  "thousandClicks": { condition: 100000, reward: 150000, unlocked: false, text: "100000 кликов! +150 к" },
};

// Загружаем достижения из localStorage
var savedAchievements = JSON.parse(localStorage.getItem("achievements"));
if (savedAchievements) {
  for (let key in achievements) {
      if (savedAchievements[key]) achievements[key].unlocked = savedAchievements[key].unlocked;
  }
}
sumElement.innerHTML = a;
clickBtnElement.onclick = function() {
  a += Plus;
  sumElement.innerHTML = a;
  localStorage.heroLevel = a;
  localStorage.maksim = Plus;
  checkAchievements();
  function checkAchievements() {
    for (let key in achievements) {
        let ach = achievements[key];
        if (!ach.unlocked && a >= ach.condition) {
          ach.unlocked = true;
          a += ach.reward; // Даем бонус
          localStorage.heroLevel = a; // Сохраняем в localStorage
          sumElement.innerHTML = a;
          alert(`🎉 Достижение разблокировано: ${ach.text}`);
      }
  }
  localStorage.setItem("achievements", JSON.stringify(achievements)); // Сохраняем достижения
}

    }
  document.getElementById("achievementsBtn").onclick = function() {
    let list = document.getElementById("achievementsList");
    list.innerHTML = ""; // Очищаем старый список
    list.style.display = "block" // Показываем список
    x.style.display= "block";
    for (let key in achievements) {
        let ach = achievements[key];
        let status = ach.unlocked ? "✅ Получено" : "❌ Не получено";
        let item = document.createElement("p");
        item.innerHTML = `${ach.text} <strong>${status}</strong>`;
        list.appendChild(item);
    }
  };
yElement.onclick = function() {
  if (a >= 100){
    Plus += 1;
    a -= 100;
    sumElement.innerHTML = a;
}
}
zElement.onclick = function(){
if (a >= 1000){
  Plus += 10;
  a -= 1000;
  sumElement.innerHTML = a;
}
}
qElement.onclick = function() {
  if (a >= 10000){
    Plus += 100;
    a -= 10000;
    sumElement.innerHTML = a;
}
}
uElement.onclick = function() {
  if (a >= 100000){
    Plus += 1000;
    a -= 100000;
    sumElement.innerHTML = a;
}
}
function yClick() {
  document.getElementById('y').style.display='block';
  document.getElementById('yclick').style.display='none';
  document.getElementById('sum').style.display='none';
  document.getElementById('clickBtn').style.display='none';
  document.getElementById('x').style.display='block';
  document.getElementById('z').style.display='block';
  document.getElementById('q').style.display='block';
  document.getElementById('u').style.display='block';
  ach.style.display = "none";
  x.style.display = "block";
  }
  function off() {
  document.getElementById('y').style.display='none';
  document.getElementById('yclick').style.display='block';
  document.getElementById('sum').style.display='block';
  document.getElementById('clickBtn').style.display='block';
  document.getElementById('x').style.display='none';
  document.getElementById('z').style.display='none';
  document.getElementById('q').style.display='none';
  document.getElementById('u').style.display='none';
  let list = document.getElementById("achievementsList");
  list.innerHTML = ""; // Очищаем старый список
  list.style.display = "none";
  x.style.display = "none";
  ach.style.display = "block";
  }
