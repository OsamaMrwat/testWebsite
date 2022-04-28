const tags = [
  {
    tag_id: 51,
    Name: "مدونة",
  },
  {
    tag_id: 52,
    Name: "تداول",
  },
  {
    tag_id: 54,
    Name: "ايفست",
  },
  {
    tag_id: 55,
    Name: "تداول اون لاين",
  },
  {
    tag_id: 56,
    Name: "محمد العريان",
  },
  {
    tag_id: 57,
    Name: "أخبار التداول",
  },
  {
    tag_id: 92,
    Name: "الاستثمار في الذهب",
  },
  {
    tag_id: 94,
    Name: "أخبار السوق",
  },
  {
    tag_id: 95,
    Name: "أخبار النفط",
  },
  {
    tag_id: 96,
    Name: "الاستثمار في أزواج العملات",
  },
  {
    tag_id: 101,
    Name: "أخبار الذهب",
  },
  {
    tag_id: 103,
    Name: "اليورو مقابل الدولار",
  },
  {
    tag_id: 104,
    Name: "نصائح التداول للمتقاعدين",
  },
  {
    tag_id: 105,
    Name: "دليل التداول للمتقاعدين",
  },
  {
    tag_id: 106,
    Name: "دليل الاستثمار للمتقاعدين",
  },
  {
    tag_id: 107,
    Name: "سهم يوتيوب",
  },
  {
    tag_id: 108,
    Name: "YouTube stock",
  },
  {
    tag_id: 109,
    Name: "سعر سهم YouTube",
  },
  {
    tag_id: 110,
    Name: "شراء سهم يوتيوب",
  },
  {
    tag_id: 111,
    Name: "شراء اسهم YouTube",
  },
  {
    tag_id: 112,
    Name: "تراجع النفط",
  },
  {
    tag_id: 113,
    Name: "النفط يتراجع",
  },
  {
    tag_id: 114,
    Name: "النفط يتراجع وزيادة الإنتاج",
  },
  {
    tag_id: 115,
    Name: "إشارات إيجابية في سوق النفط الخام",
  },
  {
    tag_id: 116,
    Name: "النفط يفقد 7%",
  },
  {
    tag_id: 117,
    Name: "المؤشرات الأمريكية والآسيوية",
  },
  {
    tag_id: 118,
    Name: "المنطقة الحمراء",
  },
  {
    tag_id: 119,
    Name: "انخفاض أسعار النفط",
  },
  {
    tag_id: 120,
    Name: "راجع المخزونات الأمريكية",
  },
  {
    tag_id: 121,
    Name: "النفط يحاول كسر موجة الهبوط",
  },
  {
    tag_id: 122,
    Name: "البورصة اليابانية",
  },
  {
    tag_id: 123,
    Name: "خسائر الجلسات الماضية",
  },
  {
    tag_id: 124,
    Name: "النفط يبحث عن دعم",
  },
  {
    tag_id: 125,
    Name: "أداء سلبي",
  },
  {
    tag_id: 126,
    Name: "بورصات آسيا",
  },
  {
    tag_id: 127,
    Name: "أرقام قياسية",
  },
  {
    tag_id: 128,
    Name: "داو جونز",
  },
  {
    tag_id: 129,
    Name: "ستاندرد أند بورز",
  },
  {
    tag_id: 130,
    Name: "النفط مستمر في التراجع",
  },
  {
    tag_id: 131,
    Name: "رنت انخفض",
  },
  {
    tag_id: 132,
    Name: "خام غرب تكساس ارتفع",
  },
  {
    tag_id: 133,
    Name: "النفط ينهي مكاسب",
  },
  {
    tag_id: 134,
    Name: "جلسة تداول سلبية في آسيا",
  },
  {
    tag_id: 135,
    Name: "انخفاض مخزونات النفط",
  },
  {
    tag_id: 136,
    Name: "عودة ارتفاع الأسعار",
  },
  {
    tag_id: 137,
    Name: "النفط يتحول مرة أخرى للهبوط",
  },
  {
    tag_id: 138,
    Name: "ول ستريت مستقر",
  },
  {
    tag_id: 139,
    Name: "يوم تداول إيجابي للنفط",
  },
  {
    tag_id: 140,
    Name: "ارتفاع طفيف لمؤشر نيكاي",
  },
  {
    tag_id: 141,
    Name: "النفط يبدأ الأسبوع بتراجع",
  },
  {
    tag_id: 142,
    Name: "تداول إيجابية في آسيا",
  },
  {
    tag_id: 143,
    Name: "انتعاش للذهب",
  },
  {
    tag_id: 144,
    Name: "انتعاش للنفط",
  },
  {
    tag_id: 145,
    Name: "تداولات إيجابية في آسيا",
  },
  {
    tag_id: 146,
    Name: "النفط يحاول التماسك",
  },
  {
    tag_id: 147,
    Name: "بعد صعود حاد",
  },
  {
    tag_id: 148,
    Name: "جولدمان ساكس",
  },
  {
    tag_id: 149,
    Name: "الأسواق الأمريكية والآسيوية",
  },
  {
    tag_id: 150,
    Name: "كيفية شراء",
  },
  {
    tag_id: 151,
    Name: "أسهم ابل",
  },
  {
    tag_id: 152,
    Name: "أسهم شركة APPLE",
  },
  {
    tag_id: 153,
    Name: "كيفية شراء أسهم عبر الإنترنت",
  },
  {
    tag_id: 154,
    Name: "شراء اسهم Apple",
  },
  {
    tag_id: 159,
    Name: "أسهم شركة علي بابا",
  },
  {
    tag_id: 160,
    Name: "شراء أسهم شركة علي بابا",
  },
  {
    tag_id: 161,
    Name: "شراء أسهم علي بابا",
  },
  {
    tag_id: 162,
    Name: "تراجع مخزونات النفط الأمريكية",
  },
  {
    tag_id: 163,
    Name: "النفط يعاود الهبوط",
  },
  {
    tag_id: 164,
    Name: "خسائر للذهب",
  },
  {
    tag_id: 165,
    Name: "ارتفاع الدولار",
  },
  {
    tag_id: 166,
    Name: "أرباح قياسية",
  },
  {
    tag_id: 167,
    Name: "الذهب مستقر",
  },
  {
    tag_id: 168,
    Name: "النفط يمحو خسائر الأسابيع الماضية",
  },
  {
    tag_id: 169,
    Name: "النفط يرتفع للجلسة الرابعة",
  },
  {
    tag_id: 172,
    Name: "تداول العملات",
  },
  {
    tag_id: 173,
    Name: "منصة استثمار",
  },
  {
    tag_id: 174,
    Name: "تداول العملات للمبتدئين",
  },
  {
    tag_id: 175,
    Name: "دليل تداول الاسهم",
  },
  {
    tag_id: 176,
    Name: "النفط يرتفع",
  },
  {
    tag_id: 177,
    Name: "إعصار إيدا يدعم الخام",
  },
  {
    tag_id: 178,
    Name: "تداول الأسبوع",
  },
  {
    tag_id: 180,
    Name: "النفط متذبذب",
  },
  {
    tag_id: 181,
    Name: "ديناميكيات إيجابية في آسيا",
  },
  {
    tag_id: 182,
    Name: "ديناميكيات إيجابية في أوروبا",
  },
  {
    tag_id: 183,
    Name: "اخبار الذهب",
  },
  {
    tag_id: 184,
    Name: "معنويات إيجابية في السوق",
  },
  {
    tag_id: 185,
    Name: "سهم شركة Netflix",
  },
  {
    tag_id: 186,
    Name: "نيتفلكس",
  },
  {
    tag_id: 187,
    Name: "شراء أسهم Netflix",
  },
  {
    tag_id: 188,
    Name: "شراء سهم Netflix",
  },
  {
    tag_id: 192,
    Name: "النفط والذهب يرتفعان",
  },
  {
    tag_id: 193,
    Name: "تداولات إيجابية",
  },
  {
    tag_id: 194,
    Name: "أسعار النفط الأسبوعية",
  },
  {
    tag_id: 195,
    Name: "مخزونات النفط",
  },
  {
    tag_id: 196,
    Name: "قرارات أوبك",
  },
  {
    tag_id: 201,
    Name: "الدولار الأمريكي يتراجع",
  },
  {
    tag_id: 202,
    Name: "الذهب مدعوم",
  },
  {
    tag_id: 203,
    Name: "أرقام التوظيف الأمريكية",
  },
  {
    tag_id: 209,
    Name: "بيانات أمريكية",
  },
  {
    tag_id: 210,
    Name: "بيانات صينية",
  },
  {
    tag_id: 211,
    Name: "كوفيد 19",
  },
  {
    tag_id: 212,
    Name: "توقعات بتراجع الذهب",
  },
  {
    tag_id: 213,
    Name: "بيانات أمريكية وصينية",
  },
  {
    tag_id: 218,
    Name: "قفزة حادة للألمنيوم",
  },
  {
    tag_id: 219,
    Name: "الصين واليابان",
  },
  {
    tag_id: 223,
    Name: "تقارير إيجابية من الصين",
  },
  {
    tag_id: 224,
    Name: "نيكاي",
  },
  {
    tag_id: 225,
    Name: "أسعار النفط في الأسواق",
  },
  {
    tag_id: 226,
    Name: "اليورو مقابل الدولار الأمريكي",
  },
  {
    tag_id: 227,
    Name: "الذهب يتراجع",
  },
  {
    tag_id: 231,
    Name: "عودة ارتفاع أسعار النفط",
  },
  {
    tag_id: 232,
    Name: "إعصار إيدا",
  },
  {
    tag_id: 233,
    Name: "أسعار النفط اليوم",
  },
  {
    tag_id: 234,
    Name: "السعودية",
  },
  {
    tag_id: 235,
    Name: "الصين",
  },
  {
    tag_id: 236,
    Name: "المكسيك",
  },
  {
    tag_id: 237,
    Name: "أبل تواصل التقدم",
  },
  {
    tag_id: 238,
    Name: "وول ستريت",
  },
  {
    tag_id: 239,
    Name: "تراجع الأسهم الأوروبية",
  },
  {
    tag_id: 240,
    Name: "الذهب يعمق من خسائره",
  },
  {
    tag_id: 249,
    Name: "الاحتياطي الفيدرالي",
  },
  {
    tag_id: 250,
    Name: "تباطؤ نمو النشاط الاقتصادي",
  },
  {
    tag_id: 255,
    Name: "تسارع معدل نمو أسعار المنتجين",
  },
  {
    tag_id: 256,
    Name: "الولايات المتحدة",
  },
  {
    tag_id: 257,
    Name: "الأسواق الأوروبية تتراجع",
  },
  {
    tag_id: 258,
    Name: "النفط يحصل على دعم كبير",
  },
  {
    tag_id: 262,
    Name: "بداية إيجابية في الأسواق",
  },
  {
    tag_id: 263,
    Name: "لأسواق الآسيوية",
  },
  {
    tag_id: 264,
    Name: "لأسواق الآسيوية والنفط",
  },
  {
    tag_id: 265,
    Name: "بداية إيجابية",
  },
  {
    tag_id: 269,
    Name: "أبل",
  },
  {
    tag_id: 270,
    Name: "الذهب",
  },
  {
    tag_id: 276,
    Name: "اللون الأحمر يكسو البورصات",
  },
  {
    tag_id: 277,
    Name: "اللون الأحمر يكسو بورصات وول ستريت وآسيا",
  },
  {
    tag_id: 278,
    Name: "انتعاش للنفط والذهب",
  },
  {
    tag_id: 279,
    Name: "تراجع مخزونات النفط",
  },
  {
    tag_id: 280,
    Name: "معدلات إنتاج النفط الأسبوعية",
  },
  {
    tag_id: 281,
    Name: "الطلب على النفط",
  },
  {
    tag_id: 282,
    Name: "احتياطيات النفط الخام",
  },
  {
    tag_id: 285,
    Name: "ارتفاع الإنتاج الصناعي في الصين",
  },
  {
    tag_id: 286,
    Name: "النفط متماسك",
  },
  {
    tag_id: 290,
    Name: "اجتماع مرتقب للاحتياطي الفيدرالي",
  },
  {
    tag_id: 291,
    Name: "النفط يحقق مكاسب",
  },
  {
    tag_id: 295,
    Name: "أسعار الغاز",
  },
  {
    tag_id: 296,
    Name: "الغاز الروسي",
  },
  {
    tag_id: 300,
    Name: "بورصة",
  },
  {
    tag_id: 301,
    Name: "نفط",
  },
  {
    tag_id: 302,
    Name: "ذهب",
  },
  {
    tag_id: 303,
    Name: "الأسواق العالمية",
  },
  {
    tag_id: 304,
    Name: "قفزة في أسعار النفط",
  },
  {
    tag_id: 305,
    Name: "إنتاج النفط الأسبوعية",
  },
  {
    tag_id: 306,
    Name: "النفط لهذا الأسبوع",
  },
  {
    tag_id: 307,
    Name: "مؤتمر Gastech",
  },
  {
    tag_id: 308,
    Name: "إطلاق IOS 15",
  },
  {
    tag_id: 309,
    Name: "نظام تشغيل IOS 15",
  },
  {
    tag_id: 310,
    Name: "IOS 15",
  },
  {
    tag_id: 311,
    Name: "دليل المستثمرين للشباب",
  },
  {
    tag_id: 312,
    Name: "بناء المحفظة الاستثمارية",
  },
  {
    tag_id: 313,
    Name: "التخطيط المالي",
  },
  {
    tag_id: 314,
    Name: "دليل المستثمرين",
  },
  {
    tag_id: 315,
    Name: "حالة سوق النفط",
  },
  {
    tag_id: 316,
    Name: "قفزة في أسواق النفط",
  },
  {
    tag_id: 320,
    Name: "مشكلات إيفرجراند",
  },
  {
    tag_id: 321,
    Name: "إيفرجراند",
  },
  {
    tag_id: 324,
    Name: "الليرة التركية",
  },
  {
    tag_id: 325,
    Name: "تركيا",
  },
  {
    tag_id: 326,
    Name: "اسعار الاسهم",
  },
  {
    tag_id: 327,
    Name: "اسهم",
  },
  {
    tag_id: 330,
    Name: "البورصة الصينية",
  },
  {
    tag_id: 331,
    Name: "برنت",
  },
  {
    tag_id: 332,
    Name: "ناسداك",
  },
  {
    tag_id: 333,
    Name: "اسعار النفط",
  },
  {
    tag_id: 334,
    Name: "ارتفاع",
  },
  {
    tag_id: 335,
    Name: "مخزون النفط",
  },
  {
    tag_id: 336,
    Name: "برميل",
  },
  {
    tag_id: 337,
    Name: "كخزون النفط",
  },
  {
    tag_id: 338,
    Name: "الاسواق الاسيوية",
  },
  {
    tag_id: 339,
    Name: "انخفاض",
  },
  {
    tag_id: 344,
    Name: "الصناعة الصينية",
  },
  {
    tag_id: 345,
    Name: "اليابان",
  },
  {
    tag_id: 346,
    Name: "الاسهم",
  },
  {
    tag_id: 347,
    Name: "سوق",
  },
  {
    tag_id: 348,
    Name: "السوق",
  },
  {
    tag_id: 349,
    Name: "تيسلا",
  },
  {
    tag_id: 350,
    Name: "البورصة الاسيوية",
  },
  {
    tag_id: 351,
    Name: "البورصة الاوروبية",
  },
  {
    tag_id: 352,
    Name: "انخافض",
  },
  {
    tag_id: 353,
    Name: "سيارات كهربائية",
  },
  {
    tag_id: 360,
    Name: "اخبار النفط",
  },
  {
    tag_id: 361,
    Name: "إيفيرجراند",
  },
  {
    tag_id: 363,
    Name: "فيسبوك",
  },
  {
    tag_id: 364,
    Name: "شبكات التواصل الاجتماعي",
  },
  {
    tag_id: 367,
    Name: "الاسهم الامريكية",
  },
  {
    tag_id: 368,
    Name: "الولايات المتحدة الأمريكية",
  },
  {
    tag_id: 369,
    Name: "اوبك",
  },
  {
    tag_id: 374,
    Name: "النفط",
  },
  {
    tag_id: 375,
    Name: "المؤشرات الاسيوية",
  },
  {
    tag_id: 378,
    Name: "بيتكوين",
  },
  {
    tag_id: 379,
    Name: "البورصات الآسيوية",
  },
  {
    tag_id: 380,
    Name: "الخام الامريكي",
  },
  {
    tag_id: 381,
    Name: "سوق الأسهم الأمريكية",
  },
  {
    tag_id: 385,
    Name: "الاسواق الامريكية",
  },
  {
    tag_id: 387,
    Name: "ارتفاع أسعار النفط",
  },
  {
    tag_id: 388,
    Name: "أزمة الطاقة العالمية",
  },
  {
    tag_id: 389,
    Name: "النفط حول العالم",
  },
  {
    tag_id: 390,
    Name: "البورصات الصينية",
  },
  {
    tag_id: 392,
    Name: "global energy crisis",
  },
  {
    tag_id: 393,
    Name: "Crude oil",
  },
  {
    tag_id: 396,
    Name: "الأسهم الأمريكية",
  },
  {
    tag_id: 397,
    Name: "مؤشرات وول  ستريت",
  },
  {
    tag_id: 399,
    Name: "مؤشرات الأسهم الأمريكية",
  },
  {
    tag_id: 400,
    Name: "المؤشرات الآسيوية",
  },
  {
    tag_id: 403,
    Name: "الأسواق الآسيوية",
  },
  {
    tag_id: 404,
    Name: "الشركات الأمريكية",
  },
  {
    tag_id: 405,
    Name: "أسواق الأسهم الآسيوية",
  },
  {
    tag_id: 409,
    Name: "تداولات هادئة في اسيا",
  },
  {
    tag_id: 410,
    Name: "النفط الخام",
  },
  {
    tag_id: 412,
    Name: "مارك زوكربيرج",
  },
  {
    tag_id: 413,
    Name: "الميتافيرس",
  },
  {
    tag_id: 414,
    Name: "Metaverse",
  },
  {
    tag_id: 415,
    Name: "Mark Zuckerberg",
  },
  {
    tag_id: 419,
    Name: "ما هو التيك توك Tik Tok",
  },
  {
    tag_id: 420,
    Name: "تيك توك",
  },
  {
    tag_id: 421,
    Name: "Tik Tok",
  },
  {
    tag_id: 422,
    Name: "TikTok",
  },
  {
    tag_id: 425,
    Name: "المؤشرات الأمريكية",
  },
  {
    tag_id: 428,
    Name: "لألفابيت",
  },
  {
    tag_id: 429,
    Name: "أدنوك",
  },
  {
    tag_id: 433,
    Name: "بورصة طوكيو",
  },
  {
    tag_id: 436,
    Name: "أوبك +",
  },
  {
    tag_id: 437,
    Name: "منطقة اليورو",
  },
  {
    tag_id: 440,
    Name: "الغاز",
  },
  {
    tag_id: 441,
    Name: "شنغهاي",
  },
  {
    tag_id: 444,
    Name: "ديناميكيات سلبية",
  },
  {
    tag_id: 446,
    Name: "أسعار النفط",
  },
  {
    tag_id: 447,
    Name: "النفط الروسي",
  },
  {
    tag_id: 448,
    Name: "تسلا",
  },
  {
    tag_id: 450,
    Name: "والنفط",
  },
  {
    tag_id: 451,
    Name: "تحركات إيجابية",
  },
  {
    tag_id: 453,
    Name: "المؤشرات الآسيوية تتراجع",
  },
  {
    tag_id: 454,
    Name: "الأسهم الأوروبية",
  },
  {
    tag_id: 456,
    Name: "آسيا",
  },
  {
    tag_id: 462,
    Name: "المؤشرات الأمريكي",
  },
  {
    tag_id: 463,
    Name: "خام غرب تكساس",
  },
  {
    tag_id: 464,
    Name: "البنزين",
  },
  {
    tag_id: 468,
    Name: "مجموعة لوسيد",
  },
  {
    tag_id: 469,
    Name: "Lucid",
  },
  {
    tag_id: 470,
    Name: "APPLE INC",
  },
  {
    tag_id: 471,
    Name: "آبل",
  },
  {
    tag_id: 472,
    Name: "سوق النفط",
  },
  {
    tag_id: 473,
    Name: "ابل",
  },
  {
    tag_id: 478,
    Name: "سيارات تسلا",
  },
  {
    tag_id: 482,
    Name: "الفائدة",
  },
  {
    tag_id: 483,
    Name: "النف",
  },
  {
    tag_id: 484,
    Name: "Apple",
  },
  {
    tag_id: 486,
    Name: "البيانات الأمريكية",
  },
  {
    tag_id: 487,
    Name: "جوجل",
  },
  {
    tag_id: 489,
    Name: "ارامكو",
  },
  {
    tag_id: 492,
    Name: "HP",
  },
  {
    tag_id: 493,
    Name: "اتش بي",
  },
  {
    tag_id: 496,
    Name: "مترو",
  },
  {
    tag_id: 497,
    Name: "امازون",
  },
  {
    tag_id: 500,
    Name: "شركات النفط",
  },
  {
    tag_id: 501,
    Name: "جنرال موتورز",
  },
  {
    tag_id: 502,
    Name: "GM",
  },
  {
    tag_id: 505,
    Name: "غيمستوب",
  },
  {
    tag_id: 506,
    Name: "GAMESTOP CORPORATION",
  },
  {
    tag_id: 508,
    Name: "سيلز فورس",
  },
  {
    tag_id: 509,
    Name: "SalesForce",
  },
  {
    tag_id: 511,
    Name: "الديناميكيات السلبية",
  },
  {
    tag_id: 512,
    Name: "كوستكو",
  },
  {
    tag_id: 513,
    Name: "COSTCO",
  },
  {
    tag_id: 515,
    Name: "FDX",
  },
  {
    tag_id: 516,
    Name: "فيديكس",
  },
  {
    tag_id: 518,
    Name: "اسواق العالم",
  },
  {
    tag_id: 519,
    Name: "world's markets",
  },
  {
    tag_id: 520,
    Name: "European markets",
  },
  {
    tag_id: 523,
    Name: "السلع الأساسية",
  },
  {
    tag_id: 524,
    Name: "التضخم",
  },
  {
    tag_id: 525,
    Name: "ارتفاع الاسعار",
  },
  {
    tag_id: 529,
    Name: "الطاقة",
  },
  {
    tag_id: 530,
    Name: "قهوة",
  },
  {
    tag_id: 531,
    Name: "تضخم",
  },
  {
    tag_id: 532,
    Name: "اسعار القهوة",
  },
  {
    tag_id: 538,
    Name: "نايكي",
  },
  {
    tag_id: 539,
    Name: "Nike",
  },
  {
    tag_id: 541,
    Name: "المؤشرات الصينية",
  },
  {
    tag_id: 542,
    Name: "الألمنيوم",
  },
  {
    tag_id: 543,
    Name: "النحاس",
  },
  {
    tag_id: 544,
    Name: "النيكل",
  },
  {
    tag_id: 549,
    Name: "التكنولوجيا الحيوية",
  },
  {
    tag_id: 550,
    Name: "جونسون اند جونسون",
  },
  {
    tag_id: 551,
    Name: "فايزر",
  },
  {
    tag_id: 555,
    Name: "Airbnb",
  },
  {
    tag_id: 556,
    Name: "إير أن بي",
  },
  {
    tag_id: 557,
    Name: "متحور اوميكرون",
  },
  {
    tag_id: 561,
    Name: "المؤشرات العالمية",
  },
  {
    tag_id: 562,
    Name: "ايربي ان بي",
  },
  {
    tag_id: 563,
    Name: "زووم",
  },
  {
    tag_id: 564,
    Name: "Zoom",
  },
  {
    tag_id: 565,
    Name: "zm",
  },
  {
    tag_id: 566,
    Name: "مايكروسوفت",
  },
  {
    tag_id: 567,
    Name: "Microsoft",
  },
  {
    tag_id: 568,
    Name: "MSFT",
  },
  {
    tag_id: 572,
    Name: "الأسواق",
  },
  {
    tag_id: 573,
    Name: "أوميكرون",
  },
  {
    tag_id: 575,
    Name: "والت ديزني",
  },
  {
    tag_id: 576,
    Name: "سهم والت ديزني",
  },
  {
    tag_id: 579,
    Name: "نفيديا",
  },
  {
    tag_id: 580,
    Name: "شركة آرم",
  },
  {
    tag_id: 584,
    Name: "أدوبي",
  },
  {
    tag_id: 585,
    Name: "Adobe",
  },
  {
    tag_id: 586,
    Name: "معدلات إنتاج النفط الخام",
  },
  {
    tag_id: 587,
    Name: "انتل",
  },
  {
    tag_id: 588,
    Name: "Intel",
  },
  {
    tag_id: 589,
    Name: "Dropbox",
  },
  {
    tag_id: 590,
    Name: "دروبوكس",
  },
  {
    tag_id: 591,
    Name: "DBX",
  },
  {
    tag_id: 592,
    Name: "بنترست",
  },
  {
    tag_id: 593,
    Name: "Pinterest",
  },
  {
    tag_id: 594,
    Name: "مركز الدببة",
  },
  {
    tag_id: 595,
    Name: "مصطلحات السوق",
  },
  {
    tag_id: 596,
    Name: "عمليات تداول ناجحة",
  },
  {
    tag_id: 597,
    Name: "العملة المزدوجة",
  },
  {
    tag_id: 598,
    Name: "مقايضات العملة المزدوجة",
  },
  {
    tag_id: 599,
    Name: "مخاطر العملة الخاصة",
  },
  {
    tag_id: 600,
    Name: "ربحية السهم",
  },
  {
    tag_id: 601,
    Name: "عائد السهم الجيد",
  },
  {
    tag_id: 602,
    Name: "نصيب السهم",
  },
  {
    tag_id: 607,
    Name: "باي بال",
  },
  {
    tag_id: 608,
    Name: "pay pal",
  },
  {
    tag_id: 609,
    Name: "Amazon",
  },
  {
    tag_id: 610,
    Name: "البورصات الاوروبية",
  },
  {
    tag_id: 613,
    Name: "سبوتيفاي",
  },
  {
    tag_id: 614,
    Name: "spotify",
  },
  {
    tag_id: 617,
    Name: "Netflix",
  },
  {
    tag_id: 618,
    Name: "نتفلكس",
  },
  {
    tag_id: 619,
    Name: "المؤشرات الامريكية",
  },
  {
    tag_id: 620,
    Name: "الأسهم الصينية",
  },
  {
    tag_id: 622,
    Name: "تداولات سلبية",
  },
  {
    tag_id: 623,
    Name: "او",
  },
  {
    tag_id: 624,
    Name: "Negative trading",
  },
  {
    tag_id: 626,
    Name: "أسواق أوروبا",
  },
  {
    tag_id: 627,
    Name: "اتجاهات مختلفة",
  },
  {
    tag_id: 628,
    Name: "الشركات المحركة",
  },
  {
    tag_id: 631,
    Name: "المخزونات الأمريكية",
  },
  {
    tag_id: 632,
    Name: "الأسهم الآسيوية",
  },
  {
    tag_id: 633,
    Name: "You.com",
  },
  {
    tag_id: 634,
    Name: "شركة جوجل",
  },
  {
    tag_id: 635,
    Name: "محرك البحث",
  },
  {
    tag_id: 636,
    Name: "Neeva",
  },
  {
    tag_id: 637,
    Name: "Yahoo",
  },
  {
    tag_id: 638,
    Name: "Bing",
  },
  {
    tag_id: 639,
    Name: "اللون الأحمر",
  },
  {
    tag_id: 640,
    Name: "لوسيد",
  },
  {
    tag_id: 641,
    Name: "Red",
  },
  {
    tag_id: 646,
    Name: "Avis",
  },
  {
    tag_id: 647,
    Name: "Hertz",
  },
  {
    tag_id: 648,
    Name: "Tesla",
  },
  {
    tag_id: 649,
    Name: "الكردانو",
  },
  {
    tag_id: 650,
    Name: "Cardano",
  },
  {
    tag_id: 651,
    Name: "ADA",
  },
  {
    tag_id: 652,
    Name: "TM",
  },
  {
    tag_id: 653,
    Name: "تويوتا",
  },
  {
    tag_id: 655,
    Name: "الريبل",
  },
  {
    tag_id: 656,
    Name: "Ripple",
  },
  {
    tag_id: 657,
    Name: "XRP",
  },
  {
    tag_id: 658,
    Name: "Etherium",
  },
  {
    tag_id: 659,
    Name: "block chains",
  },
  {
    tag_id: 660,
    Name: "ايثريوم",
  },
  {
    tag_id: 661,
    Name: "عملة رقمية",
  },
  {
    tag_id: 662,
    Name: "اوميكرون",
  },
  {
    tag_id: 663,
    Name: "موديرنا",
  },
  {
    tag_id: 664,
    Name: "نايك",
  },
  {
    tag_id: 665,
    Name: "البيتكوين",
  },
  {
    tag_id: 666,
    Name: "bitcoin",
  },
  {
    tag_id: 667,
    Name: "Litecoin",
  },
  {
    tag_id: 668,
    Name: "لايتكوين",
  },
  {
    tag_id: 669,
    Name: "أداء الأسهم",
  },
  {
    tag_id: 670,
    Name: "العملة الرقمية",
  },
  {
    tag_id: 671,
    Name: "العقود",
  },
  {
    tag_id: 672,
    Name: "العملات المشفرة",
  },
  {
    tag_id: 673,
    Name: "الفروقات",
  },
  {
    tag_id: 674,
    Name: "داشكوين",
  },
  {
    tag_id: 675,
    Name: "Dashcoin",
  },
  {
    tag_id: 676,
    Name: "العملة المشفرة",
  },
  {
    tag_id: 677,
    Name: "سلة الاستثمار في أسهم التكنولوجيا الأمريكية",
  },
  {
    tag_id: 678,
    Name: "سلة الاستثمار في أسهم البنوك الأمريكية",
  },
  {
    tag_id: 679,
    Name: "سلة الاستثمار في الأسهم الألمانية العملاقة.",
  },
  {
    tag_id: 680,
    Name: "سلّات إيفست الاستثمارية",
  },
  {
    tag_id: 681,
    Name: "العملة الرقمية الصينية",
  },
  {
    tag_id: 682,
    Name: "YCC",
  },
  {
    tag_id: 683,
    Name: "يوان تشين",
  },
  {
    tag_id: 684,
    Name: "العملات الرقمية",
  },
  {
    tag_id: 685,
    Name: "مخزونات النفط الخام",
  },
  {
    tag_id: 686,
    Name: "قطاع النفط",
  },
  {
    tag_id: 688,
    Name: "oil sector",
  },
  {
    tag_id: 689,
    Name: "U.S. Oil stockpiles",
  },
  {
    tag_id: 692,
    Name: "ديناميكيات إيجابية",
  },
  {
    tag_id: 694,
    Name: "Gamestop",
  },
  {
    tag_id: 696,
    Name: "التضخم الأمريكي",
  },
  {
    tag_id: 697,
    Name: "خام برنت",
  },
  {
    tag_id: 701,
    Name: "السوق الأمريكي",
  },
  {
    tag_id: 702,
    Name: "تداولات مختلطة",
  },
  {
    tag_id: 703,
    Name: "الأسهم الجزئية",
  },
  {
    tag_id: 704,
    Name: "أمازون",
  },
  {
    tag_id: 705,
    Name: "التجارة الإلكترونية",
  },
  {
    tag_id: 708,
    Name: "divided stock",
  },
  {
    tag_id: 712,
    Name: "خطوط دلتا الجوية المحدودة",
  },
  {
    tag_id: 713,
    Name: "الدورة الآسيوية",
  },
  {
    tag_id: 715,
    Name: "AMD",
  },
  {
    tag_id: 716,
    Name: "ادفانسد مايكرو ديفايسز",
  },
  {
    tag_id: 719,
    Name: "NVDA",
  },
  {
    tag_id: 720,
    Name: "Nvidia",
  },
  {
    tag_id: 724,
    Name: "Facebook",
  },
  {
    tag_id: 725,
    Name: "أسواق الأسهم",
  },
  {
    tag_id: 726,
    Name: "ستاندرد أند بور",
  },
  {
    tag_id: 727,
    Name: "إنتاج النفط",
  },
  {
    tag_id: 728,
    Name: "Snap",
  },
  {
    tag_id: 729,
    Name: "سناب",
  },
  {
    tag_id: 730,
    Name: "سناب شات",
  },
  {
    tag_id: 731,
    Name: "الاسهم الأوروبية",
  },
  {
    tag_id: 732,
    Name: "الاسهم الآسيوية",
  },
  {
    tag_id: 733,
    Name: "فيزا",
  },
  {
    tag_id: 734,
    Name: "visa",
  },
  {
    tag_id: 735,
    Name: "سهم فيزا",
  },
  {
    tag_id: 740,
    Name: "ميتا",
  },
  {
    tag_id: 741,
    Name: "Meta",
  },
  {
    tag_id: 743,
    Name: "الفابيت",
  },
  {
    tag_id: 744,
    Name: "Google",
  },
  {
    tag_id: 745,
    Name: "Alphabet",
  },
  {
    tag_id: 746,
    Name: "Tsla",
  },
  {
    tag_id: 749,
    Name: "المعادن",
  },
  {
    tag_id: 750,
    Name: "الأسواق الأوروبية",
  },
  {
    tag_id: 751,
    Name: "ديسكفري",
  },
  {
    tag_id: 752,
    Name: "روكو",
  },
  {
    tag_id: 753,
    Name: "مراجعة السوق",
  },
  {
    tag_id: 754,
    Name: "حزم مالية تحفيزية",
  },
  {
    tag_id: 755,
    Name: "كوينبيس",
  },
  {
    tag_id: 756,
    Name: "شركة فايزر",
  },
  {
    tag_id: 761,
    Name: "ميتافيرس",
  },
  {
    tag_id: 764,
    Name: "نيو",
  },
  {
    tag_id: 765,
    Name: "فورد",
  },
  {
    tag_id: 770,
    Name: "النفط الخام الأمريكي",
  },
  {
    tag_id: 774,
    Name: "بلاك بيري",
  },
  {
    tag_id: 775,
    Name: "كانوبي جروث",
  },
  {
    tag_id: 776,
    Name: "ارباح",
  },
  {
    tag_id: 780,
    Name: "بيونتيك",
  },
  {
    tag_id: 781,
    Name: "Moderna",
  },
  {
    tag_id: 782,
    Name: "Johnson &amp; Johnson",
  },
  {
    tag_id: 785,
    Name: "الأسهم التقنية",
  },
  {
    tag_id: 786,
    Name: "مؤشرات الأسهم",
  },
  {
    tag_id: 787,
    Name: "ايثيريوم",
  },
  {
    tag_id: 788,
    Name: "كاردانو",
  },
  {
    tag_id: 789,
    Name: "Crypto",
  },
  {
    tag_id: 795,
    Name: "سهم",
  },
  {
    tag_id: 798,
    Name: "البورصات الأوروبية",
  },
  {
    tag_id: 799,
    Name: "ادوبي",
  },
  {
    tag_id: 802,
    Name: "تيك تو",
  },
  {
    tag_id: 803,
    Name: "زينغا",
  },
  {
    tag_id: 804,
    Name: "إلكترونيك آرتس",
  },
  {
    tag_id: 808,
    Name: "Electronic Arts",
  },
  {
    tag_id: 810,
    Name: "البنوك الامريكية",
  },
  {
    tag_id: 811,
    Name: "سلة الاستثمار",
  },
  {
    tag_id: 812,
    Name: "اسهم البنوك الامريكية",
  },
  {
    tag_id: 813,
    Name: "استثمار",
  },
  {
    tag_id: 814,
    Name: "سلة",
  },
  {
    tag_id: 815,
    Name: "انتاج النفط",
  },
  {
    tag_id: 816,
    Name: "معهد البترول الأمريكي",
  },
  {
    tag_id: 818,
    Name: "بروكتر اند غامبل",
  },
  {
    tag_id: 819,
    Name: "TSMC",
  },
  {
    tag_id: 820,
    Name: "ميكرون تكنولوجي",
  },
  {
    tag_id: 821,
    Name: "Micron Technology",
  },
  {
    tag_id: 825,
    Name: "الأسواق الامريكية",
  },
  {
    tag_id: 826,
    Name: "سيسكو سيستمز",
  },
  {
    tag_id: 827,
    Name: "زسكالر",
  },
  {
    tag_id: 828,
    Name: "American Markets",
  },
  {
    tag_id: 830,
    Name: "ZSCALER",
  },
  {
    tag_id: 831,
    Name: "Cisco Systems",
  },
  {
    tag_id: 834,
    Name: "أوتوديسك",
  },
  {
    tag_id: 835,
    Name: "شراء",
  },
  {
    tag_id: 836,
    Name: "شراء الاسهم",
  },
  {
    tag_id: 837,
    Name: "أسعار",
  },
  {
    tag_id: 838,
    Name: "مؤشرات",
  },
  {
    tag_id: 839,
    Name: "Alibaba",
  },
  {
    tag_id: 840,
    Name: "مجموعة علي بابا",
  },
  {
    tag_id: 841,
    Name: "prices",
  },
  {
    tag_id: 848,
    Name: "Paypal",
  },
  {
    tag_id: 849,
    Name: "الأسهم العالمية",
  },
  {
    tag_id: 850,
    Name: "تويليو",
  },
  {
    tag_id: 851,
    Name: "أسهم",
  },
  {
    tag_id: 852,
    Name: "ليموناد",
  },
  {
    tag_id: 853,
    Name: "Asian stock exchanges",
  },
  {
    tag_id: 855,
    Name: "داو جونز الصناعي",
  },
  {
    tag_id: 856,
    Name: "ناسداك المركب",
  },
  {
    tag_id: 857,
    Name: "Lemonade",
  },
  {
    tag_id: 858,
    Name: "Twilio",
  },
  {
    tag_id: 861,
    Name: "United States stock",
  },
  {
    tag_id: 862,
    Name: "Nasdaq composite",
  },
  {
    tag_id: 865,
    Name: "شراء سهم",
  },
  {
    tag_id: 866,
    Name: "سوق الأسهم",
  },
  {
    tag_id: 868,
    Name: "Amazom",
  },
  {
    tag_id: 870,
    Name: "غوغل",
  },
  {
    tag_id: 871,
    Name: "بانك أوف أمريكا",
  },
  {
    tag_id: 872,
    Name: "Bank of America",
  },
  {
    tag_id: 874,
    Name: "الاقتصاد الأمريكي",
  },
  {
    tag_id: 875,
    Name: "بورصة نيويورك التجارية",
  },
  {
    tag_id: 876,
    Name: "اماززن",
  },
  {
    tag_id: 877,
    Name: "US economy",
  },
  {
    tag_id: 878,
    Name: "New York Mercantile Exchange",
  },
  {
    tag_id: 881,
    Name: "محزون النفط",
  },
  {
    tag_id: 882,
    Name: "أرباح",
  },
  {
    tag_id: 884,
    Name: "crude stockpiles",
  },
  {
    tag_id: 886,
    Name: "غازبروم",
  },
  {
    tag_id: 888,
    Name: "الانكماش",
  },
  {
    tag_id: 889,
    Name: "ادارة الاموال",
  },
  {
    tag_id: 890,
    Name: "اعلى مستوى",
  },
  {
    tag_id: 891,
    Name: "ادنى مستوى",
  },
  {
    tag_id: 892,
    Name: "العائد الربحي",
  },
  {
    tag_id: 893,
    Name: "نسبة السعر إلى العائد",
  },
  {
    tag_id: 894,
    Name: "بطاقات الائتمان",
  },
  {
    tag_id: 895,
    Name: "بيع",
  },
  {
    tag_id: 896,
    Name: "Buy",
  },
  {
    tag_id: 899,
    Name: "القيمة السوقية",
  },
  {
    tag_id: 900,
    Name: "السيارات الكهربائية",
  },
  {
    tag_id: 903,
    Name: "ديزني",
  },
  {
    tag_id: 904,
    Name: "بيليتون",
  },
  {
    tag_id: 905,
    Name: "الدولار",
  },
  {
    tag_id: 906,
    Name: "اليورو",
  },
  {
    tag_id: 907,
    Name: "إيثيريوم",
  },
  {
    tag_id: 908,
    Name: "ديناميكيات مختلطة",
  },
  {
    tag_id: 909,
    Name: "earnings",
  },
  {
    tag_id: 910,
    Name: "Peloton",
  },
  {
    tag_id: 913,
    Name: "dollar",
  },
  {
    tag_id: 914,
    Name: "Mixed dynamics",
  },
  {
    tag_id: 917,
    Name: "ألنفط",
  },
  {
    tag_id: 918,
    Name: "ديناميكيات مختلفة",
  },
  {
    tag_id: 919,
    Name: "iPhone",
  },
  {
    tag_id: 921,
    Name: "المستثمرين",
  },
  {
    tag_id: 922,
    Name: "different dynamics",
  },
  {
    tag_id: 924,
    Name: "oil situation",
  },
  {
    tag_id: 926,
    Name: "اوبر",
  },
  {
    tag_id: 929,
    Name: "كوكا كولا",
  },
  {
    tag_id: 930,
    Name: "أمريكان إكسبريس",
  },
  {
    tag_id: 935,
    Name: "لأسهم الأوروبية",
  },
  {
    tag_id: 936,
    Name: "الأسهم",
  },
  {
    tag_id: 937,
    Name: "ماستركارد",
  },
  {
    tag_id: 938,
    Name: "إير بي إن بي",
  },
  {
    tag_id: 939,
    Name: "شوبيفاي",
  },
  {
    tag_id: 940,
    Name: "European indices",
  },
  {
    tag_id: 942,
    Name: "إنتل",
  },
  {
    tag_id: 945,
    Name: "وساطة مالية معتمدة",
  },
  {
    tag_id: 946,
    Name: "الكويت",
  },
  {
    tag_id: 947,
    Name: "شركه تداول موثوقة",
  },
  {
    tag_id: 948,
    Name: "تداول موثوق",
  },
  {
    tag_id: 949,
    Name: "السعوددية",
  },
  {
    tag_id: 950,
    Name: "شركة تداول موثوقة",
  },
  {
    tag_id: 951,
    Name: "وساطلة مالية",
  },
  {
    tag_id: 952,
    Name: "شركة تداول معتمدة",
  },
  {
    tag_id: 953,
    Name: "تداول معتمد",
  },
  {
    tag_id: 954,
    Name: "وساطة مالية",
  },
  {
    tag_id: 955,
    Name: "عمان",
  },
  {
    tag_id: 956,
    Name: "الامارات",
  },
  {
    tag_id: 957,
    Name: "وساطة معتمدة",
  },
  {
    tag_id: 958,
    Name: "البحرين",
  },
  {
    tag_id: 959,
    Name: "شركة تداول في الكويت",
  },
  {
    tag_id: 960,
    Name: "التداول الموثوق",
  },
  {
    tag_id: 961,
    Name: "قطر",
  },
  {
    tag_id: 962,
    Name: "وسيط تداول",
  },
  {
    tag_id: 963,
    Name: "تداول العملات الرقمية",
  },
  {
    tag_id: 964,
    Name: "ألكويت",
  },
  {
    tag_id: 965,
    Name: "البورصات الأمريكية",
  },
  {
    tag_id: 967,
    Name: "نيفيديا",
  },
  {
    tag_id: 968,
    Name: "المؤشرات الآسيوية والأمريكية",
  },
  {
    tag_id: 969,
    Name: "American indices",
  },
  {
    tag_id: 971,
    Name: "شراء أسهم",
  },
  {
    tag_id: 972,
    Name: "Buy Stocks",
  },
  {
    tag_id: 974,
    Name: "مؤشر نيكاي",
  },
  {
    tag_id: 975,
    Name: "شركة تداول العملات الرقمية",
  },
  {
    tag_id: 976,
    Name: "شركة تداول العملات الرقمي",
  },
  {
    tag_id: 977,
    Name: "S&amp;P 500",
  },
  {
    tag_id: 978,
    Name: "ماكدونالدز",
  },
  {
    tag_id: 979,
    Name: "السوق الروسي",
  },
  {
    tag_id: 984,
    Name: "الاثيريوم",
  },
  {
    tag_id: 986,
    Name: "Fiverr",
  },
  {
    tag_id: 987,
    Name: "التحويلات المالية",
  },
  {
    tag_id: 988,
    Name: "المنصات الرقمية",
  },
  {
    tag_id: 989,
    Name: "3M",
  },
  {
    tag_id: 990,
    Name: "أسهم شركة 3M",
  },
  {
    tag_id: 991,
    Name: "شركة 3M",
  },
  {
    tag_id: 992,
    Name: "تداول الأسهم",
  },
  {
    tag_id: 993,
    Name: "المؤشرات في آسيا",
  },
  {
    tag_id: 994,
    Name: "مبدأ باريتو",
  },
  {
    tag_id: 995,
    Name: "الميزانية",
  },
  {
    tag_id: 996,
    Name: "Lenovo",
  },
  {
    tag_id: 997,
    Name: "T-Mobile",
  },
  {
    tag_id: 998,
    Name: "AT&amp;T",
  },
  {
    tag_id: 999,
    Name: "Twitter و Amazon",
  },
  {
    tag_id: 1000,
    Name: "سنابشات",
  },
  {
    tag_id: 1001,
    Name: "Snapchat",
  },
  {
    tag_id: 1002,
    Name: "Disney+",
  },
  {
    tag_id: 1003,
    Name: "شيبا",
  },
  {
    tag_id: 1004,
    Name: "عملة مشفرة",
  },
  {
    tag_id: 1005,
    Name: "سوق العملات المشفرة",
  },
  {
    tag_id: 1006,
    Name: "السيولة",
  },
  {
    tag_id: 1007,
    Name: "السعر",
  },
  {
    tag_id: 1009,
    Name: "الاستثمار",
  },
  {
    tag_id: 1010,
    Name: "تقلبات السوق",
  },
  {
    tag_id: 1011,
    Name: "سوق الاسهم",
  },
  {
    tag_id: 1012,
    Name: "الحرب الروسية الأوكرانية",
  },
  {
    tag_id: 1016,
    Name: "الغزو الروسي",
  },
  {
    tag_id: 1017,
    Name: "أوكرانيا",
  },
  {
    tag_id: 1018,
    Name: "الغزو الروسي لأوكرانيا",
  },
  {
    tag_id: 1024,
    Name: "روسيا",
  },
  {
    tag_id: 1025,
    Name: "عقوبات",
  },
  {
    tag_id: 1026,
    Name: "عقوبات جديدة",
  },
  {
    tag_id: 1027,
    Name: "أداء الذهب",
  },
  {
    tag_id: 1028,
    Name: "سوق العملات",
  },
  {
    tag_id: 1029,
    Name: "تطورات الأسواق",
  },
  {
    tag_id: 1030,
    Name: "الاتحاد الأوروبي",
  },
  {
    tag_id: 1031,
    Name: "أسهم أرامكو",
  },
  {
    tag_id: 1037,
    Name: "السوق الأمريكية",
  },
  {
    tag_id: 1038,
    Name: "شركة تيسلا",
  },
  {
    tag_id: 1039,
    Name: "سوق روسيا",
  },
  {
    tag_id: 1040,
    Name: "الأسهم الأمريكية تتراجع",
  },
  {
    tag_id: 1041,
    Name: "عملة البيتكوين",
  },
  {
    tag_id: 1042,
    Name: "التنوع المفرط",
  },
  {
    tag_id: 1043,
    Name: "الاستثمارات",
  },
  {
    tag_id: 1044,
    Name: "محفظة",
  },
  {
    tag_id: 1045,
    Name: "الصناديق",
  },
  {
    tag_id: 1046,
    Name: "الذكاء الاصطناعي",
  },
  {
    tag_id: 1047,
    Name: "Twitter",
  },
  {
    tag_id: 1048,
    Name: "تطبيق",
  },
  {
    tag_id: 1049,
    Name: "Waymo",
  },
  {
    tag_id: 1050,
    Name: "Geely",
  },
  {
    tag_id: 1051,
    Name: "IOS",
  },
  {
    tag_id: 1052,
    Name: "Tumblr",
  },
  {
    tag_id: 1053,
    Name: "نظام تشغيل",
  },
  {
    tag_id: 1054,
    Name: "نظام تشغيل iOS",
  },
  {
    tag_id: 1055,
    Name: "فولكسفاغن",
  },
  {
    tag_id: 1056,
    Name: "شركة",
  },
  {
    tag_id: 1057,
    Name: "الخطوط الجوية الأمريكية",
  },
  {
    tag_id: 1058,
    Name: "American Airlines",
  },
  {
    tag_id: 1059,
    Name: "رنامج تشغيل iOS.",
  },
  {
    tag_id: 1060,
    Name: "رنامج تشغيل.",
  },
  {
    tag_id: 1061,
    Name: "برنامج تشغيل iOS",
  },
  {
    tag_id: 1062,
    Name: "برنامج تشغيل",
  },
  {
    tag_id: 1063,
    Name: "الفضة",
  },
  {
    tag_id: 1064,
    Name: "شيفرون",
  },
  {
    tag_id: 1065,
    Name: "شل",
  },
  {
    tag_id: 1066,
    Name: "توتال إنرجيز",
  },
  {
    tag_id: 1067,
    Name: "مصير البيتكوين",
  },
  {
    tag_id: 1068,
    Name: "استراتيجيات_التداول",
  },
  {
    tag_id: 1069,
    Name: "Silver",
  },
  {
    tag_id: 1070,
    Name: "Russia",
  },
  {
    tag_id: 1076,
    Name: "صناعة السيارات",
  },
  {
    tag_id: 1077,
    Name: "شركة صناعة السيارات",
  },
  {
    tag_id: 1078,
    Name: "TWITCH",
  },
  {
    tag_id: 1080,
    Name: "الاسهم الاوروبية",
  },
  {
    tag_id: 1081,
    Name: "المدخرات",
  },
  {
    tag_id: 1082,
    Name: "سوني",
  },
  {
    tag_id: 1083,
    Name: "مايكرزسزفت",
  },
  {
    tag_id: 1084,
    Name: "منصات ميتا",
  },
  {
    tag_id: 1085,
    Name: "Matterport",
  },
  {
    tag_id: 1086,
    Name: "يونتي سوفت وير",
  },
  {
    tag_id: 1087,
    Name: "European stock markets",
  },
  {
    tag_id: 1089,
    Name: "الاقتصاد الروسي",
  },
  {
    tag_id: 1091,
    Name: "محفظة رقمية",
  },
  {
    tag_id: 1092,
    Name: "البورصات الخليجية",
  },
  {
    tag_id: 1093,
    Name: "بيست باي",
  },
  {
    tag_id: 1094,
    Name: "خدمات البث",
  },
  {
    tag_id: 1095,
    Name: "كارنيفال كوربورايشن",
  },
  {
    tag_id: 1096,
    Name: "رويال كاريبيان",
  },
  {
    tag_id: 1097,
    Name: "spx500",
  },
  {
    tag_id: 1098,
    Name: "تداول_اون_لاين",
  },
  {
    tag_id: 1104,
    Name: "Japan's Stock Exchange",
  },
  {
    tag_id: 1105,
    Name: "Wall Strret",
  },
  {
    tag_id: 1108,
    Name: "البلاديوم",
  },
  {
    tag_id: 1110,
    Name: "الجنيه_الإسترليني",
  },
  {
    tag_id: 1111,
    Name: "الدولار_الاسترالي",
  },
  {
    tag_id: 1112,
    Name: "أوروبا",
  },
  {
    tag_id: 1113,
    Name: "السرطان",
  },
  {
    tag_id: 1114,
    Name: "بلاك روك",
  },
  {
    tag_id: 1115,
    Name: "ماكدونالز",
  },
  {
    tag_id: 1116,
    Name: "سوبيفي",
  },
  {
    tag_id: 1117,
    Name: "باتمان",
  },
  {
    tag_id: 1118,
    Name: "امريكان اكسبريس",
  },
  {
    tag_id: 1120,
    Name: "أورورا",
  },
  {
    tag_id: 1122,
    Name: "النقل_الجوي",
  },
  {
    tag_id: 1123,
    Name: "نسخ المتداول",
  },
  {
    tag_id: 1124,
    Name: "نسخ المتداولين",
  },
  {
    tag_id: 1125,
    Name: "تداول اجتماعي",
  },
  {
    tag_id: 1126,
    Name: "حقيقة الحجز على Airbnb لدعم الأوكرانيين",
  },
  {
    tag_id: 1127,
    Name: "أرامكو ترفع الأسعار",
  },
  {
    tag_id: 1128,
    Name: "النقل الجوي",
  },
  {
    tag_id: 1129,
    Name: "خدمات النقل الجوي",
  },
  {
    tag_id: 1130,
    Name: "Citigroup",
  },
  {
    tag_id: 1131,
    Name: "سيتي جروب",
  },
  {
    tag_id: 1132,
    Name: "بورصة نيويورك",
  },
  {
    tag_id: 1133,
    Name: "استثمار وارن بافيت",
  },
  {
    tag_id: 1134,
    Name: "وارن بافيت",
  },
  {
    tag_id: 1138,
    Name: "gold",
  },
  {
    tag_id: 1139,
    Name: "كيفية التداول في ايفست",
  },
  {
    tag_id: 1140,
    Name: "كيفية التداول",
  },
  {
    tag_id: 1141,
    Name: "التداول في ايفست",
  },
  {
    tag_id: 1142,
    Name: "تويتر",
  },
  {
    tag_id: 1143,
    Name: "إيلون ماسك",
  },
  {
    tag_id: 1144,
    Name: "تحسينات كبيرة على تويتر",
  },
  {
    tag_id: 1145,
    Name: "توفير السيولة",
  },
  {
    tag_id: 1147,
    Name: "طاقة متجددة",
  },
  {
    tag_id: 1148,
    Name: "سهم شركة BlackBerry",
  },
  {
    tag_id: 1149,
    Name: "البنك الدولي",
  },
  {
    tag_id: 1150,
    Name: "صناعات ثقيلة",
  },
  {
    tag_id: 1151,
    Name: "سهم تويتر",
  },
  {
    tag_id: 1153,
    Name: "الموازنة الأمريكية",
  },
  {
    tag_id: 1154,
    Name: "دومينوز بيتزا غروب",
  },
  {
    tag_id: 1155,
    Name: "اسهم الماريجوانا",
  },
  {
    tag_id: 1158,
    Name: "Currencies",
  },
  {
    tag_id: 1159,
    Name: "أسهم شركة Coupang",
  },
  {
    tag_id: 1160,
    Name: "نتفليكس",
  },
  {
    tag_id: 1165,
    Name: "دوجيكوين",
  }];
  const enTags=[
  { tag_id: 59, Name: "commodity trading" },
  { tag_id: 60, Name: "Stock trading" },
  { tag_id: 61, Name: "News" },
  { tag_id: 62, Name: "OPEC meeting" },
  { tag_id: 63, Name: "Stock News" },
  { tag_id: 64, Name: "2020 Stocks News" },
  { tag_id: 65, Name: "Oil News" },
  { tag_id: 66, Name: "Gold News" },
  { tag_id: 67, Name: "Stock Market News" },
  { tag_id: 68, Name: "Oil Trading" },
  { tag_id: 69, Name: "US stimulus package" },
  { tag_id: 70, Name: "Brexit News" },
  { tag_id: 71, Name: "News Stimulus Package" },
  { tag_id: 72, Name: "UK EU DEAL" },
  { tag_id: 73, Name: "Oil Reduces News" },
  { tag_id: 74, Name: "Pound News" },
  { tag_id: 75, Name: "Euro News" },
  { tag_id: 76, Name: "Trump threatens" },
  { tag_id: 77, Name: "Gold Raise" },
  { tag_id: 78, Name: "Stock Market" },
  { tag_id: 79, Name: "Gold Stock" },
  { tag_id: 80, Name: "USD Stock News" },
  { tag_id: 81, Name: "Gold Stock News" },
  { tag_id: 82, Name: "Oil Stock News" },
  { tag_id: 84, Name: "Market News" },
  { tag_id: 100, Name: "Trading News" },
  { tag_id: 155, Name: "Oil is trying to resist" },
  { tag_id: 156, Name: "Goldman Sachs" },
  { tag_id: 157, Name: "American and Asian markets" },
  { tag_id: 158, Name: "Positive results" },
  { tag_id: 170, Name: "Oil rises for the fourth consecutive session" },
  { tag_id: 171, Name: "Oil rises" },
  { tag_id: 179, Name: "Hurricane Ida supports crude" },
  { tag_id: 189, Name: "Oil falling" },
  { tag_id: 190, Name: "Oil declines slightly" },
  { tag_id: 191, Name: "European market positive" },
  { tag_id: 197, Name: "Oil" },
  { tag_id: 198, Name: "gold" },
  { tag_id: 199, Name: "positive trading" },
  { tag_id: 200, Name: "Wall Street and Asia" },
  { tag_id: 204, Name: "US Oil inventories" },
  { tag_id: 205, Name: "Oil production" },
  { tag_id: 206, Name: "Oil companies" },
  { tag_id: 207, Name: "US employment figures" },
  { tag_id: 208, Name: "dollar's decline" },
  { tag_id: 214, Name: "Disappointing data" },
  { tag_id: 215, Name: "Chinese data" },
  { tag_id: 216, Name: "American data" },
  { tag_id: 217, Name: "expectations for gold" },
  { tag_id: 220, Name: "big leap in aluminum" },
  { tag_id: 221, Name: "trading in China" },
  { tag_id: 222, Name: "trading in United States" },
  { tag_id: 228, Name: "Positive reports from China" },
  { tag_id: 229, Name: "Nikkei goes beyond" },
  { tag_id: 230, Name: "Gold is declining" },
  { tag_id: 241, Name: "Oil prices rise" },
  { tag_id: 242, Name: "Ida hurricane" },
  { tag_id: 243, Name: "Mexican gulf" },
  { tag_id: 244, Name: "Oil prices for today" },
  { tag_id: 245, Name: "Nasdaq" },
  { tag_id: 246, Name: "Wall Street" },
  { tag_id: 247, Name: "decline in Europ" },
  { tag_id: 248, Name: "decline in Europe" },
  { tag_id: 251, Name: "The Federal Reserve" },
  { tag_id: 252, Name: "slowdown in the growth" },
  { tag_id: 253, Name: "conomic activity" },
  { tag_id: 254, Name: "European Central Bank" },
  { tag_id: 259, Name: "US producer price growth" },
  { tag_id: 260, Name: "Oil gets a lot of support" },
  { tag_id: 261, Name: "highest rate since 2010" },
  { tag_id: 266, Name: "A positive start in Asian markets" },
  { tag_id: 267, Name: "oil posts new gains" },
  { tag_id: 268, Name: "major exchanges" },
  { tag_id: 271, Name: "Apple stock" },
  { tag_id: 272, Name: "attention" },
  { tag_id: 273, Name: "oil and gold" },
  { tag_id: 274, Name: "Market participants" },
  { tag_id: 275, Name: "significant support" },
  { tag_id: 283, Name: "Wall Street and Asian stock" },
  { tag_id: 284, Name: "rebound for oil and gold" },
  { tag_id: 287, Name: "Rising industrial" },
  { tag_id: 288, Name: "production in China" },
  { tag_id: 289, Name: "Oil is consistent" },
  { tag_id: 292, Name: "Fed meeting" },
  { tag_id: 293, Name: "oil gains" },
  { tag_id: 294, Name: "Federal Reserve meeting" },
  { tag_id: 297, Name: "Rising prices" },
  { tag_id: 298, Name: "Russian gas" },
  { tag_id: 299, Name: "oil is falling" },
  { tag_id: 317, Name: "Federal Reserve" },
  { tag_id: 318, Name: "jump in the oil" },
  { tag_id: 319, Name: "stock markets" },
  { tag_id: 322, Name: "Evergrand's problems" },
  { tag_id: 323, Name: "Evergrand" },
  { tag_id: 328, Name: "Evergrande" },
  { tag_id: 329, Name: "Gold rises" },
  { tag_id: 340, Name: "Brent" },
  { tag_id: 341, Name: "markets" },
  { tag_id: 342, Name: "Evergrande crisis" },
  { tag_id: 343, Name: "Oil prices" },
  { tag_id: 354, Name: "Japan" },
  { tag_id: 355, Name: "Chinese industry" },
  { tag_id: 356, Name: "telsa" },
  { tag_id: 357, Name: "stocks" },
  { tag_id: 358, Name: "asian stock" },
  { tag_id: 359, Name: "European stock" },
  { tag_id: 362, Name: "asian stocks" },
  { tag_id: 365, Name: "Facebook" },
  { tag_id: 366, Name: "social media" },
  { tag_id: 370, Name: "opec" },
  { tag_id: 371, Name: "oil inventories" },
  { tag_id: 372, Name: "USA" },
  { tag_id: 373, Name: "US stocks" },
  { tag_id: 376, Name: "bitcoin" },
  { tag_id: 382, Name: "Asian exchanges" },
  { tag_id: 383, Name: "US crude" },
  { tag_id: 384, Name: "US stock market" },
  { tag_id: 386, Name: "US stock" },
  { tag_id: 391, Name: "chinese markets" },
  { tag_id: 394, Name: "global energy crisis" },
  { tag_id: 395, Name: "Crude oil" },
  { tag_id: 398, Name: "Wall Street indices" },
  { tag_id: 401, Name: "Asian indices" },
  { tag_id: 402, Name: "US stock indices" },
  { tag_id: 406, Name: "Asian stock markets" },
  { tag_id: 407, Name: "Chinese indices" },
  { tag_id: 408, Name: "American companies" },
  { tag_id: 411, Name: "Calm positive trading in Asia" },
  { tag_id: 416, Name: "Metaverse" },
  { tag_id: 417, Name: "Mark Zuckerberg" },
  { tag_id: 418, Name: "Global stock" },
  { tag_id: 423, Name: "Apple" },
  { tag_id: 424, Name: "Tesla" },
  { tag_id: 426, Name: "US indices" },
  { tag_id: 427, Name: "Nikkei" },
  { tag_id: 430, Name: "ADNOC" },
  { tag_id: 431, Name: "U.S crude stockpiles" },
  { tag_id: 432, Name: "Google's Alphabet" },
  { tag_id: 434, Name: "Tokyo Stock Exchange" },
  { tag_id: 435, Name: "Japanese stock exchange" },
  { tag_id: 438, Name: "United States" },
  { tag_id: 439, Name: "Eurozone" },
  { tag_id: 442, Name: "Shanghai" },
  { tag_id: 443, Name: "Gas" },
  { tag_id: 445, Name: "Negative dynamics" },
  { tag_id: 449, Name: "Russia’s oil" },
  { tag_id: 452, Name: "Positive movements" },
  { tag_id: 455, Name: "European stocks" },
  { tag_id: 457, Name: "Asia" },
  { tag_id: 458, Name: "oil price" },
  { tag_id: 459, Name: "Saudi Arabia" },
  { tag_id: 460, Name: "American indicators win" },
  { tag_id: 461, Name: "Asian markets" },
  { tag_id: 465, Name: "West Texas Intermediate" },
  { tag_id: 466, Name: "oil stockpile" },
  { tag_id: 467, Name: "US inventories" },
  { tag_id: 474, Name: "Appl" },
  { tag_id: 475, Name: "APPLE INC" },
  { tag_id: 476, Name: "Lucid Group" },
  { tag_id: 477, Name: "Lucid" },
  { tag_id: 479, Name: "Oil market" },
  { tag_id: 480, Name: "Tes" },
  { tag_id: 481, Name: "Tesla cars" },
  { tag_id: 485, Name: "Aplle inc" },
  { tag_id: 488, Name: "Google" },
  { tag_id: 490, Name: "Aramso" },
  { tag_id: 491, Name: "KSA" },
  { tag_id: 494, Name: "HP inc" },
  { tag_id: 495, Name: "HP" },
  { tag_id: 498, Name: "Amazon" },
  { tag_id: 499, Name: "Metro" },
  { tag_id: 503, Name: "General Motors" },
  { tag_id: 504, Name: "GM" },
  { tag_id: 507, Name: "Gamestop" },
  { tag_id: 510, Name: "SalesForce" },
  { tag_id: 514, Name: "COSTCO" },
  { tag_id: 517, Name: "FedEx" },
  { tag_id: 521, Name: "world's markets" },
  { tag_id: 522, Name: "European markets" },
  { tag_id: 526, Name: "Inflation" },
  { tag_id: 527, Name: "Commodity" },
  { tag_id: 528, Name: "costs ascend" },
  { tag_id: 533, Name: "coffee" },
  { tag_id: 534, Name: "coffee prices" },
  { tag_id: 535, Name: "distension" },
  { tag_id: 536, Name: "oil orice" },
  { tag_id: 537, Name: "oil inventory" },
  { tag_id: 540, Name: "Nike" },
  { tag_id: 545, Name: "Aluminum" },
  { tag_id: 546, Name: "copper" },
  { tag_id: 547, Name: "nickel" },
  { tag_id: 548, Name: "China’s indices" },
  { tag_id: 552, Name: "Biotech" },
  { tag_id: 553, Name: "Pfizer" },
  { tag_id: 554, Name: "Johnson &amp; Johnson" },
  { tag_id: 558, Name: "Omicron" },
  { tag_id: 559, Name: "coronavirus" },
  { tag_id: 560, Name: "Airbnb" },
  { tag_id: 569, Name: "Global indices" },
  { tag_id: 570, Name: "MSFT" },
  { tag_id: 571, Name: "Microsoft" },
  { tag_id: 574, Name: "zoom stock" },
  { tag_id: 577, Name: "Disney+" },
  { tag_id: 578, Name: "Walt Disney" },
  { tag_id: 581, Name: "Dow Jones" },
  { tag_id: 582, Name: "Nvidia" },
  { tag_id: 583, Name: "Nvidia Corporation" },
  { tag_id: 603, Name: "PINS" },
  { tag_id: 604, Name: "Oli" },
  { tag_id: 605, Name: "Pinterest shares rebound" },
  { tag_id: 606, Name: "Pinterest" },
  { tag_id: 611, Name: "Paypal" },
  { tag_id: 612, Name: "stock" },
  { tag_id: 615, Name: "SPOT" },
  { tag_id: 616, Name: "spotify" },
  { tag_id: 621, Name: "Chinese stocks" },
  { tag_id: 625, Name: "Negative trading" },
  { tag_id: 629, Name: "Mixed trends" },
  { tag_id: 630, Name: "Market’s drivers" },
  { tag_id: 642, Name: "Red" },
  { tag_id: 643, Name: "You" },
  { tag_id: 644, Name: "google stock" },
  { tag_id: 645, Name: "You.com" },
  { tag_id: 654, Name: "Global markets" },
  { tag_id: 687, Name: "American stocks" },
  { tag_id: 690, Name: "oil sector" },
  { tag_id: 691, Name: "U.S. Oil stockpiles" },
  { tag_id: 693, Name: "Positive Dynamics" },
  { tag_id: 695, Name: "Gamestop stock" },
  { tag_id: 698, Name: "US inflation" },
  { tag_id: 699, Name: "Brent crude" },
  { tag_id: 700, Name: "Covid-19" },
  { tag_id: 706, Name: "partial shares" },
  { tag_id: 707, Name: "e-commerce" },
  { tag_id: 709, Name: "divided stock" },
  { tag_id: 710, Name: "Mixed trading" },
  { tag_id: 711, Name: "American market" },
  { tag_id: 714, Name: "DELTA AIR LINES" },
  { tag_id: 717, Name: "Advanced Micro Devices" },
  { tag_id: 718, Name: "AMD" },
  { tag_id: 721, Name: "Asian session" },
  { tag_id: 722, Name: "Standard &amp; Poor's" },
  { tag_id: 723, Name: "NVDA" },
  { tag_id: 736, Name: "visa stock" },
  { tag_id: 737, Name: "visa" },
  { tag_id: 738, Name: "Snap Chat" },
  { tag_id: 739, Name: "Snap" },
  { tag_id: 742, Name: "Meta" },
  { tag_id: 747, Name: "Alphabet" },
  { tag_id: 748, Name: "Tsla" },
  { tag_id: 757, Name: "metals" },
  { tag_id: 758, Name: "discovery" },
  { tag_id: 759, Name: "roku" },
  { tag_id: 760, Name: "Netflix" },
  { tag_id: 762, Name: "Crypto" },
  { tag_id: 763, Name: "Metverse" },
  { tag_id: 766, Name: "Nio" },
  { tag_id: 767, Name: "Generla Motors" },
  { tag_id: 768, Name: "Ford" },
  { tag_id: 769, Name: "electric vehicle" },
  { tag_id: 771, Name: "Toyota" },
  { tag_id: 772, Name: "U.S. crude oil" },
  { tag_id: 773, Name: "LCID" },
  { tag_id: 777, Name: "eranings" },
  { tag_id: 778, Name: "Black Berry" },
  { tag_id: 779, Name: "Canopy Growth" },
  { tag_id: 783, Name: "BioNTech" },
  { tag_id: 784, Name: "Moderna" },
  { tag_id: 790, Name: "cryptocurrency" },
  { tag_id: 791, Name: "Ethereum" },
  { tag_id: 792, Name: "Cardano" },
  { tag_id: 793, Name: "Red Zone" },
  { tag_id: 794, Name: "indices" },
  { tag_id: 796, Name: "Zoom" },
  { tag_id: 797, Name: "zm" },
  { tag_id: 800, Name: "European exchanges" },
  { tag_id: 801, Name: "stock indices" },
  { tag_id: 805, Name: "Zynga" },
  { tag_id: 806, Name: "Take-Two" },
  { tag_id: 807, Name: "EA" },
  { tag_id: 809, Name: "Electronic Arts" },
  { tag_id: 817, Name: "Asian Indicators" },
  { tag_id: 822, Name: "TSMC" },
  { tag_id: 823, Name: "Micron Technology" },
  { tag_id: 824, Name: "Intel" },
  { tag_id: 829, Name: "American Markets" },
  { tag_id: 832, Name: "ZSCALER" },
  { tag_id: 833, Name: "Cisco Systems" },
  { tag_id: 842, Name: "prices" },
  { tag_id: 843, Name: "Autodesk" },
  { tag_id: 844, Name: "invest" },
  { tag_id: 845, Name: "Alibaba" },
  { tag_id: 846, Name: "Meta Platforms" },
  { tag_id: 847, Name: "Adobe" },
  { tag_id: 854, Name: "Asian stock exchanges" },
  { tag_id: 859, Name: "Lemonade" },
  { tag_id: 860, Name: "Twilio" },
  { tag_id: 863, Name: "United States stock" },
  { tag_id: 864, Name: "Nasdaq composite" },
  { tag_id: 867, Name: "stocks market" },
  { tag_id: 869, Name: "Amazom" },
  { tag_id: 873, Name: "Bank of America" },
  { tag_id: 879, Name: "US economy" },
  { tag_id: 880, Name: "New York Mercantile Exchange" },
  { tag_id: 883, Name: "Profits" },
  { tag_id: 885, Name: "crude stockpiles" },
  { tag_id: 887, Name: "Gazprom" },
  { tag_id: 897, Name: "pay pal" },
  { tag_id: 898, Name: "Buy" },
  { tag_id: 901, Name: "market value" },
  { tag_id: 902, Name: "interest" },
  { tag_id: 911, Name: "earnings" },
  { tag_id: 912, Name: "Peloton" },
  { tag_id: 915, Name: "dollar" },
  { tag_id: 916, Name: "Mixed dynamics" },
  { tag_id: 920, Name: "iPhone" },
  { tag_id: 923, Name: "different dynamics" },
  { tag_id: 925, Name: "oil situation" },
  { tag_id: 927, Name: "euro" },
  { tag_id: 928, Name: "shares of Uber" },
  { tag_id: 931, Name: "Coca Cola" },
  { tag_id: 932, Name: "American Express" },
  { tag_id: 933, Name: "revenue" },
  { tag_id: 934, Name: "waal Street" },
  { tag_id: 941, Name: "European indices" },
  { tag_id: 943, Name: "shopify" },
  { tag_id: 944, Name: "Mastercard" },
  { tag_id: 966, Name: "American exchanges" },
  { tag_id: 970, Name: "American indices" },
  { tag_id: 973, Name: "Buy Stocks" },
  { tag_id: 980, Name: "Amzaon" },
  { tag_id: 981, Name: "stpcks" },
  { tag_id: 982, Name: "McDonald's" },
  { tag_id: 983, Name: "S&amp;P 500" },
  { tag_id: 985, Name: "Russian market" },
  { tag_id: 1008, Name: "indices in Asia" },
  { tag_id: 1013, Name: "Oil jumps over $100" },
  { tag_id: 1014, Name: "Russian-Ukrainian situation" },
  { tag_id: 1015, Name: "US oil" },
  { tag_id: 1019, Name: "Oil falls" },
  { tag_id: 1020, Name: "Gold is falling" },
  { tag_id: 1021, Name: "stock markets rebound" },
  { tag_id: 1022, Name: "The Russian invasion" },
  { tag_id: 1023, Name: "Ukraine" },
  { tag_id: 1032, Name: "New sanctions" },
  { tag_id: 1033, Name: "against Russia" },
  { tag_id: 1034, Name: "Russian-Ukrainian crisis" },
  { tag_id: 1035, Name: "Gold performance" },
  { tag_id: 1036, Name: "Currency market" },
  { tag_id: 1071, Name: "Silver" },
  { tag_id: 1072, Name: "Russia" },
  { tag_id: 1073, Name: "Chevron" },
  { tag_id: 1074, Name: "Total Energies" },
  { tag_id: 1075, Name: "Shell" },
  { tag_id: 1079, Name: "United States stock indices" },
  { tag_id: 1088, Name: "European stock markets" },
  { tag_id: 1090, Name: "Russian economy" },
  { tag_id: 1099, Name: "Aramco" },
  { tag_id: 1100, Name: "Russian oil" },
  { tag_id: 1101, Name: "Gulf Stock Exchanges" },
  { tag_id: 1102, Name: "Carnival Corp" },
  { tag_id: 1103, Name: "Royal Caribbean Cruises" },
  { tag_id: 1106, Name: "Japan's Stock Exchange" },
  { tag_id: 1107, Name: "Wall Strret" },
  { tag_id: 1109, Name: "Palladium" },
  { tag_id: 1119, Name: "أخبار النفط" },
  { tag_id: 1121, Name: "الأسهم الأمريكية" },
  { tag_id: 1135, Name: "أسعار النفط" },
  { tag_id: 1136, Name: "النفط" },
  { tag_id: 1137, Name: "oil updates" },
  { tag_id: 1146, Name: "elon musk" },
  { tag_id: 1152, Name: "WORLD BANK" },
  { tag_id: 1156, Name: "us budget" },
  { tag_id: 1157, Name: "Currencies" },
  { tag_id: 1161, Name: "test" },
  { tag_id: 1162, Name: "دوجيكوين" },
  { tag_id: 1163, Name: "ايلون ماسك" },
  { tag_id: 1164, Name: "تويتر" },
  { tag_id: 1166, Name: "Russian stock exchange" },
];



// module.exports = function getTag(name , lang){
//   console.log(lang)
//     if(lang=='en'){
//       console.log('in En section')
//         return (enTags.find(tag => tag.Name === name).tag_id)
//     }else if(lang=='ar'){
//       console.log('in ar section')
//         return (tags.find(tag => tag.Name === name).tag_id)
//     }
// };

exports.arabicTags=tags;
exports.englishTags=enTags;