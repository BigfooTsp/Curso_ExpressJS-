/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

$(() => {
  // Post Toggle View
  $('#post-comment').hide();
  $('#btn-toggle-comment').click((e) => {
    e.preventDefault();
    $('#post-comment').slideToggle();
  });
  
  /** LIKE BUTTON
 * Al presionarlo, se obtiene el id de la imagen y
 * se utiliza para ejecutar una petición POST
 */
  $('#btn-like').click(function (e) {
    console.log('detectada presión en botón like');
    e.preventDefault();
    const imgId = $(this).data('id');
    console.log(imgId);
    $.post(`/_items_/${imgId}/like`)
      .done((data) => {
        console.log('back:', data);
        $('.likes-count').text(data.likes);
      });
  });

  /** DELETE BUTTON
 * 
 */
  $('#btn-delete').click(function (e) {
    console.log('apretado delete');
    e.preventDefault();
    const $this = $(this);
    const response = confirm('¿Confirmas borrado de datos?');
    if (response) {
      const imgId = $(this).data('id');
      $.ajax({
        url: `/_items_/${imgId}`,
        type: 'DELETE',
      })
        .done(() => {  // Cambia aspecto del botón al borrar
          $this.removeClass('btn-danger').addClass('btn-success');
          $this.find('i').removeClass('fa-times').addClass('fa-check');
          $this.append('<span>Deleted!</span>');
        })
        .reject((error) => {
          console.log('<!> Ha habido un error eliminado la imagen: ', error);
        });
    }

  });
});
