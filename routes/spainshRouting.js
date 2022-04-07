const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const butter = require("buttercms")(process.env.BUTTER_KEY);

router.get("/", (req, res) => {
  butter.page.retrieve("*", "homepage-es").then(function (resp) {
    var page1 = resp.data.data;
    res.render("es/index", { page: page1 });
  });
});

router.get("/evest", (req, res) => {
  var page = {
    fields: {
      seo: {
        meta_description:
          "Cronología de Evest , Evest es una empresa de servicios financieros líder en el mundo",
        meta_keywords: "Cronología de Evest",
        page_title: `Evest - Cronologia`,
      },
    },
  };
  res.render("es/Evest/evest", { page: page });
});

router.get("/evest/" + encodeURIComponent("Por-qué-Evest"), (req, res) => {
  var page = {
    fields: {
      seo: {
        meta_description:
          "Por qué Evest hay cientos de razones que harían que nos elijas cada vez, pero hemos decidido enumerar cuáles son las más famosas",
        meta_keywords: "¿Por qué Evest?",
        page_title: `¿Por qué Evest? - Trading en acciones, Trading en CFD con un bróker regulado `,
      },
    },
  };
  res.render("es/Evest/whyevest", { page: page });
});

router.get("/evest/" + encodeURIComponent("carrera"), (req, res) => {
  var page = {
    fields: {
      seo: {
        meta_description: `Carreras Estamos buscando personas con experiencia para unirse a nuestro equipo de Estrategia Comercial. Iniciará para ayudar a desarrollar la asociación de Evest`,
        meta_keywords: `Carreras`,
        page_title: `Carreras - Evest | Comienza tu carrera con nosotros`,
      },
    },
  };
  res.render("es/Evest/careers", { page: page });
});

router.get("/evest/" + encodeURIComponent("Contáctenos"), (req, res) => {
  var page = {
    fields: {
      seo: {
        meta_description: `Contáctenos: envíe una solicitud a continuación y uno de nuestros profesionales de soporte se comunicará con usted con gusto. Tienes preguntas? ¡Estamos aquí para ayudar!`,
        meta_keywords: `Contacta con nosotros`,
        page_title: `Contáctenos - Evest Trading Platform, 0% de comisiones`,
      },
    },
  };
  res.render("es/Evest/contactUs", { page: page, message: "" });
});
router.post("/send", (req, res) => {
  const msg = {
    to: "support@evest.com",
    from: "no-replay@customers-evest.com", // Use the email address or domain you verified above
    subject: "New Message from the CEO website page",
    html: `  <h1>You Got New Message</h1>
      <p>EMAIL: ${req.body.email}.<br><br>
      FULL NAME: ${req.body.fullName}.<br><br>
      SUBJECT: ${req.body.subject}.<br><br>
      MESSAGE: ${req.body.message}.<br></p>`,
    replyTo: `${req.body.email}`,
  };
  //ES6
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
  var page = {
    fields: {
      seo: {
        meta_description: `Opere con evest es una plataforma comercial con licencia con los más altos niveles de control y calidad en el cifrado de datos para la seguridad de la privacidad y deseamos proteger su dinero.`,
        meta_keywords: `Comercio en línea`,
        page_title: `Inicio de comercio de Evest - Evest | Plataforma de negociación de acciones, inversión en línea 0% de comisión`,
      },
    },
  };
  res.render("es/Evest/contactUs", {
    page: page,
    message:
      "El mensaje ha sido enviado con éxito, nos pondremos en contacto contigo lo antes posible.",
  });
});

router.get("/evest/" + encodeURIComponent("Centro-de-Ayuda"), (req, res) => {
  var page = {
    fields: {
      seo: {
        meta_description: `Mesa de ayuda, verificación & amp; Documentos, Depósito &amp; Retiro, mesa de ayuda de la cuenta Evest, Trading con bróker con licencia`,
        meta_keywords: `Mesa de ayuda`,
        page_title: `Mesa de ayuda - Trading en acciones de Evest, bróker regulado de CFD`,
      },
    },
  };
  res.render("es/Evest/helpdesk", { page: page });
});

router.get("/" + encodeURIComponent("Conocer-al-CEO"), (req, res) => {
  butter.page.retrieve("*", "meet-ceo").then(function (resp) {
    var page1 = resp.data.data;
    res.render("es/ceo", { page: page1 });
  });
});

