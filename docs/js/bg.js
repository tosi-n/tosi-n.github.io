// From https://uigradients.com
var dreamBGGradients = [
  [],
  ['#ff9966', '#ff5e62'], // Orange Coral
  ['#C6FFDD', '#FBD786', '#E684AE'], // MegaTron
  ['#bdc3c7', '#2c3e50'], // Grade Grey
  ['#ad5389', '#3c1053'], // Expresso
  ['#659999', '#f4791f'], // Metapolis
  ['#544a7d', '#ffd452'], // Kyoo Tah
  ['#CCCCB2', '#757519'] // Sage Persuasion
]

var dreamBody = $('body')
var dreamFront = $('.flip-container .front')
var dreamBack = $('.flip-container .back')

var dreamPrevBgIndex = 0
var dreamBodyBgSwitch = []
var dreamBodyBgSwitchIndex = 0

var dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamFront, dreamBg)

setBackground(dreamBody, dreamBg)

dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamBack, dreamBg)

function connect(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += arr[i] + ', '
    } else {
      str += arr[i]
    }
  }
  return str
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  var random
  while (1) {
    random = Math.floor(Math.random() * (max - min)) + min
    if (random !== dreamPrevBgIndex) {
      dreamPrevBgIndex = random
      break
    }
  }
  return random
}

function setBackground(target, gradient) {
  target.css({
    background: gradient[0]
  })
  target.css({
    background: 'linear-gradient(to right, ' + connect(gradient) + ')'
  })
}
