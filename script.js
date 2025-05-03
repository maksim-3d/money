var clickBtnElement = document.getElementById('clickBtn')
var sumElement = document.getElementById('sum')
var zElement = document.getElementById('z')
var rElement = document.getElementById('r')
var yElement = document.getElementById('y')
var qElement = document.getElementById('q')
var uElement = document.getElementById('u')
var pElement = document.getElementById('p')
var oElement = document.getElementById('o')
var mElement = document.getElementById('m')
var nElement = document.getElementById('n')
var yclick = document.getElementById('yclick');
var i = document.getElementById('i');
var x= document.getElementById('x');
var ach = document.getElementById('achievementsBtn');
var a =Number(localStorage.heroLevel) || 0;
var Plus = Number(localStorage.maksim) || 1;
var achievements = {
  "firstClick": { condition: 1, reward: 1000, unlocked: false, text: "Первый клик! +1 к" },
  "hundredClicks": { condition: 10000, reward: 5000, unlocked: false, text: "10000 кликов! +5 к" },
  "thousandClicks": { condition: 100000, reward: 15000, unlocked: false, text: "100000 кликов! +15 к" },
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
    i.style.display= "none";
    for (let key in achievements) {
        let ach = achievements[key];
        let status = ach.unlocked ? "✅ Получено" : "❌ Не получено";
        let item = document.createElement("p");
        item.innerHTML = `${ach.text} <strong>${status}</strong>`;
        list.appendChild(item);
    }
  };
rElement.onclick = function() {
  if (a >= 100000000000){
    Plus += 1000000000;
    a -= 100000000000;
    sumElement.innerHTML = a;
}
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
pElement.onclick = function(){
if (a >= 1000000){
  Plus += 10000;
  a -= 1000000;
  sumElement.innerHTML = a;
}
}
oElement.onclick = function(){
if (a >= 10000000){
  Plus += 100000;
  a -= 10000000;
  sumElement.innerHTML = a;
}
}
mElement.onclick = function(){
if (a >= 100000000){
  Plus += 1000000;
  a -= 100000000;
  sumElement.innerHTML = a;
}
}
nElement.onclick = function(){
if (a >= 1000000000){
  Plus += 10000000;
  a -= 1000000000;
  sumElement.innerHTML = a;
}
}
bElement.onclick = function(){
if (a >= 10000000000){
  Plus += 100000000;
  a -= 10000000000;
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
  document.getElementById('i').style.display='none';
  document.getElementById('x').style.display='block';
  document.getElementById('z').style.display='block';
  document.getElementById('q').style.display='block';
  document.getElementById('u').style.display='block';
  document.getElementById('r').style.display='block';
  document.getElementById('p').style.display='block';
  document.getElementById('o').style.display='block';
  document.getElementById('m').style.display='block';
  document.getElementById('n').style.display='block';
  document.getElementById('b').style.display='block';
  ach.style.display = "none";
  x.style.display = "block";
  }
  function off() {
  document.getElementById('y').style.display='none';
  document.getElementById('yclick').style.display='block';
  document.getElementById('sum').style.display='block';
  document.getElementById('clickBtn').style.display='block';
  document.getElementById('i').style.display='block';
  document.getElementById('x').style.display='none';
  document.getElementById('z').style.display='none';
  document.getElementById('q').style.display='none';
  document.getElementById('u').style.display='none';
  document.getElementById('r').style.display='none';
  document.getElementById('p').style.display='none';
  document.getElementById('o').style.display='none';
  document.getElementById('m').style.display='none';
  document.getElementById('n').style.display='none';
  document.getElementById('b').style.display='none';
  let list = document.getElementById("achievementsList");
  list.innerHTML = ""; // Очищаем старый список
  list.style.display = "none";
  x.style.display = "none";
  ach.style.display = "block";
  }
