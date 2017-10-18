const request = superagent

var userList = document.querySelector('.users-list')

document.querySelector('.show-list').addEventListener('click', function () {
  request
  .get('https://randomuser.me/api/?results=50')
  .then(function (dates) {
    const arrayDates = dates.body.results

    arrayDates.forEach(function (elements) {
      // console.log(elements.nat);

      userList.innerHTML += `
      <article>
        <span>${elements.nat}</span>
        <h6>${elements.email}</h6>
      </article>`
    })
  })

})
