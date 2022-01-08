// User Details
var inputEl = document.querySelector('#month1')
var input = inputEl.value
var datePicker = document.querySelector('#datepicker')

// Buttons
var submit = document.querySelector('#submit-date')

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
var celebSign = document.querySelector('#celeb-sign')
var celebColor = document.querySelector('#celeb-color')
var celebCompatibility = document.querySelector('#celeb-compatibility')
var celebLucky_number = document.querySelector('#celeb-lucky_number')
var celebLucky_time = document.querySelector('#celeb-lucky_time')
var celebMood = document.querySelector('#celeb-mood')
var celebDescription = document.querySelector('#celeb-description')
var celebName = document.querySelector('#name')
var celebAge = document.querySelector('#age')
var height = document.querySelector('#occupation')
var celebNetWorth = document.querySelector('#net_worth')
// Date Picker
$( function() {
    $( "#datepicker" ).datepicker({
        changeYear: false,
        dateFormat: 'mm-dd',
        changeMonth: true,
    })
  } );

// Zodiac func var's
var zodiacArr =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];

// Empty celeb var's
var celebMonth;      
var celebDay;

// Celebrity Names
var name = 'Michael Jordan'
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

// On page load
if (localStorage.getItem('date')) {
    datePicker.value = localStorage.getItem('date') 
}

function zodiac(day, month){
    // returns the zodiac sign according to day and month (https://coursesweb.net/javascript/zodiac-signs_cs)
    return (day > last_day[month]) ? zodiacArr[month*1 + 1] : zodiacArr[month];
}

// Evenlisteners
submit.addEventListener('click', function(){
    localStorage.setItem('date', datepicker.value)
    var userBday = localStorage.getItem('date')
    var uBdayArr = userBday.split('/')
    var callZSign = zodiac(parseInt(uBdayArr[1]), parseInt(uBdayArr[0]))
    // Func that shows celeb details)
    dateToSign(callZSign)
})

function dateToSign (z_sign) {
    fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${z_sign}&day=today`, {
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
        }
    })
    .then(response => {
        return response.json();
    }).then(function (horoscopeData){
            userSign.innerHTML='Sign: ' + z_sign
            userColorLI.innerHTML="Color:  " + horoscopeData.color
            userCompLI.innerHTML="Compatibility:  " + horoscopeData.compatibility
            userDescLI.innerHTML="Horoscope:  " + horoscopeData.description
            luckyNumLI.innerHTML="Lucky Number:  " + horoscopeData.lucky_number
            luckyTimeLI.innerHTML="Lucky Time:  " + horoscopeData.lucky_time
            moodLi.innerHTML="Mood:  " + horoscopeData.mood
            // Switch statement to check the compatibility
            switch (horoscopeData.compatibility) {
                case 'Sagittarius':
                    var userCelebrity = Sagittarius[Math.floor(Math.random()*Sagittarius.length)]
                    console.log(userCelebrity)
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;
                case 'Aries':
                    var userCelebrity  = Aries[Math.floor(Math.random()*Aries.length)];
                    console.log(userCelebrity);
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;
                case 'Aquarius':
                    var userCelebrity  = Aquarius[Math.floor(Math.random()*Aquarius.length)];
                    console.log(userCelebrity);
                    celebFunc('Aquarius')
                    callCeleb(userCelebrity)
                    break;
                case 'Taurus':
                    var userCelebrity  = Taurus[Math.floor(Math.random()*Taurus.length)];
                    console.log(userCelebrity);
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;    
                case 'Capricorn':
                    var userCelebrity  = Capricorn[Math.floor(Math.random()*Capricorn.length)];
                    console.log(userCelebrity);
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;
                case 'Pisces':
                    var userCelebrity  = Pisces[Math.floor(Math.random()*Pisces.length)];
                    console.log(userCelebrity);
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;    
                case 'Gemini':
                    var userCelebrity  = Gemini[Math.floor(Math.random()*Gemini.length)];
                    console.log(userCelebrity);
                    celebFunc('Gemini')
                    callCeleb(userCelebrity)
                    break;
                case 'Cancer':
                    var userCelebrity  = Cancer[Math.floor(Math.random()*Cancer.length)];
                    console.log(userCelebrity);
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;
                case 'Leo':
                    var userCelebrity  = Leo[Math.floor(Math.random()*Leo.length)];
                    console.log(userCelebrity);
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;
                case 'Virgo':
                    var userCelebrity  = Virgo[Math.floor(Math.random()*Virgo.length)];
                    console.log(userCelebrity);
                    celebFunc('aries')
                    callCeleb(userCelebrity)
                    break;
                case 'Libra':
                    var userCelebrity  = Libra[Math.floor(Math.random()*Libra.length)];
                    console.log(userCelebrity);
                    celebFunc('libra')
                    callCeleb(userCelebrity)
                    break;
                case 'Scorpio':
                    var userCelebrity  = Scorpio[Math.floor(Math.random()*Scorpio.length)];
                    console.log(userCelebrity);
                    celebFunc('Scorpio')
                    callCeleb(userCelebrity)
                    break;
                default:
                    // console.log('wrong')
                    break;   
            }

    })
    .catch(err => {
        console.error(err)
    });
};

function celebFunc (z_sign) {
    fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${z_sign}&day=today`, {
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
        }
    })
    .then(response => {
        return response.json();
    }).then(function (horoscopeData){
        console.log(horoscopeData)
        celebSign.innerHTML = 'Sign: ' + z_sign
        celebColor.innerHTML="Color: " + horoscopeData.color
        // Compatibility doesn't match
        // celebCompatibility.innerHTML="Compatibility: " + horoscopeData.compatibility
        celebLucky_number.innerHTML="Lucky Number: " + horoscopeData.lucky_number
        celebLucky_time.innerHTML="Lucky Time: " + horoscopeData.lucky_time
        celebMood.innerHTML="Mood: " + horoscopeData.mood
        celebDescription.innerHTML="Desciption: " + horoscopeData.description
    })
    .catch(err => {
        console.error(err);
    });
};

// Call Celeb
function callCeleb (name) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
        headers: { 'X-Api-Key': 'mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr'},
        contentType: 'application/json',
        
    }).then((res) => {
        // console.log(res[0]);
        celebName.textContent = 'Who you are compatible with: ' + res[0].name;
        celebAge.textContent = res[0].age;
        height.textContent = res[0].height;
        celebNetWorth.textContent = res[0].net_worth;
    })
};


