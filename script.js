$(function() {
    $('#form').submit(function() {
      var selectItem = $('#select-form').val();
      var textItem = $('#text-form').val();
      if (textItem == '') {
        $('#error-message').text(`Entrer s'il vous plait la puissance!`);
      } else {
        $('#error-message').text('');
      }
      $('#output-select').text(selectItem);
      $('#output-text').text(textItem);
      return false;
    });
  
    $('.option-btn').click(function() {
      var optionText = $(this).text();
      // Lorsque c'est cliquer dessus, stockez la valeur de l'élément data-option dans la variable clickedOption
      var clickedOption = $(this).attr('data-option');
      
      $('#text-form').val(optionText + ' Puissance Fiscale:');
      // clickedOption pour saisir automatiquement la valeur du #select-form
      $('#select-form').val(clickedOption);
      
    });
  });