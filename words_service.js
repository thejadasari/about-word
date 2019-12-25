const words = [
  "wraith",
  "demonstrable",
  "pertinacious",
  "laggard",
  "waffle",
  "loquacious",
  "venial",
  "effulgence",
  "fanfare",
  "dilettante",
  "pusillanimous",
  "ingrained",
  "quagmire",
  "reprobation",
  "mannered",
  "squeamish",
  "proclivity",
  "miserly",
  "mercurial",
  "perspicuous",
  "nonplus",
  "enamor",
  "hackneyed",
  "pedagogue",
  "masticate",
  "sinecure",
  "indite",
  "emetic",
  "temporize",
  "unimpeachable",
  "genesis",
  "mordant",
  "smattering",
  "suavity",
  "stentorian",
  "junket",
  "appurtenance",
  "nostrum",
  "immure",
  "astringent",
  "unfaltering",
  "tutelage",
  "testator",
  "elysian",
  "fulminate",
  "fractious",
  "pummel",
  "manumit",
  "unexceptionable",
  "triumvirate",
  "sybarite",
  "magisterial",
  "roseate",
  "obloquy",
  "hoodwink",
  "striate",
  "arrogate",
  "rarefied",
  "superannuated",
  "impolitic",
  "aspersion",
  "abysmal",
  "poignancy",
  "stilted",
  "effete",
  "provender",
  "endemic",
  "jocund",
  "procedural",
  "rakish",
  "skittish",
  "peroration",
  "nonentity",
  "abstemious",
  "viscid",
  "doggerel",
  "sleight",
  "rubric",
  "plenitude",
  "wizened",
  "fracas",
  "iconoclast",
  "saturnine",
  "madrigal",
  "discursive",
  "zealot",
  "moribund",
  "modicum",
  "connotation",
  "adventitious",
  "recondite",
  "zephyr",
  "countermand",
  "captious",
  "cognate",
  "forebear",
  "cadaverous",
  "dotage",
  "choleric",
  "garble",
  "bucolic",
  "denouement",
  "animus",
  "overweening",
  "largesse",
  "retentive",
  "unconscionable",
  "badinage",
  "insensate",
  "sherbet",
  "beatific",
  "bemuse",
  "microcosm",
  "factitious",
  "gestate",
  "traduce",
  "sextant",
  "coiffure",
  "malleable",
  "rococo",
  "fructify",
  "nihilist",
  "ellipsis",
  "accolade",
  "codicil",
  "grandiloquent",
  "inconsequential",
  "effervescence",
  "stultify",
  "tureen",
  "pellucid",
  "euphony",
  "apocryphal",
  "veracious",
  "pendulous",
  "exegesis",
  "effluvium",
  "apposite",
  "viscous",
  "misanthrope",
  "vintner",
  "halcyon",
  "anthropomorphic",
  "turgid",
  "malaise",
  "polemical",
  "gadfly",
  "atavism",
  "contusion",
  "parsimonious",
  "dulcet",
  "reprise",
  "anodyne",
  "bemused"
];
const fetch = require("node-fetch");
var responses = [];
async function getWordsData() {
  for (var word of words) {
    try {
      var response = await fetch(`http://localhost:3000/word?word=${word}`);
      const json = await response.json();
    //   console.log(json);
      responses.push(json);
    } catch (e) {
      console.error(word);
    }
  }
  console.log(JSON.stringify(responses));

}

getWordsData();


