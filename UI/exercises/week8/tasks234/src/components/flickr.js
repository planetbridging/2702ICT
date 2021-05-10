const https = require('https');

var flickr_key = "99872428c9a3629cc7186481eebd04fd";


var link =
  "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" +
  flickr_key +
  "&photo_id=38425335920&format=json&nojsoncallback=1";



export function getInterest() {
  var l =
    "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=" +
    flickr_key +
    "&format=json&nojsoncallback=1&per_page=5";

    return l;
}


export function dynamic_link(link){
    return new Promise((resolve, reject) => { 
        https.get(link, (resp) => {
            let data = '';
        
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
        
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              try{
                //console.log(JSON.parse(data).id);
                
                //let getUser = await getUserInfo(JSON.parse(data).id);
                var j = JSON.parse(data);
                resolve(j);
              }catch(e){
                console.log("token failed");
                resolve("");
              }
            });
        
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        });
}

export function dynamic_photo(link,priordata){
    return new Promise((resolve, reject) => { 
        https.get(link, (resp) => {
            let data = '';
        
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
        
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              try{
                //console.log(JSON.parse(data).id);
                
                //let getUser = await getUserInfo(JSON.parse(data).id);
                var j = JSON.parse(data);

                var lstsizes = j["sizes"]["size"];
                var item = "";
                for (var i = 0; i < lstsizes.length; i++) {
                    if (lstsizes[i]["label"] == "Square") {
                        item = lstsizes[i];
                        break;
                    }
                //console.log(lstsizes[i]);
                }

                var e = { p: priordata, j:j,t: item}
                resolve(e);
              }catch(e){
                console.log("token failed");
                resolve("");
              }
            });
        
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        });
}

export function getInterestLst(data){
    //console.log(data);
    var lstphotos = data["photos"]["photo"];
    var waitfordata = [];
    for (var i = 0; i < lstphotos.length; i++) {
        var l =
        "https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" +
        flickr_key +
        "&format=json&nojsoncallback=1" + "&photo_id=" + lstphotos[i]["id"];
        waitfordata.push(dynamic_photo(l,lstphotos[i]));
    }

    return Promise.all(waitfordata).then((values) => {
        return values;
    });
}