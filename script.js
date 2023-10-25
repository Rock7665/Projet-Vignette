$(function() {
  // Écoutez l'événement "input" sur les champs de texte
  $('#select-form, #text-form').on('input', function() {
    var selectItem = $('#select-form').val();
    var textItem = $('#text-form').val();
    $('#output-select').text(selectItem);
    $('#output-text').text(textItem);
  });

  // Ajoutez un gestionnaire d'evenement sur chaque bouton
  $('.option-btn').click(function() {
    var optionText = $(this).text();
    // Lorsque c'est cliquer dessus, stockez la valeur de l'élément data-option dans la variable clickedOption
    var clickedOption = $(this).attr('data-option');
    
    $('#text-form').val(optionText + ' Puissance Fiscale:');
    // clickedOption pour saisir automatiquement la valeur du #select-form
    $('#select-form').val(clickedOption);
    
  });
});