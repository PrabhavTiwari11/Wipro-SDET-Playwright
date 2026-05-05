// async function getDogFacts() {
//   try {
//     const res = await fetch("https://dogapi.dog/api/v2/facts");
//     const data = await res.json();

//     const facts = data.data.map(d => d.attributes.body);
//     console.log(facts);

//   } catch (err) {
//     console.error(err);
//   }
// }

// getDogFacts();


// //Output:
// // [     
// //   "A dog's nose is wet because it helps them to absorb scents more easily."
// // ]  






//----------------------------------------------------------------------------------------------------------------------------------------


// async function getCatFacts() {
//   try {
//     const res = await fetch("https://meowfacts.herokuapp.com/?count=2");
    
//     if (!res.ok) {
//       throw new Error(`HTTP error: ${res.status}`);
//     }

//     const data = await res.json();

//     console.log(data); // pura response

//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }

// getCatFacts();

// Output : 

// {
//   data: [
//     'Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!',
//     "The word 'cat' in various languages: French: chat; German: katze; Italian: gatto; Spanish/Portugese: gato; Yiddish: kats; Maltese: qattus; Swedish/Norwegian: katt; Dutch: kat; Icelandic: kottur; Greek: catta; Hindu: katas; Japanese:neko; Polish: kot; Ukranian: kotuk; Hawiian: popoki; Russian: koshka; Latin: cattus; Egyptian: mau; Turkish: kedi; Armenian: Gatz; Chinese: mao; Arabic: biss; Indonesian: kucing; Bulgarian: kotka; Malay: kucing; Thai/Vietnamese: meo; Romanian: pisica; Lithuanian: katinas; Czech: kocka; Slovak: macka; Armenian: gatz; Basque: catua; Estonian: kass; Finnish: kissa; Swahili: paka."
//   ]
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------



// async function getRandomEmoji() {
//   try {
//     const res = await fetch("https://emojihub.yurace.pro/api/random");

//     if (!res.ok) {
//       throw new Error(`HTTP error: ${res.status}`);
//     }

//     const data = await res.json();

//     console.log("Emoji:", data.name);
//     console.log("Category:", data.category);
//     console.log("Symbol:", data.htmlCode[0]);

//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }

// getRandomEmoji();

// Output : 

// Emoji: paw prints
// Category: animals and nature
// Symbol: &#128062;


//---------------------------------------------------------------------------------------------------------------------------------------------



// async function getCurrencyRates() {
//   try {
//     const res = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json");

//     if (!res.ok) {
//       throw new Error(`HTTP error: ${res.status}`);
//     }

//     const data = await res.json();

//     console.log(data);

//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }

// getCurrencyRates();

// Output :

//     xof: 652.742002,
//     xpf: 119.331742,
//     xrp: 0.83263078,
//     xtz: 3.17059072,
//     yer: 278.89146,
//     zar: 19.639274,
//     zec: 0.0027322315,
//     zil: 279.61296937,
//     zmk: 10520.09684,
//     zmw: 21.892311,
//     zwl: 376.334943



//---------------------------------------------------------------------------------------------------------------------------------------------



// fetch("https://api.portfoliooptimizer.io/v1/portfolios/optimization/minimum-variance", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     assets: 2,
//     assetsCovarianceMatrix: [
//       [0.0025, 0.0005],
//       [0.0005, 0.0100]
//     ]
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error("Error:", err));


//   Output :

//   { assetsWeights: [ 0.8260869565217391, 0.17391304347826086 ] }

//-------------------------------------------------------------------------------------------------------------------------------------------------



// async function getBiryaniImage() {
//   try {
//     const res = await fetch("https://foodish-api.com/api/images/biryani");
//     const data = await res.json();

//     console.log("Biryani Image:", data.image);

//   } catch (err) {
//     console.error(err);
//   }
// }

// getBiryaniImage();

// output : 

// Biryani Image: https://foodish-api.com/images/biryani/biryani79.jpg



//----------------------------------------------------------------------------------------------------------------------------------------------------



// fetch("https://api.disneyapi.dev/character")
//   .then(res => res.json())
//   .then(result => result.data)
//   .then(data => data.map(c => c.name))
//   .then(names => console.log(names))
//   .catch(err => console.error("Error:", err));

//   output :

//     'Captain Amelia',
//   'Amelia Duckworth',
//   'Captain Anderson',
//   'Erica Ange',
//   'Angela',
//   'Anthony Biddle',
//   'Apaches',
//   'Apothecary Gary',
//   'Aqua',
//   'Archibald Smelding',
//   'Mr. Arrow',
//   'Queen Athena'







//---------------------------------------------------------------------------------------------------------------------------------------------


// fetch("https://restcountries.com/v3.1/name/india")
//   .then(res => res.json())
//   .then(data => data[0])
//   .then(country => ({
//     name: country.name.common,
//     capital: country.capital?.[0]
//   }))
//   .then(result => console.log(result))
//   .catch(err => console.error("Error:", err));

//   output :

//   { name: 'India', capital: 'New Delhi' }



//--------------------------------------------------------------------------------------------------------------------------------------------------

// fetch("https://de1.api.radio-browser.info/json/stations")
//   .then(res => res.json())
//   .then(data => data.slice(0, 5))
//   .then(stations => stations.map(s => s.name))
//   .then(names => console.log(names))
//   .catch(err => console.error("Error:", err));


//   output : 

//     '\tArrow Classic Rock',
//   '\tBlasmusikradio mit Bernd',
//   '\tFun Radio',
//   '\tHard Rock Radio FM',
//   '\tKLVZ Legends 810AM/95.3 FM - Denver, CO'



//-------------------------------------------------------------------------------------------------------------------------------------------------



fetch("https://imdb.iamidiotareyoutoo.com/search?q=spiderman")
  .then(res => res.json())
  .then(data => data.description)
  .then(list => list.map(m => m["#TITLE"]))
  .then(titles => console.log(titles))
  .catch(err => console.error("Error:", err));


//   output :

//     'Spider-Man',
//   'Spiderman the Verse',
//   'Spider-Man: Brand New Day',
//   'Spider-Man: No Way Home',
//   'Italian Spiderman',
//   'The Amazing Spider-Man',
//   'Spider-Man: Across the Spider-Verse',
//   'The Amazing Spider-Man 2'