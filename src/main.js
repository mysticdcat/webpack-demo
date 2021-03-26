import "../static/style/base.css"
import titleBg from  "../static/image/title-bg.png"
console.log(1)
var img = new Image()
img.src = titleBg
img.onload = function () {
    document.body.appendChild(img)
}
let myFn = () => {
    console.log(this)
}
