(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//these are common word shortenings used in the lexicon and sentence segmentation methods
//there are all nouns, or at the least, belong beside one.
"use strict";
let honourifics = require("./honourifics") //stored seperately, for 'noun.is_person()'

let main = [
  //common abbreviations
  "arc", "al", "ave", "blvd", "cl", "ct", "cres", "exp", "rd", "st", "dist", "mt", "fy", "hwy", "pd", "pl", "plz", "tce", "llb", "md", "bl", "ma", "ba", "lit",
  //place main
  "ala", "ariz", "ark", "cal", "calif", "col", "colo", "conn", "del", "fed", "fla", "fl", "ga", "ida", "ind", "ia", "la", "kan", "kans", "ken", "ky", "la", "md", "mich", "minn", "mont", "neb", "nebr", "nev", "okla", "penna", "penn", "pa", "dak", "tenn", "tex", "ut", "vt", "va", "wash", "wis", "wisc", "wy", "wyo", "usafa", "alta", "ont", "que", "sask", "yuk",
  //org main
  "dept", "univ", "assn", "bros", "inc", "ltd", "co", "corp",
  //proper nouns with exclamation marks
  "yahoo", "joomla", "jeopardy"
]
//person titles like 'jr', (stored seperately)
main = main.concat(honourifics)

module.exports = main;

},{"./honourifics":2}],2:[function(require,module,exports){
//these are common person titles used in the lexicon and sentence segmentation methods
//they are also used to identify that a noun is a person
module.exports = [
  //honourifics
  "jr",
  "mr",
  "mrs",
  "ms",
  "dr",
  "prof",
  "sr",
  "sen",
  "corp",
  "rep",
  "gov",
  "atty",
  "supt",
  "det",
  "rev",
  "col",
  "gen",
  "lt",
  "cmdr",
  "adm",
  "capt",
  "sgt",
  "cpl",
  "maj",
  "miss",
  "misses",
  "mister",
  "sir",
  "esq",
  "mstr",
  "phd",
  "adj",
  "adv",
  "asst",
  "bldg",
  "brig",
  "comdr",
  "hon",
  "messrs",
  "mlle",
  "mme",
  "op",
  "ord",
  "pvt",
  "reps",
  "res",
  "sens",
  "sfc",
  "surg",
]

},{}],3:[function(require,module,exports){
//nouns with irregular plural/singular forms
//used in noun.inflect, and also in the lexicon.
//compressed with '_' to reduce some redundancy.
"use strict";
let main = [
  ["child", "_ren"],
  ["person", "people"],
  ["leaf", "leaves"],
  ["database", "_s"],
  ["quiz", "_zes"],
  ["child", "_ren"],
  ["stomach", "_s"],
  ["sex", "_es"],
  ["move", "_s"],
  ["shoe", "_s"],
  ["goose", "geese"],
  ["phenomenon", "phenomena"],
  ["barracks", "_"],
  ["deer", "_"],
  ["syllabus", "syllabi"],
  ["index", "indices"],
  ["appendix", "appendices"],
  ["criterion", "criteria"],
  ["man", "men"],
  ["sex", "_es"],
  ["rodeo", "_s"],
  ["epoch", "_s"],
  ["zero", "_s"],
  ["avocado", "_s"],
  ["halo", "_s"],
  ["tornado", "_s"],
  ["tuxedo", "_s"],
  ["sombrero", "_s"],
  ["addendum", "addenda"],
  ["alga", "_e"],
  ["alumna", "_e"],
  ["alumnus", "alumni"],
  ["bacillus", "bacilli"],
  ["cactus", "cacti"],
  ["beau", "_x"],
  ["château", "_x"],
  ["chateau", "_x"],
  ["tableau", "_x"],
  ["corpus", "corpora"],
  ["curriculum", "curricula"],
  ["echo", "_es"],
  ["embargo", "_es"],
  ["foot", "feet"],
  ["genus", "genera"],
  ["hippopotamus", "hippopotami"],
  ["larva", "_e"],
  ["libretto", "libretti"],
  ["loaf", "loaves"],
  ["matrix", "matrices"],
  ["memorandum", "memoranda"],
  ["mosquito", "_es"],
  ["opus", "opera"],
  ["ovum", "ova"],
  ["ox", "_en"],
  ["radius", "radii"],
  ["referendum", "referenda"],
  ["thief", "thieves"],
  ["tooth", "teeth"]
]

main = main.map(function(a) {
  a[1] = a[1].replace('_', a[0])
  return a
})

module.exports = main;

},{}],4:[function(require,module,exports){
//common nouns that have no plural form. These are suprisingly rare
//used in noun.inflect(), and added as nouns in lexicon
module.exports=[
    "aircraft",
    "bass",
    "bison",
    "fowl",
    "halibut",
    "moose",
    "salmon",
    "spacecraft",
    "tuna",
    "trout",
    "advice",
    "information",
    "knowledge",
    "trouble",
    "enjoyment",
    "fun",
    "recreation",
    "relaxation",
    "meat",
    "rice",
    "bread",
    "cake",
    "coffee",
    "ice",
    "water",
    "oil",
    "grass",
    "hair",
    "fruit",
    "wildlife",
    "equipment",
    "machinery",
    "furniture",
    "mail",
    "luggage",
    "jewelry",
    "clothing",
    "money",
    "mathematics",
    "economics",
    "physics",
    "civics",
    "ethics",
    "gymnastics",
    "mumps",
    "measles",
    "news",
    "tennis",
    "baggage",
    "currency",
    "soap",
    "toothpaste",
    "food",
    "sugar",
    "butter",
    "flour",
    "research",
    "leather",
    "wool",
    "wood",
    "coal",
    "weather",
    "homework",
    "cotton",
    "silk",
    "patience",
    "impatience",
    "vinegar",
    "art",
    "beef",
    "blood",
    "cash",
    "chaos",
    "cheese",
    "chewing",
    "conduct",
    "confusion",
    "education",
    "electricity",
    "entertainment",
    "fiction",
    "forgiveness",
    "gold",
    "gossip",
    "ground",
    "happiness",
    "history",
    "honey",
    "hospitality",
    "importance",
    "justice",
    "laughter",
    "leisure",
    "lightning",
    "literature",
    "luck",
    "melancholy",
    "milk",
    "mist",
    "music",
    "noise",
    "oxygen",
    "paper",
    "pay",
    "peace",
    "peanut",
    "pepper",
    "petrol",
    "plastic",
    "pork",
    "power",
    "pressure",
    "rain",
    "recognition",
    "sadness",
    "safety",
    "salt",
    "sand",
    "scenery",
    "shopping",
    "silver",
    "snow",
    "softness",
    "space",
    "speed",
    "steam",
    "sunshine",
    "tea",
    "thunder",
    "time",
    "traffic",
    "trousers",
    "violence",
    "warmth",
    "wine",
    "steel",
    "soccer",
    "hockey",
    "golf",
    "fish",
    "gum",
    "liquid",
    "series",
    "sheep",
    "species",
    "fahrenheit",
    "celcius",
    "kelvin",
    "hertz"
  ]

},{}],5:[function(require,module,exports){
'use strict'
exports.pluck = function(arr, str) {
  return arr.map(function(o) {
    return o[str]
  })
}

exports.flatten = function(arr) {
  let all = []
  arr.forEach(function(a) {
    all = all.concat(a)
  })
  return all
}

exports.compact = function(arr) {
  return arr.filter(function(a) {
    if (a === undefined || a === null) {
      return false
    }
    return true
  })
}

//string utilities
exports.endsWith = function(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

exports.titlecase = function(str) {
  if (!str) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

},{}],6:[function(require,module,exports){
'use strict'
let Text = require("./text/text.js")

//by abstracting Text, we allow multiple Text objects by the same user
let nlp = function(str) {
  return new Text(str)
}

module.exports = nlp

console.log(nlp("Hiii Dr. Nick!"))

},{"./text/text.js":39}],7:[function(require,module,exports){
'use strict'
let Term = require("../term/term.js")
let fns = require("../fns.js")
let tagger = require("./tagger.js")

//a sentence is an array of Term objects, along with their various methods
class Sentence {

  constructor(str) {
    this.str = str || "";
    let terms = str.split(" ")
    this.terms = terms.map(function(s, i) {
      let info = {
        index: i
      }
      return new Term(s, info)
    })
  }

  //Sentence methods:

  //the ending punctuation
  terminator() {
    let allowed = {
      ".": true,
      "!": true,
      "?": true
    }
    let char = this.str.slice(-1) || "";
    if (allowed[char]) {
      return char
    }
    return "."
  }

  //part-of-speech assign each term
  tag() {
    this.terms = tagger(this)
    return this.terms
  }

  //is it a question/statement
  sentence_type() {
    let char = this.terminator()
    let types = {
      "?": "interrogative",
      "!": "exclamative",
      ".": "declarative",
    }
    return types[char] || "declarative";
  }

  //map over Term methods
  normalized() {
    return fns.pluck(this.terms, 'normal').join(" ")
  }
  text() {
    return fns.pluck(this.terms, 'text').join(" ")
  }
}

// var s = new Sentence("john is cool")
// console.log(s.tag())

module.exports = Sentence

},{"../fns.js":5,"../term/term.js":26,"./tagger.js":8}],8:[function(require,module,exports){
//part-of-speech tagging
'use strict'
let Verb = require("../term/verb/verb.js")
let Noun = require("../term/noun/noun.js")
let Value = require("../term/value/value.js")
let Adverb = require("../term/adverb/adverb.js")
let Adjective = require("../term/adjective/adjective.js")

//swap the Term object with a proper Pos class
let assign = function(t, pos, reason) {
  let mapping = {
    "verb": Verb,
    "noun": Noun,
    "value": Value,
    "adverb": Adverb,
    "adjective": Adjective
  }
  if (mapping[pos] !== undefined) {
    t = new mapping[pos](t.text)
    t.reason = reason
  }
  return t
}


let tagger = function(s) {
  s.terms = s.terms.map(function(t) {
    if (t.normal === "is") {
      t = assign(t, "verb", "because")
    }
    return t
  })

  return s.terms
}

module.exports = tagger

},{"../term/adjective/adjective.js":9,"../term/adverb/adverb.js":15,"../term/noun/noun.js":22,"../term/value/value.js":29,"../term/verb/verb.js":36}],9:[function(require,module,exports){
'use strict'
var Term = require("../term.js")

var to_comparative = require("./to_comparative")
var to_superlative = require("./to_superlative")
var adj_to_adv = require("./to_adverb")
var adj_to_noun = require("./to_noun")

class Adjective extends Term {
  constructor(str) {
    super(str)
  }

  conjugate() {
    return {
      comparative: to_comparative(this.normal),
      superlative: to_superlative(this.normal),
      adverb: adj_to_adv(this.normal),
      noun: adj_to_noun(this.normal)
    }
  }

}

// let t = new Adjective("quick")
// console.log(t.conjugate())

module.exports = Adjective

},{"../term.js":26,"./to_adverb":11,"./to_comparative":12,"./to_noun":13,"./to_superlative":14}],10:[function(require,module,exports){
//these are adjectives that can become comparative + superlative with out "most/more"
//its a whitelist for conjugation
//this data is shared between comparative/superlative methods
module.exports= [
  "absurd",
  "aggressive",
  "alert",
  "alive",
  "awesome",
  "beautiful",
  "big",
  "bitter",
  "black",
  "blue",
  "bored",
  "boring",
  "brash",
  "brave",
  "brief",
  "bright",
  "broad",
  "brown",
  "calm",
  "charming",
  "cheap",
  "clean",
  "cold",
  "cool",
  "cruel",
  "cute",
  "damp",
  "deep",
  "dear",
  "dead",
  "dark",
  "dirty",
  "drunk",
  "dull",
  "eager",
  "efficient",
  "even",
  "faint",
  "fair",
  "fanc",
  "fast",
  "fat",
  "feeble",
  "few",
  "fierce",
  "fine",
  "flat",
  "forgetful",
  "frail",
  "full",
  "gentle",
  "glib",
  "great",
  "green",
  "gruesome",
  "handsome",
  "hard",
  "harsh",
  "high",
  "hollow",
  "hot",
  "impolite",
  "innocent",
  "keen",
  "kind",
  "lame",
  "lean",
  "light",
  "little",
  "loose",
  "long",
  "loud",
  "low",
  "lush",
  "macho",
  "mean",
  "meek",
  "mellow",
  "mundane",
  "near",
  "neat",
  "new",
  "nice",
  "normal",
  "odd",
  "old",
  "pale",
  "pink",
  "plain",
  "poor",
  "proud",
  "purple",
  "quick",
  "rare",
  "rapid",
  "red",
  "rich",
  "ripe",
  "rotten",
  "round",
  "rude",
  "sad",
  "safe",
  "scarce",
  "scared",
  "shallow",
  "sharp",
  "short",
  "shrill",
  "simple",
  "slim",
  "slow",
  "small",
  "smart",
  "smooth",
  "soft",
  "sore",
  "sour",
  "square",
  "stale",
  "steep",
  "stiff",
  "straight",
  "strange",
  "strong",
  "sweet",
  "swift",
  "tall",
  "tame",
  "tart",
  "tender",
  "tense",
  "thick",
  "thin",
  "tight",
  "tough",
  "vague",
  "vast",
  "vulgar",
  "warm",
  "weak",
  "wet",
  "white",
  "wide",
  "wild",
  "wise",
  "young",
  "yellow",
  "easy",
  "narrow",
  "late",
  "early",
  "soon",
  "close",
  "empty",
  "dry",
  "windy",
  "noisy",
  "thirsty",
  "hungry",
  "fresh",
  "quiet",
  "clear",
  "heavy",
  "happy",
  "funny",
  "lucky",
  "pretty",
  "important",
  "interesting",
  "attractive",
  "dangerous",
  "intellegent",
  "pure",
  "orange",
  "large",
  "firm",
  "grand",
  "formal",
  "raw",
  "weird",
  "glad",
  "mad",
  "strict",
  "tired",
  "solid",
  "extreme",
  "mature",
  "true",
  "free",
  "curly",
  "angry"
].reduce(function(h,s){
  h[s]=true
  return h
},{})

},{}],11:[function(require,module,exports){
//turn 'quick' into 'quickly'
'use strict'
let adj_to_adv = function(str) {
  let irregulars = {
    "idle": "idly",
    "public": "publicly",
    "vague": "vaguely",
    "day": "daily",
    "icy": "icily",
    "single": "singly",
    "female": "womanly",
    "male": "manly",
    "simple": "simply",
    "whole": "wholly",
    "special": "especially",
    "straight": "straight",
    "wrong": "wrong",
    "fast": "fast",
    "hard": "hard",
    "late": "late",
    "early": "early",
    "well": "well",
    "best": "best",
    "latter": "latter",
    "bad": "badly"
  }

  let dont = {
    "foreign": 1,
    "black": 1,
    "modern": 1,
    "next": 1,
    "difficult": 1,
    "degenerate": 1,
    "young": 1,
    "awake": 1,
    "back": 1,
    "blue": 1,
    "brown": 1,
    "orange": 1,
    "complex": 1,
    "cool": 1,
    "dirty": 1,
    "done": 1,
    "empty": 1,
    "fat": 1,
    "fertile": 1,
    "frozen": 1,
    "gold": 1,
    "grey": 1,
    "gray": 1,
    "green": 1,
    "medium": 1,
    "parallel": 1,
    "outdoor": 1,
    "unknown": 1,
    "undersized": 1,
    "used": 1,
    "welcome": 1,
    "yellow": 1,
    "white": 1,
    "fixed": 1,
    "mixed": 1,
    "super": 1,
    "guilty": 1,
    "tiny": 1,
    "able": 1,
    "unable": 1,
    "same": 1,
    "adult": 1
  }

  let transforms = [{
    reg: /al$/i,
    repl: 'ally'
  }, {
    reg: /ly$/i,
    repl: 'ly'
  }, {
    reg: /(.{3})y$/i,
    repl: '$1ily'
  }, {
    reg: /que$/i,
    repl: 'quely'
  }, {
    reg: /ue$/i,
    repl: 'uly'
  }, {
    reg: /ic$/i,
    repl: 'ically'
  }, {
    reg: /ble$/i,
    repl: 'bly'
  }, {
    reg: /l$/i,
    repl: 'ly'
  }]

  let not_matches = [
    /airs$/,
    /ll$/,
    /ee.$/,
    /ile$/
  ]

  if (dont[str]) {
    return null
  }
  if (irregulars[str]) {
    return irregulars[str]
  }
  if (str.length <= 3) {
    return null
  }
  for (let i = 0; i < not_matches.length; i++) {
    if (str.match(not_matches[i])) {
      return null
    }
  }
  for (let i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl)
    }
  }
  return str + 'ly'
}
// console.log(adj_to_adv('direct'))

module.exports = adj_to_adv;


},{}],12:[function(require,module,exports){
//turn 'quick' into 'quickly'
'use strict'
let convertables = require("./convertables");

let to_comparative = function(str) {
  let irregulars = {
    "grey": "greyer",
    "gray": "grayer",
    "green": "greener",
    "yellow": "yellower",
    "red": "redder",
    "good": "better",
    "well": "better",
    "bad": "worse",
    "sad": "sadder"
  }

  let dont = {
    "overweight": 1,
    "main": 1,
    "nearby": 1,
    "asleep": 1,
    "weekly": 1,
    "secret": 1,
    "certain": 1
  }

  let transforms = [{
    reg: /y$/i,
    repl: 'ier'
  }, {
    reg: /([aeiou])t$/i,
    repl: '$1tter'
  }, {
    reg: /([aeou])de$/i,
    repl: '$1der'
  }, {
    reg: /nge$/i,
    repl: 'nger'
  }]

  let matches = [
    /ght$/,
    /nge$/,
    /ough$/,
    /ain$/,
    /uel$/,
    /[au]ll$/,
    /ow$/,
    /old$/,
    /oud$/,
    /e[ae]p$/
  ]

  let not_matches = [
    /ary$/,
    /ous$/
  ]

  if (dont.hasOwnProperty(str)) {
    return null
  }

  for (let i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl)
    }
  }

  if (convertables.hasOwnProperty(str)) {
    if (str.match(/e$/)) {
      return str + "r"
    }
    return str + "er"
  }

  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str]
  }

  for (let i = 0; i < not_matches.length; i++) {
    if (str.match(not_matches[i])) {
      return "more " + str
    }
  }

  for (let i = 0; i < matches.length; i++) {
    if (str.match(matches[i])) {
      return str + "er"
    }
  }
  return "more " + str
}

