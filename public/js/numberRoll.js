function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const objs = document.getElementsByClassName("countdown");
for(let obj of objs){
  setInterval(animateValue(obj, 100, 0, 3000),2000)
}
const objs2 = document.getElementsByClassName("countup");
for(let obj of objs2){
  animateValue(obj, 0, 100, 5000);
}


/* Press Realese*/
var elem = document.querySelector('.main-carousel');
async function getArticles(){
  await fetch(`https://cms.evest.com/wp-json/wp/v2/press_release?_embded`).then(res=>res.json()).then(data=>
  {
    const article = data.map(post => {
      return `
  <div class="carousel-cell">
    <a href="${post.url_link}" target="_blank">
    <img src="${post.yoast_head_json.schema["@graph"][2].url}" alt="${post.title.rendered}" title="${post.title.rendered}" style="width:450px">
    </a>
  </div>`;
  }).join("");

  document.querySelector("#PressRelease").innerHTML = article;
});
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freescroll:true
});
}
getArticles();
