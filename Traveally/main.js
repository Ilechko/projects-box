// Перемикання телефонів
const boxes = document.querySelectorAll('.box')
// Додаємо обробник подій для кожного .box
boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    // Змінюємо z-index для всіх тегів DIV
    boxes.forEach((otherBox, otherIndex) => {
      const zIndex = otherIndex === index ? 4 : otherIndex === 1 ? 3 : 2
      otherBox.style.zIndex = zIndex.toString()
    })
  })
})

//  Зміна активного значка(із трьох) що відображає вибраний телефон
const outerParent = document.querySelector('.container_all_phones')
outerParent.addEventListener('click', function (event) {
  if (event.target.closest('.container_all_phones')) {
    document.querySelectorAll('.button_point').forEach((i) => {
      i.classList.remove('button_point_active')
    })
  }
  if (event.target.closest('.container_phone')) {
    document.querySelector('#one').classList.add('button_point_active')
  } else if (event.target.closest('.container_phone_two')) {
    document.querySelector('#two').classList.add('button_point_active')
  } else if (event.target.closest('.container_phone_three')) {
    document.querySelector('#three').classList.add('button_point_active')
  }
})

// Зміна вказівника(стрілки) на відкиття пункту меню
document.body.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    document.querySelectorAll('.button_arrow').forEach((i) => {
      i.classList.remove('button_arrow_active')
    })
    event.target.classList.add('button_arrow_active')
  }
})
