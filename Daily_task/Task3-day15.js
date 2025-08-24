// Day 15 lecture... 
// String practice... and Default Parameter....

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+' +
    '_Arrival;bru0943384722;fao93766109;11:45+' +
    '_Delayed_Arrival;hel17439299980;fao93766109;12:05+' +
    '_Departure;fao93766109;lis2323639855;12:30';
// Delayed departure from Fa0 to TXL (11h25)
// Arrival from BRU to Fa0 (11h45)
// Delayed Arrival from HEL to Fa0 (12h05)
// Departure from  Fa0 to LIS (12h03)

const getcode = str => str.slice(0, 3).toUpperCase()
for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    console.log(type);
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} ${getcode(from)} to ${getcode(to)} (${time.replace(':', 'h')})`;
    console.log(output);
}
