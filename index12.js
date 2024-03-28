// 12. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
// convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression. (Exchange rates : 1 US Dollar =
// 155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)**

var us_dollar = 10
console.log(us_dollar)
var saudi_riyal = 25
console.log(saudi_riyal)

var usd_to_pkr = 155
console.log(usd_to_pkr)
var sar_to_pkr = 41
console.log(sar_to_pkr)

var totalPkr = (us_dollar * usd_to_pkr) + (saudi_riyal * sar_to_pkr)
console.log(totalPkr)

