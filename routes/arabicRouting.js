const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const butter = require("buttercms")("eabb7d00a1cecacc7a57f771cc86fb0126ad94d8");
const fetch = require("node-fetch");

router.get("/", (req, res) => {
  butter.page.retrieve("*", "homepage-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/index", { page: page1 });
  });
});

router.get(
  "/" + encodeURIComponent("أكاديمية-التداول") + "/:loginStatus",
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description: `أكاديمية التداول هي اكاديمية تعليمية تعمل على ارشاد وتعليم في الاستثمار بأسواق المال العالمية والمحلية,يتم تجديد الفيديوهات`,
          meta_keyword: `أكاديمية التداول`,
          page_title: `أكاديمية التداول - Evest تعلم تداول الأسهم, استثمر في الأسهم العالمية 100% بدون عمولة`,
        },
      },
    };
    if (req.params.loginStatus == "true") {
      res.render("ar/tradingAcademyLogedin", { page: page });
    } else {
      res.render("ar/tradingAcademy", { page: page });
    }
  }
);
router.get("/" + encodeURIComponent("أكاديمية-التداول"), (req, res) => {
  var page = {
    fields: {
      seo: {
        meta_description: `أكاديمية التداول هي اكاديمية تعليمية تعمل على ارشاد وتعليم في الاستثمار بأسواق المال العالمية والمحلية,يتم تجديد الفيديوهات`,
        meta_keyword: `أكاديمية التداول`,
        page_title: `أكاديمية التداول - Evest تعلم تداول الأسهم, استثمر في الأسهم العالمية 100% بدون عمولة`,
      },
    },
  };
  res.render("ar/tradingAcademy", { page: page });
});

router.get("/" + encodeURIComponent("أسئلة-شائعة"), (req, res) => {
  butter.page.retrieve("*", "faq-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/faq", { page: page1 });
  });
});

/* Start Trading Routes*/
router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("انواع-الحسابات"),
  function (req, res) {
    butter.page.retrieve("*", "accounttypes-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/accountTypes", { page: page1 });
    });
  }
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("الوثائق-و-السياسات"),
  function (req, res) {
    butter.page.retrieve("*", "documentspolicies-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/documentsPolicies", { page: page1 });
    });
  }
);

//www.ph.evest.com/ar

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("الإيداع-و-السحب"),
  (req, res) =>
    butter.page.retrieve("*", "depositandwithdrawal-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/depositAndWithdrawal", { page: page1 });
    })
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("رسوم-ايفست"),
  (req, res) =>
    butter.page.retrieve("*", "tradingfees-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/tradingFees", { page: page1 });
    })
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("اوقات-التداول"),
  (req, res) =>
    butter.page.retrieve("*", "tradinghours-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/tradingHours", { page: page1 });
    })
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("حاسبات-التداول"),
  (req, res) =>
    butter.page.retrieve("*", "tradingcalculator-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/tradingCalculator", { page: page1 });
    })
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("تداول-الاسهم-0-عمولة"),
  (req, res) =>
    butter.page.retrieve("*", "zerocommission-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/zeroCommission", { page: page1 });
    })
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("حساب-تداول-تجريبي"),
  (req, res) =>
    butter.page.retrieve("*", "demoaccount-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/demoAccount", { page: page1 });
    })
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("حساب-تداول-إسلامي"),
  (req, res) =>
    butter.page.retrieve("*", "islamic-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/islamic", { page: page1 });
    })
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("العملات-الرقمية"),
  (req, res) => {
    butter.page.retrieve("*", "crypto-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/crypto", { page: page1 });
    });
  }
);

router.get(
  "/" +
  encodeURIComponent("ابدا-التداول") +
  "/" +
  encodeURIComponent("سَلاَّت-تداول-استثمارية"),
  (req, res) => {
    butter.page.retrieve("*", "eib-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/StartTrading/EIBS", { page: page1 });
    });
  }
);

router.get("/" + encodeURIComponent("التداول-من-الجوال"), (req, res) => {
  butter.page.retrieve("*", "mobile-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/Platforms/mobile", { page: page1 });
  });
});

router.get("/" + encodeURIComponent("تداول-من-المتصفح"), (req, res) => {
  butter.page.retrieve("*", "web-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/Platforms/web", { page: page1 });
  });
});

