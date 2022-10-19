document.querySelectorAll('.choices').forEach(function(selector) {
  const choices = new Choices(selector, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    classNames: {
      containerOuter: 'choices header_choices',
    },
  });
});


