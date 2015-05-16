var verb_irregulars = (function() {
  var types = [
    'infinitive',
    'gerund',
    'past',
    'present',
    'doer',
    'future'
  ]

  //list of verb irregular verb forms, compacted to save space. ('_' -> infinitive )
  var compact = [
    [
      "arise",
      "arising",
      "arose",
      "_s",
      "_r"
    ],
    [
      "babysit",
      "_ting",
      "babysat",
      "_s",
      "_ter"
    ],
    [
      "be",
      "_ing",
      "was",
      "is",
      ""
    ],
    [
      "beat",
      "_ing",
      "_",
      "_s",
      "_er"
    ],
    [
      "become",
      "becoming",
      "became",
      "_s",
      "_r"
    ],
    [
      "bend",
      "_ing",
      "bent",
      "_s",
      "_er"
    ],
    [
      "begin",
      "_ning",
      "began",
      "_s",
      "_ner"
    ],
    [
      "bet",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "bind",
      "_ing",
      "bound",
      "_s",
      "_er"
    ],
    [
      "bite",
      "biting",
      "bit",
      "_s",
      "_r"
    ],
    [
      "bleed",
      "_ing",
      "bled",
      "_s",
      "_er"
    ],
    [
      "blow",
      "_ing",
      "blew",
      "_s",
      "_er"
    ],
    [
      "break",
      "_ing",
      "broke",
      "_s",
      "_er"
    ],
    [
      "breed",
      "_ing",
      "bred",
      "_s",
      "_er"
    ],
    [
      "bring",
      "_ing",
      "brought",
      "_s",
      "_er"
    ],
    [
      "broadcast",
      "_ing",
      "_",
      "_s",
      "_er"
    ],
    [
      "build",
      "_ing",
      "built",
      "_s",
      "_er"
    ],
    [
      "buy",
      "_ing",
      "bought",
      "_s",
      "_er"
    ],
    [
      "catch",
      "_ing",
      "caught",
      "_es",
      "_er"
    ],
    [
      "choose",
      "choosing",
      "chose",
      "_s",
      "_r"
    ],
    [
      "come",
      "coming",
      "came",
      "_s",
      "_r"
    ],
    [
      "cost",
      "_ing",
      "_",
      "_s",
      "_er"
    ],
    [
      "cut",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "deal",
      "_ing",
      "_t",
      "_s",
      "_er"
    ],
    [
      "dig",
      "_ging",
      "dug",
      "_s",
      "_ger"
    ],
    [
      "do",
      "_ing",
      "did",
      "_es",
      "_er"
    ],
    [
      "draw",
      "_ing",
      "drew",
      "_s",
      "_er"
    ],
    [
      "drink",
      "_ing",
      "drank",
      "_s",
      "_er"
    ],
    [
      "drive",
      "driving",
      "drove",
      "_s",
      "_r"
    ],
    [
      "eat",
      "_ing",
      "ate",
      "_s",
      "_er"
    ],
    [
      "fall",
      "_ing",
      "fell",
      "_s",
      "_er"
    ],
    [
      "feed",
      "_ing",
      "fed",
      "_s",
      "_er"
    ],
    [
      "feel",
      "_ing",
      "felt",
      "_s",
      "_er"
    ],
    [
      "fight",
      "_ing",
      "fought",
      "_s",
      "_er"
    ],
    [
      "find",
      "_ing",
      "found",
      "_s",
      "_er"
    ],
    [
      "fly",
      "_ing",
      "flew",
      "_s",
      "flier"
    ],
    [
      "forbid",
      "_ing",
      "forbade",
      "_s",

    ],
    [
      "forget",
      "_ing",
      "forgot",
      "_s",
      "_er"
    ],
    [
      "forgive",
      "forgiving",
      "forgave",
      "_s",
      "_r"
    ],
    [
      "freeze",
      "freezing",
      "froze",
      "_s",
      "_r"
    ],
    [
      "get",
      "_ting",
      "got",
      "_s",
      "_ter"
    ],
    [
      "give",
      "giving",
      "gave",
      "_s",
      "_r"
    ],
    [
      "go",
      "_ing",
      "went",
      "_es",
      "_er"
    ],
    [
      "grow",
      "_ing",
      "grew",
      "_s",
      "_er"
    ],
    [
      "hang",
      "_ing",
      "hung",
      "_s",
      "_er"
    ],
    [
      "have",
      "having",
      "had",
      "has",

    ],
    [
      "hear",
      "_ing",
      "_d",
      "_s",
      "_er"
    ],
    [
      "hide",
      "hiding",
      "hid",
      "_s",
      "_r"
    ],
    [
      "hit",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "hold",
      "_ing",
      "held",
      "_s",
      "_er"
    ],
    [
      "hurt",
      "_ing",
      "_",
      "_s",
      "_er"
    ],
    [
      "know",
      "_ing",
      "knew",
      "_s",
      "_er"
    ],
    [
      "relay",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "lay",
      "_ing",
      "laid",
      "_s",
      "_er"
    ],
    [
      "lead",
      "_ing",
      "led",
      "_s",
      "_er"
    ],
    [
      "leave",
      "leaving",
      "left",
      "_s",
      "_r"
    ],
    [
      "lend",
      "_ing",
      "lent",
      "_s",
      "_er"
    ],
    [
      "let",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "lie",
      "lying",
      "lay",
      "_s",
      "_r"
    ],
    [
      "light",
      "_ing",
      "lit",
      "_s",
      "_er"
    ],
    [
      "lose",
      "losing",
      "lost",
      "_s",
      "_r"
    ],
    [
      "make",
      "making",
      "made",
      "_s",
      "_r"
    ],
    [
      "mean",
      "_ing",
      "_t",
      "_s",
      "_er"
    ],
    [
      "meet",
      "_ing",
      "met",
      "_s",
      "_er"
    ],
    [
      "pay",
      "_ing",
      "paid",
      "_s",
      "_er"
    ],
    [
      "put",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "quit",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "read",
      "_ing",
      "_",
      "_s",
      "_er"
    ],
    [
      "ride",
      "riding",
      "rode",
      "_s",
      "_r"
    ],
    [
      "ring",
      "_ing",
      "rang",
      "_s",
      "_er"
    ],
    [
      "rise",
      "rising",
      "rose",
      "_s",
      "_r"
    ],
    [
      "run",
      "_ning",
      "ran",
      "_s",
      "_ner"
    ],
    [
      "say",
      "_ing",
      "said",
      "_s",

    ],
    [
      "see",
      "_ing",
      "saw",
      "_s",
      "_r"
    ],
    [
      "sell",
      "_ing",
      "sold",
      "_s",
      "_er"
    ],
    [
      "send",
      "_ing",
      "sent",
      "_s",
      "_er"
    ],
    [
      "set",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "shake",
      "shaking",
      "shook",
      "_s",
      "_r"
    ],
    [
      "shine",
      "shining",
      "shone",
      "_s",
      "_r"
    ],
    [
      "shoot",
      "_ing",
      "shot",
      "_s",
      "_er"
    ],
    [
      "show",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "shut",
      "_ting",
      "_",
      "_s",
      "_ter"
    ],
    [
      "sing",
      "_ing",
      "sang",
      "_s",
      "_er"
    ],
    [
      "sink",
      "_ing",
      "sank",
      "_s",
      "_er"
    ],
    [
      "sit",
      "_ting",
      "sat",
      "_s",
      "_ter"
    ],
    [
      "slide",
      "sliding",
      "slid",
      "_s",
      "_r"
    ],
    [
      "speak",
      "_ing",
      "spoke",
      "_s",
      "_er"
    ],
    [
      "spend",
      "_ing",
      "spent",
      "_s",
      "_er"
    ],
    [
      "spin",
      "_ning",
      "spun",
      "_s",
      "_ner"
    ],
    [
      "spread",
      "_ing",
      "_",
      "_s",
      "_er"
    ],
    [
      "stand",
      "_ing",
      "stood",
      "_s",
      "_er"
    ],
    [
      "steal",
      "_ing",
      "stole",
      "_s",
      "_er"
    ],
    [
      "stick",
      "_ing",
      "stuck",
      "_s",
      "_er"
    ],
    [
      "sting",
      "_ing",
      "stung",
      "_s",
      "_er"
    ],
    [
      "strike",
      "striking",
      "struck",
      "_s",
      "_r"
    ],
    [
      "swear",
      "_ing",
      "swore",
      "_s",
      "_er"
    ],
    [
      "swim",
      "_ing",
      "swam",
      "_s",
      "_mer"
    ],
    [
      "swing",
      "_ing",
      "swung",
      "_s",
      "_er"
    ],
    [
      "take",
      "taking",
      "took",
      "_s",
      "_r"
    ],
    [
      "teach",
      "_ing",
      "taught",
      "_s",
      "_er"
    ],
    [
      "tear",
      "_ing",
      "tore",
      "_s",
      "_er"
    ],
    [
      "tell",
      "_ing",
      "told",
      "_s",
      "_er"
    ],
    [
      "think",
      "_ing",
      "thought",
      "_s",
      "_er"
    ],
    [
      "throw",
      "_ing",
      "threw",
      "_s",
      "_er"
    ],
    [
      "understand",
      "_ing",
      "understood",
      "_s",

    ],
    [
      "wake",
      "waking",
      "woke",
      "_s",
      "_r"
    ],
    [
      "wear",
      "_ing",
      "wore",
      "_s",
      "_er"
    ],
    [
      "win",
      "_ning",
      "won",
      "_s",
      "_ner"
    ],
    [
      "withdraw",
      "_ing",
      "withdrew",
      "_s",
      "_er"
    ],
    [
      "write",
      "writing",
      "wrote",
      "_s",
      "_r"
    ],
    [
      "tie",
      "tying",
      "_d",
      "_s",
      "_r"
    ],
    [
      "obey",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "ski",
      "_ing",
      "_ied",
      "_s",
      "_er"
    ],
    [
      "boil",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "miss",
      "_ing",
      "_ed",
      "_",
      "_er"
    ],
    [
      "act",
      "_ing",
      "_ed",
      "_s",
      "_or"
    ],
    [
      "compete",
      "competing",
      "_d",
      "_s",
      "competitor"
    ],
    [
      "being",
      "are",
      "were",
      "are",

    ],
    [
      "imply",
      "_ing",
      "implied",
      "implies",
      "implier"
    ],
    [
      "ice",
      "icing",
      "_d",
      "_s",
      "_r"
    ],
    [
      "develop",
      "_ing",
      "_",
      "_s",
      "_er"
    ],
    [
      "wait",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "aim",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "spill",
      "_ing",
      "spilt",
      "_s",
      "_er"
    ],
    [
      "drop",
      "_ping",
      "_ped",
      "_s",
      "_per"
    ],
    [
      "head",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "log",
      "_ging",
      "_ged",
      "_s",
      "_ger"
    ],
    [
      "rub",
      "_bing",
      "_bed",
      "_s",
      "_ber"
    ],
    [
      "smash",
      "_ing",
      "_ed",
      "_es",
      "_er"
    ],
    [
      "add",
      "_ing",
      "_ed",
      "_s",
      "_er"
    ],
    [
      "be",
      "am",
      "was",
      "am",
      ""
    ]
  ]
  //expand compact version out
  var main=compact.map(function(arr){
    var obj={}
    for(var i=0; i<arr.length; i++){
      obj[types[i]]=arr[i].replace(/_/, arr[0])
    }
    return obj
  })
  if (typeof module !== "undefined" && module.exports) {
    module.exports = main;
  }
  return main;
})();

// console.log(JSON.stringify(verb_irregulars, null, 2));
