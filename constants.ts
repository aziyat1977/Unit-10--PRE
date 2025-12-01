import { QuestionBank, LessonConfig, GameLibrary, KahootQuestion, KahootGame, VocabEntry, VocabQuestion } from './types';

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

export const VOCAB_DATA: VocabEntry[] = [
  { word: "alcoholic drink", type: "n", phonetic: "/ˌælkəˈhɒlɪk drɪŋk/", ru: "алкогольный напиток", uz: "alkogolli ichimlik", example: "Wine is an alcoholic drink." },
  { word: "apple juice", type: "n", phonetic: "/ˈæpl dʒuːs/", ru: "яблочный сок", uz: "olma sharbati", example: "I drink apple juice for breakfast." },
  { word: "bake", type: "v", phonetic: "/beɪk/", ru: "печь, выпекать", uz: "pishirmoq (duxovkada)", example: "They're baked in the oven." },
  { word: "best before", type: "n", phonetic: "/ˌbest bɪˈfɔː(r)/", ru: "годен до", uz: "yaroqlilik muddati", example: "A 'best before' label tells you about quality." },
  { word: "bitter", type: "adj", phonetic: "/ˈbɪtə(r)/", ru: "горький", uz: "achchiq (ta'm)", example: "I don't like it. It's got a very bitter taste." },
  { word: "boiled", type: "adj", phonetic: "/bɔɪld/", ru: "вареный", uz: "qaynatilgan", example: "I don't like boiled vegetables." },
  { word: "bottle", type: "n", phonetic: "/ˈbɒtl/", ru: "бутылка", uz: "shisha", example: "Let's get a bottle of sparkling water." },
  { word: "box", type: "n", phonetic: "/bɒks/", ru: "коробка", uz: "quti", example: "We bought a box of chocolates." },
  { word: "can", type: "n", phonetic: "/kæn/", ru: "жестяная банка", uz: "konserva bankasi", example: "Can I have a can of lemonade?" },
  { word: "cardboard", type: "n", phonetic: "/ˈkɑːdbɔːd/", ru: "картон", uz: "karton", example: "This container is made from cardboard." },
  { word: "carton", type: "n", phonetic: "/ˈkɑːtn/", ru: "картонная коробка (пакет)", uz: "quti (qog'oz)", example: "There's a carton of juice in the fridge." },
  { word: "charge", type: "v", phonetic: "/tʃɑːdʒ/", ru: "брать плату", uz: "haq olmoq", example: "Supermarkets charge for bags." },
  { word: "chocolate", type: "n", phonetic: "/ˈtʃɒklət/", ru: "шоколад", uz: "shokolad", example: "He gave me chocolates for my birthday." },
  { word: "consumer", type: "n", phonetic: "/kənˈsjuːmə(r)/", ru: "потребитель", uz: "iste'molchi", example: "Consumers are responsible for waste." },
  { word: "curry", type: "n", phonetic: "/ˈkʌri/", ru: "карри", uz: "karri", example: "Most curry dishes are spicy." },
  { word: "dessert", type: "n", phonetic: "/dɪˈzɜːt/", ru: "десерт", uz: "shirinlik", example: "Would you like some cake for dessert?" },
  { word: "different", type: "adj", phonetic: "/ˈdɪfrənt/", ru: "разный, другой", uz: "turli xil", example: "There are many different sorts of rolls." },
  { word: "dish", type: "n", phonetic: "/dɪʃ/", ru: "блюдо", uz: "taom", example: "I usually serve this dish with vegetables." },
  { word: "doggy bag", type: "n", phonetic: "/ˈdɒɡi bæɡ/", ru: "пакет для остатков еды", uz: "ovqat qoldiqlari uchun paket", example: "Ask the waiter for a doggy bag." },
  { word: "figure", type: "n", phonetic: "/ˈfɪɡə(r)/", ru: "цифра", uz: "raqam", example: "It's a figure of a man." },
  { word: "flavour", type: "n", phonetic: "/ˈfleɪvə(r)/", ru: "вкус, аромат", uz: "ta'm, hid", example: "Dip them in sauce for extra flavour." },
  { word: "frozen", type: "adj", phonetic: "/ˈfrəʊzn/", ru: "замороженный", uz: "muzlatilgan", example: "I need a packet of frozen peas." },
  { word: "fry", type: "v", phonetic: "/fraɪ/", ru: "жарить", uz: "qovurmoq", example: "Sometimes the spring rolls are fried." },
  { word: "funny", type: "adj", phonetic: "/ˈfʌni/", ru: "смешной, странный", uz: "kulgili, g'alati", example: "A funny thing happened to me." },
  { word: "herb", type: "n", phonetic: "/hɜːb/", ru: "трава (приправа)", uz: "ko'kat", example: "There are lots of herbs in this stew." },
  { word: "honey", type: "n", phonetic: "/ˈhʌni/", ru: "мёд", uz: "asal", example: "The tagine has honey in it." },
  { word: "jar", type: "n", phonetic: "/dʒɑː(r)/", ru: "стеклянная банка", uz: "banka", example: "Could you buy a jar of olives?" },
  { word: "kind of", type: "phr", phonetic: "/kaɪnd əv/", ru: "разновидность, типа", uz: "bir turi", example: "It's a kind of stew." },
  { word: "lamb", type: "n", phonetic: "/læm/", ru: "ягнятина", uz: "qo'zi go'shti", example: "This tagine is made with lamb." },
  { word: "leave", type: "v", phonetic: "/liːv/", ru: "оставлять", uz: "qoldirmoq", example: "I've left some cake for you." },
  { word: "left", type: "adj", phonetic: "/left/", ru: "левый", uz: "chap", example: "We took a left turn." },
  { word: "mark", type: "n", phonetic: "/mɑːk/", ru: "оценка", uz: "baho", example: "What mark did you get in the test?" },
  { word: "olives", type: "n", phonetic: "/ˈɒlɪvz/", ru: "оливки", uz: "zaytun", example: "Would you like some olives?" },
  { word: "packet", type: "n", phonetic: "/ˈpækɪt/", ru: "пакет, пачка", uz: "paket, pachka", example: "A packet of frozen peas." },
  { word: "plain", type: "adj", phonetic: "/pleɪn/", ru: "простой, без добавок", uz: "oddiy, qo'shimchasiz", example: "I prefer plain food." },
  { word: "preserve", type: "v", phonetic: "/prɪˈzɜːv/", ru: "сохранять", uz: "saqlamoq", example: "His invention preserved food." },
  { word: "pretty", type: "adj", phonetic: "/ˈprɪti/", ru: "симпатичная", uz: "chiroyli", example: "She's a very pretty woman." },
  { word: "pretty", type: "adv", phonetic: "/ˈprɪti/", ru: "довольно", uz: "ancha", example: "It's pretty expensive." },
  { word: "raspberry", type: "n", phonetic: "/ˈrɑːzbəri/", ru: "малина", uz: "malina", example: "Would you like raspberries?" },
  { word: "raw", type: "adj", phonetic: "/rɔː/", ru: "сырой", uz: "xom", example: "They're filled with raw vegetables." },
  { word: "sauce", type: "n", phonetic: "/sɔːs/", ru: "соус", uz: "sous", example: "Dip it into this sauce." },
  { word: "savoury", type: "adj", phonetic: "/ˈseɪvəri/", ru: "пикантный, несладкий", uz: "sho'rtak, mazali", example: "Do you prefer sweet or savoury food?" },
  { word: "serve", type: "v", phonetic: "/sɜːv/", ru: "подавать", uz: "tortmoq (taom)", example: "This dish is often served with rice." },
  { word: "several", type: "pron", phonetic: "/ˈsevrəl/", ru: "несколько", uz: "bir qancha", example: "There are several different vegetables." },
  { word: "shocking", type: "adj", phonetic: "/ˈʃɒkɪŋ/", ru: "шокирующий", uz: "dahshatli", example: "It's a pretty shocking figure." },
  { word: "snack", type: "n", phonetic: "/snæk/", ru: "перекус", uz: "yengil tamaddi", example: "I have a small snack at 11 a.m." },
  { word: "sour", type: "adj", phonetic: "/ˈsaʊə(r)/", ru: "кислый", uz: "nordon", example: "Lime juice makes it sour." },
  { word: "sparkling water", type: "n", phonetic: "/ˌspɑːklɪŋ ˈwɔːtə(r)/", ru: "газированная вода", uz: "gazli suv", example: "Can I have some sparkling water?" },
  { word: "spice", type: "n", phonetic: "/spaɪs/", ru: "специя", uz: "ziravor", example: "Made with lots of different spices." },
  { word: "spicy", type: "adj", phonetic: "/ˈspaɪsi/", ru: "острый", uz: "achchiq (qalampirli)", example: "Chilli makes it spicy." },
  { word: "spinach", type: "n", phonetic: "/ˈspɪnɪtʃ/", ru: "шпинат", uz: "ismaloq", example: "Spinach has a bitter taste." },
  { word: "stew", type: "n", phonetic: "/stjuː/", ru: "рагу", uz: "dimlama", example: "I'm making lamb stew." },
  { word: "strawberry", type: "n", phonetic: "/ˈstrɔːbəri/", ru: "клубника", uz: "qulupnay", example: "You put strawberry jam on them." },
  { word: "tagine", type: "n", phonetic: "/təˈʒiːn/", ru: "тажин", uz: "tajin (tuvakda pishgan taom)", example: "Tagine is a kind of stew." },
  { word: "taste", type: "n", phonetic: "/teɪst/", ru: "вкус", uz: "ta'm", example: "This has a nice, bitter taste." },
  { word: "taste buds", type: "n", phonetic: "/ˈteɪst bʌdz/", ru: "вкусовые рецепторы", uz: "ta'm bilish retseptorlari", example: "It depends on the taste buds on your tongue." },
  { word: "texture", type: "n", phonetic: "/ˈtekstʃə(r)/", ru: "текстура", uz: "to'qima", example: "I love the different textures." },
  { word: "thick", type: "adj", phonetic: "/θɪk/", ru: "густой, толстый", uz: "quyuq, qalin", example: "This is quite a thick sauce." },
  { word: "tin", type: "n", phonetic: "/tɪn/", ru: "консервная банка", uz: "konserva", example: "I'm going to use a tin of tomatoes." },
  { word: "tobacco", type: "n", phonetic: "/təˈbækəʊ/", ru: "табак", uz: "tamaki", example: "Tobacco has a strong taste." },
  { word: "tomato", type: "n", phonetic: "/təˈmɑːtəʊ/", ru: "помидор", uz: "pomidor", example: "We need some tomatoes for salad." },
  { word: "toothpaste", type: "n", phonetic: "/ˈtuːθpeɪst/", ru: "зубная паста", uz: "tish pastasi", example: "I need to buy a tube of toothpaste." },
  { word: "transportation", type: "n", phonetic: "/ˌtrænspɔːˈteɪʃn/", ru: "транспортировка", uz: "tashish", example: "Waste happens during transportation." },
  { word: "tube", type: "n", phonetic: "/tjuːb/", ru: "тюбик", uz: "tyubik", example: "Did you pack a tube of toothpaste?" },
  { word: "use by", type: "n", phonetic: "/ˈjuːz baɪ/", ru: "использовать до", uz: "gacha foydalanish", example: "Check the 'use by' date." },
  { word: "wasteful", type: "adj", phonetic: "/ˈweɪstfl/", ru: "расточительный", uz: "isrofgar", example: "People are not as wasteful as they are today." }
];