// console.log(to_comparative("great"))

module.exports = to_comparative;

},{"./convertables":10}],13:[function(require,module,exports){
//convert cute to cuteness
'use strict'
let to_noun = function(w) {
  let irregulars = {
    "clean": "cleanliness",
    "naivety": "naivety"
  };
  if (!w) {
    return "";
  }
  if (irregulars.hasOwnProperty(w)) {
    return irregulars[w];
  }
  if (w.match(" ")) {
    return w;
  }
  if (w.match(/w$/)) {
    return w;
  }
  let transforms = [{
    "reg": /y$/,
    "repl": 'iness'
  }, {
    "reg": /le$/,
    "repl": 'ility'
  }, {
    "reg": /ial$/,
    "repl": 'y'
  }, {
    "reg": /al$/,
    "repl": 'ality'
  }, {
    "reg": /ting$/,
    "repl": 'ting'
  }, {
    "reg": /ring$/,
    "repl": 'ring'
  }, {
    "reg": /bing$/,
    "repl": 'bingness'
  }, {
    "reg": /sing$/,
    "repl": 'se'
  }, {
    "reg": /ing$/,
    "repl": 'ment'
  }, {
    "reg": /ess$/,
    "repl": 'essness'
  }, {
    "reg": /ous$/,
    "repl": 'ousness'
  }]

  for (let i = 0; i < transforms.length; i++) {
    if (w.match(transforms[i].reg)) {
      return w.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  if (w.match(/s$/)) {
    return w;
  }
  return w + "ness";
};

// console.log(to_noun("great"))

module.exports = to_noun

},{}],14:[function(require,module,exports){
//turn 'quick' into 'quickest'
'use strict'
let convertables = require("./convertables")

let to_superlative = function(str) {
  let irregulars = {
    "nice": "nicest",
    "late": "latest",
    "hard": "hardest",
    "inner": "innermost",
    "outer": "outermost",
    "far": "furthest",
    "worse": "worst",
    "bad": "worst",
    "good": "best"
  }

  let dont = {
    "overweight": 1,
    "ready": 1
  }

  let transforms = [{
    "reg": /y$/i,
    "repl": 'iest'
  }, {
    "reg": /([aeiou])t$/i,
    "repl": '$1ttest'
  }, {
    "reg": /([aeou])de$/i,
    "repl": '$1dest'
  }, {
    "reg": /nge$/i,
    "repl": 'ngest'
  }]

  let matches = [
    /ght$/,
    /nge$/,
    /ough$/,
    /ain$/,
    /uel$/,
    /[au]ll$/,
    /ow$/,
    /oud$/,
    /...p$/
  ]

  let not_matches = [
    /ary$/
  ]

  let generic_transformation = function(s) {
    if (s.match(/e$/)) {
      return s + "st"
    }
    return s + "est"
  }

  for (let i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl)
    }
  }

  if (convertables.hasOwnProperty(str)) {
    return generic_transformation(str)
  }

  if (dont.hasOwnProperty(str)) {
    return "most " + str
  }

  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str]
  }
  for (let i = 0; i < not_matches.length; i++) {
    if (str.match(not_matches[i])) {
      return "most " + str
    }
  }

  for (let i = 0; i < matches.length; i++) {
    if (str.match(matches[i])) {
      return generic_transformation(str)
    }
  }
  return "most " + str
}

