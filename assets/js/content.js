(async()=>{
const A=window.API;if(!A)return;
let d;try{const r=await fetch(A+"/api/content");if(!r.ok)return;d=await r.json()}catch{return}
const e=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])),
src=s=>/^(https:\/\/|assets\/|\/)/.test(s)?e(s):"",
ST={real:"Реализм",graph:"Графика",mini:"Минимализм",orig:"Ориджинал",cover:"Кавер"},
R={
prices:p=>`<tr><td>${e(p.name)}<small>${e(p.note)}</small></td><td>${e(p.price)}</td></tr>`,
reviews:r=>`<figure class="rv"><span class="st">${"★".repeat(Math.min(5,Math.max(1,+r.stars||5)))}</span><q>${e(r.text)}</q><small>${e(r.name)}</small></figure>`,
works:(w,f)=>{const i=`<img src="${src(w.img)}" alt="${e(w.title)}, ${ST[w.style]}" loading="lazy"><span>${e(w.title)} · ${ST[w.style]}</span>`;return f?`<a class="work" href="portfolio.html">${i}</a>`:`<button class="work" data-s="${w.style}">${i}</button>`}};
document.querySelectorAll("[data-list]").forEach(n=>{const k=n.dataset.list,f=n.dataset.feat;if(!Array.isArray(d[k]))return;
let a=d[k];if(f)a=a.filter(w=>w.featured).slice(0,4);n.innerHTML=a.map(x=>R[k](x,f)).join("")});
document.querySelectorAll("[data-bind]").forEach(n=>{const v=n.dataset.bind.split(".").reduce((o,k)=>o?.[k],d);if(typeof v!=="string"||!v)return;
n.textContent=v;if(n.dataset.pre)n.href=n.dataset.pre+(n.dataset.pre==="tel:"?v.replace(/[^\d+]/g,""):v.replace(/^@/,""))});
if(d.open===false){const b=document.createElement("div");b.className="notice";b.setAttribute("role","status");b.textContent="Запись временно закрыта. Следите за обновлениями в Telegram.";document.querySelector("main").prepend(b)}
})();
