function reset() {localStorage.clear()}

//Making these variables global
var money
var cropsGrowing
var cropsMature
var marketStatus
var weather = []
var windspeed
var fields
var globalIdentifier = 3

var lastLogin
var currentLogin
var timeSinceLastLogin

var hourAsOfWeek

// let mondayWeather = ['dark', 'dark', 'dark', 'dark', 'sunny', 'sunny', 'sunny', 'cloudy', 'downcast', 'rainy', 'rainy', 'rainy', 'rainy', 'downcast', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'sunny', 'dark', 'dark', 'dark', 'dark', 'dark']
// let tuesdayWeather = ['dark', 'dark', 'dark', 'dark', 'dark', 'cloudy', 'cloudy', 'cloudy', 'downcast', 'downcast', 'rainy', 'rainy', 'stormy', 'stormy', 'stormy', 'stormy', 'rainy', 'downcast', 'cloudy', 'dark', 'dark', 'dark', 'dark', 'dark']
// let wednesdayWeather = ['dark', 'dark', 'dark', 'dark', 'dark', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'cloudy', 'downcast', 'rainy', 'downcast', 'cloudy', 'dark', 'dark', 'dark', 'dark', 'dark']
// let thursdayWeather = ['dark', 'dark', 'dark', 'dark', 'cloudy', 'cloudy', 'rainy', 'stormy', 'stormy', 'stormy', 'disastrous', 'stormy', 'rainy', 'rainy', 'downcast', 'rainy', 'downcast', 'cloudy', 'sunny', 'sunny', 'dark', 'dark', 'dark', 'dark']
// let fridayWeather = ['dark', 'dark', 'dark', 'cloudy', 'cloudy', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'downcast', 'snowy', 'cloudy', 'cloudy', 'snowy', 'cloudy', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'dark', 'dark']
// let saturdayWeather = ['dark', 'dark', 'cloudy', 'sunny', 'sunny', 'sunny', 'sunny', 'downcast', 'downcast', 'rainy', 'rainy', 'rainy', 'stormy', 'stormy', 'disastrous', 'stormy', 'stormy', 'rainy', 'rainy', 'downcast', 'downcast', 'dark', 'dark', 'dark']
// let sundayWeather = ['dark', 'dark', 'dark', 'dark', 'dark', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'cloudy', 'downcast', 'downcast', 'downcast', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'dark', 'dark', 'dark', 'dark']
let weatherLoop = ['dark', 'dark', 'dark', 'dark', 'sunny', 'sunny', 'sunny', 'cloudy', 'downcast', 'rainy', 'rainy', 'rainy', 'rainy', 'downcast', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'sunny', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'cloudy', 'cloudy', 'cloudy', 'downcast', 'downcast', 'rainy', 'rainy', 'stormy', 'stormy', 'stormy', 'stormy', 'rainy', 'downcast', 'cloudy', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'cloudy', 'downcast', 'rainy', 'downcast', 'cloudy', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'cloudy', 'cloudy', 'rainy', 'stormy', 'stormy', 'stormy', 'disastrous', 'stormy', 'rainy', 'rainy', 'downcast', 'rainy', 'downcast', 'cloudy', 'sunny', 'sunny', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'cloudy', 'cloudy', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'downcast', 'snowy', 'cloudy', 'cloudy', 'snowy', 'cloudy', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'dark', 'dark', 'dark', 'dark', 'cloudy', 'sunny', 'sunny', 'sunny', 'sunny', 'downcast', 'downcast', 'rainy', 'rainy', 'rainy', 'stormy', 'stormy', 'disastrous', 'stormy', 'stormy', 'rainy', 'rainy', 'downcast', 'downcast', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'dark', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'cloudy', 'downcast', 'downcast', 'downcast', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'dark', 'dark', 'dark', 'dark']

