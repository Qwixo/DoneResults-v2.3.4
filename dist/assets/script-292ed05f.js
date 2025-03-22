document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".hero-heading-part.part-1"),c=document.querySelector(".hero-heading-part.part-2"),r=document.querySelector(".hero-heading-part.part-3"),f=document.querySelector(".hero-subheadline"),h=document.querySelector(".hero-content .cta-button");function S(){setTimeout(()=>{n&&(n.style.opacity="1",n.style.transform="translateY(0)",n.classList.add("glitch-active"),setTimeout(()=>{n&&n.classList.remove("glitch-active")},300))},100),setTimeout(()=>{c&&(c.style.opacity="1",c.style.transform="translateY(0)",c.classList.add("glitch-active"),setTimeout(()=>{c&&c.classList.remove("glitch-active")},300))},500),setTimeout(()=>{r&&(r.style.opacity="1",r.style.transform="translateY(0)",r.classList.add("glitch-active-alt"),setTimeout(()=>{r&&r.classList.remove("glitch-active-alt")},400))},900),setTimeout(()=>{f&&(f.style.opacity="1",f.style.transform="translateY(0)")},1300),setTimeout(()=>{h&&(h.style.opacity="1",h.style.transform="translateY(0)")},1700)}S();const i=document.getElementById("hero"),s=document.querySelector(".hero-dots-highlight");let y=0,p=0;function L(t){if(i&&s){const e=i.getBoundingClientRect();y=t.clientX-e.left,p=t.clientY-e.top,s.style.setProperty("--mouse-x",`${y}px`),s.style.setProperty("--mouse-y",`${p}px`),s.style.opacity="1"}}i&&s&&(i.addEventListener("mousemove",L),i.addEventListener("mouseleave",()=>{s&&(s.style.opacity="0")}));function v(){if(i){const t=i.getBoundingClientRect(),e=window.scrollY,o=Math.min(1,e/(t.height*.5)),a=document.querySelector(".hero-dots-fade");a&&(a.style.opacity=Math.min(1,o*2))}}window.addEventListener("scroll",v);const E=document.querySelectorAll(".faq-item");E.forEach(t=>{const e=t.querySelector(".faq-question");e&&e.addEventListener("click",()=>{E.forEach(o=>{o!==t&&o.classList.contains("active")&&o.classList.remove("active")}),t.classList.toggle("active")})}),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href");if(o==="#")return;const a=document.querySelector(o);a&&window.scrollTo({top:a.offsetTop-100,behavior:"smooth"})})});const g=document.getElementById("main-header");window.addEventListener("scroll",()=>{g&&((window.pageYOffset||document.documentElement.scrollTop)>50?g.classList.add("visible"):g.classList.remove("visible"))}),document.getElementById("features-container");const M=document.querySelectorAll(".feature-card-wrapper");let l=0,d=0,u=null;function w(t){l=t.clientX,d=t.clientY,u&&cancelAnimationFrame(u),u=requestAnimationFrame(T)}function T(){M.forEach(t=>{const e=t.getBoundingClientRect(),o=t.querySelector(".glowing-effect");if(!o)return;const a=e.left+e.width/2,q=e.top+e.height/2,b=Math.hypot(l-a,d-q),Y=.5*Math.min(e.width,e.height)*.01;if(b<Y){t.classList.remove("active");return}const m=64;if(l>e.left-m&&l<e.left+e.width+m&&d>e.top-m&&d<e.top+e.height+m){t.classList.add("active");const C=Math.atan2(d-q,l-a)*(180/Math.PI)+90;o.style.setProperty("--start",C.toString())}else t.classList.remove("active")})}document.addEventListener("mousemove",w),v(),window.addEventListener("beforeunload",()=>{u&&cancelAnimationFrame(u),document.removeEventListener("mousemove",w),i&&i.removeEventListener("mousemove",L),window.removeEventListener("scroll",v)})});document.addEventListener("DOMContentLoaded",function(){const n=document.createElement("style");n.textContent=`
    .glitch-active::before,
    .glitch-active::after {
      opacity: 1;
    }
    
    .glitch-active-alt::before,
    .glitch-active-alt::after {
      opacity: 1;
    }
    
    .glitch-active-alt::before {
      animation: glitch-anim-1 0.4s linear alternate-reverse;
      text-shadow: -2px 0 var(--dark-aqua);
    }
    
    .glitch-active-alt::after {
      animation: glitch-anim-2 0.4s linear alternate-reverse;
      text-shadow: 2px 0 var(--light-aqua);
    }
  `,document.head?document.head.appendChild(n):document.body.appendChild(n)});
