/*вешаем обработчик события нажатия на элемент*/
$('.accardion-title').on('click', function () {
   /*записываем в переменную блок с контентом*/
   let thisContentBlock = $(this).parent().find('.accardion-elem');
   /*проверяем есть ли у блока с контентом класс active
     если есть то удаляем, если нет то добавляем */
   if (thisContentBlock.hasClass('active')) {
      thisContentBlock.removeClass('active')
   }
   else {
      thisContentBlock.addClass('active')
   }
})