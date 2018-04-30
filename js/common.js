/* common */
$(document).ready(function() {
	// #slide 1, slide 8
	$('input[type="range"]').change(function () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		var val2 = val * 0.8;
		var val3 = val * 0.01;
        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, '
			+ 'color-stop(' + val3 + ', #88accb), '
			+ 'color-stop(' + val2 + ', #b5d8ee), '
            + 'color-stop(' + val + ', #fff)'
            + ')'
        );
        var value = $(this).val();
        switch(value) {
            case '10': $('.sld1 .range-plus').css('top', '485px').fadeIn(); break;
            case '20': $('.sld1 .range-plus').css('top', '354px').fadeIn(); break;
            case '30': $('.sld1 .range-plus').css('top', '222px').fadeIn(); break;
            case '40': $('.sld1 .range-plus').css('top', '90px').fadeIn(); break;
        }
    });

	// slide 1
    $('.sld1 .range-plus').click(function () {
        $('.sld1 .range-plus').fadeOut(500);
        $('input[type="range"]').fadeOut(500);
        $('.sld1 .scale').fadeOut(500);
		$(".sld1 .t1").fadeOut(500);
		$(".sld1 .t2").fadeIn(500);
        $(".sld1 .logo2").fadeIn(500);
        $(".sld1 .bottle1").fadeIn(500);
	});

	// slide 3

	$('.sld3 .m1 .close2, .sld3. .m1 .bg-modal').click(function() {
		$('.sld3 .m1').fadeOut(300);
		setTimeout(function() {
			$('.modal.m1 .modal-con1').removeClass('ac');
		}, 300);
	});

	$('.sld3 .m2 .close2, .sld3. .m2 .bg-modal').click(function() {
		$('.sld3 .m2').fadeOut(300);
	});

	// slide 4 
	var Al = '-=138'
	var Ar = '-=121'

	var Bl = '-=69'
	var Bc = '-=69'
	var Bcr = '-=73'
	var Br = '-=60'
	var slideNow = 'A'

	$('.sld4 .s1 .list .item-1 .plus').click(function () {
		$('.sld4 .s1').fadeOut(500);
		$('.sld4 .s2').fadeIn(500);

		$('#jsAl2').animate({width: Al}, 700);
		$('#jsAr2').animate({width: Ar}, 700);
		$('#jsNumA1').parent().animate({left: Al}, 700);
		$('#jsNumA2').parent().animate({left: Ar}, 700);

		changeNum($('#jsNumA1'), 37 , 10, 700);
		changeNum($('#jsNumA2'), 8  , 10, 700);
	});

	$('.menubutton4').on('click', function() {
		if ( $(this).hasClass('mb_inactive4') ){
			$('.menubutton4').toggleClass('mb_inactive4');
			$('#showB4, #showA4').fadeToggle(150);

			slideNow = (slideNow==='A')? 'B':'A';

			if(slideNow ==='A'){
				$('#jsAl2').stop().width('261px');
				$('#jsAr2').stop().width('142px');
				$('#jsNumA1').parent().stop().css('left', '261px');
				$('#jsNumA2').parent().stop().css('left', '526px');
				$('#jsNumA1').text('78')
				$('#jsNumA2').text('42')

				setTimeout( function() {
					$('#jsAl2').animate({width: Al}, 700);
					$('#jsAr2').animate({width: Ar}, 700);

					$('#jsNumA1').parent().animate({left: Al}, 700);
					$('#jsNumA2').parent().animate({left: Ar}, 700);

					changeNum($('#jsNumA1'), 37 , 8, 600);
					changeNum($('#jsNumA2'), 8  , 8, 600);
				}, 100);
			} else {
				$('#jsBl2').stop().width('96px');
				$('#jsBc2').stop().width('87px');
				$('#jsBcr2').stop().width('103px');
				$('#jsBr2').stop().width('73px');
				$('#jsNumB1').parent().stop().css('left', '96px');
				$('#jsNumB2').parent().stop().css('left', '275px');
				$('#jsNumB3').parent().stop().css('left', '481px');
				$('#jsNumB4').parent().stop().css('left', '641px');
				$('#jsNumB1').text('4.6')
				$('#jsNumB2').text('4.1')
				$('#jsNumB3').text('5.0')
				$('#jsNumB4').text('3.8')

				setTimeout( function() {
					$('#jsBl2').animate({width: Bl}, 700);
					$('#jsBc2').animate({width: Bc}, 700);
					$('#jsBcr2').animate({width: Bcr}, 700);
					$('#jsBr2').animate({width: Br}, 700);

					$('#jsNumB1').parent().animate({left: Bl}, 700);
					$('#jsNumB2').parent().animate({left: Bc}, 700);
					$('#jsNumB3').parent().animate({left: Bcr}, 700);
					$('#jsNumB4').parent().animate({left: Br}, 700);

					changeNum($('#jsNumB1'), 1.3, 8, 600, 1);
					changeNum($('#jsNumB2'), 0.9, 8, 600, 1);
					changeNum($('#jsNumB3'), 1.2, 8, 600, 1);
					changeNum($('#jsNumB4'), 0.7, 8, 600, 1);
				}, 100);
			};
		};
	})

	$('.sld4 .s2 #closeFix').click(function () {
		$('.sld4 .s2').fadeOut(500);
		$('.sld4 .s1').fadeIn(500);
		setTimeout( function() {
			$('#jsAl2').stop().width('261px');
			$('#jsAr2').stop().width('142px');
			$('#jsNumA1').parent().stop().css('left', '261px');
			$('#jsNumA2').parent().stop().css('left', '526px');
			$('#jsNumA1').text('78');
			$('#jsNumA2').text('42');
		}, 600);
	});

	$('.sld4 .s1 .list .item-2 .plus').click(function () {
		$('.sld4 .modal-1').fadeIn(500);
		$('.bluediv').width(0);
		$('#up_left > h2 > span, #up_center > h2 > span, #up_right > h2 > span').text('0%')

		setTimeout( function(){
			$('#jsl1').animate({width: '135px'}, 675, 'linear', function(){
				$('#jsl2').animate({width: '82px'}, 650, 'linear')
			})

			$('#jsc1').animate({width: '135px'}, 675, 'linear', function(){
				$('#jsc2').animate({width: '108px'}, 650, 'linear')
			})

			$('#jsr1').animate({width: '135px'}, 675, 'linear', function(){
				$('#jsr2').animate({width: '35px'}, 650, 'linear')
			})

		}, 100)

		changeNum($('  #up_left > h2 > span'), 84, 17, 1350)
		changeNum($('#up_center > h2 > span'), 95, 17, 1350)
		changeNum($(' #up_right > h2 > span'), 65, 17, 1350)
	});

	$('.sld4 .modal-1 .close2, .sld4. .modal-1 .bg-modal').click(function() {
		$('.sld4 .modal-1').fadeOut(300);
		setTimeout(function() {
			$('.modal.m1 .modal-con1').removeClass('ac');
		}, 300);
	});

	$('.sld4 #p4').click(function() {
		$('.sld4 .modal.m3').fadeIn();
	});

	$('.sld4 .m3 .close2, .sld4. .m3 .bg-modal').click(function() {
		$('.sld4 .m3').fadeOut(300);
	});

	// 
	
	if($('.mask').length>0) {
		$(".mask").mask("8 (999) 999-99-99");
	}
	//$('input, select').styler();
	var ff;
	$('input[type=text]').focus(function() {
		if($(this).attr('data-place')==$(this).val()) {
			$(this).val('');
		}
		$(this).addClass('ac');
	});
	$('input[type=text]').blur(function() {
		if($(this).val()=='') {
			$(this).val($(this).attr('data-place'));
		}
		$(this).removeClass('ac');
	});
	$('textarea').focus(function() {
		if($(this).attr('data-place')==$(this).val()) {
			$(this).val('');
		}
		$(this).addClass('ac');
	});
	$('textarea').blur(function() {
		ff=$(this).attr('data-place');
		if($(this).val().length==0) {
			$(this).val(ff);
		}
		$(this).removeClass('ac');
	});
	$(window).load(function() {
		$('input[type=text]').each(function() {
			$(this).attr('data-place',$(this).val());
		});
		$('textarea').each(function() {
			$(this).attr('data-place',$(this).val());
		});
		
	});
	var options = {
		  useEasing : false, 
		  useGrouping : true, 
		  separator : '', 
		  decimal : '', 
		  prefix : '', 
		  suffix : '' 
	};
	var options2 = {
		  useEasing : false, 
		  useGrouping : true, 
		  separator : '', 
		  decimal : '.', 
		  prefix : '', 
		  suffix : '' 
	};

	$('.lj1').click(function(e) {
		e.preventDefault();
		$('.modal.m1').fadeIn(300);
		setTimeout(function() {
			$('.modal.m1 .modal-con1').addClass('ac');
		}, 300);
	});
	$('.lj2').click(function(e) {
		e.preventDefault();
		$('.modal.m2').fadeIn(300);
	});
	

	// slide 6

	$('.sld6 .s1 .plus_ultra').click(function() {
		$('.sld6 .s1').fadeOut(500);
		$('.sld6 .ultra').fadeIn(500);
		setTimeout(function() {
			$('.sld6 .ultra').addClass('ac');
		}, 500);
	});

	$('.sld6 .ultra .lnk2').click(function() {
		$('.sld6 .ultra .mp1').fadeIn(300);
		setTimeout(function() {
			$('.sld6 .ultra .mp1').addClass('ac');
			new CountUp("c1", 6.2, 2.7, 1, 1, options2).start();
			new CountUp("c2", 2.3, 1.7, 1, 1, options2).start();
			new CountUp("c3", 3.3, 0.6, 1, 1, options2).start();
			new CountUp("c4", 2.9, 0.4, 1, 1, options2).start();
			new CountUp("c5", 1.4, 0.1, 1, 1, options2).start();
		}, 300);
	});

	$('.sld6 .ultra .mp1 .close1').click(function() {
		$(this).parent().fadeOut(300);
		setTimeout(function() {
			$('.sld6 .ultra .mp1').removeClass('ac');
			$('#c1').text('6.2');
			$('#c2').text('2.3');
			$('#c3').text('3.3');
			$('#c4').text('2.9');
			$('#c5').text('1.4');
		}, 300);
	});

	$('.pp1,.pp2').click(function() {
		$('.modal.m3').fadeIn(300);
	});

	$('.sld6 .ultra .modal-tb .close2, .sld6 .ultra .modal-tb .bg-modal').click(function() {
		$('.sld6 .modal.m3').fadeOut(300);
	});

	$('.sld6 .ultra #closeFix2').click(function() {
		$('.sld6 .s1').fadeIn(500);
		$('.sld6 .ultra').fadeOut(500);
		setTimeout(function() {
			$('.sld6 .ultra').removeClass('ac');
		}, 500);
	})


	$('.sld6 .s1 .lnk3').click(function() {
		$('.sld6 .mp2').fadeIn(300);
		setTimeout(function() {
			$('.sld6 .mp2').addClass('ac');
		}, 300);
	});
	$('.sld6 .mp2 .close1').click(function() {
		$(this).parent().fadeOut(300);
		setTimeout(function() {
			$('.sld6 .mp2').removeClass('ac');
		}, 300);
	});


