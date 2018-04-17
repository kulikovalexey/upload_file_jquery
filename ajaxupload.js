$(document).ready(function () {

  function readImage(input){

    if (input.files && input.files[0]) {

      var reader = new FileReader();

      reader.onload = function (e) {
        $('#preview').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  function printMessage(destination, msg) {

    $(destination).removeClass();

    if (msg == 'success') {
      $(destination).addClass('alert alert-success').text('Файл успешно загружен.');
    }

    if (msg == 'error') {
      $(destination).addClass('alert alert-danger').text('Произошла ошибка при загрузке файла.');
    }

  }

  $('#image').change(function(){
    readImage(this);
  });

  $('#upload-image').on('submit',(function(e) {
    e.preventDefault();

    var formData = new FormData(this);

    $.ajax({
      type:'POST',
      url: 'handler.php',
      data: formData,
      cache:false, 
      contentType: false,
      processData: false,
      success:function(data){
        printMessage('#result', data);
      },
      error:function(data){
        console.log(data);
      }
    });
  }));
});
