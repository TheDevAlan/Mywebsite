document.querySelectorAll("[data-set-theme]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.setTheme;(e==="light"||e==="dark")&&window.setTheme?.(e)})});
