(() => {
  const checkBtn = document.querySelector('.form-filter__label');

  checkBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
  });

})();

document.querySelectorAll('.checkbox__input').forEach(function (e) {
  if (e.checked) {
    e.parentElement.classList.add('checked');
  }

  e.addEventListener('click', function () {

    if (e.parentElement.classList.contains('checked')) {
      e.parentElement.classList.remove('checked');
    } else {
      e.parentElement.classList.add('checked');
    }
  })
})