export const VOCAB_QUESTIONS: VocabQuestion[] = [
  { q: "What **snack** do you buy when you play games or scroll social media?", a: "I usually buy a **snack** like **chocolate**. **Reasons:** It is quick and it gives me energy. **Examples:** I eat a small **packet** after school while I watch YouTube." },
  { q: "Do you prefer **sparkling water** or juice?", a: "I prefer **sparkling water**. **Reasons:** It tastes fresh and it isn’t too sweet. **Examples:** I drink a **bottle** of **sparkling water** after football." },
  { q: "What do you drink at breakfast: **apple juice** or tea?", a: "I often drink **apple juice**. **Reasons:** It is sweet and easy to make. **Examples:** I buy a **carton** of **apple juice** and keep it in the fridge." },
  { q: "Do you like **spicy** food or **plain** food?", a: "I like **spicy** food. **Reasons:** The **spice** gives strong **flavour**. **Examples:** I eat **curry** with rice when I’m really hungry." },
  { q: "What **dish** do you eat with your family on weekends?", a: "We usually eat one special **dish** together. **Reasons:** It feels warm and family-like. **Examples:** My mum makes a **stew** and we **serve** it with bread." },
  { q: "When you go to a café, do you ask for a **doggy bag** sometimes?", a: "Yes, I ask for a **doggy bag** sometimes. **Reasons:** I don’t want to be **wasteful**. **Examples:** If I can’t finish dessert, I take it home." },
  { q: "Do you ever **bake** food at home?", a: "Yes, I sometimes **bake** simple food. **Reasons:** It is easy and healthier than **fry**. **Examples:** I **bake** potatoes and they taste great with **sauce**." },
  { q: "Do you like **boiled** vegetables?", a: "Not really, I don’t like **boiled** vegetables. **Reasons:** The **texture** feels too soft. **Examples:** I prefer **raw** carrots with a little **sauce**." },
  { q: "What is your favourite **dessert**?", a: "My favourite **dessert** is ice cream with fruit. **Reasons:** It is sweet and refreshing. **Examples:** I add **strawberry** or **raspberry** on top." },
  { q: "Do you like **bitter** tastes?", a: "No, I don’t like **bitter** tastes. **Reasons:** My **taste buds** don’t enjoy it. **Examples:** I don’t like very dark chocolate because it tastes **bitter**." },
  { q: "What do you usually buy in a **box**?", a: "I sometimes buy sweets in a **box**. **Reasons:** It is good for sharing with friends. **Examples:** I bring a **box** of **chocolate** to birthdays." },
  { q: "What do you usually buy in a **can**?", a: "I sometimes buy a drink in a **can**. **Reasons:** It is cheap and easy to carry. **Examples:** I buy a **can** of lemonade on hot days." },
  { q: "What do you keep in a **jar** at home?", a: "We keep some food in a **jar**. **Reasons:** It stays clean and safe. **Examples:** We have a **jar** of **honey** or **olives**." },
  { q: "Do shops in your city **charge** for bags?", a: "Yes, many shops **charge** for bags. **Reasons:** They want less plastic and less waste. **Examples:** If you forget your bag, they **charge** you at the checkout." },
  { q: "Do you often buy **frozen** food?", a: "Yes, I sometimes buy **frozen** food. **Reasons:** It is fast and easy for busy days. **Examples:** I buy a **packet** of **frozen** peas." },
  { q: "What is your favourite sauce?", a: "My favourite **sauce** is garlic sauce. **Reasons:** It adds strong **flavour**. **Examples:** I dip fries into **sauce** when I eat fast food." },
  { q: "What do you think is a **shocking** thing on social media?", a: "Some videos are **shocking**. **Reasons:** People do dangerous things for likes. **Examples:** I see a **shocking figure** like “1 million views in 1 hour.”" },
  { q: "Do you like **sour** tastes?", a: "Yes, I like **sour** tastes sometimes. **Reasons:** It feels fresh and fun. **Examples:** I drink lemon **juice** and it tastes **sour**." },
  { q: "What **kind of** games do you play?", a: "I play a **kind of** team game. **Reasons:** It is more fun with friends. **Examples:** We play shooters and we talk on Discord." },
  { q: "Do you like **savoury** snacks or sweet snacks?", a: "I like **savoury** snacks more. **Reasons:** Sweet things get boring quickly. **Examples:** I eat chips with **spice** and **sauce**." },
  { q: "What food do you think has the best **texture**?", a: "I think pizza has great **texture**. **Reasons:** It is soft and a bit crispy. **Examples:** The cheese is **thick** and the crust is crunchy." },
  { q: "Do you ever look at the **best before** date?", a: "Yes, I check the **best before** date. **Reasons:** I want good quality food. **Examples:** I check the milk and yogurt before I buy them." },
  { q: "Do you ever check the **use by** date?", a: "Yes, I check the **use by** date carefully. **Reasons:** It is about safety. **Examples:** I check meat and eggs for the **use by** date." },
  { q: "Do you think people are more **wasteful** today?", a: "Yes, people are more **wasteful** today. **Reasons:** They buy too much and throw food away. **Examples:** Some people leave food and don’t take a **doggy bag**." },
  { q: "What drink do you buy in a **bottle**?", a: "I often buy water in a **bottle**. **Reasons:** It is easy for school. **Examples:** I buy a **bottle** of **sparkling water**." },
  { q: "What do you think about **alcoholic drink** ads online?", a: "I don’t like **alcoholic drink** ads for teens. **Reasons:** They can influence young people. **Examples:** I report ads when I see them on social media." },
  { q: "What **herb** do you like in food?", a: "I like the **herb** basil. **Reasons:** It makes food smell nice. **Examples:** I add this **herb** to pasta with tomato **sauce**." },
  { q: "Do you like **honey** in tea?", a: "Yes, I like **honey** in tea. **Reasons:** It tastes sweet and feels healthy. **Examples:** When I have a cold, I drink tea with **honey**." },
  { q: "Do you eat **olives**?", a: "Yes, I eat **olives** sometimes. **Reasons:** They have a strong taste. **Examples:** I eat **olives** from a **jar** with salad." },
  { q: "What’s your favourite **tomato** food?", a: "I like pasta with **tomato** **sauce**. **Reasons:** It tastes rich and simple. **Examples:** I use a **tin** of **tomato** when we have no fresh ones." },
  { q: "Do you ever buy food in a **tin**?", a: "Yes, I buy food in a **tin** sometimes. **Reasons:** It lasts longer. **Examples:** I buy a **tin** of tomatoes for quick cooking." },
  { q: "Do you like **spinach**?", a: "Yes, I like **spinach** in some meals. **Reasons:** It is healthy and easy to cook. **Examples:** I put **spinach** in eggs or soup." },
  { q: "What do you usually put in your school bag: **toothpaste** or snacks?", a: "I sometimes pack **toothpaste** for trips. **Reasons:** I want to feel fresh. **Examples:** I pack a **tube** of **toothpaste** when I travel." },
  { q: "Do you prefer to **fry** or **bake** food?", a: "I prefer to **bake** food. **Reasons:** **Fry** uses more oil. **Examples:** I **bake** chicken and it still tastes great." },
  { q: "When do you usually have a **snack**?", a: "I have a **snack** in the afternoon. **Reasons:** I feel hungry after school. **Examples:** I eat a **packet** of nuts or a banana." },
  { q: "What is a **shocking figure** about online games?", a: "A **shocking figure** is how much money people spend. **Reasons:** Skins and packs are tempting. **Examples:** Some players spend $100 in one week." },
  { q: "Do you think you are a smart **consumer** online?", a: "I try to be a smart **consumer**. **Reasons:** Ads can trick people. **Examples:** I read reviews before I buy headphones." },
  { q: "What food has a strong **flavour** in your country?", a: "Plov has strong **flavour**. **Reasons:** It has meat, carrots, and **spice**. **Examples:** At weddings, we **serve** a big **dish** of plov." },
  { q: "Do you prefer **different** games or one game all the time?", a: "I like **different** games. **Reasons:** I get bored quickly. **Examples:** I play sports games, racing, and story games." },
  { q: "What do you do when you get a bad **mark** at school?", a: "I try to fix it after a bad **mark**. **Reasons:** I want to improve. **Examples:** I study more and ask my teacher for help." },
  { q: "What **kind of** food do you order with friends?", a: "We order a **kind of** fast food. **Reasons:** It is cheap and quick. **Examples:** We share pizza and **sparkling water**." },
  { q: "Do you like **raw** vegetables?", a: "Yes, I like **raw** vegetables. **Reasons:** They are crunchy and fresh. **Examples:** I eat **raw** carrots with **sauce**." },
  { q: "What is your favourite **dessert** to post on Instagram?", a: "I post colourful **dessert** photos. **Reasons:** People like sweet pictures. **Examples:** I post cake with **strawberry** on top." },
  { q: "Do you like **plain** food?", a: "Sometimes I like **plain** food. **Reasons:** After spicy meals, I need a break. **Examples:** I eat **plain** rice with a little **sauce**." },
  { q: "Do your parents ever **preserve** food at home?", a: "Yes, my family sometimes **preserve** food. **Reasons:** It saves money and it lasts longer. **Examples:** We **preserve** tomatoes in jars for winter." },
  { q: "Do you think it’s **pretty** easy to save money as a teen?", a: "No, it’s **pretty** hard. **Reasons:** Snacks and games cost money. **Examples:** If I buy a **snack** every day, I lose a lot." },
  { q: "Who is a **pretty** person you follow on social media?", a: "I follow some **pretty** influencers. **Reasons:** Their style and photos look nice. **Examples:** They post travel videos and outfits." },
  { q: "Do you like **thick** sauces?", a: "Yes, I like **thick** sauces. **Reasons:** They have strong **flavour**. **Examples:** I like a **thick** cheese **sauce** on pasta." },
  { q: "What is the best **dish** for a cold day?", a: "The best **dish** is **stew**. **Reasons:** It is warm and filling. **Examples:** We make a meat **stew** with herbs." },
  { q: "Do you like **curry**?", a: "Yes, I like **curry**. **Reasons:** It is **spicy** and tasty. **Examples:** I eat chicken **curry** with rice." },
  { q: "What’s your favourite fruit: **strawberry** or **raspberry**?", a: "I prefer **strawberry**. **Reasons:** It tastes sweeter. **Examples:** I add **strawberry** to yogurt as a **snack**." },
  { q: "Do you like the **taste** of energy drinks?", a: "Not really, I don’t like the **taste**. **Reasons:** It feels too sweet and strong. **Examples:** I choose **sparkling water** instead." },
  { q: "When you buy food, do you look at the **figure** (number) on the price tag?", a: "Yes, I look at the **figure**. **Reasons:** I must control my money. **Examples:** If the **figure** is high, I buy a cheaper **packet**." },
  { q: "What do you usually buy in a **carton**?", a: "I buy juice in a **carton**. **Reasons:** It is easy to store. **Examples:** I buy a **carton** of **apple juice**." },
  { q: "What do you think about **cardboard** packaging?", a: "I like **cardboard** packaging. **Reasons:** It is better for the environment. **Examples:** Many juices come in a **carton** made of **cardboard**." },
  { q: "Do you think it’s okay to **charge** extra for online delivery?", a: "Yes, it is okay to **charge** extra sometimes. **Reasons:** Delivery costs money. **Examples:** If the shop is far, they **charge** more." },
  { q: "What is your favourite **chocolate**?", a: "My favourite **chocolate** is milk chocolate. **Reasons:** It tastes sweet, not **bitter**. **Examples:** I buy a small bar as a **snack**." },
  { q: "Do you ever take leftover food home?", a: "Yes, I take it home. **Reasons:** I don’t want to be **wasteful**. **Examples:** I ask for a **doggy bag** after dinner." },
  { q: "What do you usually put in a **packet**?", a: "I buy snacks in a **packet**. **Reasons:** It is cheap and easy. **Examples:** I buy a **packet** of chips for game night." },
  { q: "Do you like food with many **spices**?", a: "Yes, I like food with **spice**. **Reasons:** It makes the **taste** interesting. **Examples:** I like **spicy** shawarma with garlic **sauce**." },
  { q: "Do you like **sour** candy?", a: "Yes, I like **sour** candy sometimes. **Reasons:** It feels fun and strong. **Examples:** My face changes because it tastes so **sour**." },
  { q: "What is a **funny** moment you share with friends?", a: "We share **funny** memes. **Reasons:** They make us laugh and relax. **Examples:** We send a **funny** video in our group chat." },
  { q: "Do you like **lamb**?", a: "Yes, I like **lamb** sometimes. **Reasons:** It tastes rich. **Examples:** My family cooks **lamb** in a **stew**." },
  { q: "Have you ever tried **tagine**?", a: "Yes, I try **tagine** once. **Reasons:** I like **different** food. **Examples:** It is a **kind of** **stew** with spices." },
  { q: "What is your favourite **dish** to **serve** guests?", a: "We **serve** plov to guests. **Reasons:** It is traditional and filling. **Examples:** We **serve** a big **dish** and everyone shares." },
  { q: "Do you have **several** close friends or just one best friend?", a: "I have **several** close friends. **Reasons:** I like meeting **different** people. **Examples:** We play games and travel together." },
  { q: "What do you usually **leave** at home when you go out?", a: "I sometimes **leave** my charger at home. **Reasons:** I forget easily. **Examples:** Then my phone dies and I can’t watch videos." },
  { q: "Do you prefer a sweet **dessert** or a **savoury** snack?", a: "I prefer sweet **dessert**. **Reasons:** It feels like a reward. **Examples:** I eat cake with **honey** or fruit." },
  { q: "Do you like **boiled** eggs or fried eggs?", a: "I like **boiled** eggs. **Reasons:** They are simple and healthy. **Examples:** I eat two **boiled** eggs for breakfast." },
  { q: "What food looks “Instagram-worthy” because it’s **pretty**?", a: "Cakes look very **pretty**. **Reasons:** They have bright colours and nice shapes. **Examples:** A strawberry cake with **sauce** looks amazing." },
  { q: "Do you like **frozen** dessert?", a: "Yes, I like **frozen** dessert. **Reasons:** It is cool in summer. **Examples:** I eat **frozen** ice cream after school." },
  { q: "What do you usually buy in a **bottle** for a trip?", a: "I buy water in a **bottle**. **Reasons:** I need hydration. **Examples:** On a bus trip, I drink **sparkling water**." },
  { q: "Do you think teens spend too much money on games?", a: "Yes, many teens spend too much. **Reasons:** They want skins and upgrades. **Examples:** They see a **shocking figure** on their bank app." },
  { q: "What **kind of** **transportation** do you use to school?", a: "I use public **transportation**. **Reasons:** It is cheaper than a taxi. **Examples:** I take the bus and walk 5 minutes." },
  { q: "What’s a healthy **snack** you like?", a: "I like fruit as a healthy **snack**. **Reasons:** It is natural and fresh. **Examples:** I eat a **strawberry** or **raspberry** yogurt." },
  { q: "Do you like **spinach** in salad?", a: "Yes, I like **spinach** in salad. **Reasons:** It tastes fresh and light. **Examples:** I eat **spinach** with **tomato** and olives." },
  { q: "Do you ever buy **toothpaste** because of a cool ad?", a: "Sometimes, yes. **Reasons:** Ads influence young **consumers**. **Examples:** I buy a new **tube** of **toothpaste** after I see an ad." },
  { q: "What food has the best **flavour** in your opinion?", a: "I think kebab has amazing **flavour**. **Reasons:** It has smoke, meat, and **spice**. **Examples:** I eat it with **sauce** and bread." },
  { q: "Do you like **plain** chips or **spicy** chips?", a: "I prefer **spicy** chips. **Reasons:** The **taste** is stronger. **Examples:** I buy a **packet** of hot chips." },
  { q: "What do you do if a product is past its **best before** date?", a: "I don’t buy it if it is past **best before**. **Reasons:** It may taste bad. **Examples:** I choose a fresher yogurt with a later date." },
  { q: "What do you do if something is past its **use by** date?", a: "I throw it away if it is past **use by**. **Reasons:** Safety is important. **Examples:** I don’t eat chicken after the **use by** date." },
  { q: "Do you like **raw** fish (like sushi)?", a: "Not really, I don’t like **raw** fish. **Reasons:** The **texture** feels strange to me. **Examples:** I prefer cooked fish or chicken." },
  { q: "What **different** food do you want to try while travelling?", a: "I want to try **different** food. **Reasons:** It is exciting and cultural. **Examples:** I want to try **tagine** and **curry**." },
  { q: "What do you think about people smoking **tobacco**?", a: "I don’t like **tobacco** smoking. **Reasons:** It smells bad and hurts health. **Examples:** I avoid places where people smoke **tobacco**." },
  { q: "What do you usually buy in a **tin** when you are busy?", a: "I buy soup in a **tin** sometimes. **Reasons:** It is fast. **Examples:** I heat it and **serve** it with bread." },
  { q: "Do you like **olives** on pizza?", a: "Yes, I like **olives** on pizza. **Reasons:** They add salty **flavour**. **Examples:** I choose pizza with **olives** and extra cheese." },
  { q: "Do you enjoy cooking with **herbs**?", a: "Yes, I enjoy cooking with **herb** flavours. **Reasons:** It makes food smell nice. **Examples:** I add a green **herb** to **tomato** **sauce**." },
  { q: "When you eat out, do you prefer sharing **several** dishes?", a: "Yes, I like sharing **several** dishes. **Reasons:** We can try **different** tastes. **Examples:** We order a **dish** for each person and share." },
  { q: "What is a food that tastes **bitter** to you?", a: "Some dark chocolate tastes **bitter** to me. **Reasons:** I prefer sweeter flavours. **Examples:** I choose milk chocolate instead." },
  { q: "What is a food that tastes **sour** to you?", a: "Lemon tastes **sour** to me. **Reasons:** It has strong acid. **Examples:** If I add lemon to **sauce**, it becomes **sour**." },
  { q: "Do you like a **thick** soup or a light soup?", a: "I like a **thick** soup. **Reasons:** It fills me up. **Examples:** I like a **thick** lentil **stew**." },
  { q: "What do you do with food you can’t finish at home?", a: "I keep it for later. **Reasons:** I don’t want to be **wasteful**. **Examples:** I put it in a **box** and eat it tomorrow." },
  { q: "What **mark** makes you feel proud?", a: "I feel proud of a high **mark**. **Reasons:** It shows my hard work. **Examples:** If I get 90%, I share it with my family." },
  { q: "Do you prefer drinks in **glass bottles** or **cans**?", a: "I prefer a **bottle**. **Reasons:** It feels cleaner and tastes better. **Examples:** I buy a **bottle** of water, not a **can**." },
  { q: "What do you do when you see a **shocking** post online?", a: "I ignore it or report it. **Reasons:** Some content is unsafe. **Examples:** If I see a **shocking** video, I click “report.”" },
  { q: "What do you keep in a **tube** at home?", a: "I keep **toothpaste** in a **tube**. **Reasons:** Everyone needs it daily. **Examples:** I buy a new **tube** each month." },
  { q: "Do you like a **spicy** **sauce** or a sweet sauce?", a: "I like a **spicy** **sauce**. **Reasons:** It makes food exciting. **Examples:** I add **spicy** **sauce** to chicken." },
  { q: "Do you think online shopping creates more waste for the **consumer**?", a: "Yes, it creates more waste for the **consumer**. **Reasons:** There is too much packaging. **Examples:** A small item comes in a big **box** and **cardboard**." },
  { q: "What do you usually pack for travel in terms of food?", a: "I pack simple snacks. **Reasons:** Travel food is expensive. **Examples:** I take a **packet** of biscuits and a **bottle** of water." },
  { q: "If you could change one habit to save money, what is it? checklist all.", a: "I stop buying too many snacks. **Reasons:** Small spending becomes a big **figure**. **Examples:** If I don’t buy a daily **snack**, I save enough for a game." }
];

