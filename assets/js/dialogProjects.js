const openDialogButtons = document.querySelectorAll(".open-dialog");
const closeDialogButton = document.querySelector(".close-dialog");
const contentDialog = document.querySelector("dialog .content-dialog");
const imageDialog = document.querySelector("dialog .image");

const dialog = document.querySelector("dialog");

openDialogButtons.forEach((openDialogButton) => {
  openDialogButton.addEventListener("click", function () {
    const parentContent = openDialogButton.parentElement.parentElement;

    const description = parentContent.querySelector(".description");
    const image = parentContent.querySelector(".project-image");

    contentDialog.innerHTML = description.innerHTML;
    imageDialog.innerHTML = image.innerHTML;

    dialog.showModal();
  });
})

closeDialogButton.addEventListener("click", function () {
  dialog.close();
});

// const projectsDescriptions = document.querySelectorAll('.project-description .description')
// const showDescriptionElements = document.querySelectorAll('.project-description span')

// window.addEventListener('load', () => {
//   hiddenDescriptions()
// })

// showDescriptionElements.forEach((showDescriptionElement) => {
//   showDescriptionElement.addEventListener('click', () => {
//     const parentContent = showDescriptionElement.parentElement

//     const description = parentContent.querySelector(".description")

//     hiddenDescriptions()

//     description.classList.remove('hidden')
//   })
// })

// function hiddenDescriptions() {
//   projectsDescriptions.forEach((projectDescription) => {
//     projectDescription.classList.add('hidden')
//   })
// }