// page2

	$('#plus4').on('click', function() {
		$('.modal.m4').fadeIn();
		$('.bluediv').width(0);
		$('#up_left > h2 > span, #up_center > h2 > span, #up_right > h2 > span').text('0%')

		setTimeout( function(){
			$('#jsl1').animate({width: '135px'}, 675, 'linear', function(){
				$('#jsl2').animate({width: '82px'}, 650, 'linear')
			})

			$('#jsc1').animate({width: '135px'}, 675, 'linear', function(){
				$('#jsc2').animate({width: '108px'}, 650, 'linear')
			})

			$('#jsr1').animate({width: '135px'}, 675, 'linear', function(){
				$('#jsr2').animate({width: '35px'}, 650, 'linear')
			})

		}, 100)

		changeNum($('  #up_left > h2 > span'), 84, 17, 1350)
		changeNum($('#up_center > h2 > span'), 95, 17, 1350)
		changeNum($(' #up_right > h2 > span'), 65, 17, 1350)
	});

	$('#micro2').on('click', function() {
		$('.mp1-1').fadeIn()
		$('#showStart').fadeOut()
		$('#jsAl2').stop().width('261px');
				$('#jsAr2').stop().width('142px');
				$('#jsNumA1').parent().stop().css('left', '261px');
				$('#jsNumA2').parent().stop().css('left', '526px');
				$('#jsNumA1').text('78')
				$('#jsNumA2').text('42')

				setTimeout( function() {
					$('#jsAl2').animate({width: Al}, 700);
					$('#jsAr2').animate({width: Ar}, 700);

					$('#jsNumA1').parent().animate({left: Al}, 700);
					$('#jsNumA2').parent().animate({left: Ar}, 700);

					changeNum($('#jsNumA1'), 37 , 8, 600);
					changeNum($('#jsNumA2'), 8  , 8, 600);
				});
	});


  $('.open1').click(function() {
    $('.mp-n1').fadeIn(300);
  });
  $('.close-mp-n1').click(function() {
    $('.mp-n1').fadeOut(300);
  });

  setTimeout(function() {
  	$(".text-gr").css({
  		"opacity": "1",
  		"transform": "scale(1)",
  		"-webkit-transform": "scale(1)",
  		"-moz-transform": "scale(1)"
  	});
  }, 300);

  var f1 = 0;

  $('.ef1').click(function() {
    if(f1==0) {
      f1=1;
      $(this).addClass('ac');
      $('.ef-hd1').addClass('ac');
    }
    else {
      f1=0;
      $(this).removeClass('ac');
      $('.ef-hd1').removeClass('ac');
    }
  });

  $('.line-sp1').click(function() {
    $(this).toggleClass('ac');
    $('.con-st1').toggleClass('ac');
  });
});

function changeNum(jqObj, targetNum, frameCount, timeOfAnim, afterZero) {
	
	var frames = frameCount || 10;
	var time = timeOfAnim || 300;
	var fix = afterZero || 0;


	var origNum = parseInt(jqObj.text(), 10);
	var step = (targetNum-origNum)/(frames);

	var slices = [origNum];
	var currentSlice = origNum;

	for (var i=0, len=frames; i<(frames-1); i++){
		currentSlice+=step;
		slices.push(currentSlice.toFixed(fix));
	}
	slices.push(targetNum);

	var n = 0
	var timer = setInterval(function() {
		if (n===slices.length){
			clearInterval(timer)
		} else {
			jqObj.text(slices[n++]);
		}
	}, time/frames)
}