export const QUESTIONS: QuestionBank = {
  1: [
    "What is the weirdest thing you have ever eaten?", "Do you think you are a 'supertaster'? Why?", "What food do you absolutely hate?",
    "Do you prefer sweet or savory snacks?", "Can you cook? What is your specialty?", "Is posting food photos on Instagram annoying or cool?",
    "What is the best national dish of your country?", "Have you ever tried sushi? Did you like it?", "Do you put pineapple on pizza? Is it a crime?",
    "What do you eat for breakfast on school days?", "What is the spiciest thing you've ever tasted?", "Do you prefer fast food or home-cooked food?",
    "If you could only eat one food for the rest of your life, what would it be?", "Is being a vegetarian healthy?", "Do you drink coffee? How do you take it?",
    "What is the most expensive meal you've ever had?", "Do you like trying food from other countries?", "What is a 'texture' you hate?", 
    "Do you like dark chocolate or milk chocolate?", "Have you ever watched a cooking show like MasterChef?", "Who cooks in your house?",
    "What is your favorite restaurant?", "Do you check calories before eating?", "Is street food safe to eat?", "What do you eat when you are sad?",
    "What do you eat when you are celebrating?", "Do you use chopsticks well?", "Have you ever burned a meal while cooking?", "Do you like seafood?",
    "What is a common snack in your school cafeteria?", "Do you prefer tea or juice?", "Is organic food worth the extra money?", 
    "Do you add salt to your food before tasting it?", "Have you ever made a cake?", "What is the traditional Christmas/Holiday meal in your family?",
    "Do you like sour candy?", "What food reminds you of your childhood?", "Is it rude to leave food on your plate?", "Do you eat dinner with your family or in your room?",
    "What is the worst restaurant experience you've had?", "Have you ever had food poisoning?", "Do you like spicy Korean noodles?", "What is a 'comfort food' for you?",
    "Do you think insects will be the food of the future?", "Have you ever grown your own vegetables?", "Do you prefer sparkling water or still water?",
    "Is buffet food usually good quality?", "What is a food trend you see on TikTok?", "Do you like olives?", "If you opened a restaurant, what kind of food would you serve?"
  ],
  2: [
    "Do you eat canned food? What kind?", "Is fresh food always better than frozen food?", "How is your favorite snack made? Do you know?",
    "Have you ever seen a 'How It's Made' video?", "Which country produces the best cars?", "Which country is known for making chocolate?",
    "Do you recycle cans and bottles?", "What is the most useful invention in history?", "Do you think robots will make all our food in the future?",
    "How is coffee produced?", "Is plastic packaging a big problem?", "Have you ever opened a can without a can opener?", "What happens to trash after you throw it away?",
    "Where was your phone manufactured?", "What clothes are made in your country?", "Do you prefer glass bottles or plastic bottles?", "Have you ever visited a factory?",
    "How is bread made?", "Should we stop using plastic bags?", "What is the oldest object in your house? Who made it?", "Do you trust food expiration dates?",
    "How is ketchup made?", "What is the strangest canned food you've seen?", "Are you interested in engineering?", "If you could invent a machine, what would it do?",
    "How are exams graded in your school?", "When was your house built?", "Who was the internet invented by?", "Do you think space travel will be common soon?",
    "Where are bananas grown?", "Is it important to know where your food comes from?", "Do you read the label on food packaging?", "How are diamonds formed?",
    "What gets recycled in your city?", "How is paper made?", "Do you prefer handmade gifts or store-bought gifts?", "Who cleans your room?", "When is your birthday celebrated?",
    "What languages are spoken in Switzerland?", "How is electricity generated in your country?", "Do you own anything made of real leather?", "How are French fries prepared at McDonald's?",
    "What ingredients are found in Coca-Cola?", "How is rice cooked?", "Who was Romeo and Juliet written by?", "When was your school founded?", "How are viral videos created?",
    "Is art appreciated enough in schools?", "Are teenagers listened to by politicians?", "What traditional crafts are made in your culture?"
  ],
  3: [
    "How often do you throw food away?", "Does your family compost?", "Should supermarkets sell 'ugly' fruit for cheaper prices?", "Do you finish everything on your plate?",
    "What is the biggest environmental problem today?", "Do you use reusable water bottles?", "Is climate change worrying you?", "Do you think one person can make a difference?",
    "How much water do you use in a shower?", "Do you turn off lights when you leave a room?", "Should plastic bags be banned completely?", "Do you buy second-hand clothes?",
    "Is eating meat bad for the environment?", "Do you donate old clothes or throw them away?", "How do you get to school?", "Do you believe in global warming?",
    "What happens to the leftovers in your fridge?", "Do you think schools waste too much paper?", "Would you eat an apple with a bruise on it?", "Do you prefer baths or showers?",
    "Is tap water safe to drink in your country?", "Do you judge people who litter?", "Have you ever planted a tree?", "Should fast fashion (Shein, H&M) be stopped?",
    "Do you care about the 'Carbon Footprint' of your food?", "Would you eat 'lab-grown' meat to save the planet?", "Do you separate paper, plastic, and glass?",
    "Is it cool to be eco-friendly?", "What companies are bad for the environment?", "Do you think electric cars are the future?", "Have you ever participated in a clean-up day?",
    "Do you leave the tap running while brushing your teeth?", "Do you buy local food?", "Is packaging essential?", "What is the 'Best Before' date? Do you ignore it?",
    "Can technology solve the waste crisis?", "Do you think we consume too much 'stuff'?", "Would you buy a phone that is refurbished (used)?",
    "Is it the government's job or our job to fix waste?", "How many bins do you have in your house?", "Do you use plastic straws?", "What is 'upcycling'?",
    "Have you ever fixed something instead of buying a new one?", "Do you share food with friends?", "Is vegetarianism popular in your country?",
    "Do you think celebrities waste too much resources?", "What will the earth look like in 50 years?", "Do you think animals have rights?", "Is hunting ever okay?",
    "What is one thing you will do today to save waste?"
  ],
  4: [
    "How often do you eat at restaurants?", "Do you tip waiters? How much?", "Have you ever complained in a restaurant?", "What is more important: Good food or good service?",
    "Do you prefer loud, lively restaurants or quiet ones?", "Have you ever sent food back to the kitchen?", "Is it rude to use your phone at the dinner table?",
    "Do you take photos of your food before eating?", "What is the best pizza topping?", "What is the worst pizza topping?", "Do you read Google Reviews before going to a place?",
    "Have you ever written a review online?", "Would you eat at a restaurant with a 1-star rating?", "Do you prefer sitting inside or outside?", "Is it okay to split the bill on a first date?",
    "Do you like fast food chains like KFC or McDonald's?", "What is your favorite dessert?", "Do you like trying new restaurants or sticking to ones you know?",
    "Have you ever worked as a waiter/waitress?", "Is the customer always right?", "What do you do if you find a bug in your salad?", "Do you like buffets?",
    "Is street food better than restaurant food?", "Do you dress up when you go out for dinner?", "How long is too long to wait for food?", "Do you like live music in restaurants?",
    "Is it rude to chew with your mouth open?", "Do you know table manners?", "Do you prefer eating alone or with friends?", "What is the fanciest restaurant in your city?",
    "Do you order the same thing every time?", "Do you like spicy food challenges?", "Is water free in restaurants in your country?", "Do you like 'All You Can Eat' places?",
    "Have you ever dined and dashed?", "Do you prefer appetizers or desserts?", "Is it rude to blow your nose at the table?", "Do you like open kitchens?",
    "Have you ever had a birthday party at a restaurant?", "Do you verify the bill/check before paying?", "Do you prefer chain restaurants or family-owned spots?",
    "What is the most romantic restaurant you know?", "Do you like ordering takeout/delivery?", "Which food delivery app do you use?", "Is it rude to be late for a dinner reservation?",
    "Do you like trying 'Chef's Specials'?", "Do you understand menus in English?", "What do you do if the waiter forgets your order?", "Do you like greasy food?",
    "If you could have dinner with one famous person, who would it be?"
  ],
  5: [] // Replaced by VOCAB_QUESTIONS
};

