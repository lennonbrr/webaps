// DEIXAR O MENU FIXO AO ROLAR A PAGINA
// =====================================================================
$(function(){
  var nav = $('#menuHeader');
  var menu = $('');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      nav.addClass("menu-fixo");
      // $('.menu-mobile').addClass('fixed');
      $(".flex, .mtop a, .sub-menu, .menu-mobile").addClass('ligth');
      $(".flex, .mtop a, .sub-menu, .menu-mobile a, .logosi, .toggle, .btnToggle").addClass('ligth-a');
    } else {
      nav.removeClass("menu-fixo");
      // $('.menu-mobile').removeClass('fixed');

      $(".flex, .mtop a, .sub-menu, .menu-mobile").removeClass('ligth');
      $(".flex, .mtop a, .sub-menu, .menu-mobile a, .logosi, .toggle, .btnToggle").removeClass('ligth-a');
    }
  });
});
// ======================================================================================
// TESTE DESFOCAR O FUNDO NO EVENTO OVER
$(document).ready(function() {
  var over = $('.mtop');
  over.mouseover(function() {
    $(".inicio").addClass('none');

  });
  over.mouseout(function() {
    $('.inicio').removeClass('none');
  });
});

$(document).ready(function() {
  $('.toggle, .menu-mobile a, .box, footer').click(function() {
    $('.menu-mobile').toggleClass('ativo');
    $('.inicio').toggleClass('none');
  });
  $('.btnToggle').click(function() {
    $('.busca-mobile').toggleClass('search');
  });
});
