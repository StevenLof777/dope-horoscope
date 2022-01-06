// User Details
var inputEl = document.querySelector('#month1')
var input = inputEl.value

// User Details
var userDetailsUL = document.querySelector('#userDetails')
var userSign = document.querySelector('#sign')
var userColorLI = document.querySelector('#color')
var userCompLI = document.querySelector('#compatibility')
var userDescLI = document.querySelector('#description')
var luckyNumLI = document.querySelector('#lucky_number')
var luckyTimeLI = document.querySelector('#lucky_time')
var moodLi = document.querySelector('#mood')

// Celeb Details  
var celebSign = document.querySelector('#month1')
var celebColor = document.querySelector('#month1')
var celebCompatibility = document.querySelector('#month1')
var celebLucky_number = document.querySelector('#month1')
var celebLucky_time = document.querySelector('#month1')
var celebMood = document.querySelector('#month1')
var celebDescription = document.querySelector('#month1')

// Zodiac func var's
var zodiacArr =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];

// Celebrity Names
var name = 'Michael Jackson'
var Aries =["Emma Watson", "Paul Rudd"]
var Taurus =["Kelly Clarkson", "George Klooney"]
var Gemini =["Venus Williams", "Johnny Depp"]
var Cancer =["Selena Gomez", "Chris Pratt"]
var Leo =["Chris Hemsworth", "Jennifer Lawrence"]
var Virgo =["Beyonce", "Prince Harry"]
var Libra =["Kim Kardashian", "Lil Wayne"]
var Scorpio =["Leonardo DiCaprio", "Katy Perry"]
var Sagittarius =["Britney Spears", "Brad Pitt"]
var Capricorn =["Lin-Manuel Miranda", "Kate Middleton"]
var Aquarius =["Shakira", "Harry Styles"]
var Pisces =["Justin Bieber", "Olivia Rodrigo"]

function zodiac(day, month){
    // returns the zodiac sign according to day and month (https://coursesweb.net/javascript/zodiac-signs_cs)
    return (day > last_day[month]) ? zodiacArr[month*1 + 1] : zodiacArr[month];
}

var z_sign = 'virgo'

function callUser () {
    fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${z_sign}&day=today`, {
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
        }
    })
    .then(response => {
        var horoscopeData = response.json()
        .then(function (horoscopeData){
            userSign.innerHTML='Sign: ' + z_sign
            userColorLI.innerHTML="Color:  " + horoscopeData.color
            userCompLI.innerHTML="Compatibility:  " + horoscopeData.compatibility
            userDescLI.innerHTML="Description:  " + horoscopeData.description
            luckyNumLI.innerHTML="Lucky Number:  " + horoscopeData.lucky_number
            luckyTimeLI.innerHTML="Lucky Time:  " + horoscopeData.lucky_time
            moodLi.innerHTML="Mood:  " + horoscopeData.mood
        })
    })
    .catch(err => {
        console.error(err);
    });
}
callUser()

// Call Celeb
function callCeleb () {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
        headers: { 'X-Api-Key': 'mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr'},
        contentType: 'application/json',
        success: function(result) {
            var celebBDay = result[0].birthdy
            var celebBDayArr = celebBDay.slice(5).split('-')
            var celebMonth = parseInt(celebBDayArr[0])
            var celebDay = parseInt(celebBDayArr[1])
            // zodiac(celebDay, celebMonth)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    }).done(function( data ) {
    if ( console && console.log ) {
        console.log(celebBDay);
    }
});
}
callCeleb()

$.ajax({
    url: "https://fiddle.jshell.net/favicon.png",
    beforeSend: function( xhr ) {
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    }
  })
    .done(function( data ) {
      if ( console && console.log ) {
        console.log( "Sample of data:", data.slice( 0, 100 ) );
      }
    });

// Date Picker
$( function() {
    $( "#datepicker" ).datepicker();
  } );

