(function($) {
	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);
	// 设置断点
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});
	// 加载页面
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});		
	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {
			var $main = $('.main.fullscreen'),
				IEResizeTimeout;
			$window
				.on('resize.ie-flexbox-fix', function() {
					clearTimeout(IEResizeTimeout);
					IEResizeTimeout = setTimeout(function() {
						var wh = $window.height();
						$main.each(function() {
							var $this = $(this);
							$this.css('height', '');
							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');
						});
					});
				})
				.triggerHandler('resize.ie-flexbox-fix');
		}
	// 图片展示
		$window.on('load', function() {
			var $gallery = $('.gallery');
			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});
		});
	// 过渡.
		if (browser.canUse('transition')) {
			var on = function() {
				// 图片的弹入弹出
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },//控制照片的弹进
							leave:		function() { $(this).addClass('inactive'); }//控制照片的弹出
						});
				// 控制文章内容的弹入弹出.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});
					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});
				// 控制信息输入框的弹入弹出
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});
			};
			var off = function() {
					$('.main.style1')
						.unscrollex()
					$('.main.style2')
						.unscrollex();
					$('#contact')
						.unscrollex();
			};
			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);
		}
		var resizeTimeout, resizeScrollTimeout;
		$window
			.on('resize', function() {
					$body.addClass('is-resizing');
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(function() {
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});
				}, 100);
			})
			.on('load', function() {
				$window.trigger('resize');
			});
})(jQuery);