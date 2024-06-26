// 文章页的图片放大功能
var wrapImageWithFancyBox = function() {
	$('.cnt123 img:not([data-nozoom])').each(function() {
		var $image = $(this);
		var imageCaption = $image.attr('alt');
		var $imageWrapLink = $image.parent('a');

		if ($imageWrapLink.size() < 1) {
			var src = this.getAttribute('src');
			if(!src) {
				src = this.getAttribute('data-src');
			}
			var idx = src.lastIndexOf('?');
			if (idx != -1) {
				src = src.substring(0, idx);
			}
			$imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
		}

		$imageWrapLink.attr('data-fancybox', 'images');
		if (imageCaption) {
			$imageWrapLink.attr('data-caption', imageCaption);
		}
	});

	$('[data-fancybox="images"]').fancybox({
		backFocus: true,
		hash: false,
		clickSlide: 'close',
		mobile: {
					clickSlide: 'close'
				},
		buttons : [ 
			'slideShow',
			'thumbs',
			'zoom',
			'fullScreen',
			'close'
		],
		thumbs : {
			autoStart : false
		}
	});
};

window.addEventListener("load", wrapImageWithFancyBox, false);