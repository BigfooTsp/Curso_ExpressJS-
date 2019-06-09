
/** LIKE BUTTON
 * Al presionarlo, se obtiene el id de la imagen y
 * se utiliza para ejecutar una petición POST
 */
// Like Button Request
$('#btn-like').click(function (e) {
  console.log('detectada presión en botón like')
  e.preventDefault();
  const imgId = $(this).data('id');
  console.log(imgId);
  $.post(`/images/${imgId}/like`)
    .done((data) => {
      console.log('back:', data);
      $('.likes-count').text(data.likes);
    });
});