// let mondayWindSpeed = [0,1,1,1,2,3,4,3,5,7,6,5,4,4,4,3,4,5,5,6,7,7,6,7]
// let tuesdayWindSpeed = [7,8,8,9,10,7,5,4,5,6,5,5,6,13,15,16,11,9,7,5,4,3,2,2,1]
// let wednesdayWindSpeed = [3,4,4,3,4,5,7,8,7,9,10,12,13,14,11,9,8,7,7,6,4,3,2,1]
// let thursdayWindSpeed = [2,2,3,2,6,9,11,14,16,18,23,19,15,14,11,8,7,5,4,3,2,3,4]
// let fridayWindSpeed = [5,4,6,5,3,5,4,5,6,7,8,9,11,9,7,5,5,4,3,6,4,6,3,2]
// let saturdayWindSpeed = [4,8,9,11,12,14,15,14,13,16,15,13,19,20,34,28,26,20,17,12,9,7,6,5]
// let sundayWindSpeed = [5,5,5,5,5,4,4,4,4,4,3,3,3,6,5,7,4,3,2,2,1,2,1,0]
let windLoop = [0,1,1,1,2,3,4,3,5,7,6,5,4,4,4,3,4,5,5,6,7,7,6,7,7,8,8,9,10,7,5,4,5,6,5,5,6,13,15,16,11,9,7,5,4,3,2,2,1,3,4,4,3,4,5,7,8,7,9,10,12,13,14,11,9,8,7,7,6,4,3,2,1,2,2,3,2,6,9,11,14,16,18,23,19,15,14,11,8,7,5,4,3,2,3,4,5,4,6,5,3,5,4,5,6,7,8,9,11,9,7,5,5,4,3,6,4,6,3,2,4,8,9,11,12,14,15,14,13,16,15,13,19,20,34,28,26,20,17,12,9,7,6,5,5,5,5,5,5,4,4,4,4,4,3,3,3,6,5,7,4,3,2,2,1,2,1,0]

// let sundayMarket = [2,3,5,5,5,8,8,8,9,9,9,9,8,8,9,10,10,8,5,4,3,3,2,1]
// let mondayMarket = [-12,-13,-12,-4,5,7,10,13,9,7,6,10,11,15,17,10,5,1,-3,-7,-9,-12,-13,-11]
// let tuesdayMarket = [-11,-12,-10,-8,0,1,4,6,9,12,15,17,19,19,15,10,6,2,-3,-6,-7,-8,-9,-19]
// let wednesdayMarket = [-7,-6,-5,-3,-1,4,5,6,6,7,8,9,8,6,4,3,3,2,2,1,0,-1,-4,-16]
// let thursdayMarket = [-19,-10,-4,1,4,7,10,13,8,5,3,-1,-3,0,2,4,6,8,9,5,-1,-3,-6,-7]
// let fridayMarket = [-23,-21,-19,-15,-12,-9,-6,-4,-1,3,5,8,10,14,17,21,22,19,17,14,9,6,2,-1]
// let saturdayMarket = [0,0,0,0,1,2,2,3,4,4,5,6,7,8,9,9,10,11,11,12,12,11,10,9]
let marketLoop = [2,3,5,5,5,8,8,8,9,9,9,9,8,8,9,10,10,8,5,4,3,3,2,1,-12,-13,-12,-4,5,7,10,13,9,7,6,10,11,15,17,10,5,1,-3,-7,-9,-12,-13,-11,-11,-12,-10,-8,0,1,4,6,9,12,15,17,19,19,15,10,6,2,-3,-6,-7,-8,-9,-19,-7,-6,-5,-3,-1,4,5,6,6,7,8,9,8,6,4,3,3,2,2,1,0,-1,-4,-16,-19,-10,-4,1,4,7,10,13,8,5,3,-1,-3,0,2,4,6,8,9,5,-1,-3,-6,-7,-23,-21,-19,-15,-12,-9,-6,-4,-1,3,5,8,10,14,17,21,22,19,17,14,9,6,2,-1,0,0,0,0,1,2,2,3,4,4,5,6,7,8,9,9,10,11,11,12,12,11,10,9]

let sunnyMult = -5
let cloudyMult = 2
let downcastMult = -5
let rainyMult = -10
let stormyMult = 7
let snowyMult = 12
let disastrousMult = 20
let darkMult = 15

var timeMult
var sellMult

