
function randomNumberGenerator(num){
    // TAKES A NUMBER (NUM) AND RETURNS A RANDOM NUMBER BETWEEN 0 AND NUM
    return Math.floor(Math.random()* num); 
};

const subject = ['bullfrog', 'femme', 'racoon', 'weasel', 'badger', 'sloth', 'buffalo-mouse', 'otter'];
const adjective = ['happiness', 'sadness', 'joyfulness', 'grumpiness', 'wackiness'];
const noun = ['banana', 'tantrum', 'fart', 'pickle', 'mango'];
const condition = ['simple', 'tone deaf', 'fervent', 'ridiculous','ferocious'];
const beverage = ['Beer', 'Coca Cola', 'fanta', 'Dr Pepper', 'bedbull'];

const randSubject = randomNumberGenerator(subject.length);
const randAdjective = randomNumberGenerator(adjective.length);
const randNoun = randomNumberGenerator(noun.length);
const randCondition = randomNumberGenerator(condition.length);
const randBeverage = randomNumberGenerator(beverage.length);

const sentenceStarters = {
    iInspire: [`Always know that a ${subject[randSubject]}s ${adjective[randAdjective]} dictates how the 
                ${noun[randNoun]} taste. It's a ${condition[randCondition]} philosophy - Monsieur Croque`],
    iDrink: [`Never drink ${beverage[randBeverage]}, it is very bad for you. When you reach my age, your belly feels 
                immense ${adjective[randAdjective]} and your ${noun[randNoun]}... well... very bad! - Jack Whiskers`],
    iRespect: [`Keeping a ${subject[randSubject]} really does brighten up a household, they very seldom bore you. - Lao Bear`],
    iAct: [`Have a ${noun[randNoun]}, have another ${noun[randNoun]}. If you suffer from 
                ${adjective[randAdjective]} have and have some more! - Leau Jung `],
    iMatter: [`What is matter? -Never mind. What is mind? -No matter. said the 
                ${condition[randCondition]} ${subject[randSubject]} - Gertrude Mussels`],
    iGamble: [`${subject[randSubject]} does not play dice with ${adjective[randAdjective]} after drinking 
                ${beverage[randBeverage]} - Cadmus Oachkatzlschwoaf`],
    iThink: [`Cogito, Ergo Sum said no ${subject[randSubject]}! - i R baBOon`],
    iLove: [`The story of the ${subject[randSubject]} is quicker than a wink of an eye.
            The story of ${beverage[randBeverage]} is hello and goodbye until we party again - Marshall AsteriX`],
    isweet: [`A Bomboloni is a bomboloni! - ${subject[randSubject]} Fragatti`],
    iDare: [`We can’t hold hands... Someone might see. Won't you please... Hold toes with me? - sHeLf ${subject[randSubject]}ein`],
    iTravel: [`In Corsica do as Corsicans, but remember to never offer a ${noun[randNoun]} to ${subject[randSubject]} Bonaparte - Dov`]
};

function returnRandomObjectKey(anObject) {
    const keys = Object.keys(anObject);
    return keys[Math.floor(Math.random() * keys.length)];
};

console.log(sentenceStarters[returnRandomObjectKey(sentenceStarters)]);
