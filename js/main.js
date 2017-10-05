function sendForm(name,phone,email,message,utmString){
    $.ajax({
        type: "POST",
        url: "ajax/send.php",
        data: 'name='+encodeURIComponent(name)+'&phone='+encodeURIComponent(phone)+'&email='+encodeURIComponent(email)+'&message='+encodeURIComponent(message)+'&utm='+encodeURIComponent(utmString),
        dataType: 'text',
        beforeSend: function(){
            $("input").attr("disabled","disabled");
            $("select").attr("disabled","disabled");
            $("textarea").attr("disabled","disabled");
        },
        success: function(){
            $("input").removeAttr("disabled","");
            $("select").removeAttr("disabled","");
            $("textarea").removeAttr("disabled","");

            $("input").val("");
            $("select").val("");
            $("textarea").val("");
            //$('#myModal').modal('hide');
            $('#thankYouModal').modal();
        }
    });
}

function sendForm1(name,email,phone,level,type,zhk,area,quant,roomsString,servicesString,geo,utmString){
    $.ajax({
        type: "POST",
        url: "ajax/send1.php",
        data: 'name='+encodeURIComponent(name)+'&email='+encodeURIComponent(email)+'&phone='+encodeURIComponent(phone)+'&level='+encodeURIComponent(level)+'&type='+encodeURIComponent(type)+'&zhk='+encodeURIComponent(zhk)+'&area='+encodeURIComponent(area)+'&quant='+encodeURIComponent(quant)+'&roomsString='+encodeURIComponent(roomsString)+'&servicesString='+encodeURIComponent(servicesString)+'&geo='+encodeURIComponent(geo)+'&utm='+encodeURIComponent(utmString),
        dataType: 'text',
        beforeSend: function(){
            $("input").attr("disabled","disabled");
            $("select").attr("disabled","disabled");
        },
        success: function(msg){
            $("input").removeAttr("disabled","");
            $("select").removeAttr("disabled","");

            $("input").val("");
            $("select").val("");

            $('#myModal').modal('hide');
            $('#thankYouModal').modal();
        }
    });
}

