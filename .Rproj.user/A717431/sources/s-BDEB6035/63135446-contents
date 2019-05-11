// From https://uigradients.com
var dreamBGGradients = [
  [],
  ['#77A1D3', '#79CBCA', '#E684AE'], // Wedding Day Blues
  ['#C6FFDD', '#FBD786', '#E684AE'], // MegaTron
  ['#bdc3c7', '#2c3e50'], // Grade Grey
  ['#ad5389', '#3c1053'], // Expresso
  ['#12c2e9', '#c471ed', '#f64f59'], // JShine
  ['#659999', '#f4791f'], // Metapolis
  ['#544a7d', '#ffd452'], // Kyoo Tah
  ['#005AA7', '#FFFDE4'] // Evening Night
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
