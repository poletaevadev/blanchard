// inputmask

const form = document.querySelector('.contacts-form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7(999) 999-99-99');
inputMask.mask(telSelector);

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.contacts-form', {
    errorLabelStyle: {
      color: '#D11616'
    },
  });

  validation

    .addField('#name', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Недостаточное количество символов"
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: "Вы ввели больше, чем положено"
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
      }
    ])
    .addField('#phone', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ]).onSuccess((event) => {
      console.log('Validation passes and form submitted', event);

      let formData = new FormData(event.target);

      console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Ваша заявка отправлена');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    });
});
