let number = 1
document.querySelector('.mao-kan').onclick = () => {
  const trainWidth = document.querySelector('.li-qie')
  trainWidth.style.width = 900 + 300*number + 'px'
  console.log(trainWidth.style.width);
  number++
}