$(document).ready(function(){

    $("#form0").submit(function(){
        var name = $("#form0").find("#name0").val();
        var email = $("#form0").find("#email0").val();
        var phone = $("#form0").find("#phone0").val();
        var message = $("#form0").find("#message0").val();

        var utm = [];
        $(".utm").each(function() {
            utm.push(this.value);
        });

        var utmString = JSON.stringify(utm);

        if(name.length == 0){
            $("#form0").find("#name0").parent().addClass("has-error");
        }

        if(phone.length == 0){
            $("#form0").find("#email0").parent().addClass("has-error");
        }

        if(name.length > 0 && phone.length > 0) {
            sendForm(name, phone, email, message, utmString);
        }

        return false;
    });

    $("#form1").submit(function(){
        var name = $("#form1").find("#name1").val();
        var email = $("#form1").find("#email1").val();
        var phone = $("#form1").find("#phone1").val();
        var message = $("#form1").find("#message1").val();

        var utm = [];
        $(".utm").each(function() {
            utm.push(this.value);
        });

        var utmString = JSON.stringify(utm);

        if(name.length == 0){
            $("#form1").find("#name1").parent().addClass("has-error");
        }

        if(phone.length == 0){
            $("#form1").find("#email1").parent().addClass("has-error");
        }

        if(name.length > 0 && phone.length > 0) {
            sendForm(name, phone, email, message, utmString);
        }

        return false;
    });

    $("#myForm").submit(function(){
        var name = $("#myForm").find("#name").val();
        var email = $("#myForm").find("#email").val();
        var phone = $("#myForm").find("#phone").val();
        var level = $("#myForm").find("#level").val();
        var type = $("#myForm").find("#type").val();
        var zhk = $("#myForm").find("#zhk").val();
        var area = $("#myForm").find("#area").val();
        var quant = $("#myForm").find("#quant").val();

        var rooms = [];
        $(".rooms:checked").each(function() {
            rooms.push(this.value);
        });

        var roomsString = JSON.stringify(rooms);

        var service = [];
        $(".service:checked").each(function() {
            service.push(this.value);
        });

        var servicesString = JSON.stringify(service);

        var utm = [];
        $(".utm").each(function() {
            utm.push(this.value);
        });

        var utmString = JSON.stringify(utm);

        var geo = $("#myForm").find("#geo").val();

        if(name.length == 0){
            $("#myForm").find("#name").parent().addClass("has-error");
        }

        if(phone.length == 0){
            $("#myForm").find("#phone").parent().addClass("has-error");
        }

        if(name.length > 0 && phone.length > 0){
            sendForm1(name,email,phone,level,type,zhk,area,quant,roomsString,servicesString,geo,utmString);
        }

        return false;
    });
    
    $('#example-container').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt=""></button>'
    });

    $('.slider-container').find('.slider-for').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-container .slider-nav'
    });

    $('.slider-container').find('.slider-nav').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-container .slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true
    });

    $('.steps').slick({
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '#how .left',
        nextArrow: '#how .right',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".btn1").click(function(){
        $("#level").val("1");
    });

    $(".btn2").click(function(){
        $("#level").val(2);
    });

    $(".btn3").click(function(){
        $("#level").val(3);
    });

    /* СКРОЛЛ - меню */

    $('#scrollup').mouseover(function () {
        $(this).css("opacity", "1.0");
    }).mouseout(function () {
        $(this).css("opacity", "0.65");
    }).click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset >= ($("header").offset().top + 200)) {
            $(".fixed-menu").fadeIn();
            $("#scrollup").fadeIn();
        }
        else {
            $(".fixed-menu").hide();
            $("#scrollup").hide();
            $('.navbar-toggle').addClass('collapsed');
            $("#navbar-collapse").removeClass("in")
        }
    });

    $(".navigation a:not(.btn)").click(function(){

        if($(this).hasClass("menu-1")){
            var c = $("#portfolio").offset().top;
        }
        else if($(this).hasClass("menu-2")){
            var c = $("#price").offset().top;
        }
        else if($(this).hasClass("menu-3")){
            var c = $("#service").offset().top;
        }
        else if($(this).hasClass("menu-4")){
            var c = $("#difference").offset().top;
        }

        c = c - 85;

        $('html, body').animate({
            scrollTop: c
        }, 1000);
        $('.navbar-toggle').addClass('collapsed');
        $("#navbar-collapse").removeClass("in")
        return false;
    });

    /* СКРОЛЛ - меню - конец */

    $("#phone").mask("+7 (999) 999-99-99");

    //$('#myModal').on('shown.bs.modal', function (e) {
        $("#myForm").find("#type").change(function () {
            if ($("#myForm").find("#type").val() == "1") {
                $("#zhk-group").slideDown();
            }
            else {
                $("#zhk-group").slideUp();
            }
        });

        $("#myModal #slider1").slider({
            min : 0,
            max : 300,
            step: 5,
            value: 0
        });

        $("#myModal #slider2").slider({
            min : 0,
            max : 20,
            step: 1,
            value: 0
        });

        $("#slider1").on("slide", function(slideEvt) {
            $("#myForm").find("#area").val(slideEvt.value);
        });

        $("#slider2").on("slide", function(slideEvt) {
            $("#myForm").find("#quant").val(slideEvt.value);
        });

        var minSliderValue1 = $("#slider1").data("slider-min");
        var maxSliderValue1 = $("#slider1").data("slider-max");

        var minSliderValue2 = $("#slider2").data("slider-min");
        var maxSliderValue2 = $("#slider2").data("slider-max");

        $("#myForm").find("#area").on("keyup", function() {
            var val = Math.abs(parseInt(this.value) || 0);
            $("#myForm").find("#area").value = val > 300 ? 300 : val;
            $('#slider1').slider('setValue', val);
        });

        $("#myForm").find("#quant").on("keyup", function() {
            var val = Math.abs(parseInt(this.value) || 0);
            this.value = val > 20 ? 20 : val;
            $('#slider2').slider('setValue', val);
        });
    //});

    $(".phoneMask").mask("+7 (999) 999-99-99");

    var $grid = $('.goods-row.row').masonry({
        // options
        itemSelector: '.col-sm-4',
        // use element for option
        columnWidth: '.col-sm-4',
        percentPosition: true
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var $grid = $('.goods-row.row').masonry({
            // options
            itemSelector: '.col-sm-4',
            // use element for option
            columnWidth: '.col-sm-4',
            percentPosition: true
        });

        $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
        });
    });
});




