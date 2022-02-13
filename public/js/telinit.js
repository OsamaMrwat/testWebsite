var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // any initialisation options go here
  utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (e, a) {
      $.get(
        "https://ipinfo.io/?token=cc7afc256c9864",
        function () {},
        "jsonp"
      ).always(function (a) {
        var d = a && a.country ? a.country : "kw";
        e(d);
      });
    },
});