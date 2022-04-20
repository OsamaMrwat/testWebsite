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
    platformHide: platformHide,
    platformShow: platformShow
};

function platformHide() {
  console.log("Trading platform is hidden");

  $(".platform").fadeOut(250);
}

function platformShow() {
  console.log("Trading platform is shown");

  $(".platform").fadeIn(500);
}


//Panda platform events
function depositSuccessCallback(event) {
    //console.log('deposit callback event:', event);
}

function depositFailCallback(event) {
    //console.log('deposit fail callback event:', event);
}

function signupSuccessCallback(event) {
    //console.log('signup callback event:', event);
    
}

function signupFailCallback(event) {
    //console.log('signup fail callback event:', event);
}

function loginSuccessCallback(event) {
    var totalCoins=0;
    console.log('login success callback event', event);
    localStorage.setItem("loggedin", "true");
    $('#tvDiv').show();
    $('#coinsDiv').show();
    const accounts=event.customer.tradingAccounts;
    accounts.forEach(account=> {if(account.live == true){
        fetch(`/coins/${account.login}`).then(res=>res.json()).then(data=>
            {
                totalCoins+=data.coins;
                console.log(totalCoins);
            document.getElementById('coinsNumber').innerHTML=totalCoins.toFixed(3);}
            )
    }});

}

function loginFailCallback(event) {
    //console.log('login fail callback event', event);
}

function logoutCallback(event) {
    //console.log('logout callback event', event);
    location.reload();
    localStorage.removeItem("loggedin");
}

window.addEventListener('beforeunload', function(){
    localStorage.removeItem("loggedin");
   })

function appInitCallback(event) {
    console.log('app init callback event', event);
    if (typeof changeThemeColorCHKBX === "function") {
        changeThemeColorCHKBX('load');
    }
}

function themeChangeCallback(event) {
    //console.log('theme change callback event', event);

    (function callBackSwitch(callbackEvent) {
        let $logo=$("#logoHeader");
        if (callbackEvent.theme === 'theme-dark') {
            $('body').removeClass('theme-white').addClass('theme-dark');
            localStorage.setItem( "panda-forex__theme", 'theme-dark' );
            $logo.attr('src','/images/whitelogo.png');
        } else if (callbackEvent.theme === 'theme-white') {
            $('body').removeClass('theme-dark').addClass('theme-white');
            localStorage.setItem( "panda-forex__theme", 'theme-white' );
            $logo.attr('src','/images/logo.png');
        }
    })(event);
    
}

function changeThemeColorCHKBX(trigger) {
    let $bodyWrapper = $( "#trading-platform-page" ),
		$colorSwitcher = $( "#theme-color-switcher" ),
		defaultTheme = 'theme-white', // when checkbox UNCHECKED
		secondTheme = 'theme-dark', // when checkbox CHECKED
		currentTheme = localStorage.getItem( "panda-forex__theme" );

    $bodyWrapper.addClass( currentTheme );
    
    if (trigger === 'load') {
    
        if( currentTheme === defaultTheme ) {
            $colorSwitcher.prop('checked', false);
        } else {
            $colorSwitcher.prop('checked', true);
        }
    
    } else if (trigger === 'click') {
        if ( currentTheme === defaultTheme ) {
            runPlugin('forexSwitchTheme', {theme: secondTheme });
        
        } else {
            runPlugin('forexSwitchTheme', {theme: defaultTheme });
        }
    }
}

function isMobile() {
    var check = false;
    let link=window.location.pathname;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    console.log(check);
    if(check){
        if(link == "/trade-room/")
        { 
          window.location.replace("/mobile"+window.location.search);
        }
      }
  };

isMobile();