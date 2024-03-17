const navItems = document.querySelectorAll('Button')
navItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.target.style.backgroundColor = '#633c06'
    location.replace()
  })
})
function redirectTOHOME() {
  location.replace('AUKCattosWelcomePage.html')
}
function redirectTORELATIONSHIPS() {
  location.replace('AUKCattosRelationships.html')
}
function redirectTOFAMILYTREES() {
  location.replace('AUKCattosFamilyTrees.html')
}
function redirectTODATABASE() {
  location.replace('AUKCattosDatabase.html')
}
