const mainContainer = document.querySelector('.main-container');
mainContainer.style.height = window.innerHeight + 'px';



window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Выбираем элемент с классом rainbow-text
    var text = document.querySelector('.rainbow-text');

    // Конвертируем scrollPosition в значение между 0 и 360
    var hue = scrollPosition / (document.body.clientHeight - window.innerHeight) * 360;

    // Применяем измененный цвет текста
    text.style.color = 'hsl(' + hue + ', 100%, 50%)';
});