router.get(
  "/evest/" + encodeURIComponent("autorización-reglamentaria"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description: `Autorización reglamentaria www.evest.com es una marca de propiedad y operada por Grandis Securities Ltd una empresa, evest funciona de acuerdo con...`,
          meta_keywords: `Autorización reglamentaria`,
          page_title: `Autorización regulatoria - Evest Online Trading Platforma `,
        },
      },
    };
    res.render("es/Evest/regulatoryAuthorisation", { page: page });
  }
);

router.get("/evest/" + encodeURIComponent("Embajador-de-Evest"), (req, res) => {
  butter.page.retrieve("*", "ambassador-es").then(function (resp) {
    var page1 = resp.data.data;
    res.render("es/Evest/ambassador", { page: page1 });
  });
});

/* Start Trading*/

router.get(
  "/comience-hacer-trading/" +
    encodeURIComponent("Tipos-de-cuentas-de-trading"),
  (req, res) => {
    butter.page.retrieve("*", "accounttypes-es").then(function (resp) {
      var page1 = resp.data.data;
      res.render("es/StartTrading/accountTypes", { page: page1 });
    });
  }
);
router.get(
  "/comience-hacer-trading/" + encodeURIComponent("Documentos-y-políticas"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "Documentos &amp ; políticas, todo lo que necesita saber sobre documentos y regulaciones comerciales, CFD líderes en Evest y una comisión del 0 % sobre acciones",
          meta_keywords: "Políticas de Documentos",
          page_title: `Documentos &amp; Políticas - Evest  Plataforma de Trading , 0% de comisión`,
        },
      },
    };
    res.render("es/StartTrading/documentsPolicies", { page: page });
  }
);
router.get(
  "/comience-hacer-trading/" + encodeURIComponent("Depósito-y-Retiro"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "Depósito &amp; Retiro Se le notificará por correo electrónico una vez que se haya completado e informado el procesamiento de su solicitud de retiro",
          meta_keywords: `Depósito & Retiro`,
          page_title: `Depósito & Retiro -  Evest Plataforma de Trading en línea`,
        },
      },
    };
    res.render("es/StartTrading/depositAndWithdrawal", { page: page });
  }
);

router.get(
  "/comience-hacer-trading/" + encodeURIComponent("Tarifas-de-Trading"),
  (req, res) => {
    butter.page.retrieve("*", "tradingfees-es").then(function (resp) {
      var page1 = resp.data.data;
      res.render("es/StartTrading/tradingFees", { page: page1 });
    });
  }
);

router.get(
  "/comience-hacer-trading/" + encodeURIComponent("El-horario-de-trading"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "Horario de Trading, los activos financieros tienen diferentes horarios en los que puede contratarlos según la categoría del activo y el mercado",
          meta_keywords: `Horario de Trading`,
          page_title: `Horario Trading -  Evest Plataforma Trading - 0% de comisión`,
        },
      },
    };
    res.render("es/StartTrading/tradingHours", { page: page });
  }
);

router.get(
  "/comience-hacer-trading/" + encodeURIComponent("Cuenta-Demo"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description: `"Cuenta Trading demo, inicie su cuenta Trading de demostración Opere AHORA con Evest y descubra los beneficios de una cuenta Trading real"`,
          meta_keywords: `Cuenta Trading Demo`,
          page_title: `Cuenta Demo de Trading - Plataforma Trading  Evest`,
        },
      },
    };
    res.render("es/StartTrading/demoAccount", { page: page });
  }
);
router.get(
  "/comience-hacer-trading/" + encodeURIComponent("Cero-Comisión"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "Negociación de acciones con comisión 0, comercio de acciones y ETF con 0 % de comisión para todas las acciones y CFD, 0 tarifas reales",
          meta_keywords: `0 de comisión en acciones`,
          page_title: `Negociación en acciones con 0 comisiones - Plataforma de inversion Evest`,
        },
      },
    };
    res.render("es/StartTrading/zeroCommission", { page: page });
  }
);
router.get(
  "/comience-hacer-trading/" + encodeURIComponent("cuenta-de-trading-islámica"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "Cuenta de Trading islámica, cuenta de Trading 100% halal Opere con la cuenta islámica de Trading  MT5 de acciones más popular del mundo 0%",
          meta_keywords: `Cuenta de Trading islámica`,
          page_title: `Cuenta Trading islámica - Plataforma Trading Evest Halal `,
        },
      },
    };
    res.render("es/StartTrading/islamic", { page: page });
  }
);

