$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#novatarefa').val();
        if(tarefa !== ''){
            $(`<li>${tarefa} <span class="close">X</span></li>`).appendTo('ul');}
        $('#novatarefa').val('');
    });

    $('ul').on('click', '.close', function(e){
        $(this).parent().remove();
    });

    $('ul').on('click', 'li', function(e){
        $(this).toggleClass('feito');
    });

    $('#delet').on('click', function(e){
        $('ul').empty();
    });
});

