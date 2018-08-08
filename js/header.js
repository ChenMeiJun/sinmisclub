// 初始化SmartMenus
$(function () {
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: -1,
    mainMenuSubOffsetY: 4,
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -6,
    showTimeout: 100,
    hideTimeout: 0
  });

  // SmartMenus 移动端的面包屑导航
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function (e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function () { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function () { $menu.css('display', ''); });
      }
      if ($('#toggle_userbox').hasClass('active')) {
        $('#toggle_userbox').click()
      }

    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function () {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }

  /* 移动端显示的小购物袋  如果未登录 则展示用户登录 */
  $('#toggle_userbox').on('click', function () {
    var menuStateBtn = document.querySelector('#main-menu-state')
    if (menuStateBtn.checked) {
      menuStateBtn.click()
    }

    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('#user_box').css({ height: 0 })
    } else {
      $(this).addClass('active')
      $('#user_box').css({ height: '50px' })
    }
  })
});