window.onload = function() {

    //Variable Setup
    if (localStorage.getItem('hasLoggedIn') == null) {
        money = 1
        cropsGrowing = 0
        cropsMature = 0
        marketStatus = 0
        weather.push('sunny')
        weather.push('sunny')
        weather.push('sunny')
        weather.push('sunny')
        windspeed = 3
        lastLogin = Date.now()
        currentLogin = Date.now()
        timeSinceLastLogin = 0
        fields = 3

        localStorage.setItem('money', money)
        localStorage.setItem('cropsGrowing', cropsGrowing)
        localStorage.setItem('cropsMature', cropsMature)
        localStorage.setItem('marketStatus', marketStatus)
        localStorage.setItem('weatherCurrent', weather[0])
        localStorage.setItem('weatherNext', weather[1])
        localStorage.setItem('weatherFollowing', weather[2])
        localStorage.setItem('weatherLater', weather[3])
        localStorage.setItem('windspeed', windspeed)
        localStorage.setItem('fields', fields)

        localStorage.setItem('hasLoggedIn', 'true')
        localStorage.setItem('lastLogin', lastLogin)
    } else {
        money = localStorage.getItem('money')
        cropsGrowing = localStorage.getItem('cropsGrowing')
        cropsMature = localStorage.getItem('cropsMature')
        marketStatus = localStorage.getItem('marketStatus')
        weather.push(localStorage.getItem('weatherCurrent'))
        weather.push(localStorage.getItem('weatherNext'))
        weather.push(localStorage.getItem('weatherFollowing'))
        weather.push(localStorage.getItem('weatherLater'))
        windspeed = localStorage.getItem('windspeed')
        fields = parseInt(localStorage.getItem('fields'))

        lastLogin = localStorage.getItem('lastLogin')
        currentLogin = Date.now()
        timeSinceLastLogin = currentLogin - lastLogin

        let calls = fields/3
        for (var i = 1; i < calls; i++) {
            upgrade2()
        }
    }

    //UI Setup
    document.getElementById('money').innerHTML = '$' + money
    document.getElementById('cropsGrowing').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + cropsGrowing + ' Crops Growing'
    document.getElementById('cropsMature').innerHTML = cropsMature + ' Crops Mature&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    document.getElementById('market').innerHTML = Math.round(marketStatus * 100) + '%&nbsp;'
    document.getElementById('weather0').src = weather[0] + '.svg'
    document.getElementById('weather1').src = weather[1] + '.svg'
    document.getElementById('weather2').src = weather[2] + '.svg'
    document.getElementById('weather3').src = weather[3] + '.svg'
    document.getElementById('windSpeed').innerHTML = '&nbsp;' + windspeed + 'mph&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'

    const time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let month = time.getMonth() + 1
    let date = time.getDate()
    if (hour >= 12) {
        document.getElementById('time').innerHTML = hour - 12 + ":" + minute + " PM"
    } else {
        document.getElementById('time').innerHTML = hour + ":" + minute + " AM"
    }
    document.getElementById('date').innerHTML = month + "/" + date

    update()
}

function save() {
    localStorage.setItem('money', money)
    localStorage.setItem('cropsGrowing', cropsGrowing)
    localStorage.setItem('cropsMature', cropsMature)
    localStorage.setItem('marketStatus', marketStatus)
    localStorage.setItem('weatherCurrent', weather[0])
    localStorage.setItem('weatherNext', weather[1])
    localStorage.setItem('weatherFollowing', weather[2])
    localStorage.setItem('weatherLater', weather[3])
    localStorage.setItem('windspeed', windspeed)
    localStorage.setItem('fields', fields)
}

function display() {
    document.getElementById('money').innerHTML = '$' + money
    document.getElementById('cropsGrowing').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + cropsGrowing + ' Crops Growing'
    document.getElementById('cropsMature').innerHTML = cropsMature + ' Crops Mature&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    document.getElementById('market').innerHTML = marketStatus * 100+ '%&nbsp;'
    document.getElementById('weather0').src = weather[0] + '.svg'
    document.getElementById('weather1').src = weather[1] + '.svg'
    document.getElementById('weather2').src = weather[2] + '.svg'
    document.getElementById('weather3').src = weather[3] + '.svg'
    document.getElementById('windSpeed').innerHTML = '&nbsp;' + windspeed + 'mph&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'

    document.getElementById('upgradeCost').innerHTML = '$' + Math.pow(2, fields/3)

    const time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let month = time.getMonth() + 1
    let date = time.getDate()
    if (hour >= 12) {
        document.getElementById('time').innerHTML = hour - 12 + ":" + minute + " PM"
    } else {
        document.getElementById('time').innerHTML = hour + ":" + minute + " AM"
    }
    document.getElementById('date').innerHTML = month + "/" + date
}

