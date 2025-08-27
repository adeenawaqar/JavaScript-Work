// Day 17 Lecture...
// For Each with Map Method... 
// Map...
const currencies = new Map([
  ['USD', 'United State dollar'],
  ['EUR', 'EURO'],
  ['GBP', 'Pound Sealing'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// Set...
const CurrenceisUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
{
  console.log(CurrenceisUnique);
}

CurrenceisUnique.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});
