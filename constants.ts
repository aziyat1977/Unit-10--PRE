import { QuestionBank, LessonConfig, VocabEntry, VocabQuestion } from './types';

export const LESSONS: LessonConfig[] = [
  { id: 1, title: "10.1 A Question of Taste", color: "text-orange-500", gradient: "from-orange-500 to-red-500", icon: "🍋" },
  { id: 2, title: "10.2 Canned Dreams", color: "text-purple-500", gradient: "from-purple-500 to-pink-500", icon: "🥫" },
  { id: 3, title: "10.3 Food Waste", color: "text-teal-500", gradient: "from-teal-400 to-emerald-600", icon: "♻️" },
  { id: 4, title: "10.4 Restaurant Problems", color: "text-red-500", gradient: "from-red-500 to-rose-400", icon: "🍽️" },
  { id: 5, title: "10.5 Vocabulary Master", color: "text-indigo-500", gradient: "from-indigo-500 to-blue-500", icon: "📚" },
];

export const PERSONALITY_TIPS = {
    introvert: "Tip: Give 30s silence before asking for hands. Allow use of the Scratchpad.",
    extrovert: "Tip: Channel energy into the Reaction Bar. Use Debate Randomizer for fast finishers.",
    ambivert: "Tip: Use the Think-Pair-Share timer to ensure balanced participation."
};

export const QUESTIONS: QuestionBank = {
  1: ["What food makes you happy?", "Do you prefer sweet or savoury?", "What is the weirdest thing you've eaten?", "Do you like spicy food?", "What is your 'comfort food'?", "Describe the taste of lemon.", "Do you check food labels?", "Coffee: Sugar or No Sugar?"],
  2: ["How is bread made?", "How are cars made?", "What is your shirt made of?", "How is tea served in your country?", "Name something 'Imported'.", "Name something 'Hand-made'.", "Describe your favorite gadget.", "How is Plov cooked?"],
  3: ["Do you waste food?", "Do you use a shopping list?", "What do you do with leftovers?", "Do you trust 'Best Before' dates?", "Is plastic packaging bad?", "How can we save food?", "Do you compost?", "What is 'Food Waste'?"],
  4: ["Have you ever complained?", "Was the waiter rude?", "Did you get a refund?", "What if the soup is cold?", "How much do you tip?", "Do you send food back?", "Worst restaurant experience?", "Best service ever?"]
};

