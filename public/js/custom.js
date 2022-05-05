/* TipRanks Analytics GTM dataLayer push  */
function tipRanksAnalytics( event ) {
  let uniqueID = event.customer.customerId;
  let targetElements = [
      'app-tipranks-trending-stocks',
      'app-tipranks-daily-ratings',
      'app-tipranks-analyst-ratings',
      'app-tipranks-news-and-sentiment',
      'app-tipranks-insider-activity'
  ];

  (function visibilityCheck() {
      setInterval( function(){
          let isVisible = false;
          let detailedEvent = [];
          targetElements.forEach(( element ) => {
              if( document.querySelector( element ) !== null ) {
                  isVisible = true;
                  detailedEvent.push(element.split('app-tipranks-')[1]);
              }
          });
          if( isVisible ) {

              function dataLayerHandler(eventSuffix) {
                  let payload =  {
                      'event': 'tip_ranks_' + eventSuffix,
                      'uniqueID': uniqueID,
                      'timeIncrement': 10
                  };

                  return payload;
              }
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.length = 0;
              window.dataLayer.push( dataLayerHandler('useTime') );
              window.dataLayer.push( dataLayerHandler( detailedEvent[0] ) );
          }
      }, 10000);
  })();
}



checkLang();
function isMobile() {
  var check = false;
  (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
          check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  let clicks=$('body *').toArray().filter(function(el) { return $(el).attr('onclick') });
  if(check){
    for(let i=0;i<clicks.length;i++){
      if(!clicks[i].className.includes('readmore')){
        clicks[i].setAttribute("onclick","window.location.replace('/mobile/#/signup')");
      }
    }
};}

isMobile();

// var tradingAcademyLink=document.querySelector(".ta-link");
// var tradingAcademyLinkAr=document.querySelector(".ta-linkAr");


var forexEvents = {
  depositSuccess: depositSuccessCallback,
  depositFail: depositFailCallback,
  signupSuccess: signupSuccessCallback,
  signupFail: signupFailCallback,
  loginSuccess: loginSuccessCallback,
  loginFail: loginFailCallback,
  logout: logoutCallback,
  init: appInitCallback,
  themeChange: themeChangeCallback,
};
function depositSuccessCallback(e) {}
function depositFailCallback(e) {}
function signupSuccessCallback(e) {}
function signupFailCallback(e) {}
function loginSuccessCallback(e) {
  tipRanksAnalytics(e);
  localStorage.setItem("loggedin", "true");
  window.Loggedin = 'true';
  // tradingAcademyLink.href=tradingAcademyLink.href+"/true";
  // tradingAcademyLinkAr.href="/ar/أكاديمية-التداول/true?lang=ar";

  let clicks=$('body *').toArray().filter(function(el) { return $(el).attr('onclick') });
  for(let i=0;i<clicks.length;i++){
    if(clicks[i].className.includes('page')||clicks[i].className.includes('readmore')){
      i++   
    }else{
      clicks[i].setAttribute("onclick","window.location.replace('/trade-room')");
    }  
    }
}
function loginFailCallback(e) {}
function logoutCallback(e) {
 location.reload();
 localStorage.removeItem("loggedin");
 window.Loggedin='false';
}
function appInitCallback(e) {
  "function" == typeof changeThemeColorCHKBX && changeThemeColorCHKBX("load");
}
function themeChangeCallback(e) {
  var a;
  "theme-dark" === (a = e).theme
    ? $("body").addClass("theme-dark").removeClass("theme-white")
    : "theme-white" === a.theme &&
      $("body").addClass("theme-white").removeClass("theme-dark");
}

function changeThemeColorCHKBX(e) {
  let a = $("#trading-platform-page"),
    t = $("#theme-color-switcher"),
    n = "theme-white",
    D = localStorage.getItem("panda-forex__theme");
  a.addClass(D),
    "load" === e
      ? D === n
        ? t.prop("checked", !1)
        : t.prop("checked", !0)
      : "click" === e &&
        (D === n
          ? runPlugin("forexSwitchTheme", { theme: "theme-dark" })
          : runPlugin("forexSwitchTheme", { theme: n }));
}

window.addEventListener('beforeunload', function(){
 localStorage.removeItem("loggedin");
})


var labels = {
    resetTitle: "إعادة تعيين",
    closeTitle: "أغلق",
    menuTitle: "ضبط الموقع",
    increaseText: "زيادة حجم النص",
    decreaseText: "تقليل حجم النص",
    increaseTextSpacing: "زيادة تباعد النص",
    decreaseTextSpacing: "تقليل تباعد النص",
    invertColors: "ألوان مقلوبة",
    grayHues: "أحادية اللون",
    underlineLinks: "تسطير الروابط",
    bigCursor: "مؤشر كبير",
    readingGuide: "دليل القراءة",
    textToSpeech: "النص إلى الكلام",
    speechToText: " الكلام إلى نص",
  },
  arabic = {
    labels: labels,
    icon: {
      circular: !0,
      position: {
        bottom: { size: 50, units: "px" },
        right: { size: 50, units: "px" },
        type: "fixed",
      },
    },
  },
  english = {
    icon: {
      circular: !0,
      position: {
        bottom: { size: 50, units: "px" },
        left: { size: 50, units: "px" },
        type: "fixed",
      },
    },
  };
(arabic.textToSpeechLang = "ar-XA-Standard-B"),
(arabic.speechToTextLang = "ar-XA-Standard-B");






/* lang routing*/
var arLinks = [
  { en: "/", ar: "/ar" , es:"/es"},
  {
    en: "/evest/why-evest",
    ar: "/ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA",
    es:'/es/evest/Por-qu%C3%A9-Evest'
  },
  {
    en: "/start-trading/trading-account-types",
    ar: "/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA",
    es:'/es/comience-hacer-trading/Tipos-de-cuentas-de-trading'
  },
  {
    en: "/start-trading/documents-policies",
    ar: "/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%84%D9%88%D8%AB%D8%A7%D8%A6%D9%82-%D9%88-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B3%D8%A7%D8%AA",
    es:'/es/comience-hacer-trading/Documentos-y-pol%C3%ADticas'
  },
  {
    en: "/start-trading/deposit-withdrawal",
    ar: "/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%84%D8%A5%D9%8A%D8%AF%D8%A7%D8%B9-%D9%88-%D8%A7%D9%84%D8%B3%D8%AD%D8%A8",
    es:'/es/comience-hacer-trading/Dep%C3%B3sito-y-Retiro'
  },
  {
    en: "/start-trading/trading-fees",
    ar: "/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%B1%D8%B3%D9%88%D9%85-%D8%A7%D9%8A%D9%81%D8%B3%D8%AA",
    es:'/es/comience-hacer-trading/Tarifas-de-Trading'
  },
  {
    en: "/start-trading/trading-hours",
    ar: "/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%88%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84",
    es:'/es/comience-hacer-trading/El-horario-de-trading'
  },
  {
    en: "/mobile-trading",
    ar: "/ar/%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D9%85%D9%86-%D8%A7%D9%84%D8%AC%D9%88%D8%A7%D9%84",
    es:'/es/platformas-de-trading/m%C3%B3vil-trading'
  },
  {
    en: "/web-trading",
    ar: "/ar/%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%AA%D8%B5%D9%81%D8%AD",
    es:'/es/platformas-de-trading/web-trading'
  },
  {
    en: "/metatrader-5",
    ar: "/ar/%D9%85%D9%8A%D8%AA%D8%A7%D8%AA%D8%B1%D9%8A%D8%AF%D8%B1-5",
    es:'/es/platformas-de-trading/metatrader-5'
  },
  {
    en:"/trading-academy",
    ar:"/ar/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84",
    es:'/es/academia-de-trading'
  },
  {
    en:"/trading-academy/true",
    ar:"/ar/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/true",
    es:'/es/academia-de-trading/true'
  },
  {
    en:"/start-trading/trading-calculator",
    ar:"/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84",
    es:'/es/comience-hacer-trading/Calculadoras-de-Trading'
  },
  {
    en:"/start-trading/0-commission-on-stocks",
    ar:"/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%A7%D8%B3%D9%87%D9%85-0-%D8%B9%D9%85%D9%88%D9%84%D8%A9",
    es:'/es/comience-hacer-trading/Cero-Comisi%C3%B3n'
  },
  {
    en:"/start-trading/trading-demo-account",
    ar:"/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AD%D8%B3%D8%A7%D8%A8-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%AA%D8%AC%D8%B1%D9%8A%D8%A8%D9%8A",
    es:'/es/comience-hacer-trading/Cuenta-Demo'
  },
  {
    en:"/start-trading/islamic-trading-account",
    ar:"/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AD%D8%B3%D8%A7%D8%A8-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A",
    es:'/es/comience-hacer-trading/cuenta-de-trading-isl%C3%A1mica'
  },
  { 
    en:"/trading-app",
    ar:"/ar/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D9%8A%D9%81%D8%B3%D8%AA",
    es:'/es/platformas-de-trading/trading-aplicaci%C3%B3n'
  },
  {
    en:"/evest/contact-us",
    ar:"/ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D8%A7%D8%AA%D8%B5%D9%84-%D8%A8%D9%86%D8%A7",
    es:'/es/evest/Cont%C3%A1ctenos'
  },
  {
    en:"/evest/careers",
    ar:"/ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA",
    es:'/es/evest/carrera'
  },
  {
    en:"/evest/help-desk",
    ar:"/ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9",
    es:'/es/evest/Centro-de-Ayuda'
  },
  {
    en:"/ceo",
    ar:"/ar/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D8%B1-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A",
    es:"/es/Conocer-al-CEO"
  },
  {
    en:"/trading-news",
    ar:"/ar/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84"
  },
  {
    en:"/oil-news",
    ar:"/ar/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D9%81%D8%B7"
  },
  { en:"/gold-news",
    ar:"/ar/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B0%D9%87%D8%A8"
  },
  { 
    en:"/market-news",
    ar:"/ar/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B3%D9%88%D9%82"
  },{
    en:"/evest/regulatory-authorisation",
    ar:"/ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D8%AA%D8%B1%D8%A7%D8%AE%D9%8A%D8%B5-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84",
    es:'/es/evest/autorizaci%C3%B3n-reglamentaria'
  },
  {
    en:'/evest',
    ar:'/ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA',
    es:'/es/evest'
  },{
    en:'/faq',
    ar:'/ar/%D8%A3%D8%B3%D8%A6%D9%84%D8%A9-%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9',
    es:'/es/faq'
  },
  { en:'/evest/evest-ambassador',
    ar:'/ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D8%B3%D9%81%D9%8A%D8%B1-%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA',
    es:'/es/evest/Embajador-de-Evest'},
    {
      en:'/start-trading/cryptocurrency',
      ar:'/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9',
      es:'/es/comience-hacer-trading/criptomonedas'
    },
    {
      en:'/trading-products',
      ar:'/ar/%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84',
      es:'/es/productos-de-trading'
    },
    { en:'/start-trading/eib',
      ar:'/ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%B3%D9%8E%D9%84%D8%A7%D9%91%D9%8E%D8%AA-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1%D9%8A%D8%A9',
      es:'/es/comience-hacer-trading/Cestas-de-Inversi%C3%B3n-Evest'
  }
];
let page = window.location.pathname;

var engLang=document.getElementsByClassName('englang');
for(var i=0; i<engLang.length; i++){
  if(engLang[i] !== null){
    engLang[i].addEventListener("click", function () {
      let lang = document.getElementsByTagName('html')[0].lang;
      console.log(lang)
      if(lang=="ar"){
        location.href = arLinks.find((e) => e.ar == page).en;
      }else{
        location.href = arLinks.find((e) => e.es == page).en;
      } 
  });
  }
}
var arLang=document.getElementsByClassName('arlang');
for(var i=0; i<arLang.length; i++){
  if(arLang[i] !== null){
    arLang[i].addEventListener("click", function () {
      let lang = document.getElementsByTagName('html')[0].lang;
      console.log(lang)
      if(lang=="es"){
        location.href = arLinks.find((e) => e.es == page).ar+"?lang=ar"
      }else{
        console.log(page)
        location.href = arLinks.find((e) => e.en == page).ar+"?lang=ar"
      } 
  });
  }
}
var esLang=document.getElementsByClassName('eslang');
for(var i=0; i<esLang.length; i++){
  if(esLang[i] !== null){
    esLang[i].addEventListener("click", function () {
      let lang = window.location.pathname.split("/")[1];
      if(lang=="ar"){
        location.href = arLinks.find((e) => e.ar == page).es+"?lang=es";
      }else{
        location.href = arLinks.find((e) => e.en == page).es+"?lang=es";
      } 
  });
  }
}


function checkLang() {
  let lang = window.location.pathname.split("/")[1];
  if("ar" == lang)
    {
      (document.getElementsByTagName("html")[0].lang = "ar"),
    (document.getElementById("arabicNavBar").style.display = "flex"),
    (document.getElementById("arabicFooter").style.display = "block")
    }
    else if ("es"==lang){
        (document.getElementsByTagName("html")[0].lang = "es"),
      (document.getElementById("englishFooter").style.display = "block"),
      (document.getElementById("spainshNavBar").style.display = "flex")
      }
      else{
        (document.getElementsByTagName("html")[0].lang = "en"),
         (document.getElementById("englishNavBar").style.display = "flex"),
         (document.getElementById("englishFooter").style.display = "block")
         };
}



  // Secure the pages
  document.addEventListener("contextmenu", function(event){
    event.preventDefault();   
    }, false);

    function reEnable(){
      return true
      }
      document.onselectstart=new Function ("return false")
      if (window.sidebar){
      document.onmousedown=disableselect
      document.onclick=reEnable
      }

      //  To Disable Inspect Element
$(document).bind("contextmenu",function(e) {
  e.preventDefault();
 });
 
 $(document).keydown(function(e){
     if(e.which === 123){
        return false;
     }
 });

 document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false;
  }
  } 