// console.log(to_superlative("great"))

module.exports = to_superlative

},{"./convertables":10}],15:[function(require,module,exports){
'use strict'
var Term = require("../term.js")
var to_adjective = require("./to_adjective.js")

class Adverb extends Term {
  constructor(str) {
    super(str)
  }
  to_adjective() {
    return to_adjective(this.normal)
  }
}

// let t = new Adverb("quickly")
// console.log(t.to_adjective())

module.exports = Adverb

},{"../term.js":26,"./to_adjective.js":16}],16:[function(require,module,exports){
//turns 'quickly' into 'quick'
'use strict'
let to_adjective = function(str) {
  let irregulars = {
    "idly": "idle",
    "sporadically": "sporadic",
    "basically": "basic",
    "grammatically": "grammatical",
    "alphabetically": "alphabetical",
    "economically": "economical",
    "conically": "conical",
    "politically": "political",
    "vertically": "vertical",
    "practically": "practical",
    "theoretically": "theoretical",
    "critically": "critical",
    "fantastically": "fantastic",
    "mystically": "mystical",
    "pornographically": "pornographic",
    "fully": "full",
    "jolly": "jolly",
    "wholly": "whole"
  }
  let transforms = [{
    "reg": /bly$/i,
    "repl": 'ble'
  }, {
    "reg": /gically$/i,
    "repl": 'gical'
  }, {
    "reg": /([rsdh])ically$/i,
    "repl": '$1ical'
  }, {
    "reg": /ically$/i,
    "repl": 'ic'
  }, {
    "reg": /uly$/i,
    "repl": 'ue'
  }, {
    "reg": /ily$/i,
    "repl": 'y'
  }, {
    "reg": /(.{3})ly$/i,
    "repl": '$1'
  }]
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str]
  }
  for (let i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl)
    }
  }
  return str
}

// console.log(to_adjective('quickly') === 'quick')
// console.log(to_adjective('marvelously') === 'marvelous')
module.exports = to_adjective

},{}],17:[function(require,module,exports){
// convert british spellings into american ones
// built with patterns+exceptions from https://en.wikipedia.org/wiki/British_spelling
"use strict";

let patterns = [
  // ise -> ize
  {
    reg: /([^aeiou][iy])s(e|ed|es|ing)?$/,
    repl: '$1z$2'
  },
  // our -> or
  {
    reg: /(..)our(ly|y|ite)?$/,
    repl: '$1or$2'
  },
  // re -> er
  {
    reg: /([^cdnv])re(s)?$/,
    repl: '$1er$2'
  },
  // xion -> tion
  {
    reg: /([aeiou])xion([ed])?$/,
    repl: '$1tion$2'
  },
  //logue -> log
  {
    reg: /logue$/,
    repl: 'log'
  },
  // ae -> e
  {
    reg: /([o|a])e/,
    repl: 'e'
  },
  //eing -> ing
  {
    reg: /e(ing|able)$/,
    repl: '$1'
  },
  // illful -> ilful
  {
    reg: /([aeiou]+[^aeiou]+[aeiou]+)ll(ful|ment|est|ing|or|er|ed)$/, //must be second-syllable
    repl: '$1l$2'
  }
]

let americanize = function(str) {
  for (let i = 0; i < patterns.length; i++) {
    if (str.match(patterns[i].reg)) {
      return str.replace(patterns[i].reg, patterns[i].repl)
    }
  }

  return str
}

// console.log(americanize("synthesise") === "synthesize")
// console.log(americanize("synthesised") === "synthesized")

module.exports = americanize

},{}],18:[function(require,module,exports){
// convert american spellings into british ones
// built with patterns+exceptions from https://en.wikipedia.org/wiki/British_spelling
// (some patterns are only safe to do in one direction)
"use strict";

let patterns = [
  // ise -> ize
  {
    reg: /([^aeiou][iy])z(e|ed|es|ing)?$/,
    repl: '$1s$2'
  },
  // our -> or
  // {
  //   reg: /(..)our(ly|y|ite)?$/,
  //   repl: '$1or$2',
  //   exceptions: []
  // },
  // re -> er
  // {
  //   reg: /([^cdnv])re(s)?$/,
  //   repl: '$1er$2',
  //   exceptions: []
  // },
  // xion -> tion
  // {
  //   reg: /([aeiou])xion([ed])?$/,
  //   repl: '$1tion$2',
  //   exceptions: []
  // },
  //logue -> log
  // {
  //   reg: /logue$/,
  //   repl: 'log',
  //   exceptions: []
  // },
  // ae -> e
  // {
  //   reg: /([o|a])e/,
  //   repl: 'e',
  //   exceptions: []
  // },
  //eing -> ing
  // {
  //   reg: /e(ing|able)$/,
  //   repl: '$1',
  //   exceptions: []
  // },
  // illful -> ilful
  {
    reg: /([aeiou]+[^aeiou]+[aeiou]+)l(ful|ment|est|ing|or|er|ed)$/, //must be second-syllable
    repl: '$1ll$2',
    exceptions: []
  }
]

let britishize = function(str) {
  for (var i = 0; i < patterns.length; i++) {
    if (str.match(patterns[i].reg)) {
      return str.replace(patterns[i].reg, patterns[i].repl)
    }
  }
  return str
}

// console.log(britishize("synthesize") === "synthesise")
// console.log(britishize("synthesized") === "synthesised")

module.exports = britishize

},{}],19:[function(require,module,exports){
"use strict";

//chooses an indefinite aricle 'a/an' for a word
let irregulars = {
  "hour": "an",
  "heir": "an",
  "heirloom": "an",
  "honest": "an",
  "honour": "an",
  "honor": "an",
  "uber": "an" //german u
}


let is_acronym = function(s) {
  //no periods
  if (s.length <= 5 && s.match(/^[A-Z]*$/)) {
    return true
  }
  //with periods
  if (s.length >= 4 && s.match(/^([A-Z]\.)*$/)) {
    return true
  }
  return false
}


let indefinite_article = function(str) {
  if (!str) {
    return null
  }
  //pronounced letters of acronyms that get a 'an'
  let an_acronyms = {
    A: true,
    E: true,
    F: true,
    H: true,
    I: true,
    L: true,
    M: true,
    N: true,
    O: true,
    R: true,
    S: true,
    X: true
  }
  //'a' regexes
  let a_regexs = [
    /^onc?e/i, //'wu' sound of 'o'
    /^u[bcfhjkqrstn][aeiou]/i, // 'yu' sound for hard 'u'
    /^eul/i
  ];

  //begin business time
  ////////////////////
  //explicit irregular forms
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str]
  }
  //spelled-out acronyms
  if (is_acronym(str) && an_acronyms.hasOwnProperty(str.substr(0, 1))) {
    return "an"
  }
  //'a' regexes
  for (let i = 0; i < a_regexs.length; i++) {
    if (str.match(a_regexs[i])) {
      return "a"
    }
  }
  //basic vowel-startings
  if (str.match(/^[aeiou]/i)) {
    return "an"
  }
  return "a"
}

// console.log(indefinite_article("wolf") === "a")
module.exports = indefinite_article

},{}],20:[function(require,module,exports){
"use strict";
let irregulars = require("../../data/irregular_nouns")

//similar to plural/singularize rules, but not the same
let plural_indicators = [
  /(^v)ies$/i,
  /ises$/i,
  /ives$/i,
  /(antenn|formul|nebul|vertebr|vit)ae$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)i$/i,
  /(buffal|tomat|tornad)oes$/i,
  /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i,
  /(vert|ind|cort)ices$/i,
  /(matr|append)ices$/i,
  /(x|ch|ss|sh|s|z|o)es$/i,
  /men$/i,
  /news$/i,
  /.tia$/i,
  /(^f)ves$/i,
  /(lr)ves$/i,
  /(^aeiouy|qu)ies$/i,
  /(m|l)ice$/i,
  /(cris|ax|test)es$/i,
  /(alias|status)es$/i,
  /ics$/i
]

//similar to plural/singularize rules, but not the same
let singular_indicators = [
  /(ax|test)is$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)us$/i,
  /(octop|vir)i$/i,
  /(rl)f$/i,
  /(alias|status)$/i,
  /(bu)s$/i,
  /(al|ad|at|er|et|ed|ad)o$/i,
  /(ti)um$/i,
  /(ti)a$/i,
  /sis$/i,
  /(?:(^f)fe|(lr)f)$/i,
  /hive$/i,
  /(^aeiouy|qu)y$/i,
  /(x|ch|ss|sh|z)$/i,
  /(matr|vert|ind|cort)(ix|ex)$/i,
  /(m|l)ouse$/i,
  /(m|l)ice$/i,
  /(antenn|formul|nebul|vertebr|vit)a$/i,
  /.sis$/i,
  /^(?!talis|.*hu)(.*)man$/i
]

