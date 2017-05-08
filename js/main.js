;$(function()
    {
     'use strict'

        var sidebar = $('#sidebar'),//Ñ¡Ôñ²àÀ¸
            mask = $('.mask'),
            backButton = $('.back-to-top'),//Ñ¡Ôñ·µ»Ø¶¥²¿
            sidebar_trigger = $('#sidebar_trigger');//Ñ¡Ôñ²àÀ¸´¥·¢Æ÷


        function showSideBar(){//ÏÔÊ¾²àÀ¸
            console.log('onclick')
            mask.fadeIn();
            sidebar.css('right',0);
        }
        function hideSideBar(){//Òþ²Ø²àÀ¸
            console.log('dfdf')
            mask.fadeOut();
            sidebar.css('right',-sidebar.width())
        }


            sidebar_trigger.on('click',showSideBar)
            mask.on('click',hideSideBar)
            backButton.on('click',function(){
            $('html,body').animate({
                scrollTop: 0
            },800)
        })
        $(window).on('scroll',function(){//¼àÌýscrollÊÂ¼þ
            if($(window).scrollTop() > $(window).height())
                backButton.fadeIn();
            else
                backButton.fadeOut();
        })
        $(window).trigger('scroll');
    })