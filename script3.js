$(document).ready(function() {
    var $paraffo2 = $('p:eq(1)');
    var $paraffo4 = $('p:eq(3)');
    var $paraffo6 = $('p:eq(5)');

    $paraffo2.hide();
    $('a.continuar1').click(function () {
        if ($paraffo2.is(':hidden')) {
            $paraffo2.show('slow');
            $(this).text('Ocultar imagen');
        } else {
            $paraffo2.hide('slow');
            $(this).text('Ver imagen');
            return false
        }
        
    })

    $paraffo4.hide();
    $('a.continuar2').click(function () {
        if ($paraffo4.is(':hidden')) {
            $paraffo4.show('slow');
            $(this).text('Ocultar imagen');
        } else {
            $paraffo4.hide('slow');
            $(this).text('Ver imagen');
            return false
        }
        
    })

    $paraffo6.hide();
    $('a.continuar3').click(function () {
        if ($paraffo6.is(':hidden')) {
            $paraffo6.show('slow');
            $(this).text('Ocultar video');
        } else {
            $paraffo6.hide('slow');
            $(this).text('Ver video');
            return false
        }
        
    })


    $('a#alternar-todo').click(function () {

        if ($paraffo2.is(':visible')) {
            $paraffo2.hide();
        }
        if ($paraffo4.is(':visible')) {
            $paraffo4.hide();
        }
        if ($paraffo6.is(':visible')) {
            $paraffo6.hide();
        }
      $("p.respuesta").toggle();             
    })
})