let is_plural = function(str) {
  str = (str || '').toLowerCase()
  //handle 'mayors of chicago'
  let preposition = str.match(/([a-z]*) (of|in|by|for) [a-z]/)
  if (preposition && preposition[1]) {
    str = preposition[1]
  }
  // if it's a known irregular case
  for (let i = 0; i < irregulars.length; i++) {
    if (irregulars[i][1] === str) {
      return true
    }
    if (irregulars[i][0] === str) {
      return false
    }
  }
  for (let i = 0; i < plural_indicators.length; i++) {
    if (str.match(plural_indicators[i])) {
      return true
    }
  }
  for (let i = 0; i < singular_indicators.length; i++) {
    if (str.match(singular_indicators[i])) {
      return false
    }
  }
  // some 'looks pretty plural' rules
  if (str.match(/s$/) && !str.match(/ss$/) && str.length > 3) { //needs some lovin'
    return true
  }
  return false
}

// console.log(is_plural('octopus') === false)
// console.log(is_plural('octopi') === true)
// console.log(is_plural('eyebrow') === false)
// console.log(is_plural('eyebrows') === true)
// console.log(is_plural('child') === false)
// console.log(is_plural('children') === true)

module.exports = is_plural

},{"../../data/irregular_nouns":3}],21:[function(require,module,exports){
//uncountables are words that shouldn't ever inflect, for metaphysical reasons, like 'peace'
"use strict";
let uncountable_arr = require("../../data/uncountables.js")

let uncountable = uncountable_arr.reduce(function(h, a) {
  h[a] = true
  return h
}, {})

let is_uncountable = function(str) {
  if (uncountable[str]) {
    return true
  }
  return false
}
// console.log(is_uncountable("peace") === true)
// console.log(is_uncountable("dog") === false)
module.exports = is_uncountable

},{"../../data/uncountables.js":4}],22:[function(require,module,exports){
'use strict'
var Term = require("../term.js")
var article = require("./article.js")
var is_plural = require("./is_plural.js")
var singularize = require("./singularize.js")
var pluralize = require("./pluralize.js")
var is_uncountable = require("./is_uncountable.js")

class Noun extends Term {
  constructor(str) {
    super(str)
  }
  //noun methods
  article() {
    return article(this.normal)
  }

  is_plural() {
    return is_plural(this.normal)
  }
  is_uncountable() {
    return is_uncountable(this.normal)
  }
  pluralize() {
    return pluralize(this.normal)
  }
  singularize() {
    return singularize(this.normal)
  }
}

// let t = new Noun("forks")
// console.log(t.singularize())

module.exports = Noun

},{"../term.js":26,"./article.js":19,"./is_plural.js":20,"./is_uncountable.js":21,"./pluralize.js":23,"./singularize.js":24}],23:[function(require,module,exports){
"use strict";
let is_uncountable = require("./is_uncountable.js")
let irregulars = require("../../data/irregular_nouns.js")
let is_plural = require("./is_plural.js")
let fns = require("../../fns.js")

let pluralize_rules = [
  [/(ax|test)is$/i, '$1es'],
  [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, '$1i'],
  [/(octop|vir)i$/i, '$1i'],
  [/([rl])f$/i, '$1ves'],
  [/(alias|status)$/i, '$1es'],
  [/(bu)s$/i, '$1ses'],
  [/(al|ad|at|er|et|ed|ad)o$/i, '$1oes'],
  [/([ti])um$/i, '$1a'],
  [/([ti])a$/i, '$1a'],
  [/sis$/i, 'ses'],
  [/(?:([^f])fe|([lr])f)$/i, '$1ves'],
  [/(hive)$/i, '$1s'],
  [/([^aeiouy]|qu)y$/i, '$1ies'],
  [/(x|ch|ss|sh|s|z)$/i, '$1es'],
  [/(matr|vert|ind|cort)(ix|ex)$/i, '$1ices'],
  [/([m|l])ouse$/i, '$1ice'],
  [/([m|l])ice$/i, '$1ice'],
  [/^(ox)$/i, '$1en'],
  [/^(oxen)$/i, '$1'],
  [/(quiz)$/i, '$1zes'],
  [/(antenn|formul|nebul|vertebr|vit)a$/i, '$1ae'],
  [/(sis)$/i, 'ses'],
  [/^(?!talis|.*hu)(.*)man$/i, '$1men'],
  [/(.*)/i, '$1s']
].map(function(a) {
  return {
    reg: a[0],
    repl: a[1]
  }
})


let pluralize = function(str) {
  let low = str.toLowerCase()
  //uncountable
  if (is_uncountable(low)) { //uncountables shouldn't ever inflect
    return str
  }
  //is it already plural?
  if (is_plural(low) === true) {
    return str
  }
  //irregular
  let found = irregulars.filter(function(r) {
    return r[0] === low
  })
  if (found[0]) {
    if (fns.titlecase(low) === str) { //handle capitalisation properly
      return fns.titlecase(found[0][1])
    }
    return found[0][1]

  }
  //inflect first word of preposition-phrase
  if (str.match(/([a-z]*) (of|in|by|for) [a-z]/)) {
    let first = (str.match(/^([a-z]*) (of|in|by|for) [a-z]/) || [])[1]
    if (first) {
      let better_first = pluralize(first)
      return better_first + str.replace(first, '')
    }
  }
  //regular
  for (let i = 0; i < pluralize_rules.length; i++) {
    if (str.match(pluralize_rules[i].reg)) {
      return str.replace(pluralize_rules[i].reg, pluralize_rules[i].repl)
    }
  }
}
// console.log(pluralize('gas') === "gases")
// console.log(pluralize('narrative') === "narratives")
// console.log(pluralize('video') === "videos")
// console.log(pluralize('photo') === "photos")
// console.log(pluralize('stomach') === "stomachs")
// console.log(pluralize('database') === "databases")
// console.log(pluralize('kiss') === "kisses")
// console.log(pluralize('towns') === "towns")
// console.log(pluralize('peace') === "peace")
// console.log(pluralize('mayor of chicago') === "mayors of chicago")
module.exports = pluralize

},{"../../data/irregular_nouns.js":3,"../../fns.js":5,"./is_plural.js":20,"./is_uncountable.js":21}],24:[function(require,module,exports){
"use strict";
let is_uncountable = require("./is_uncountable.js")
let irregulars = require("../../data/irregular_nouns.js")
let is_plural = require("./is_plural.js")
let fns = require("../../fns.js")

let singularize_rules = [
  [/([^v])ies$/i, '$1y'],
  [/ises$/i, 'isis'],
  [/ives$/i, 'ife'],
  [/(antenn|formul|nebul|vertebr|vit)ae$/i, '$1a'],
  [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, '$1us'],
  [/(buffal|tomat|tornad)(oes)$/i, '$1o'],
  [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, '$1sis'],
  [/(vert|ind|cort)(ices)$/i, '$1ex'],
  [/(matr|append)(ices)$/i, '$1ix'],
  [/(x|ch|ss|sh|s|z|o)es$/i, '$1'],
  [/men$/i, 'man'],
  [/(n)ews$/i, '$1ews'],
  [/([ti])a$/i, '$1um'],
  [/([^f])ves$/i, '$1fe'],
  [/([lr])ves$/i, '$1f'],
  [/([^aeiouy]|qu)ies$/i, '$1y'],
  [/(s)eries$/i, '$1eries'],
  [/(m)ovies$/i, '$1ovie'],
  [/([m|l])ice$/i, '$1ouse'],
  [/(cris|ax|test)es$/i, '$1is'],
  [/(alias|status)es$/i, '$1'],
  [/(ss)$/i, '$1'],
  [/(ics)$/i, "$1"],
  [/s$/i, '']
].map(function(a) {
  return {
    reg: a[0],
    repl: a[1]
  }
})

let singularize = function(str) {
  let low = str.toLowerCase()
  //uncountable
  if (is_uncountable(low)) {
    return str
  }
  //is it already singular?
  if (is_plural(low) === false) {
    return str
  }
  //irregular
  let found = irregulars.filter(function(r) {
    return r[1] === low
  })
  if (found[0]) {
    if (fns.titlecase(low) === str) { //handle capitalisation properly
      return fns.titlecase(found[0][0])
    }
    return found[0][0]
  }
  //inflect first word of preposition-phrase
  if (str.match(/([a-z]*) (of|in|by|for) [a-z]/)) {
    let first = str.match(/^([a-z]*) (of|in|by|for) [a-z]/)
    if (first && first[1]) {
      let better_first = singularize(first[1])
      return better_first + str.replace(first[1], '')
    }
  }
  //regular
  for (let i = 0; i < singularize_rules.length; i++) {
    if (str.match(singularize_rules[i].reg)) {
      return str.replace(singularize_rules[i].reg, singularize_rules[i].repl)
    }
  }
  return str
}

// console.log(singularize('gases') === "gas")
// console.log(singularize('kisses') === "kiss")
// console.log(singularize('kiss') === "kiss")
// console.log(singularize('children') === "child")
// console.log(singularize('peace') === "peace")
// console.log(singularize('child') === "child")
// console.log(singularize('mayors of chicago') === "mayor of chicago")

module.exports = singularize

},{"../../data/irregular_nouns.js":3,"../../fns.js":5,"./is_plural.js":20,"./is_uncountable.js":21}],25:[function(require,module,exports){
//chop a string into pronounced syllables
"use strict";

//suffix fixes
function postprocess(arr) {
  //trim whitespace
  arr = arr.map(function(w) {
    return w.trim()
  })
  if (arr.length > 2) {
    return arr
  }
  var ones = [
    /^[^aeiou]?ion/,
    /^[^aeiou]?ised/,
    /^[^aeiou]?iled/
  ]
  var l = arr.length
  if (l > 1) {
    var suffix = arr[l - 2] + arr[l - 1];
    for (var i = 0; i < ones.length; i++) {
      if (suffix.match(ones[i])) {
        arr[l - 2] = arr[l - 2] + arr[l - 1];
        arr.pop();
      }
    }
  }
  return arr
}

let syllables = function(str) {
  var all = []

  //method is nested because it's called recursively
  var doer = function(w) {
    var vow = /[aeiouy]$/
    var chars = w.split('')
    var before = "";
    var after = "";
    var current = "";
    for (var i = 0; i < chars.length; i++) {
      before = chars.slice(0, i).join('')
      current = chars[i]
      after = chars.slice(i + 1, chars.length).join('')
      var candidate = before + chars[i]

      //it's a consonant that comes after a vowel
      if (before.match(vow) && !current.match(vow)) {
        if (after.match(/^e[sm]/)) {
          candidate += "e"
          after = after.replace(/^e/, '')
        }
        all.push(candidate)
        return doer(after)
      }
      //unblended vowels ('noisy' vowel combinations)
      if (candidate.match(/(eo|eu|ia|oa|ua|ui)$/i)) { //'io' is noisy, not in 'ion'
        all.push(before)
        all.push(current)
        return doer(after) //recursion
      }
    }
    //if still running, end last syllable
    if (str.match(/[aiouy]/) || str.match(/ee$/)) { //allow silent trailing e
      all.push(w)
    } else {
      all[all.length - 1] = (all[all.length - 1] || '') + str; //append it to the last one
    }
  }

  str.split(/\s\-/).forEach(function(s) {
    doer(s)
  })
  all = postprocess(all)

  //for words like 'tree' and 'free'
  if (all.length === 0) {
    all = [str]
  }
  //filter blanks
  all = all.filter(function(s) {
    return s !== "" && s !== null && s !== undefined
  })

  return all
}

// console.log(syllables("suddenly"))

module.exports = syllables

},{}],26:[function(require,module,exports){
'use strict'
let syllables = require("./syllables")
let americanize = require("./americanize")
let britishize = require("./britishize")

class Term {
  constructor(str) {
    this.text = str;
    this.normal = this.normalize();
    this.reason = ""
  }

  //Term methods..
  normalize() {
    let str = this.text || ""
    str = str.toLowerCase()
    str = str.replace(/[,\.!:;\?\(\)]/, '')
    str = str.replace(/’/g, "'")
    str = str.replace(/"/g, "")
    // coerce single curly quotes
    str = str.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]+/g, "'");
    // coerce double curly quotes
    str = str.replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]+/g, '"');
    if (!str.match(/[a-z0-9]/i)) {
      return ""
    }
    return str
  }
  americanize() {
    return americanize(this.normal)
  }
  britishize() {
    return britishize(this.normal)
  }
  syllables() {
    return syllables(this.normal)
  }
}