router.get("/" + encodeURIComponent("ميتاتريدر-5"), (req, res) => {
  butter.page.retrieve("*", "metatrader-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/Platforms/metatrader", { page: page1 });
  });
});

router.get("/" + encodeURIComponent("تطبيق-تداول-ايفست"), (req, res) => {
  butter.page.retrieve("*", "tradingapp-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/Platforms/tradingApp", { page: page1 });
  });
});

router.get("/" + encodeURIComponent("إيڤست"), (req, res) => {
  butter.page.retrieve("*", "evest-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/Evest/evest", { page: page1 });
  });
});

router.get(
  "/" + encodeURIComponent("إيڤست") + "/" + encodeURIComponent("لماذا-إيڤست"),
  (req, res) => {
    butter.page.retrieve("*", "whyevest-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/Evest/whyevest", { page: page1 });
    });
  }
);

router.post("/cvUploadar", (req, res) => {
  const data = req.body;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let attachment = req.files.cv.data.toString("base64");

  const msg = {
    // change mail to required mail
    to: ["ismael.h@evest.com", "hr.cy@evest.com"],
    from: "no-replay@customers-evest.com", // Use the email address or domain you verified above
    subject: `New CV for position ${data.jobTitle} , location: ${data.jobLocation}`,
    html: `  <h1>Job Position : ${data.jobTitle} In ${data.jobLocation}</h1>
    CANDITATE NAME: ${data.fullNameInput} .<br><br>
    <p>EMAIL: ${data.emailInput}.<br><br>
    CANDITATE LOCATION: ${data.countryInput}.<br><br>
    CURRENT POSITION : ${data.currentPositionInput} .<br><br>
    Linkedin : ${data.linkedinInput} . <br><br>
    TEL: ${data.TelephoneInput} . <br><br>
    Notes: ${data.textAreaInput}.<br></p>`,
    attachments: [
      {
        content: attachment,
        filename: req.files.cv.name,
        type: req.files.cv.mimetype,
        disposition: "attachment",
      },
    ],
    replyTo: `${data.emailInput}`,
  };

  sgMail.send(msg).then(
    () => { },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );

  res.redirect("/ar?lang=ar");
});

router.get(
  "/" + encodeURIComponent("إيڤست") + "/" + encodeURIComponent("اتصل-بنا"),
  (req, res) => {
    butter.page.retrieve("*", "contactus-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/Evest/contactUs", { page: page1, message: "" });
    });
  }
);
router.post("/sendArabic", (req, res) => {
  const msg = {
    to: "support@evest.com",
    from: `${req.body.email}`, // Use the email address or domain you verified above
    subject: `تمّ إرسال بريد إلكتروني من ${req.body.fullName} `,
    html: `  <h1>You Got New Message</h1>
    <p>EMAIL: ${req.body.email}.<br><br>
    FULL NAME: ${req.body.fullName}.<br><br>
    SUBJECT: ${req.body.subject}.<br><br>
    MESSAGE: ${req.body.message}.<br></p>`,
    replyTo: `${req.body.email}`,
  };
  //ES6
  sgMail.send(msg).then(
    () => { },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
  butter.page.retrieve("*", "contactus-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/Evest/contactUs", {
      page: page1,
      message: "تم ارسال الرسالة بنجاح , سوف نقوم بتواصل معك باقرب وقت",
    });
  });
});

router.get(
  "/" + encodeURIComponent("إيڤست") + "/" + encodeURIComponent("وظائف-إيڤست"),
  (req, res) => {
    butter.page.retrieve("*", "career-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/Evest/careers", { page: page1 });
    });
  }
);

router.get(
  "/" + encodeURIComponent("إيڤست") + "/" + encodeURIComponent("مركز-المساعدة"),
  (req, res) => {
    butter.page.retrieve("*", "helpdesk-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/Evest/helpdesk", { page: page1 });
    });
  }
);

router.get(
  "/" +
  encodeURIComponent("إيڤست") +
  "/" +
  encodeURIComponent("تراخيص-التداول"),
  (req, res) => {
    butter.page
      .retrieve("*", "regulatoryauthorisation-ar")
      .then(function (resp) {
        var page1 = resp.data.data;
        res.render("ar/Evest/regulatoryAuthorisation", { page: page1 });
      });
  }
);

