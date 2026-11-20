(()=>{
document.querySelectorAll("form.fm").forEach(f=>{
const t=f.querySelector("[name=tel]"),o=f.querySelector(".ok");
t.addEventListener("input",()=>{let d=t.value.replace(/\D/g,"").replace(/^[78]/,"").slice(0,10),s="+7";
if(d)s+=" ("+d.slice(0,3);if(d.length>=3)s+=") "+d.slice(3,6);if(d.length>=6)s+="-"+d.slice(6,8);if(d.length>=8)s+="-"+d.slice(8);t.value=s});
f.addEventListener("submit",async e=>{e.preventDefault();let bad=false;
f.querySelectorAll("[required]").forEach(i=>{const v=i.type==="checkbox"?i.checked:i.name==="tel"?i.value.replace(/\D/g,"").length===11:i.value.trim().length>1;i.setAttribute("aria-invalid",String(!v));if(!v)bad=true});
if(bad){o.textContent="Проверьте выделенные поля.";return}
const btn=f.querySelector("button");btn.disabled=true;o.textContent="Отправляем…";
try{if(window.API){const r=await fetch(window.API+"/api/lead",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});if(!r.ok)throw 0}
o.textContent="Заявка принята. Мастер свяжется с вами в течение дня.";f.reset()}
catch{o.textContent="Не удалось отправить. Напишите нам в Telegram."}
btn.disabled=false})})
})();