// var t = new Term("synthesise")
// console.log(t.americanize())

module.exports = Term

},{"./americanize":17,"./britishize":18,"./syllables":25}],27:[function(require,module,exports){
// #generates properly-formatted dates from free-text date forms
// #by spencer kelly 2014
"use strict";
let months = "(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|aug|sept|oct|nov|dec),?";
let days = "([0-9]{1,2}),?";
let years = "([12][0-9]{3})";

let to_obj = function(arr, places) {
  return Object.keys(places).reduce(function(h, k) {
    h[k] = arr[places[k]];
    return h;
  }, {});
}

let regexes = [{
  reg: String(months) + " " + String(days) + "-" + String(days) + " " + String(years),
  example: "March 7th-11th 1987",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 1,
      day: 2,
      to_day: 3,
      year: 4
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(days) + " of " + String(months) + " to " + String(days) + " of " + String(months) + " " + String(years),
  example: "28th of September to 5th of October 2008",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      day: 1,
      month: 2,
      to_day: 3,
      to_month: 4,
      to_year: 5
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(months) + " " + String(days) + " to " + String(months) + " " + String(days) + " " + String(years),
  example: "March 7th to june 11th 1987",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 1,
      day: 2,
      to_month: 3,
      to_day: 4,
      year: 5,
      to_year: 5
    };
    return to_obj(arr, places);
  }
}, {
  reg: "between " + String(days) + " " + String(months) + " and " + String(days) + " " + String(months) + " " + String(years),
  example: "between 13 February and 15 February 1945",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      day: 1,
      month: 2,
      to_day: 3,
      to_month: 4,
      year: 5,
      to_year: 5
    };
    return to_obj(arr, places);
  }
}, {
  reg: "between " + String(months) + " " + String(days) + " and " + String(months) + " " + String(days) + " " + String(years),
  example: "between March 7th and june 11th 1987",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 1,
      day: 2,
      to_month: 3,
      to_day: 4,
      year: 5,
      to_year: 5
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(months) + " " + String(days) + " " + String(years),
  example: "March 1st 1987",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 1,
      day: 2,
      year: 3
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(days) + " - " + String(days) + " of " + String(months) + " " + String(years),
  example: "3rd - 5th of March 1969",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      day: 1,
      to_day: 2,
      month: 3,
      year: 4
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(days) + " of " + String(months) + " " + String(years),
  example: "3rd of March 1969",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      day: 1,
      month: 2,
      year: 3
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(months) + " " + years + ",? to " + String(months) + " " + String(years),
  example: "September 1939 to April 1945",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 1,
      year: 2,
      to_month: 3,
      to_year: 4
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(months) + " " + String(years),
  example: "March 1969",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 1,
      year: 2
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(months) + " " + days,
  example: "March 18th",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 1,
      day: 2
    };
    return to_obj(arr, places);
  }
}, {
  reg: String(days) + " of " + months,
  example: "18th of March",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      month: 2,
      day: 1
    };
    return to_obj(arr, places);
  }
}, {
  reg: years + " ?- ?" + String(years),
  example: "1997-1998",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      year: 1,
      to_year: 2
    };
    return to_obj(arr, places);
  }
}, {
  reg: years,
  example: "1998",
  process: function(arr) {
    if (!arr) {
      arr = [];
    }
    let places = {
      year: 1
    };
    return to_obj(arr, places);
  }
}].map(function(o) {
  o.reg = new RegExp(o.reg, "g");
  return o;
});

//0 based months, 1 based days...
let months_obj = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  aug: 7,
  sept: 8,
  oct: 9,
  nov: 10,
  dec: 11
};

//thirty days hath september...
let last_dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let preprocess = function(str) {
  str = str.toLowerCase();
  str = str.replace(/([0-9])(th|rd|st)/g, '$1');
  return str;
};

let postprocess = function(obj, options) {
  let d = new Date();
  options = options || {};
  obj.year = parseInt(obj.year, 10) || undefined;
  obj.day = parseInt(obj.day, 10) || undefined;
  obj.to_day = parseInt(obj.to_day, 10) || undefined;
  obj.to_year = parseInt(obj.to_year, 10) || undefined;
  obj.month = months_obj[obj.month];
  obj.to_month = months_obj[obj.to_month];
  //swap to_month and month
  if (obj.to_month !== undefined && obj.month === undefined) {
    obj.month = obj.to_month;
  }
  if (obj.to_month === undefined && obj.month !== undefined) {
    obj.to_month = obj.month;
  }
  //swap to_year and year
  if (obj.to_year && !obj.year) {
    obj.year = obj.to_year;
  }
  if (!obj.to_year && obj.year && obj.to_month !== undefined) {
    obj.to_year = obj.year;
  }
  if (options.assume_year && !obj.year) {
    obj.year = d.getFullYear();
  }
  //make sure date is in that month..
  if (obj.day !== undefined && (obj.day > 31 || (obj.month !== undefined && obj.day > last_dates[obj.month]))) {
    obj.day = undefined;
  }
  //make sure to date is after from date. fail everything if so...
  //todo: do this smarter
  if (obj.to_month !== undefined && obj.to_month < obj.month) {
    return {}
  }
  if (obj.to_year && obj.to_year < obj.year) {
    obj.year = undefined;
    obj.to_year = undefined;
  }

  //make sure date is in reasonable range (very opinionated)
  if (obj.year > 2090 || obj.year < 1200) {
    obj.year = undefined;
    obj.to_year = undefined;
  }
  //format result better
  obj = {
    day: obj.day,
    month: obj.month,
    year: obj.year,
    to: {
      day: obj.to_day,
      month: obj.to_month,
      year: obj.to_year
    }
  };
  //add javascript date objects, if you can
  if (obj.year && obj.day && obj.month !== undefined) {
    obj.date_object = new Date();
    obj.date_object.setYear(obj.year);
    obj.date_object.setMonth(obj.month);
    obj.date_object.setDate(obj.day);
  }
  if (obj.to.year && obj.to.day && obj.to.month !== undefined) {
    obj.to.date_object = new Date();
    obj.to.date_object.setYear(obj.to.year);
    obj.to.date_object.setMonth(obj.to.month);
    obj.to.date_object.setDate(obj.to.day);
  }
  //if we have enough data to return a result..
  if (obj.year || obj.month !== undefined) {
    return obj;
  }
  return {};
};

//pass through sequence of regexes until tempate is matched..
let date_extractor = function(str, options) {
  options = options || {};
  str = preprocess(str)
  let l = regexes.length;
  for (let i = 0; i < l; i += 1) {
    let obj = regexes[i]
    if (str.match(obj.reg)) {
      let clone_reg = new RegExp(obj.reg.source, "i"); //this avoids a memory-leak
      let arr = clone_reg.exec(str);
      let good = obj.process(arr);
      return postprocess(good, options);
    }
  }
};

// console.log(date_extractor("1998"))
// console.log(date_extractor("1999"))

