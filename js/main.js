;$(function()
    {
     'use strict'

        var sidebar = $('#sidebar'),//ѡ�����
            mask = $('.mask'),
            backButton = $('.back-to-top'),//ѡ�񷵻ض���
            sidebar_trigger = $('#sidebar_trigger');//ѡ�����������


        function showSideBar(){//��ʾ����
            console.log('onclick')
            mask.fadeIn();
            sidebar.css('right',0);
        }
        function hideSideBar(){//���ز���
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
        $(window).on('scroll',function(){//����scroll�¼�
            if($(window).scrollTop() > $(window).height())
                backButton.fadeIn();
            else
                backButton.fadeOut();
        })
        $(window).trigger('scroll');
    })