ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {
      hintContent: 'Леонтьевский переулок, дом 5/1, шоурум №4',
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map-icon.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-5, -5],
    }
  );

  myMap.behaviors.disable('scrollZoom');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    myMap.behaviors.disable('drag');
  }

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}
