function next(n){
  show(n);
}

function show(n){
  document.querySelectorAll(".scene").forEach(s=>s.classList.remove("active"));
  document.getElementById("s"+n).classList.add("active");
}

function restart(){
  show(1);
}

function yes(){
  show(4);
  hearts(80);
}

function no(){
  show(5);
}

function future(){
  hearts(120);
  alert("A future I hope becomes real 💖");
}

function calm(){
  alert("Take your time… 🌙");
}

function hearts(count){
  for(let i=0;i<count;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="💖";
    document.body.appendChild(h);

    h.style.left=Math.random()*100+"vw";
    h.style.top="80vh";
    h.style.fontSize=(10+Math.random()*25)+"px";

    setTimeout(()=>h.remove(),3000);
  }
}