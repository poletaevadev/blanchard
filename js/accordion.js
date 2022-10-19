$(function () {
  $(".accordion").accordion({
    heightStyle: "content",
    collapsible: "true",
    animate: 500,
    icons: { "header": "false", "activeHeader": "false" }
  });

  $(".accordion_without-content").accordion({
    active: "false",
  });
});
