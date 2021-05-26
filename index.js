const rp = require("request-promise");



let sentiment ={
    key:null,
    token:null
}



async function quote(symbol){
    let key = sentiment.key;
    let token = sentiment.token;

    var options = {
        uri: `https://sentimentinvestor.com/api/v3/quote?symbol=${symbol}&token=${token}&key=${key}`,
        json: true // Automatically parses the JSON string in the response
      };
    return rp(options).then(function (res) {
          return res
    


})
}


async function historical(symbol, metric){
    let key = sentiment.key;
    let token = sentiment.token;

    var options = {
        uri: `https://sentimentinvestor.com/api/v3/historical?metric=${metric}&symbol=${symbol}&token=${token}&key=${key}`,
        json: true // Automatically parses the JSON string in the response
      };
    return rp(options).then(function (res) {
          return res
    


})
}

async function sort(limit, metric){
    let key = sentiment.key;
    let token = sentiment.token;

    var options = {
        uri: `https://sentimentinvestor.com/api/v3/sort?limit=${limit}&metric=${metric}&token=${token}&key=${key}`,
        json: true // Automatically parses the JSON string in the response
      };
    return rp(options).then(function (res) {
          return res
    


})
}

let SentimentExportObject = {

    sentiment,
    quote,
    historical,
    sort,
    version:"1.0.9"


}

exports.Sentiment= SentimentExportObject;