module.exports = date_extractor

},{}],28:[function(require,module,exports){
// converts spoken numbers into integers  "fifty seven point eight" -> 57.8
//
// Spoken numbers take the following format
// [sixty five] (thousand) [sixty five] (hundred) [sixty five]
// aka: [one/teen/ten] (multiple) [one/teen/ten] (multiple) ...
// combile the [one/teen/ten]s as 'current_sum', then multiply it by its following multiple
// multiple not repeat

"use strict";
//these sets of numbers each have different rules
//[tenth, hundreth, thousandth..] are ambiguous because they could be ordinal like fifth, or decimal like one-one-hundredth, so are ignored
let ones = {
  'a': 1,
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  "first": 1,
  "second": 2,
  "third": 3,
  "fourth": 4,
  "fifth": 5,
  "sixth": 6,
  "seventh": 7,
  "eighth": 8,
  "ninth": 9
}
let teens = {
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  "eleventh": 11,
  "twelfth": 12,
  "thirteenth": 13,
  "fourteenth": 14,
  "fifteenth": 15,
  "sixteenth": 16,
  "seventeenth": 17,
  "eighteenth": 18,
  "nineteenth": 19
}
let tens = {
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90,
  "twentieth": 20,
  "thirtieth": 30,
  "fourtieth": 40,
  "fiftieth": 50,
  "sixtieth": 60,
  "seventieth": 70,
  "eightieth": 80,
  "ninetieth": 90
}
let multiple = {
  'hundred': 100,
  'grand': 1000,
  'thousand': 1000,
  'million': 1000000,
  'billion': 1000000000,
  'trillion': 1000000000000,
  'quadrillion': 1000000000000000,
  'quintillion': 1000000000000000000,
  'sextillion': 1000000000000000000000,
  'septillion': 1000000000000000000000000,
  'octillion': 1000000000000000000000000000,
  'nonillion': 1000000000000000000000000000000,
  'decillion': 1000000000000000000000000000000000
}
// let decimal_multiple={'tenth':0.1, 'hundredth':0.01, 'thousandth':0.001, 'millionth':0.000001,'billionth':0.000000001};

let to_number = function(s) {
  //remember these concerns for possible errors
  let ones_done = false
  let teens_done = false
  let tens_done = false
  let multiple_done = {}
  let total = 0
  let global_multiplier = 1
  //pretty-printed numbers
  s = s.replace(/, ?/g, '')
  //parse-out currency
  s = s.replace(/[$£€]/, '')
  //try to finish-fast
  if (s.match(/[0-9]\.[0-9]/) && parseFloat(s) === s) {
    return parseFloat(s)
  }
  if (parseInt(s, 10) === s) {
    return parseInt(s, 10)
  }
  //try to die fast. (phone numbers or times)
  if (s.match(/[0-9][\-:][0-9]/)) {
    return null
  }
  //support global multipliers, like 'half-million' by doing 'million' then multiplying by 0.5
  let mults = [{
    reg: /^(minus|negative)[\s\-]/i,
    mult: -1
  }, {
    reg: /^(a\s)?half[\s\-](of\s)?/i,
    mult: 0.5
  }, {
    reg: /^(a\s)?quarter[\s\-]/i,
    mult: 0.25
  }]
  for (let i = 0; i < mults.length; i++) {
    if (s.match(mults[i].reg)) {
      global_multiplier = mults[i].mult
      s = s.replace(mults[i].reg, '')
      break;
    }
  }

  //do each word in turn..
  let words = s.toString().split(/[\s\-]+/);
  let w, x;
  let current_sum = 0;
  let local_multiplier = 1
  let decimal_mode = false
  for (let i = 0; i < words.length; i++) {
    w = words[i]

    //skip 'and' eg. five hundred and twelve
    if (w === "and") {
      continue;
    }

    //..we're doing decimals now
    if (w === "point" || w === "decimal") {
      if (decimal_mode) {
        return null
      } //two point one point six
      decimal_mode = true
      total += current_sum
      current_sum = 0
      ones_done = false
      local_multiplier = 0.1
      continue;
    }

    //handle special rules following a decimal
    if (decimal_mode) {
      x = null
      //allow consecutive ones in decimals eg. 'two point zero five nine'
      if (ones[w] !== undefined) {
        x = ones[w]
      }
      if (teens[w] !== undefined) {
        x = teens[w]
      }
      if (parseInt(w, 10) === w) {
        x = parseInt(w, 10)
      }
      if (!x) {
        return null
      }
      if (x < 10) {
        total += x * local_multiplier
        local_multiplier = local_multiplier * 0.1 // next number is next decimal place
        current_sum = 0
        continue;
      }
      //two-digit decimals eg. 'two point sixteen'
      if (x < 100) {
        total += x * (local_multiplier * 0.1)
        local_multiplier = local_multiplier * 0.01 // next number is next decimal place
        current_sum = 0
        continue;
      }
    }

    //if it's already an actual number
    if (w.match(/^[0-9]\.[0-9]$/)) {
      current_sum += parseFloat(w)
      continue;
    }
    if (parseInt(w, 10) === w) {
      current_sum += parseInt(w, 10)
      continue;
    }

    //ones rules
    if (ones[w] !== undefined) {
      if (ones_done) {
        return null
      } // eg. five seven
      if (teens_done) {
        return null
      } // eg. five seventeen
      ones_done = true
      current_sum += ones[w]
      continue;
    }
    //teens rules
    if (teens[w]) {
      if (ones_done) {
        return null
      } // eg. five seventeen
      if (teens_done) {
        return null
      } // eg. fifteen seventeen
      if (tens_done) {
        return null
      } // eg. sixty fifteen
      teens_done = true
      current_sum += teens[w]
      continue;
    }
    //tens rules
    if (tens[w]) {
      if (ones_done) {
        return null
      } // eg. five seventy
      if (teens_done) {
        return null
      } // eg. fiveteen seventy
      if (tens_done) {
        return null
      } // eg. twenty seventy
      tens_done = true
      current_sum += tens[w]
      continue;
    }
    //multiple rules
    if (multiple[w]) {
      if (multiple_done[w]) {
        return null
      } // eg. five hundred six hundred
      multiple_done[w] = true
      //reset our concerns. allow 'five hundred five'
      ones_done = false
      teens_done = false
      tens_done = false
      //case of 'hundred million', (2 consecutive multipliers)
      if (current_sum === 0) {
        total = total || 1 //dont ever multiply by 0
        total *= multiple[w]
      } else {
        current_sum *= multiple[w]
        total += current_sum
      }
      current_sum = 0
      continue;
    }
    //if word is not a known thing now, die
    return null
  }
  if (current_sum) {
    total += (current_sum || 1) * local_multiplier
  }
  //combine with global multiplier, like 'minus' or 'half'
  total = total * global_multiplier

  return total
}

// console.log(to_number("sixteen hundred"))
// console.log(to_number("a hundred"))
// console.log(to_number("four point seven seven"))

//kick it into module
module.exports = to_number;

},{}],29:[function(require,module,exports){
'use strict'
let Term = require("../term.js")
let date_extractor = require("./date_extractor.js")
let to_number = require("./to_number.js")

class Value extends Term {
  constructor(str) {
    super(str)
  }

  is_date() {
    let months = /(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|aug|sept|oct|nov|dec)/i
    let times = /1?[0-9]:[0-9]{2}/
    let days = /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tues|wed|thurs|fri|sat|sun)\b/i
    if (this.normal.match(months) || this.normal.match(times) || this.normal.match(days)) {
      return true
    }
    return false
  }

  to_number() {
    return to_number(this.normal)
  }

  date_extractor() {
    return date_extractor(this.normal)
  }

}

// let t = new Value("january 5th 1998")
// console.log(t.date_extractor())

module.exports = Value

},{"../term.js":26,"./date_extractor.js":27,"./to_number.js":28}],30:[function(require,module,exports){
//turn a verb into its other grammatical forms.
'use strict'
let verb_to_doer = require("./to_doer")
let verb_irregulars = require("./verb_irregulars")
let verb_rules = require("./verb_rules")
let predict = require("./predict_form.js")

//fallback to this transformation if it has an unknown prefix
let fallback = function(w) {
  let infinitive;
  if (w.length > 4) {
    infinitive = w.replace(/ed$/, '');
  } else {
    infinitive = w.replace(/d$/, '');
  }
  let present, past, gerund, doer;
  if (w.match(/[^aeiou]$/)) {
    gerund = w + "ing"
    past = w + "ed"
    if (w.match(/ss$/)) {
      present = w + "es" //'passes'
    } else {
      present = w + "s"
    }
    doer = verb_to_doer(infinitive)
  } else {
    gerund = w.replace(/[aeiou]$/, 'ing')
    past = w.replace(/[aeiou]$/, 'ed')
    present = w.replace(/[aeiou]$/, 'es')
    doer = verb_to_doer(infinitive)
  }
  return {
    infinitive: infinitive,
    present: present,
    past: past,
    gerund: gerund,
    doer: doer,
    future: "will " + infinitive
  }
}

//make sure object has all forms
let fufill = function(obj, prefix) {
  if (!obj.infinitive) {
    return obj
  }
  if (!obj.gerund) {
    obj.gerund = obj.infinitive + 'ing'
  }
  if (!obj.doer) {
    obj.doer = verb_to_doer(obj.infinitive)
  }
  if (!obj.present) {
    obj.present = obj.infinitive + 's'
  }
  if (!obj.past) {
    obj.past = obj.infinitive + 'ed'
  }
  //add the prefix to all forms, if it exists
  if (prefix) {
    Object.keys(obj).forEach(function(k) {
      obj[k] = prefix + obj[k]
    })
  }
  //future is 'will'+infinitive
  if (!obj.future) {
    obj.future = "will " + obj.infinitive
  }
  //perfect is 'have'+past-tense
  if (!obj.perfect) {
    obj.perfect = "have " + obj.past
  }
  //pluperfect is 'had'+past-tense
  if (!obj.pluperfect) {
    obj.pluperfect = "had " + obj.past
  }
  //future perfect is 'will have'+past-tense
  if (!obj.future_perfect) {
    obj.future_perfect = "will have " + obj.past
  }
  return obj
}

let conjugate = function(w) {
  if (w === undefined) {
    return {}
  }

  //for phrasal verbs ('look out'), conjugate look, then append 'out'
  let phrasal_reg = new RegExp("^(.*?) (in|out|on|off|behind|way|with|of|do|away|across|ahead|back|over|under|together|apart|up|upon|aback|down|about|before|after|around|to|forth|round|through|along|onto)$", 'i')
  if (w.match(' ') && w.match(phrasal_reg)) {
    let split = w.match(phrasal_reg, '')
    let phrasal_verb = split[1]
    let particle = split[2]
    let result = conjugate(phrasal_verb) //recursive
    delete result["doer"]
    Object.keys(result).forEach(function(k) {
      if (result[k]) {
        result[k] += " " + particle
      }
    })
    return result
  }

  //for pluperfect ('had tried') remove 'had' and call it past-tense
  if (w.match(/^had [a-z]/i)) {
    w = w.replace(/^had /i, '')
  }
  //for perfect ('have tried') remove 'have' and call it past-tense
  if (w.match(/^have [a-z]/i)) {
    w = w.replace(/^have /i, '')
  }

  //for future perfect ('will have tried') remove 'will have' and call it past-tense
  if (w.match(/^will have [a-z]/i)) {
    w = w.replace(/^will have /i, '')
  }

  //chop it if it's future-tense
  w = w.replace(/^will /i, '')
  //un-prefix the verb, and add it in later
  let prefix = (w.match(/^(over|under|re|anti|full)\-?/i) || [])[0]
  let verb = w.replace(/^(over|under|re|anti|full)\-?/i, '')
  //check irregulars
  let obj = {};
  let l = verb_irregulars.length
  for (let i = 0; i < l; i++) {
    let x = verb_irregulars[i]
    if (verb === x.present || verb === x.gerund || verb === x.past || verb === x.infinitive) {
      obj = JSON.parse(JSON.stringify(verb_irregulars[i])); // object 'clone' hack, to avoid mem leak
      return fufill(obj, prefix)
    }
  }
  //guess the tense, so we know which transormation to make
  let predicted = predict(w) || 'infinitive'

  //check against suffix rules
  l = verb_rules[predicted].length
  for (let i = 0; i < l; i++) {
    let r = verb_rules[predicted][i];
    if (w.match(r.reg)) {
      obj[predicted] = w;
      let keys = Object.keys(r.repl)
      for (let o = 0; o < keys.length; o++) {
        if (keys[o] === predicted) {
          obj[keys[o]] = w
        } else {
          obj[keys[o]] = w.replace(r.reg, r.repl[keys[o]])
        }
      }
      return fufill(obj);
    }
  }

  //produce a generic transformation
  return fallback(w)
};
module.exports = conjugate;

// console.log(conjugate("walking"))
// console.log(conjugate("overtook"))
// console.log(conjugate("watch out"))
// console.log(conjugate("watch"))
// console.log(conjugate("smash"))
// console.log(conjugate("word"))
// // broken
// console.log(conjugate("read"))
// console.log(conjugate("free"))
// console.log(conjugate("flesh"))
// console.log(conjugate("branch"))
// console.log(conjugate("spred"))
// console.log(conjugate("bog"))
// console.log(conjugate("nod"))
// console.log(conjugate("had tried"))
// console.log(conjugate("have tried"))

},{"./predict_form.js":31,"./to_doer":33,"./verb_irregulars":34,"./verb_rules":35}],31:[function(require,module,exports){
//this method is used to predict which current conjugation a verb is

//this method is the slowest in the whole library, basically TODO:whaaa
"use strict";
let suffix_rules = require("./suffix_rules")
let fns = require("../../../fns.js")

//todo: support will/have/haven't etc
let predict = function(w) {
  let arr = Object.keys(suffix_rules);
  for (let i = 0; i < arr.length; i++) {
    if (fns.endsWith(w, arr[i])) {
      return suffix_rules[arr[i]]
    }
  }
  return "infinitive"
}

module.exports = predict

},{"../../../fns.js":5,"./suffix_rules":32}],32:[function(require,module,exports){
//generated from test data
var compact = {
  "gerund": [
    "ing"
  ],
  "infinitive": [
    "ate",
    "ize",
    "tion",
    "rify",
    "ress",
    "ify",
    "age",
    "nce",
    "ect",
    "ise",
    "ine",
    "ish",
    "ace",
    "ash",
    "ure",
    "tch",
    "end",
    "ack",
    "and",
    "ute",
    "ade",
    "ock",
    "ite",
    "ase",
    "ose",
    "use",
    "ive",
    "int",
    "nge",
    "lay",
    "est",
    "ain",
    "ant",
    "eed",
    "er",
    "le"
  ],
  "past": [
    "ed",
    "lt",
    "nt",
    "pt",
    "ew",
    "ld"
  ],
  "present": [
    "rks",
    "cks",
    "nks",
    "ngs",
    "mps",
    "tes",
    "zes",
    "ers",
    "les",
    "acks",
    "ends",
    "ands",
    "ocks",
    "lays",
    "eads",
    "lls",
    "els",
    "ils",
    "ows",
    "nds",
    "ays",
    "ams",
    "ars",
    "ops",
    "ffs",
    "als",
    "urs",
    "lds",
    "ews",
    "ips",
    "es",
    "ts",
    "ns",
    "s"
  ]
}
var suffix_rules = {}
var keys = Object.keys(compact)
var l = keys.length;
var l2, i;
for (i = 0; i < l; i++) {
  l2 = compact[keys[i]].length
  for (var o = 0; o < l2; o++) {
    suffix_rules[compact[keys[i]][o]] = keys[i]
  }
}
module.exports = suffix_rules;

},{}],33:[function(require,module,exports){
//somone who does this present-tense verb
//turn 'walk' into 'walker'
'use strict'
let doer = function(str) {
  str = str || ''
  let irregulars = {
    "tie": "tier",
    "dream": "dreamer",
    "sail": "sailer",
    "run": "runner",
    "rub": "rubber",
    "begin": "beginner",
    "win": "winner",
    "claim": "claimant",
    "deal": "dealer",
    "spin": "spinner"
  }
  let dont = {
    "aid": 1,
    "fail": 1,
    "appear": 1,
    "happen": 1,
    "seem": 1,
    "try": 1,
    "say": 1,
    "marry": 1,
    "be": 1,
    "forbid": 1,
    "understand": 1,
    "bet": 1
  }
  let transforms = [{
    "reg": /e$/i,
    "repl": 'er'
  }, {
    "reg": /([aeiou])([mlgp])$/i,
    "repl": '$1$2$2er'
  }, {
    "reg": /([rlf])y$/i,
    "repl": '$1ier'
  }, {
    "reg": /^(.?.[aeiou])t$/i,
    "repl": '$1tter'
  }]

  if (dont.hasOwnProperty(str)) {
    return null
  }
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str]
  }
  for (let i = 0; i < transforms.length; i++) {
    if (str.match(transforms[i].reg)) {
      return str.replace(transforms[i].reg, transforms[i].repl)
    }
  }
  return str + "er"
}