function logTime() {
    lastLogin = Date.now()
    localStorage.setItem('lastLogin', lastLogin)

    const date = new Date()
    let dayMult = date.getDay()
    let hourMult = date.getHours()
    hourAsOfWeek = dayMult * 24 + hourMult
    weather = []
    weather.push(weatherLoop[hourAsOfWeek]) 
    weather.push(weatherLoop[hourAsOfWeek + 1])
    weather.push(weatherLoop[hourAsOfWeek + 2])
    weather.push(weatherLoop[hourAsOfWeek + 3])
    windspeed = windLoop[hourAsOfWeek]
    marketStatus = marketLoop[hourAsOfWeek] * 0.01
}

function buyWheat() {
    if (money >= 1) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Wheat')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((25000 * timeMult) + 25000))) ///Should be 25000 for 25 seconds
                money -= 1
                i = fields
            }
        }
    }
}
function buyCarrots() {
    if (money >= 12) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Carrots')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((90000 * timeMult) + 90000))) ///Should be 25000 for 25 seconds
                money -= 12
                i = fields
            }
        }
    }
}
function buyLettuce() {
    if (money >= 75) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Lettuce')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((240000 * timeMult) + 240000))) ///Should be 25000 for 25 seconds
                money -= 75
                i = fields
            }
        }
    }
}
function buyCorn() {
    if (money >= 300) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Corn')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((825000 * timeMult) + 825000))) ///Should be 25000 for 25 seconds
                money -= 300
                i = fields
            }
        }
    }
}
function buyPotatoes() {
    if (money >= 1000) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Potatoes')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((2220000 * timeMult) + 2220000))) ///Should be 25000 for 25 seconds
                money -= 1000
                i = fields
            }
        }
    }
}
function buyPeppers() {
    if (money >= 8000) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Peppers')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((6300000 * timeMult) + 6300000))) ///Should be 25000 for 25 seconds
                money -= 8000
                i = fields
            }
        }
    }
}
function buyOnions() {
    if (money >= 22000) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Onions')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((10800000 * timeMult) + 10800000))) ///Should be 25000 for 25 seconds
                money -= 22000
                i = fields
            }
        }
    }
}
function buyBroccoli() {
    if (money >= 100000) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Broccoli')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((15300000 * timeMult) + 15300000))) ///Should be 25000 for 25 seconds
                money -= 100000
                i = fields
            }
        }
    }
}
function buyPumpkins() {
    if (money >= 230000) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Pumpkins')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((18000000 * timeMult) + 18000000))) ///Should be 25000 for 25 seconds
                money -= 230000
                i = fields
            }
        }
    }
}
function buyAlienPlants() {
    if (money >= 1000000) {
        for (var i = 0; i < fields; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i, 'Alien Plants')
                localStorage.setItem(i + 's', parseInt(Date.now()) + Math.round(((28800000 * timeMult) + 28800000))) ///Should be 25000 for 25 seconds
                money -= 1000000
                i = fields
            }
        }
    }
}