router.get(
  "/" + encodeURIComponent("إيڤست") + "/" + encodeURIComponent("سفير-إيڤست"),
  (req, res) => {
    butter.page.retrieve("*", "ambassador-ar").then(function (resp) {
      var page1 = resp.data.data;
      res.render("ar/Evest/ambassador", { page: page1 });
    });
  }
);

router.get("/" + encodeURIComponent("المدير-التنفيذي"), (req, res) => {
  butter.page.retrieve("*", "ceo-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/ceo", { page: page1 });
  });
});

router.post("/" + encodeURIComponent("المدير-التنفيذي"), (req, res) => {

  const ipAddress = IP.address()

  const msg = {
    to: "ceo@evest.com",
    from: "no-replay@customers-evest.com", // Use the email address or domain you verified above
    subject: "New Message from the CEO website page-AR",
    html: `  <h1>You Got New Message</h1>
    <p>EMAIL: ${req.body.email}.<br><br>
    FULL NAME: ${req.body.fullName}.<br><br>
    SUBJECT: ${req.body.subject}.<br><br>
    MESSAGE: ${req.body.message}.<br><br>`,
    replyTo: `${req.body.email}<br><br>
    IP : ${ipAddress}</p>`,
  };
  //ES6
  sgMail.send(msg).then(
    () => { },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
  butter.page.retrieve("*", "ceo-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/ceo", { page: page1 });
  });
});

router.get("/" + encodeURIComponent("منتجات-التداول"), (req, res) => {
  butter.page.retrieve("*", "tools-ar").then(function (resp) {
    var page1 = resp.data.data;
    res.render("ar/TradingProducts/products", { page: page1 });
  });
});

router.get("/" + encodeURIComponent("أخبار-التداول"), async (req, res) => {
  // let url = `https://cms.evest.com/ar/wp-json/wp/v2/trading-news-ar?_embed&per_page=6&page=1`
  let url = `https://evest.blog/wp-json/wp/v2/posts?categories=1&per_page=6&page=1`;

  // console.log(`server recive the number ${req.params}`)
  // console.log('------------------------------------------------------------------')
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `أخبار التداول : هل أنت مهتم بأخبار التداول في الأسواق الخليجية والعالمية ؟ تبحث عن مواضيع الأكثر ثقة عبر الانترنت, والمواضيع التي تهمك؟ تابع EVEST`,
            meta_keyword: `أخبار التداول`,
            page_title: `أخبار التداول ايفست | الأسواق المالية | استثمر في الأسهم العالمية 100% بدون عمولة Evest`,
          },
        },
      };
      const article = data
        .map((post) => {
          // console.log(decodeURIComponent(post.slug))
          let date = post.date.split("T")[0];
          let image;

          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";
          return `<div class="card">
          <div> 
                 <a href="/ar/أخبار-التداول/${post.slug}?lang=ar"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
<div class="card-body">
<a href="/ar/أخبار-التداول/${post.slug}?lang=ar"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.yoast_head_json.og_description}</div>
<a class="btn btn-filled readmore" href="/ar/أخبار-التداول/${post.slug}?lang=ar">اقرا المزيد</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`;
        })
        .join("");
      res.render("ar/Education/tradingNews", { page: page, articles: article });
    });
});

router.get(
  "/" + encodeURIComponent("أخبار-التداول") + "/:slug",
  async (req, res) => {
    const url = `https://evest.blog/wp-json/wp/v2/posts?categories=1&slug=${req.params.slug}`;
    // console.log(url)
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        var article = data;
        const tags = article[0].tags
          .map((tag) => {
            // const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
            // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
          })
          .join(" ");

        let image;
        if (article[0].yoast_head_json.og_image) {
          image = article[0].yoast_head_json.og_image[0].url;
        } else image = "/images/build/logo.png";

        var page = {
          fields: {
            seo: {
              meta_description: `${article[0].yoast_head_json.og_description}`,
              meta_keyword: ``,
              page_title: `${article[0].yoast_head_json.og_title}`,
            },
          },
        };
        res.render("ar/Education/article", {
          page: page,
          content: article[0].content.rendered,
          titleArticle: article[0].title.rendered,
          imgUrl: image,
          date: article[0].date,
          url: article[0].link,
          tags: tags,
          og_img: image,
        });
      })
      .catch((err) => console.log(err));
  }
);

