(()=>{
const fl=document.querySelector(".fl"),wg=document.querySelector(".wg");if(!fl||!wg)return;
const dlg=document.createElement("dialog");
dlg.className="lb";dlg.innerHTML='<img alt=""><div><span></span><button class="btn btn--s" type="button">Закрыть</button></div>';
document.body.append(dlg);
const img=dlg.querySelector("img"),cap=dlg.querySelector("span");
fl.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
fl.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
wg.querySelectorAll(".work").forEach(i=>i.hidden=b.dataset.f!=="all"&&i.dataset.s!==b.dataset.f)});
wg.addEventListener("click",e=>{const w=e.target.closest(".work");if(!w)return;
const s=w.querySelector("img");img.src=s.src;img.alt=s.alt;cap.textContent=w.querySelector("span").textContent;dlg.showModal()});
dlg.querySelector("button").addEventListener("click",()=>dlg.close());
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
})();
