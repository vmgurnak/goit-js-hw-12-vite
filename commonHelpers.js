import{a as v,i as d,S as x}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function h(s,a,o){const l="https://pixabay.com/api/",t={params:{key:"40988113-0969bce247b2af623dbb12295",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o}};return await v.get(`${l}`,t)}function f(s){return s.map(({webformatURL:a,largeImageURL:o,tags:l,likes:e,views:t,comments:n,downloads:S})=>`<li class="js-gallery-item gallery-item"><a class="gallery-link" href="${o}"><img class="gallery-img" src="${a}" alt="${l}" loading="lazy" /></a>
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
  </li>`).join("")}d.settings({position:"topRight",maxWidth:300,closeOnEscape:!0,closeOnClick:!0});const w=new x(".gallery-list a",{captionsData:"alt",captionDelay:250}),r={form:document.querySelector(".js-sumbit"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loaderWrap:document.querySelector(".js-loader-wrap"),moreBtn:document.querySelector(".js-btn")};let u="",i=1,p=40,m=1,b=1;r.form.addEventListener("submit",B);r.moreBtn.addEventListener("click",j);async function B(s){s.preventDefault(),i=1,L(),g();const{searchQuery:a}=s.currentTarget.elements;u={search:a.value}.search;try{await h(u,i,p).then(({data:l,data:{hits:e},data:{totalHits:t}})=>{m=t,b=Math.ceil(m/p),e.length===0?(d.error({message:"Sorry, there are no images matching your search query. Please try again."}),g(),c(),i=1):(r.gallery.innerHTML=f(e),c(),y(),w.refresh())})}catch(l){d.error({message:"Oops! Something went wrong! Try reloading the page!"}),c(),console.log(l)}finally{s.target.reset()}}async function j(){if(i+=1,i>b){g(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}g(),L();try{await h(u,i,p).then(({data:a,data:{hits:o},data:{totalHits:l}})=>{r.gallery.insertAdjacentHTML("beforeend",f(o)),c(),y(),w.refresh()})}catch{d.error({message:"Oops! Something went wrong! Try reloading the page!"}),c(),y()}r.galleryItem=document.querySelector(".js-gallery-item");const s=r.galleryItem.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}function L(){r.loader.classList.replace("hidden","show"),r.loaderWrap.classList.replace("hidden","show")}function c(){r.loader.classList.replace("show","hidden"),r.loaderWrap.classList.replace("show","hidden")}function y(){r.moreBtn.classList.replace("hidden","show")}function g(){r.moreBtn.classList.replace("show","hidden")}
//# sourceMappingURL=commonHelpers.js.map
