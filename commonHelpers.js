import{i as c,S as v,a as x}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();c.settings({position:"topRight",maxWidth:300,closeOnEscape:!0,closeOnClick:!0});const h=new v(".gallery-list a",{captionsData:"alt",captionDelay:250}),r={form:document.querySelector(".js-sumbit"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loaderWrap:document.querySelector(".js-loader-wrap"),moreBtn:document.querySelector(".js-btn")};let u="",i=1,p=40,m=1,f=1;r.form.addEventListener("submit",B);r.moreBtn.addEventListener("click",j);async function B(s){s.preventDefault(),i=1,w(),g();const{searchQuery:a}=s.currentTarget.elements;u={search:a.value}.search;try{await b(u,i,p).then(({data:l,data:{hits:e},data:{totalHits:t}})=>{m=t,f=Math.ceil(m/p),e.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again."}),g(),i=1):(r.gallery.innerHTML=L(e),y()),h.refresh(),d()})}catch(l){c.error({message:"Oops! Something went wrong! Try reloading the page!"}),d(),console.log(l)}finally{s.target.reset()}}async function j(){if(i+=1,i>f){g(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}g(),w();try{await b(u,i,p).then(({data:a,data:{hits:o},data:{totalHits:l}})=>{r.gallery.insertAdjacentHTML("beforeend",L(o)),d(),y(),h.refresh()})}catch{c.error({message:"Oops! Something went wrong! Try reloading the page!"}),d(),y()}r.galleryItem=document.querySelector(".js-gallery-item");const s=r.galleryItem.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}function w(){r.loader.classList.replace("hidden","show"),r.loaderWrap.classList.replace("hidden","show")}function d(){r.loader.classList.replace("show","hidden"),r.loaderWrap.classList.replace("show","hidden")}function y(){r.moreBtn.classList.replace("hidden","show")}function g(){r.moreBtn.classList.replace("show","hidden")}async function b(s,a,o){const l="https://pixabay.com/api/",t={params:{key:"40988113-0969bce247b2af623dbb12295",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o}};return await x.get(`${l}`,t)}function L(s){return s.map(({webformatURL:a,largeImageURL:o,tags:l,likes:e,views:t,comments:n,downloads:S})=>`<li class="js-gallery-item gallery-item"><a class="gallery-link" href="${o}"><img class="gallery-img" src="${a}" alt="${l}" loading="lazy" /></a>
    <div class="gallery-wrapper">
      <div class="gallery-descr">
        <p class="gallery-subtitle">Likes</p>
        <p class="gallery-text">${e}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Views</p>
        <p class="gallery-text">${t}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Comments</p>
        <p class="gallery-text">${n}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Downloads</p>
        <p class="gallery-text">${S}</p>
      </div>
    </div>
  </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
