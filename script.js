'use strict'
const but = document.querySelectorAll('.btn')
const p = document.querySelector('#inputbox')
const init = p.value
for (let i = 0; i < but.length; i++) {
  but[i].addEventListener('click', () => {
    p.value += but[i].innerHTML
  })
}


const butt = document.querySelectorAll('.btno')
for (let i = 0; i < butt.length; i++) {
  if (butt[i].id == "mul") {
    butt[i].addEventListener('click', () => {
      p.value += "*"
    })
  }
  else {
    butt[i].addEventListener('click', () => {
      p.value += butt[i].innerHTML
    })
  }

}
const back = document.querySelector('#del')
back.addEventListener('click', () => {
  p.value = p.value.substring(0, p.value.length - 1);
})
const func = document.querySelector('.btne')
func.addEventListener('click', () => {
  let x = p.value;
  let y = eval(x);
  p.value = y;
})
const cl = document.querySelector('#ac')
cl.addEventListener('click', () => {
  p.value = ''
})