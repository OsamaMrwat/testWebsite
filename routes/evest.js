const express = require("express");
const router = express.Router();
var butter = require("buttercms")("eabb7d00a1cecacc7a57f771cc86fb0126ad94d8");

router.get("/why-evest", (req, res) => {
  butter.page
    .retrieve("*", "why-evest")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/whyevest", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

router.get("/regulatory-authorisation", (req, res) => {
  butter.page
    .retrieve("*", "regulatory-authorisation")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/regulatoryAuthorisation", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

router.get("/contact-us", (req, res) => {
  butter.page
    .retrieve("*", "contact-us")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/contactUs", {
        page: page1,
        message: "",
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

router.get("/help-desk", (req, res) => {
  butter.page
    .retrieve("*", "help-desk")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/helpdesk", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

router.get("/evest-talk-en", (req, res) => {
  butter.page
    .retrieve("*", "evest-talk-generic-en")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/evesttalk", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

router.get("/careers", (req, res) => {
  butter.page
    .retrieve("*", "career")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/careers", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});
router.get("/", (req, res) => {
  butter.page
    .retrieve("*", "evest-timeline")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/evest", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

router.get("/evest-ambassador", (req, res) => {
  butter.page
    .retrieve("*", "ambassador")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/ambassador", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

module.exports = router;