// router.get(
//   "/:slug" + "/" + encodeURIComponent("أخبار-التداول"),
//   async (req, res) => {
//     const url = `https://cms.evest.com/ar/wp-json/wp/v2/trading-news-ar?_embed&slug=${req.params.slug}`;
//     console.log(url)
//     const options = {
//       method: "GET",
//     };
//     const response = await fetch(url, options).then(res => res.json()).then(data => {
//       var article = data;
//       const tags = article[0].tags.map(tag => {
//         const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
//         return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
//       }).join(' ');

//       var page = { fields: { seo: { meta_description: `${article[0].yoast_head_json.og_description}`, meta_keyword: ``, page_title: `${article[0].yoast_head_json.og_title}` } } };
//       res.render('ar/Education/article', {
//         page: page, content: article[0].content.rendered,
//         titleArticle: article[0].title.rendered,
//         imgUrl: article[0].yoast_head_json.og_image[0].url,
//         date: article[0].date,
//         url: article[0].link,
//         tags: tags,
//         og_img: `${article[0].yoast_head_json.og_image[0].url}`
//       });
//     })
//       .catch((err) => console.log(err));
//   }
// );

router.get("/" + encodeURIComponent("اخبار-النفط"), async (req, res) => {
  const url =
    "https://evest.blog/wp-json/wp/v2/posts?categories=13&per_page=6&page=1";

  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `أخبار النفط : هل أنت مهتم بأخبار النفط في الأسواق الخليجية والعالمية ؟ تبحث عن مواضيع حول النفط عبر الانترنت تابع تداول النفط عبر EVEST استثمر في الأسهم`,
            meta_keyword: ` أخبار النفط`,
            page_title: `أخبار النفط - Evest | استثمر في الأسهم العالمية 100% بدون عمولة`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];
          let image;

          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";

          return `<div class="card">
        <div> 
               <a href="/ar/اخبار-النفط/${post.slug}?lang=ar"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
<div class="card-body">
<a href="/ar/اخبار-النفط/${post.slug}?lang=ar"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.yoast_head_json.og_description}</div>
<a class="btn btn-filled readmore" href="/ar/اخبار-النفط/${post.slug}?lang=ar" >اقرا المزيد</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`;
        })
        .join("");
      res.render("ar/Education/oil", { page: page, articles: article });
    });
});
router.get(
  "/" + encodeURIComponent("اخبار-النفط") + "/:slug",
  async (req, res) => {
    const url = `https://evest.blog/wp-json/wp/v2/posts?categories=13&slug=${req.params.slug}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        var article = data;
        const tags = article[0].tags
          .map((tag) => {
            // const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
            // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
          })
          .join(" ");

        let image;
        if (article[0].yoast_head_json.og_image) {
          image = article[0].yoast_head_json.og_image[0].url;
        } else image = "/images/build/logo.png";

        var page = {
          fields: {
            seo: {
              meta_description: `${article[0].yoast_head_json.og_description}`,
              meta_keyword: ``,
              page_title: `${article[0].yoast_head_json.og_title}`,
            },
          },
        };
        res.render("ar/Education/article", {
          page: page,
          content: article[0].content.rendered,
          titleArticle: article[0].title.rendered,
          imgUrl: image,
          date: article[0].date,
          url: article[0].link,
          tags: tags,
          og_img: image,
        });
      })
      .catch((err) => console.log(err));
  }
);
// router.get(
//   "/" + encodeURIComponent("اخبار-النفط") + "/:slug",
//   async (req, res) => {
//     const url = `https://cms.evest.com/ar/wp-json/wp/v2/oil-news-ar?_embed&slug=${req.params.slug}`;
//     const options = {
//       method: "GET",
//     };
//     const response = await fetch(url, options).then(res => res.json()).then(data => {
//       var article = data;
//       const tags = article[0].tags.map(tag => {
//         const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
//         return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
//       }).join(' ');

//       var page = { fields: { seo: { meta_description: `${article[0].yoast_head_json.og_description}`, meta_keyword: ``, page_title: `${article[0].yoast_head_json.og_title}` } } };
//       res.render('ar/Education/article', {
//         page: page, content: article[0].content.rendered,
//         titleArticle: article[0].title.rendered,
//         imgUrl: article[0].yoast_head_json.og_image[0].url,
//         date: article[0].date,
//         url: article[0].link,
//         tags: tags,
//         og_img: `${article[0].yoast_head_json.og_image[0].url}`
//       });
//     })
//       .catch((err) => console.log(err));

//   }
// );

router.get("/" + encodeURIComponent("اخبار-الذهب"), async (req, res) => {
  // const url = `https://cms.evest.com/ar/wp-json/wp/v2/gold-news-ar?_embed&categories=41&per_page=6&page=1`;
  const url = `https://evest.blog/wp-json/wp/v2/posts?categories=15&per_page=6&page=1`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `اخبار تداول الذهب : هل أنت مهتم باخبار الذهب في الأسواق الخليجية والعالمية ؟ تبحث عن مواضيع حول الذهب عبر الانترنت تابع تداول EVEST`,
            meta_keyword: `اخبار تداول الذهب`,
            page_title: `اخبار تداول الذهب - أخبار سوق الذهب، تداول اون لاين | إيڤست وسيط موثوق 100% Evest`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];
          let image;

          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";

          return `<div class="card">
        <div> 
               <a href="/ar/اخبار-الذهب/${post.slug}?lang=ar"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
<div class="card-body">
<a href="/ar/اخبار-الذهب/${post.slug}?lang=ar"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.yoast_head_json.og_description}</div>
<a class="btn btn-filled readmore" href="/ar/اخبار-الذهب/${post.slug}?lang=ar">اقرا المزيد</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`;
        })
        .join("");

      res.render("ar/Education/gold", { page: page, articles: article });
    });
});
router.get(
  "/" + encodeURIComponent("اخبار-الذهب") + "/:slug",
  async (req, res) => {
    const url = `https://evest.blog/wp-json/wp/v2/posts?categories=15&slug=${req.params.slug}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        var article = data;
        const tags = article[0].tags
          .map((tag) => {
            // const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
            // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
          })
          .join(" ");

        let image;
        if (article[0].yoast_head_json.og_image) {
          image = article[0].yoast_head_json.og_image[0].url;
        } else image = "/images/build/logo.png";

        var page = {
          fields: {
            seo: {
              meta_description: `${article[0].yoast_head_json.og_description}`,
              meta_keyword: ``,
              page_title: `${article[0].yoast_head_json.og_title}`,
            },
          },
        };
        res.render("ar/Education/article", {
          page: page,
          content: article[0].content.rendered,
          titleArticle: article[0].title.rendered,
          imgUrl: image,
          date: article[0].date,
          url: article[0].link,
          tags: tags,
          og_img: image,
        });
      })
      .catch((err) => console.log(err));
  }
);

// router.get(
//   "/:slug" + "/" + encodeURIComponent("اخبار-الذهب"),
//   async (req, res) => {
//     const url = `https://cms.evest.com/ar/wp-json/wp/v2/gold-news-ar?_embed&slug=${req.params.slug}`;
//     const options = {
//       method: "GET",
//     };
//     const response = await fetch(url, options).then(res => res.json()).then(data => {
//       var article = data;
//       const tags = article[0].tags.map(tag => {
//         const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
//         return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
//       }).join(' ');

//       var page = { fields: { seo: { meta_description: `${article[0].yoast_head_json.og_description}`, meta_keyword: ``, page_title: `${article[0].yoast_head_json.og_title}` } } };
//       res.render('ar/Education/article', {
//         page: page, content: article[0].content.rendered,
//         titleArticle: article[0].title.rendered,
//         imgUrl: article[0].yoast_head_json.og_image[0].url,
//         date: article[0].date,
//         url: article[0].link,
//         tags: tags,
//         og_img: `${article[0].yoast_head_json.og_image[0].url}`
//       });
//     })
//       .catch((err) => console.log(err));

//   }
// );

router.get("/" + encodeURIComponent("اخبار-السوق"), async (req, res) => {
  const url =
    "https://evest.blog/wp-json/wp/v2/posts?categories=11&per_page=6&page=1";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `أخبار سوق التداول : هل أنت مهتم بأخبار سوق التداول في الأسواق الخليجية والعالمية ؟ تبحث عن مواضيع حول أخبار السوق والأكثر ثقة عبر الانترنت, تابعنا`,
            meta_keyword: `أخبار سوق التداول`,
            page_title: `أخبار سوق التداول - ايفست، تداول اون لاين | وسيط موثوق 100% Evest`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];

          let image;

          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";

          return `<div class="card">
          <div> 
                 <a href="/ar/اخبار-السوق/${post.slug}?lang=ar"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
  <div class="card-body">
  <a href="/ar/اخبار-السوق/${post.slug}?lang=ar"><h5 class="card-title">${post.title.rendered}</h5></a>
  <div class="card-text description">${post.yoast_head_json.og_description}</div>
  <a class="btn btn-filled readmore" href=/ar/اخبار-السوق/${post.slug}?lang=ar">اقرا المزيد</a>
  </div></div>
  <div class="card-footer dateCreated">
  ${date}
  </div>
  </div>`;
        })
        .join("");
      res.render("ar/Education/market", { page: page, articles: article });
    });
});
router.get(
  "/" + encodeURIComponent("اخبار-السوق") + "/:slug",
  async (req, res) => {
    const url = `https:/evest.blog/wp-json/wp/v2/posts?categories=11&slug=${req.params.slug}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        var article = data;
        const tags = article[0].tags
          .map((tag) => {
            // const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
            // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
          })
          .join(" ");

        let image;
        if (article[0].yoast_head_json.og_image) {
          image = article[0].yoast_head_json.og_image[0].url;
        } else image = "/images/build/logo.png";

        var page = {
          fields: {
            seo: {
              meta_description: `${article[0].yoast_head_json.og_description}`,
              meta_keyword: ``,
              page_title: `${article[0].yoast_head_json.og_title}`,
            },
          },
        };
        res.render("ar/Education/article", {
          page: page,
          content: article[0].content.rendered,
          titleArticle: article[0].title.rendered,
          imgUrl: image,
          date: article[0].date,
          url: article[0].link,
          tags: tags,
          og_img: image,
        });
      })
      .catch((err) => console.log(err));
  }
);
// router.get(
//   "/:slug" + "/" + encodeURIComponent("اخبار-السوق"),
//   async (req, res) => {
//     const url = `https://cms.evest.com/ar/wp-json/wp/v2/market-news-ar?_embed&slug=${req.params.slug}`;
//     const options = {
//       method: "GET",
//     };
//     const response = await fetch(url, options).then(res => res.json()).then(data => {
//       var article = data;
//       const tags = article[0].tags.map(tag => {
//         const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
//         return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
//       }).join(' ');

//       var page = { fields: { seo: { meta_description: `${article[0].yoast_head_json.og_description}`, meta_keyword: ``, page_title: `${article[0].yoast_head_json.og_title}` } } };
//       res.render('ar/Education/article', {
//         page: page, content: article[0].content.rendered,
//         titleArticle: article[0].title.rendered,
//         imgUrl: article[0].yoast_head_json.og_image[0].url,
//         date: article[0].date,
//         url: article[0].link,
//         tags: tags,
//         og_img: `${article[0].yoast_head_json.og_image[0].url}`
//       });
//     })
//       .catch((err) => console.log(err));

//   }
// );

router.get("/" + encodeURIComponent("مدونة-التداول"), async (req, res) => {
  const url =
    "https://evest.blog/wp-json/wp/v2/posts?categories=17&per_page=6&page=1";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `مدونة التداول : هل أنت مهتم باخر المواضيع التي تخص التداول اون لاين من أسهم ومؤشرات في الأسواق الخليجية والعالمية ؟ البحث عن مواضيع الأكثر ثقة عبر الانترنت, والمواضيع التي تهمك؟ تابع EVEST`,
            meta_keyword: `مدونة التداول`,
            page_title: `مدونة التداول - Evest ايفست، استثمر اون لاين مع إيفست EVEST`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];
          let image;

          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";
          return `<div class="card">
          <div> 
                 <a href="/ar/مدونة-التداول/${post.slug}?lang=ar"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
  <div class="card-body">
  <a href="/ar/مدونة-التداول/${post.slug}?lang=ar"><h5 class="card-title">${post.title.rendered}</h5></a>
  <div class="card-text description">${post.yoast_head_json.og_description}</div>
  <a class="btn btn-filled readmore" href="/ar/مدونة-التداول/${post.slug}?lang=ar">اقرا المزيد</a>
  </div></div>
  <div class="card-footer dateCreated">
  ${date}
  </div>
  </div>`;
        })
        .join("");

      res.render("ar/Education/blog", { page: page, articles: article });
    });
});
router.get(
  "/" + encodeURIComponent("مدونة-التداول") + "/:slug",
  async (req, res) => {
    const url = `https://evest.blog/wp-json/wp/v2/posts?categories=17&slug=${req.params.slug}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        var article = data;
        const tags = article[0].tags
          .map((tag) => {
            // const tag_name = getTag.arabicTags.find(elem => elem.tag_id === tag).Name;
            // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
          })
          .join(" ");

        let image;
        if (article[0].yoast_head_json.og_image) {
          image = article[0].yoast_head_json.og_image[0].url;
        } else image = "/images/build/logo.png";

        var page = {
          fields: {
            seo: {
              meta_description: `${article[0].yoast_head_json.og_description}`,
              meta_keyword: ``,
              page_title: `${article[0].yoast_head_json.og_title}`,
            },
          },
        };
        res.render("ar/Education/article", {
          page: page,
          content: article[0].content.rendered,
          titleArticle: article[0].title.rendered,
          imgUrl: image,
          date: article[0].date,
          url: article[0].link,
          tags: tags,
          og_img: image,
        });
      })
      .catch((err) => console.log(err));
  }
);
router.get(
  "/:slug" + "/" + encodeURIComponent("مدونة-التداول"),
  async (req, res) => {
    const url = `https://cms.evest.com/ar/wp-json/wp/v2/blog-ar?_embed&slug=${req.params.slug}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        var article = data;
        const tags = article[0].tags
          .map((tag) => {
            const tag_name = getTag.arabicTags.find(
              (elem) => elem.tag_id === tag
            ).Name;
            return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`;
          })
          .join(" ");

        var page = {
          fields: {
            seo: {
              meta_description: `${article[0].yoast_head_json.og_description}`,
              meta_keyword: ``,
              page_title: `${article[0].yoast_head_json.og_title}`,
            },
          },
        };
        res.render("ar/Education/article", {
          page: page,
          content: article[0].content.rendered,
          titleArticle: article[0].title.rendered,
          imgUrl: article[0].yoast_head_json.og_image[0].url,
          date: article[0].date,
          url: article[0].link,
          tags: tags,
          og_img: `${article[0].yoast_head_json.og_image[0].url}`,
        });
      })
      .catch((err) => console.log(err));
  }
);

const getDurationInMilliseconds = (start) => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

const getTag = require("../tagsApi");
router.get("/tag/:tag", async (req, res) => {
  const start = process.hrtime();
  const tag_id = getTag.arabicTags.find(
    (elem) => elem.Name === req.params.tag
  ).tag_id;
  console.log(req.params.tag + " " + tag_id);
  if (tag_id === undefined) {
    res.redirect("/");
  }
  const url = `https://cms.evest.com/ar/wp-json/wp/v2/posts?_embed&tags=${tag_id}&per_page=6&page=1`;
  const options = {
    method: "GET",
  };
  const response = fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `${req.params.tag}-أرشيف`,
            meta_keyword: `${req.params.tag}`,
            page_title: `Evest- أرشيف ${req.params.tag} `,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];
          return `<div class="card">
                    <div> 
                           <a href='${post.link + "?lang=ar"
            }'>  <img class="card-img-top" src="${post.featured_image_url
            }" alt="Card image cap" title="${post.title.rendered}"> </a>
        <div class="card-body">
        <a href='${post.link + "?lang=ar"}' ><h5 class="card-title">${post.title.rendered
            }</h5></a>
        <div class="card-text description">${post.excerpt.rendered}</div>
        <a class="btn btn-filled readmore" href='${post.link + "?lang=ar"
            }'>أقرا المزيد</a>
        </div></div>
        <div class="card-footer dateCreated">
        ${date}
        </div>
        </div>`;
        })
        .join("");
      res.render("ar/Education/tags", {
        page: page,
        articles: article,
        pageTitle: `Evest- ${req.params.tag} أرشيف`,
        tagId: tag_id,
      });
    })
    .catch((err) => {
      res.redirect("/");
    });
  res.on("finish", () => {
    const durationInMilliseconds = getDurationInMilliseconds(start);
    console.log(
      `${req.method} ${req.originalUrl
      } [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`
    );
  });

  res.on("close", () => {
    const durationInMilliseconds = getDurationInMilliseconds(start);
    console.log(
      `${req.method} ${req.originalUrl
      } [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`
    );
  });
});

module.exports = router;