function crops() {
    cropsGrowing = 0
    cropsMature = 0
    for (var i = 0; i < fields; i++) {
        if (localStorage.getItem(i) != null) {
            document.getElementById(i + "n").innerHTML = localStorage.getItem(i)
            var timeLeft = parseInt(localStorage.getItem(i + "s")) - parseInt(Date.now())
            if (timeLeft <= 0) {
                document.getElementById(i + "t").innerHTML = "Harvest!"
                cropsMature += 1
            } else {
                cropsGrowing += 1
                var hr = 0
                var min = 0
                var sec = 0 
                while (timeLeft > 3600000) {
                    hr += 1
                    timeLeft -= 3600000
                }
                while (timeLeft > 60000) {
                    min += 1
                    timeLeft -= 60000
                }
                while (timeLeft > 1000) {
                    sec += 1
                    timeLeft -= 1000
                }
                if (hr >= 1) {
                    document.getElementById(i + "t").innerHTML = hr + " Hours, " + min + " Minutes"
                } else if (min >= 1) {
                    document.getElementById(i + "t").innerHTML = min + " Minutes, " + sec + " Seconds"
                } else {
                    document.getElementById(i + "t").innerHTML = sec + " Seconds"
                }
            }
            document.getElementById(i + "i").src = localStorage.getItem(i).toLowerCase() + '.jpg'
        } else {
            document.getElementById(i + "n").innerHTML = "Empty"
            document.getElementById(i + "t").innerHTML = ""
            document.getElementById(i + "i").src = ""
        }
    }
}

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function harvest() {
    for (var i = 0; i < fields; i++) {
        if (localStorage.getItem(i) != null) {
            var tDeterminer = parseInt(localStorage.getItem(i + "s")) - parseInt(Date.now())
            if (tDeterminer <= 0) {
                var crop = localStorage.getItem(i)
                if (crop === "Wheat") {
                    let value = random(2,3)
                    money = parseInt(money) + Math.round(value + (value * marketStatus))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                } else if (crop === "Carrots") {
                    let value = random(11,19)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                } else if (crop === "Lettuce") {
                    let value = random(70,104)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                } else if (crop === "Corn") {
                    let value = random(280,351)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                } else if (crop === "Potatoes") {
                    let value = random(900,1344)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                } else if (crop === "Peppers") {
                    let value = random(7050,11000)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                } else if (crop === "Onions") {
                    let value = random(20000,26745)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                } else if (crop === "Broccoli") {
                    let value = random(90000,130000)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                }
                else if (crop === "Pumpkins") {
                    let value = random(200000,300000)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                }
                else if (crop === "Alien Plants") {
                    let value = random(1777777,1777777)
                    money = parseInt(money) + Math.round(value + (marketStatus * value))
                    localStorage.removeItem(i)
                    localStorage.removeItem(i + "s")

                    document.getElementById(i + "n").innerHTML = "Empty"
                    document.getElementById(i + "t").innerHTML = ""
                    document.getElementById(i + "i").src = ""
                }
            }
        }
    }
    save()
    display()
    logTime()
    calcMultipliers()
    crops()
    backup()
    location.reload()
}

function upgrade() {
    if (parseInt(money) > Math.pow(2, fields/3)) {

        const val = parseInt(money) - Math.pow(2, fields/3)
        money = val

        var table = document.createElement("TABLE")
        var row = table.insertRow(0)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)

        // cell1.innerHTML = "CELL 1"
        // cell2.innerHTML = 'CELL 2'
        // cell3.innerHTML = "CELL 3"

        table.classList.add('content1')
        cell1.classList.add('content1')
        cell2.classList.add('content1')
        cell3.classList.add('content1')

        var img1 = document.createElement("IMG")
        var p1a = document.createElement("P")
        var p1b = document.createElement("P")
        var img2 = document.createElement("IMG")
        var p2a = document.createElement("P")
        var p2b = document.createElement("P")
        var img3 = document.createElement("IMG")
        var p3a = document.createElement("P")
        var p3b = document.createElement("P")
        var sep2 = document.createElement("SPAN")
        var sep3 = document.createElement("SPAN")

        img1.classList.add('plant')
        img2.classList.add('plant')
        img3.classList.add('plant')
        p1a.classList.add('des0')
        p2a.classList.add('des0')
        p3a.classList.add('des0')
        p1b.classList.add('des1')
        p2b.classList.add('des1')
        p3b.classList.add('des1')


        p1a.innerHTML = "Empty"
        p2a.innerHTML = "Empty"
        p3a.innerHTML = "Empty"
        p1b.innerHTML = ""
        p2b.innerHTML = ""
        p3b.innerHTML = ""
        sep2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        sep3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

        var identifier = fields
        cell1.id = identifier
        img1.id = identifier + "i"
        p1a.id = identifier + "n"
        p1b.id = identifier + "t"
        identifier += 1
        cell2.id = identifier
        img2.id = identifier + "i"
        p2a.id = identifier + "n"
        p2b.id = identifier + "t"
        identifier += 1
        cell3.id = identifier
        img3.id = identifier + "i"
        p3a.id = identifier + "n"
        p3b.id = identifier + "t"
        fields += 3

        cell1.appendChild(img1)
        cell1.appendChild(p1a)
        cell1.appendChild(p1b)
        cell2.appendChild(sep2)
        cell2.appendChild(img2)
        cell2.appendChild(p2a)
        cell2.appendChild(p2b)
        cell3.appendChild(sep3)
        cell3.appendChild(img3)
        cell3.appendChild(p3a)
        cell3.appendChild(p3b)

        document.getElementById('content').appendChild(table)
    }
}