// --- GAME GENERATOR LOGIC ---

const createQuestion = (id: number, text: string, correct: string, wrongs: string[]): KahootQuestion => {
    const all = [correct, ...wrongs];
    for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
    }

    const shapes = ['triangle', 'diamond', 'circle', 'square'] as const;
    const colors = ['red', 'blue', 'yellow', 'green'] as const;

    return {
        id,
        text,
        isDoublePoints: [7, 14, 21].includes(id),
        timeLimit: [7, 14, 21].includes(id) ? 30 : 20,
        answers: all.map((ans, idx) => ({
            text: ans,
            isCorrect: ans === correct,
            shape: shapes[idx],
            color: colors[idx]
        }))
    };
};

const generateGamesForLesson = (lessonId: number): KahootGame[] => {
    const games: KahootGame[] = [];
    const gameTitles = [
        "Vocabulary Blaster", "Grammar Master", "Speed Run", "The Ultimate Review", 
        "Odd One Out", "True or False?", "Fill the Gap", "Exam Prep", "Team Challenge", "Bonus Round"
    ];

    for (let g = 0; g < 10; g++) {
        const questions: KahootQuestion[] = [];
        
        for (let q = 1; q <= 21; q++) {
            let qText = "";
            let correct = "";
            let wrongs: string[] = [];
            const type = q % 3; 

            if (lessonId === 1) { // TASTE
                if (type === 0) {
                     const scenarios = [
                         { text: "I am good at ______.", ans: "cooking", dist: ["cook", "to cook", "cooked"] },
                         { text: "______ is my hobby.", ans: "Eating", dist: ["Eat", "To eat", "Ate"] },
                         { text: "He avoids ______ meat.", ans: "eating", dist: ["eat", "to eat", "eaten"] },
                         { text: "They enjoy ______.", ans: "swimming", dist: ["swim", "to swim", "swam"] },
                         { text: "Are you interested in ______?", ans: "learning", dist: ["learn", "to learn", "learned"] }
                     ];
                     const s = scenarios[q % scenarios.length];
                     qText = s.text; correct = s.ans; wrongs = s.dist;
                } else if (type === 1) {
                    const items = [
                        { i: "Lemon", a: "Sour", w: ["Sweet", "Salty", "Bland"] },
                        { i: "Chili", a: "Spicy", w: ["Sour", "Bitter", "Creamy"] },
                        { i: "Coffee", a: "Bitter", w: ["Salty", "Sour", "Savory"] },
                        { i: "Cake", a: "Sweet", w: ["Spicy", "Savory", "Bitter"] },
                        { i: "Potato Chips", a: "Salty", w: ["Sweet", "Bitter", "Bland"] }
                    ];
                    const i = items[q % items.length];
                    qText = `How does a ${i.i} taste?`; correct = i.a; wrongs = i.w;
                } else {
                     const items = [
                        { i: "Yogurt", a: "Creamy", w: ["Crunchy", "Hard", "Dry"] },
                        { i: "Carrot", a: "Crunchy", w: ["Soft", "Liquid", "Creamy"] },
                        { i: "Old Bread", a: "Stale", w: ["Fresh", "Juicy", "Spicy"] },
                        { i: "Water", a: "Bland", w: ["Chewy", "Crunchy", "Dry"] }
                    ];
                    const i = items[q % items.length];
                    qText = `Describe the texture: ${i.i}`; correct = i.a; wrongs = i.w;
                }
            } 
            else if (lessonId === 2) { // PRODUCTION
                if (type === 0) {
                    const scenarios = [
                        { text: "Coffee ______ in Brazil.", ans: "is grown", dist: ["grows", "are grown", "growing"] },
                        { text: "Cars ______ in factories.", ans: "are made", dist: ["is made", "making", "make"] },
                        { text: "The box ______ of plastic.", ans: "is made", dist: ["make", "are made", "making"] },
                        { text: "Apples ______ in autumn.", ans: "are harvested", dist: ["is harvested", "harvesting", "harvests"] },
                        { text: "This song ______ by a star.", ans: "was sung", dist: ["sung", "singing", "is sing"] }
                    ];
                    const s = scenarios[q % scenarios.length];
                    qText = s.text; correct = s.ans; wrongs = s.dist;
                } else if (type === 1) {
                     const items = [
                        { i: "Coke", a: "Can", w: ["Jar", "Packet", "Tube"] },
                        { i: "Jam", a: "Jar", w: ["Can", "Box", "Bag"] },
                        { i: "Toothpaste", a: "Tube", w: ["Tin", "Jar", "Carton"] },
                        { i: "Juice", a: "Carton", w: ["Packet", "Tube", "Tin"] },
                        { i: "Chips", a: "Packet", w: ["Tube", "Jar", "Bottle"] }
                    ];
                    const i = items[q % items.length];
                    qText = `Container: A ______ of ${i.i}.`; correct = i.a; wrongs = i.w;
                } else {
                     const items = [
                        { q: "To carry goods to another place", a: "Transport", w: ["Grow", "Harvest", "Melt"] },
                        { q: "To clean with water", a: "Wash", w: ["Pack", "Transport", "Mine"] },
                        { q: "To put in a box", a: "Package", w: ["Grow", "Cook", "Eat"] },
                        { q: "To make in a factory", a: "Manufacture", w: ["Grow", "Farm", "Pick"] }
                    ];
                    const i = items[q % items.length];
                    qText = i.q; correct = i.a; wrongs = i.w;
                }
            }
            else if (lessonId === 3) { // WASTE
                 if (type === 0) {
                    const scenarios = [
                        { text: "I have a car. I drive ______.", ans: "it", dist: ["them", "those", "these"] },
                        { text: "Look at the stars. ______ are bright.", ans: "They", dist: ["It", "This", "That"] },
                        { text: "I hate waste. ______ is bad.", ans: "It", dist: ["They", "Those", "These"] },
                        { text: "I like red apples, not green ______.", ans: "ones", dist: ["one", "it", "them"] },
                        { text: "Do you like this shirt or ______ one?", ans: "that", dist: ["those", "these", "they"] }
                    ];
                    const s = scenarios[q % scenarios.length];
                    qText = s.text; correct = s.ans; wrongs = s.dist;
                } else if (type === 1) {
                     const items = [
                        { q: "Place for trash", a: "Landfill", w: ["Park", "School", "Ocean"] },
                        { q: "Safe to eat", a: "Edible", w: ["Rotten", "Toxic", "Waste"] },
                        { q: "Not fresh anymore", a: "Rotten", w: ["Edible", "Tasty", "Yummy"] },
                        { q: "Use again", a: "Reuse", w: ["Throw", "Burn", "Waste"] }
                    ];
                    const i = items[q % items.length];
                    qText = i.q; correct = i.a; wrongs = i.w;
                } else {
                     const items = [
                        { q: "How much food is wasted?", a: "33%", w: ["10%", "90%", "5%"] },
                        { q: "Where should apple cores go?", a: "Compost", w: ["Trash", "Recycle", "River"] },
                        { q: "Glass bottles are...", a: "Recyclable", w: ["Trash", "Edible", "Dangerous"] },
                        { q: "Buying only what you need...", a: "Reduces waste", w: ["Increases waste", "Is bad", "Is costly"] }
                    ];
                    const i = items[q % items.length];
                    qText = i.q; correct = i.a; wrongs = i.w;
                }
            }
            else { // RESTAURANTS
                 if (type === 0) {
                    const scenarios = [
                        { text: "The ______ pad.", ans: "waiter's", dist: ["waiters", "waiter", "waiters's"] },
                        { text: "______ a problem.", ans: "There's", dist: ["Theres", "There is", "Their"] },
                        { text: "______ raining today.", ans: "It's", dist: ["Its", "It is", "Is"] },
                        { text: "My ______ house (2 people).", ans: "parents'", dist: ["parents's", "parent's", "parents"] },
                        { text: "The ______ food (1 person).", ans: "customer's", dist: ["customers", "customer", "customers'"] }
                    ];
                    const s = scenarios[q % scenarios.length];
                    qText = s.text; correct = s.ans; wrongs = s.dist;
                } else if (type === 1) {
                     const items = [
                        { q: "Person who serves food", a: "Waiter", w: ["Chef", "Manager", "Guest"] },
                        { q: "Extra money for service", a: "Tip", w: ["Bill", "Menu", "Tax"] },
                        { q: "List of dishes", a: "Menu", w: ["List", "Bill", "Order"] },
                        { q: "The paper to pay", a: "Bill", w: ["Menu", "Tip", "Receipt"] }
                    ];
                    const i = items[q % items.length];
                    qText = i.q; correct = i.a; wrongs = i.w;
                } else {
                     const items = [
                        { q: "Polite: '______ me...'", a: "Excuse", w: ["Listen", "Look", "Hey"] },
                        { q: "Polite: 'I'm ______ there is a mistake.'", a: "afraid", w: ["scared", "sad", "happy"] },
                        { q: "Rude: '______ here!'", a: "Come", w: ["Could you come", "Excuse me", "Please"] },
                        { q: "Polite: 'Could I ______ have...'", a: "possibly", w: ["now", "do", "can"] }
                    ];
                    const i = items[q % items.length];
                    qText = i.q; correct = i.a; wrongs = i.w;
                }
            }

            if ([7, 14, 21].includes(q)) {
                qText = `DOUBLE POINTS: ${qText}`;
            }

            questions.push(createQuestion(q, qText, correct, wrongs));
        }

        games.push({
            id: `L${lessonId}-G${g+1}`,
            title: `${gameTitles[g]}`,
            description: `Level ${g+1} Challenge covering grammar, vocab and trivia.`,
            questions: questions
        });
    }

    return games;
};

export const GAMES: GameLibrary = {
    1: generateGamesForLesson(1),
    2: generateGamesForLesson(2),
    3: generateGamesForLesson(3),
    4: generateGamesForLesson(4),
    5: generateGamesForLesson(1) // Placeholder for lesson 5 games
};