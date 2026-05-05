async function getDogFacts() {
  try {
    const res = await fetch("https://dogapi.dog/api/v2/facts");
    const data = await res.json();

    const facts = data.data.map(d => d.attributes.body);
    console.log(facts);

  } catch (err) {
    console.error(err);
  }
}

getDogFacts();


//Output:
// [     
//   "A dog's nose is wet because it helps them to absorb scents more easily."
// ]  