// console.log(verb_to_doer('set'))
// console.log(verb_to_doer('sweep'))
// console.log(verb_to_doer('watch'))
module.exports = doer

},{}],34:[function(require,module,exports){
'use strict'
let types = [
  'infinitive',
  'gerund',
  'past',
  'present',
  'doer',
  'future'
]

//list of verb irregular verb forms, compacted to save space. ('_' -> infinitive )
let compact = [
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
    "word",
    "_ing",
    "_ed",
    "_s",
    "_er"
  ],
  [
    "suit",
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
  ],
  [
    "load",
    "_ing",
    "_ed",
    "_s",
    "_er"
  ]
]
//expand compact version out
module.exports = compact.map(function(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[types[i]] = arr[i].replace(/_/, arr[0])
  }
  return obj
})

// console.log(JSON.stringify(verb_irregulars, null, 2));

},{}],35:[function(require,module,exports){
// regex rules for each part of speech that convert it to all other parts of speech.
// used in combination with the generic 'fallback' method
'use strict'
let verb_rules = {
  "infinitive": [
    [
      "(eed)$",
      {
        "pr": "$1s",
        "g": "$1ing",
        "pa": "$1ed",
        "do": "$1er"
      }
    ],
    [
      "(e)(ep)$",
      {
        "pr": "$1$2s",
        "g": "$1$2ing",
        "pa": "$1pt",
        "do": "$1$2er"
      }
    ],
    [
      "(a[tg]|i[zn]|ur|nc|gl|is)e$",
      {
        "pr": "$1es",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "([i|f|rr])y$",
      {
        "pr": "$1ies",
        "g": "$1ying",
        "pa": "$1ied"
      }
    ],
    [
      "([td]er)$",
      {
        "pr": "$1s",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "([bd]l)e$",
      {
        "pr": "$1es",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(ish|tch|ess)$",
      {
        "pr": "$1es",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(ion|end|e[nc]t)$",
      {
        "pr": "$1s",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(om)e$",
      {
        "pr": "$1es",
        "g": "$1ing",
        "pa": "ame"
      }
    ],
    [
      "([aeiu])([pt])$",
      {
        "pr": "$1$2s",
        "g": "$1$2$2ing",
        "pa": "$1$2"
      }
    ],
    [
      "(er)$",
      {
        "pr": "$1s",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(en)$",
      {
        "pr": "$1s",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ]
  ],
  "present": [
    [
      "(ies)$",
      {
        "in": "y",
        "g": "ying",
        "pa": "ied"
      }
    ],
    [
      "(tch|sh)es$",
      {
        "in": "$1",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(ss)es$",
      {
        "in": "$1",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "([tzlshicgrvdnkmu])es$",
      {
        "in": "$1e",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$",
      {
        "in": "$1",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(ow)s$",
      {
        "in": "$1",
        "g": "$1ing",
        "pa": "ew"
      }
    ],
    [
      "(op)s$",
      {
        "in": "$1",
        "g": "$1ping",
        "pa": "$1ped"
      }
    ],
    [
      "([eirs])ts$",
      {
        "in": "$1t",
        "g": "$1tting",
        "pa": "$1tted"
      }
    ],
    [
      "(ll)s$",
      {
        "in": "$1",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "(el)s$",
      {
        "in": "$1",
        "g": "$1ling",
        "pa": "$1led"
      }
    ],
    [
      "(ip)es$",
      {
        "in": "$1e",
        "g": "$1ing",
        "pa": "$1ed"
      }
    ],
    [
      "ss$",
      {
        "in": "ss",
        "g": "ssing",
        "pa": "ssed"
      }
    ],
    [
      "s$",
      {
        "in": "",
        "g": "ing",
        "pa": "ed"
      }
    ]
  ],
  "gerund": [
    [
      "pping$",
      {
        "in": "p",
        "pr": "ps",
        "pa": "pped"
      }
    ],
    [
      "lling$",
      {
        "in": "ll",
        "pr": "lls",
        "pa": "lled"
      }
    ],
    [
      "tting$",
      {
        "in": "t",
        "pr": "ts",
        "pa": "t"
      }
    ],
    [
      "ssing$",
      {
        "in": "ss",
        "pr": "sses",
        "pa": "ssed"
      }
    ],
    [
      "gging$",
      {
        "in": "g",
        "pr": "gs",
        "pa": "gged"
      }
    ],
    [
      "([^aeiou])ying$",
      {
        "in": "$1y",
        "pr": "$1ies",
        "pa": "$1ied",
        "do": "$1ier"
      }
    ],
    [
      "(i.)ing$",
      {
        "in": "$1e",
        "pr": "$1es",
        "pa": "$1ed"
      }
    ],
    [
      "(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$",
      {
        "in": "$1e",
        "pr": "$1es",
        "pa": "$1ed"
      }
    ],
    [
      "(ch|sh)ing$",
      {
        "in": "$1",
        "pr": "$1es",
        "pa": "$1ed"
      }
    ],
    [
      "(..)ing$",
      {
        "in": "$1",
        "pr": "$1s",
        "pa": "$1ed"
      }
    ]
  ],
  "past": [
    [
      "(ued)$",
      {
        "pr": "ues",
        "g": "uing",
        "pa": "ued",
        "do": "uer"
      }
    ],
    [
      "(e|i)lled$",
      {
        "pr": "$1lls",
        "g": "$1lling",
        "pa": "$1lled",
        "do": "$1ller"
      }
    ],
    [
      "(sh|ch)ed$",
      {
        "in": "$1",
        "pr": "$1es",
        "g": "$1ing",
        "do": "$1er"
      }
    ],
    [
      "(tl|gl)ed$",
      {
        "in": "$1e",
        "pr": "$1es",
        "g": "$1ing",
        "do": "$1er"
      }
    ],
    [
      "(ss)ed$",
      {
        "in": "$1",
        "pr": "$1es",
        "g": "$1ing",
        "do": "$1er"
      }
    ],
    [
      "pped$",
      {
        "in": "p",
        "pr": "ps",
        "g": "pping",
        "do": "pper"
      }
    ],
    [
      "tted$",
      {
        "in": "t",
        "pr": "ts",
        "g": "tting",
        "do": "tter"
      }
    ],
    [
      "gged$",
      {
        "in": "g",
        "pr": "gs",
        "g": "gging",
        "do": "gger"
      }
    ],
    [
      "(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$",
      {
        "in": "$1",
        "pr": "$1s",
        "g": "$1ing",
        "do": "$1er"
      }
    ],
    [
      "(..[^aeiou])ed$",
      {
        "in": "$1e",
        "pr": "$1es",
        "g": "$1ing",
        "do": "$1er"
      }
    ],
    [
      "ied$",
      {
        "in": "y",
        "pr": "ies",
        "g": "ying",
        "do": "ier"
      }
    ],
    [
      "(.o)ed$",
      {
        "in": "$1o",
        "pr": "$1os",
        "g": "$1oing",
        "do": "$1oer"
      }
    ],
    [
      "(.i)ed$",
      {
        "in": "$1",
        "pr": "$1s",
        "g": "$1ing",
        "do": "$1er"
      }
    ],
    [
      "([rl])ew$",
      {
        "in": "$1ow",
        "pr": "$1ows",
        "g": "$1owing"
      }
    ],
    [
      "([pl])t$",
      {
        "in": "$1t",
        "pr": "$1ts",
        "g": "$1ting"
      }
    ]
  ]
}
//unpack compressed form
verb_rules = Object.keys(verb_rules).reduce(function(h, k) {
  h[k] = verb_rules[k].map(function(a) {
    let obj = {
      reg: new RegExp(a[0], "i"),
      repl: {
        infinitive: a[1]["in"],
        present: a[1]["pr"],
        past: a[1]["pa"],
        gerund: a[1]["g"]
      }
    }
    if (a[1]["do"]) {
      obj.repl.doer = a[1]["do"]
    }
    return obj
  })
  return h
}, {})

module.exports = verb_rules;
// console.log(JSON.stringify(verb_rules, null, 2));

},{}],36:[function(require,module,exports){
'use strict'
var Term = require("../term.js")
var conjugate = require("./conjugate/conjugate.js")
var predict_form = require("./conjugate/predict_form.js")

let allowed_forms = {
  infinitive: 1,
  present: 1,
  past: 1,
  gerund: 1,
  doer: 1,
  future: 1
}

class Verb extends Term {
  constructor(str, form) {
    super(str)
    this.conjugations = {} //cached conjugations
    //if we've been told which
    if (form && allowed_forms[form]) {
      this._form = form
      this.conjugations[form] = this.normal
    }
  }

  //which current conjugation form it is
  form() {
    //if we haven't been told
    if (!this._form) {
      this._form = predict_form(this.normal)
    }
    //else, predict it
    return this._form
  }

  //retrieve a specific form
  conjugation(type) {
    type = type || "infinitive"
    //check cached conjugations
    if (this.conjugations[type] === undefined) {
      this.conjugate()
    }
  }

  //is this verb negative already?
  isNegative() {
    let str = this.normal
    if (str.match(/n't$/)) {
      return true
    }
    if (str.match(/ not$/)) {
      return true
    }
    return false
  }

  conjugate() {
    this.conjugations = conjugate(this.normal)
    return this.conjugations
  }
}

// let v = new Verb("walk", "asdf")
// console.log(v.form())

module.exports = Verb

},{"../term.js":26,"./conjugate/conjugate.js":30,"./conjugate/predict_form.js":31}],37:[function(require,module,exports){
//split a string into all possible parts
'use strict'
let fns = require("../fns.js")

//n-gram takes a list of pre-cleaned terms, and makes no assumptions
let ngram = function(terms, options) {
  options = options || {}
  let min_count = options.min_count || 1; // minimum hit-count
  let max_size = options.max_size || 5; // maximum gram count
  let keys = [null];
  let results = [];
  //prepare the keys object
  for (let i = 1; i <= max_size; i++) {
    keys.push({});
  }
  // Create a hash for counting..
  let textlen = terms.length;
  for (let i = 0; i < textlen; i++) {
    let s = terms[i];
    keys[1][s] = (keys[1][s] || 0) + 1;
    for (let j = 2; j <= max_size; j++) {
      if (i + j <= textlen) {
        s += " " + terms[i + j - 1];
        keys[j][s] = (keys[j][s] || 0) + 1;
      } else {
        break
      }
    }
  }
  // map the hash to an array for sorting
  for (let k = 1; k < max_size; k++) {
    results[k] = [];
    let key = keys[k];
    let words = Object.keys(keys[k])
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      if (key[word] >= min_count) {
        results[k].push({
          "word": word,
          "count": key[word],
          "size": k
        })
      }
    }
  }
  //post-process + sort
  results = fns.compact(results)
  results = results.map(function(r) {
    r = r.sort(function(a, b) {
      return b.count - a.count
    })
    return r;
  });
  return results
}

// console.log(ngram("hi dr nick! dr nick!".split(" ")))

module.exports = ngram

},{"../fns.js":5}],38:[function(require,module,exports){
//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2015 MIT
'use strict'
var abbreviations = require("../data/abbreviations")

var sentence_parser = function(text) {
  var sentences = [];
  //first do a greedy-split..
  var chunks = text.split(/(\S.+?[.\?!])(?=\s+|$|")/g);

  //date abbrevs.
  //these are added seperately because they are not nouns
  abbreviations = abbreviations.concat(["jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "sept", "sep"]);
  //misc non-noun abbreviations
  abbreviations = abbreviations.concat(["ex", "eg", "ie", "circa", "ca", "cca", "vs", "etc", "esp", "ft", "bc", "ad"])

  //detection of non-sentence chunks
  var abbrev_reg = new RegExp("\\b(" + abbreviations.join("|") + ")[.!?] ?$", "i");
  var acronym_reg = new RegExp("[ |\.][A-Z]\.?$", "i")
  var elipses_reg = new RegExp("\\.\\.\\.*$")

  //loop through these chunks, and join the non-sentence chunks back together..
  var chunks_length = chunks.length;
  for (let i = 0; i < chunks_length; i++) {
    if (chunks[i]) {
      //trim whitespace
      chunks[i] = chunks[i].replace(/^\s+|\s+$/g, "");
      //should this chunk be combined with the next one?
      if (chunks[i + 1] && chunks[i].match(abbrev_reg) || chunks[i].match(acronym_reg) || chunks[i].match(elipses_reg)) {
        chunks[i + 1] = ((chunks[i] || '') + " " + (chunks[i + 1] || '')).replace(/ +/g, " ");
      } else if (chunks[i] && chunks[i].length > 0) { //this chunk is a proper sentence..
        sentences.push(chunks[i]);
        chunks[i] = "";
      }
    }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text]
  }

  return sentences;
}
// console.log(sentence_parser('Tony is nice. He lives in Japan.').length === 2)
// console.log(sentence_parser('I like that Color').length === 1)
// console.log(sentence_parser("She was dead. He was ill.").length === 2)
// console.log(sentence_parser("i think it is good ... or else.").length === 1)

module.exports = sentence_parser


},{"../data/abbreviations":1}],39:[function(require,module,exports){
'use strict'
let sentence_parser = require("./sentence_parser.js")
let Sentence = require("../sentence/sentence.js")
let ngram = require("./ngram.js")
let fns = require("../fns.js")

//a text object is a series of sentences, along with the generic methods for transforming them
class Text {
  constructor(str) {
    this.str = str || "";
    this.sentences = sentence_parser(str).map(function(s) {
      return new Sentence(s)
    })
  }

  //Text methods
  ngram() {
    let terms = this.terms()
    terms = terms.map(function(t) {
      return t.normal
    })
    return ngram(terms)
  }

  //map over sentence methods
  text() {
    let arr = this.sentences.map(function(s) {
      return s.text()
    })
    return fns.flatten(arr).join(" ")
  }
  terms() {
    let arr = this.sentences.map(function(s) {
      return s.terms
    })
    return fns.flatten(arr)
  }
  normalised() {
    let arr = this.sentences.map(function(s) {
      return s.normalized()
    })
    return fns.flatten(arr).join(" ")
  }

}

// var n = new Text("Hii Dr. Nick! Hii")
// console.log(n.ngram())

module.exports = Text

},{"../fns.js":5,"../sentence/sentence.js":7,"./ngram.js":37,"./sentence_parser.js":38}]},{},[6]);