export const VOCAB_DATA: VocabEntry[] = [
  { word: "alcoholic drink", type: "n", phonetic: "/ˌælkəˈhɒlɪk drɪŋk/", ru: "алкогольный напиток", uz: "alkogolli ichimlik", example: "Wine is an alcoholic drink." },
  { word: "apple juice", type: "n", phonetic: "/ˈæpl dʒuːs/", ru: "яблочный сок", uz: "olma sharbati", example: "I drink apple juice for breakfast." },
  { word: "bake", type: "v", phonetic: "/beɪk/", ru: "печь, выпекать", uz: "pishirmoq (duxovkada)", example: "They're baked in the oven." },
  { word: "best before", type: "n", phonetic: "/ˌbest bɪˈfɔː(r)/", ru: "годен до", uz: "yaroqlilik muddati", example: "A 'best before' label tells you about quality." },
  { word: "bitter", type: "adj", phonetic: "/ˈbɪtə(r)/", ru: "горький", uz: "achchiq (ta'm)", example: "I don't like it. It's got a very bitter taste." },
  { word: "boiled", type: "adj", phonetic: "/bɔɪld/", ru: "вареный", uz: "qaynatilgan", example: "I don't like boiled vegetables." },
  { word: "bottle", type: "n", phonetic: "/ˈbɒtl/", ru: "бутылка", uz: "shisha", example: "Let's get a bottle of sparkling water." },
  { word: "can", type: "n", phonetic: "/kæn/", ru: "жестяная банка", uz: "konserva bankasi", example: "Can I have a can of lemonade?" },
  { word: "cardboard", type: "n", phonetic: "/ˈkɑːdbɔːd/", ru: "картон", uz: "картон", example: "This container is made from cardboard." },
  { word: "carton", type: "n", phonetic: "/ˈkɑːtn/", ru: "картонная коробка (пакет)", uz: "quti (qog'oz)", example: "There's a carton of juice in the fridge." },
  { word: "charge", type: "v", phonetic: "/tʃɑːdʒ/", ru: "брать плату", uz: "haq olmoq", example: "Supermarkets charge for bags." },
  { word: "chocolate", type: "n", phonetic: "/ˈtʃɒklət/", ru: "шоколад", uz: "shokolad", example: "He gave me chocolates for my birthday." },
  { word: "consumer", type: "n", phonetic: "/kənˈsjuːmə(r)/", ru: "потребитель", uz: "iste'molchi", example: "Consumers are responsible for waste." },
  { word: "curry", type: "n", phonetic: "/ˈkʌri/", ru: "карри", uz: "karri", example: "Most curry dishes are spicy." },
  { word: "dessert", type: "n", phonetic: "/dɪˈzɜːt/", ru: "десерт", uz: "shirinlik", example: "Would you like some cake for dessert?" },
  { word: "doggy bag", type: "n", phonetic: "/ˈdɒɡi bæɡ/", ru: "пакет для остатков еды", uz: "ovqat qoldiqlari uchun paket", example: "Ask the waiter for a doggy bag." },
  { word: "flavour", type: "n", phonetic: "/ˈfleɪvə(r)/", ru: "вкус, аромат", uz: "ta'm, hid", example: "Dip them in sauce for extra flavour." },
  { word: "frozen", type: "adj", phonetic: "/ˈfrəʊzn/", ru: "замороженный", uz: "muzlatilgan", example: "I need a packet of frozen peas." },
  { word: "fry", type: "v", phonetic: "/fraɪ/", ru: "жарить", uz: "qovurmoq", example: "Sometimes the spring rolls are fried." },
  { word: "herb", type: "n", phonetic: "/hɜːb/", ru: "трава (приправа)", uz: "ko'kat", example: "There are lots of herbs in this stew." },
  { word: "honey", type: "n", phonetic: "/ˈhʌni/", ru: "мёд", uz: "asal", example: "The tagine has honey in it." },
  { word: "jar", type: "n", phonetic: "/dʒɑː(r)/", ru: "стеклянная банка", uz: "banka", example: "Could you buy a jar of olives?" },
  { word: "kind of", type: "phr", phonetic: "/kaɪnd əv/", ru: "разновидность, типа", uz: "bir turi", example: "It's a kind of stew." },
  { word: "lamb", type: "n", phonetic: "/læm/", ru: "ягнятина", uz: "qo'zi go'shti", example: "This tagine is made with lamb." },
  { word: "left", type: "adj", phonetic: "/left/", ru: "левый", uz: "chap", example: "We took a left turn." },
  { word: "olives", type: "n", phonetic: "/ˈɒlɪvz/", ru: "оливки", uz: "zaytun", example: "Would you like some olives?" },
  { word: "packet", type: "n", phonetic: "/ˈpækɪt/", ru: "пакет, пачка", uz: "paket, pachka", example: "A packet of frozen peas." },
  { word: "plain", type: "adj", phonetic: "/pleɪn/", ru: "простой, без добавок", uz: "oddiy, qo'shimchasiz", example: "I prefer plain food." },
  { word: "preserve", type: "v", phonetic: "/prɪˈzɜːv/", ru: "сохранять", uz: "saqlamoq", example: "His invention preserved food." },
  { word: "raw", type: "adj", phonetic: "/rɔː/", ru: "сырой", uz: "xom", example: "They're filled with raw vegetables." },
  { word: "savoury", type: "adj", phonetic: "/ˈseɪvəri/", ru: "пикантный, несладкий", uz: "sho'rtak, mazali", example: "Do you prefer sweet or savoury food?" },
  { word: "serve", type: "v", phonetic: "/sɜːv/", ru: "подавать", uz: "tortmoq (taom)", example: "This dish is often served with rice." },
  { word: "sour", type: "adj", phonetic: "/ˈsaʊə(r)/", ru: "кислый", uz: "nordon", example: "Lime juice makes it sour." },
  { word: "sparkling water", type: "n", phonetic: "/ˌspɑːklɪŋ ˈwɔːtə(r)/", ru: "газированная вода", uz: "gazli suv", example: "Can I have some sparkling water?" },
  { word: "spice", type: "n", phonetic: "/spaɪs/", ru: "специя", uz: "ziravor", example: "Made with lots of different spices." },
  { word: "spicy", type: "adj", phonetic: "/ˈspaɪsi/", ru: "острый", uz: "achchiq", example: "I like spicy food." }
];

export const VOCAB_QUESTIONS: VocabQuestion[] = [
    { q: "What do you call a drink made from **apples**?", a: "Apple juice" },
    { q: "What is the opposite of **sweet**?", a: "Bitter or Sour" },
    { q: "If food is very hot with chili, it is...?", a: "Spicy" },
    { q: "What do you call the **container** for jam?", a: "A jar" },
    { q: "What do you call the **container** for cola?", a: "A can" },
    { q: "When you cook bread in an oven, you **_______** it.", a: "Bake" },
    { q: "When you cook meat in hot oil, you **_______** it.", a: "Fry" },
    { q: "What do you call the **date** when food goes bad?", a: "Best before" },
    { q: "Someone who buys things is a **_______**.", a: "Consumer" },
    { q: "Food that is not cooked is **_______**.", a: "Raw" }
];