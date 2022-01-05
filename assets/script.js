var inputEl = document.querySelector('#userInput')
var input = inputEl.value

fetch(`"https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=libra&${day=today}"`, {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
	}
})
.then(response => {

    var horoscopeData = response.json()
    .then(function (horoscopeData){
        console.log(horoscopeData)
    })
    // console.log(something)
})
.catch(err => {
	console.error(err);
});



// mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr

// test

var name = 'Michael Jordan'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
    headers: { 'X-Api-Key': 'mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr'},
    contentType: 'application/json',
    success: function(result) {
        // console.log(result);
		var celebBDay = result[0].birthdy
		// console.log(celebBDay)
		// console.log(celebBDay.slice(5))
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


// function testingFunc() {
// 	var zodiac = '02-17' 
// 	if (celebBDay.slice(5) != zodiac) {
// 		console.log('words')
// 	} else {
// 		console.log("doesn't work")
// 	}
// }
// testingFunc()



