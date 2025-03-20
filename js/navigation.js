const button = document.querySelector('.toggle-menu')
const listItems = document.querySelector('.list-items')

function handleNavigationStatus() {
  const menuActivated = listItems.classList.contains('active')

  if (menuActivated) {
    listItems.classList.remove('active')
    listItems.classList.add('disabled')
  } else {
    listItems.classList.add('active')
    listItems.classList.remove('disabled')
  }

  button.classList.toggle('active')
}

button.addEventListener('click', () => {
  handleNavigationStatus()
})

listItems.addEventListener('click', () => {
  handleNavigationStatus()
})