router.get(
  "/comience-hacer-trading/" + encodeURIComponent("Calculadoras-de-Trading"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "Calculadora de operaciones, nuestra calculadora de operaciones con divisas y CFD le ayuda a decidir los detalles de su operación antes de actuar",
          meta_keywords: `Calculadora de operaciones`,
          page_title: `Calculadora Trading : Evest calcula el precio de las acciones en línea`,
        },
      },
    };
    res.render("es/StartTrading/tradingCalculator", { page: page });
  }
);

router.get(
  "/comience-hacer-trading/" + encodeURIComponent("criptomonedas"),
  (req, res) => {
    butter.page.retrieve("*", "crypto-es").then(function (resp) {
      var page1 = resp.data.data;
      res.render("es/StartTrading/crypto", { page: page1 });
    });
  }
);

router.get(
  "/comience-hacer-trading/" + encodeURIComponent("Cestas-de-Inversión-Evest"),
  (req, res) => {
    butter.page.retrieve("*", "eib-es").then(function (resp) {
      var page1 = resp.data.data;
      res.render("es/StartTrading/eibs", { page: page1 });
    });
  }
);

/* Trading Platforms */

router.get(
  "/platformas-de-trading/" + encodeURIComponent("móvil-trading"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            " Móvil Trading negocie desde el navegador de tu móvil sin instalar ninguna aplicación Puedes negociar desde cualquier parte del mundo",
          meta_keywords: "Móvil Trading",
          page_title:
            " Móvil Trading - Plataforma de Trading Evest | Negociar en acciones en línea",
        },
      },
    };
    res.render("es/Platforms/mobile", { page: page });
  }
);

router.get(
  "/platformas-de-trading/" + encodeURIComponent("web-trading"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            " Acceso al Trading web desde el navegador sin instalar ni descargar ningún programa. Puede operar desde cualquier dispositivo conectado a Internet ",
          meta_keywords: " Web Trading ",
          page_title: `Web Trading - Plataforma de Trading Evest | Negociar en acciones en línea`,
        },
      },
    };
    res.render("es/Platforms/web", { page: page });
  }
);

router.get(
  "/platformas-de-trading/" + encodeURIComponent("metatrader-5"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "MetaTrader 5 Descargue la plataforma de comercio superior de forma gratuita, descargue MetaTrader 5 y comience a operar con acciones y mucho más",
          meta_keywords: "MetaTrader 5",
          page_title: `MetaTrader 5 - Evest Descarga la plataforma la  Top de trading gratis`,
        },
      },
    };
    res.render("es/Platforms/metatrader", { page: page });
  }
);

router.get(
  "/platformas-de-trading/" + encodeURIComponent("trading-aplicación"),
  (req, res) => {
    var page = {
      fields: {
        seo: {
          meta_description:
            "La aplicación de Trading le brindará las últimas actualizaciones e instrumentos comerciales. Opere con confianza directamente desde la palma de su mano",
          meta_keywords: `Trading aplicacion `,
          page_title: `Aplicación de Trading : Plataforma de inversión Evest | 0% comisión`,
        },
      },
    };
    res.render("es/Platforms/tradingApp", { page: page });
  }
);

/* Trading Products */
router.get("/productos-de-trading", (req, res) => {
  butter.page.retrieve("*", "tools-es").then(function (resp) {
    var page1 = resp.data.data;
    res.render("es/TradingProducts/products", { page: page1 });
  });
});

/*Education*/
router.get("/academia-de-trading", (req, res) => {
  var page = {
    fields: {
      seo: {
        meta_description:
          "Academia de Trading , Trading con Evest Educacion, el mejor lugar para comenzar a aprender cómo operar en línea, para comenzar con Evest, siganos",
        meta_keywords: `Academia de Trading`,
        page_title: `Academia de Trading Evest Negociación de acciones, Bróker regulado`,
      },
    },
  };
  res.render("es/tradingAcademy", { page: page });
});

router.get("/faq", (req, res) => {
  butter.page.retrieve("*", "faq-es").then(function (resp) {
    var page1 = resp.data.data;
    res.render("es/faq", { page: page1 });
  });
});

module.exports = router;