function upgrade2() {
    var table = document.createElement("TABLE")
    var row = table.insertRow(0)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)

    // cell1.innerHTML = "CELL 1"
    // cell2.innerHTML = 'CELL 2'
    // cell3.innerHTML = "CELL 3"

    table.classList.add('content1')
    cell1.classList.add('content1')
    cell2.classList.add('content1')
    cell3.classList.add('content1')

    var img1 = document.createElement("IMG")
    var p1a = document.createElement("P")
    var p1b = document.createElement("P")
    var img2 = document.createElement("IMG")
    var p2a = document.createElement("P")
    var p2b = document.createElement("P")
    var img3 = document.createElement("IMG")
    var p3a = document.createElement("P")
    var p3b = document.createElement("P")
    var sep2 = document.createElement("SPAN")
    var sep3 = document.createElement("SPAN")

    img1.classList.add('plant')
    img2.classList.add('plant')
    img3.classList.add('plant')
    p1a.classList.add('des0')
    p2a.classList.add('des0')
    p3a.classList.add('des0')
    p1b.classList.add('des1')
    p2b.classList.add('des1')
    p3b.classList.add('des1')


    p1a.innerHTML = "Empty"
    p2a.innerHTML = "Empty"
    p3a.innerHTML = "Empty"
    p1b.innerHTML = ""
    p2b.innerHTML = ""
    p3b.innerHTML = ""
    sep2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    sep3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

    cell1.id = globalIdentifier
    img1.id = globalIdentifier + "i"
    p1a.id = globalIdentifier + "n"
    p1b.id = globalIdentifier + "t"
    globalIdentifier += 1
    cell2.id = globalIdentifier
    img2.id = globalIdentifier + "i"
    p2a.id = globalIdentifier + "n"
    p2b.id = globalIdentifier + "t"
    globalIdentifier += 1
    cell3.id = globalIdentifier
    img3.id = globalIdentifier + "i"
    p3a.id = globalIdentifier + "n"
    p3b.id = globalIdentifier + "t"
    globalIdentifier += 1

    cell1.appendChild(img1)
    cell1.appendChild(p1a)
    cell1.appendChild(p1b)
    cell2.appendChild(sep2)
    cell2.appendChild(img2)
    cell2.appendChild(p2a)
    cell2.appendChild(p2b)
    cell3.appendChild(sep3)
    cell3.appendChild(img3)
    cell3.appendChild(p3a)
    cell3.appendChild(p3b)

    document.getElementById('content').appendChild(table)
}

function calcMultipliers() {
    if (weather[0] === 'sunny') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (sunnyMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (sunnyMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (sunnyMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (sunnyMult + 20)
        }
    } else if (weather[0] === 'cloudy') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (cloudyMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (cloudyMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (cloudyMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (cloudyMult + 20)
        }
    } else if (weather[0] === 'downcast') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (downcastMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (downcastMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (downcastMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (downcastMult + 20)
        }
    } else if (weather[0] === 'rainy') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (rainyMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (rainyMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (rainyMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (rainyMult + 20)
        }
    } else if (weather[0] === 'stormy') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (stormyMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (stormyMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (stormyMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (stormyMult + 20)
        }
    } else if (weather[0] === 'snowy') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (snowyMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (snowyMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (snowyMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (snowyMult + 20)
        }
    } else if (weather[0] === 'disastrous') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (disastrousMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (disastrousMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (disastrousMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (disastrousMult + 20)
        }
    } else if (weather[0] === 'dark') {
        if (windspeed <= 2) {
            timeMult = 0.01 * (darkMult - 1)
        }
        if (windspeed >= 3 && windspeed <= 7) {
            timeMult = 0.01 * (darkMult - 8)
        }
        if (windspeed >= 8 && windspeed <= 20) {
            timeMult = 0.01 * (darkMult + 4)
        }
        if (windspeed >= 21) {
            timeMult = 0.01 * (darkMult + 20)
        }
    }
}

function backup() {
    if (money < 0) {
        money = 1
    }
}

function update() {
    save()
    display()
    logTime()
    calcMultipliers()
    crops()
    backup()

    setTimeout(() => {
        update()
    }, 13);
}
