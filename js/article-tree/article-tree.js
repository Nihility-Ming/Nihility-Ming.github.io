article_tree();

function article_tree(){

	if (window.screen.width < 1200) {
		return;
	}
	

	if($('#article-content-wrap h2').length == 0 && $('#article-content-wrap h3').length == 0) {
		return;
	}
	
	$('.article_h1_title').eq(0).html('【' + $('.article-title').eq(0).text() + '】');
	$('.article_h1_title').eq(0).click(function(){
		$(window).scrollTop($('.article-title').eq(0).offset().top);
		$('#article_tree a').removeClass('article_tree_active');
		$('#article_tree li').removeClass('article_tree_active');
	});
	
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		var contributeScrollTop = $('.contribute').eq(0).offset().top;

		if (scrollTop >= 200 && scrollTop <= contributeScrollTop) {
		  $('#article_tree').fadeIn();
		} else {
		  $('#article_tree').fadeOut();
		}
		
		// 获取当前滚动位置和h标签的位置
		var titles = $('.content-title');
		var currentTitle = null;
		for (var i = 0; i < titles.length; i++) {
			var title = $(titles[i]);
			if (scrollTop >= title.offset().top - 100) {
				currentTitle = title;
			} else {
				break;
			}
		}
		
		// 给对应的a标签添加active类，移除其他a标签的active类
		if (currentTitle) {
			var index = currentTitle.index('.content-title');
			var currentLink = $('#article_tree_content .atalog a').eq(index);
			$('#article_tree a').removeClass('article_tree_active');
			$('#article_tree li').removeClass('article_tree_active');
			
			currentLink.addClass('article_tree_active');
			currentLink.parent().addClass('article_tree_active');
		}
		
		if(scrollTop <= 400 || scrollTop >= contributeScrollTop) {
			$('#article_tree li').removeClass('article_tree_active');
			$('#article_tree a').removeClass('article_tree_active');
		}
		
		if(document.querySelector(".article_tree_active")) {
			document.querySelector(".article_tree_active").scrollIntoView({behavior: "smooth", block: "center"});
		}
	});

	$('#article-content-wrap h2').addClass('content-title');
	$('#article-content-wrap h3').addClass('content-title');
	$('#article-content-wrap h2').attr('data-index', 2);
	$('#article-content-wrap h3').attr('data-index', 3);

	//  函数的一个参数是标题级别，第二个参数是第一个标题的索引值
	function atalog(titleIndex, start) {
		//  存储 HTML 和当前的索引值
		var el = {
			el: '',
			index: start
		};
		var current = 0;  //  已遍历的数量

		for (var i = start;i < $('.content-title').length;i ++) {
			if (i < current) {
				//  如果当前 i 的值小于已遍历的数量就跳过
				continue;
			}

			if ($('.content-title').eq(i).attr('data-index') > titleIndex) {
				//  如果是更小一级的标题就调用自身继续查找
				var result = atalog($('.content-title').eq(i).attr('data-index'), i);
				//  把返回的 HTML 添加到当前函数的 el 中
				el.el += '<li> ' + result.el + '</li>';
				current = result.index + 1;  //  设置已遍历的数量
				el.index = result.index;  //  设置索引
				continue;  //  跳过本次循环
			}

			if ($('.content-title').eq(i).attr('data-index') < titleIndex) {
				//  如果是更大一级的标题就返回已生成的 HTML 目录
				el.el = '<ul>' + el.el + '</ul>';
				return el;
			}
			//  生成 HTML 目录
			el.el += '<li><a data-index="' + i + '" href="javascript:;">' + $('.content-title').eq(i).text() + '</a></li>';
			el.index = i;  //  设置当前的索引值为 i
		}
		//  添加列表的外层 ul
		el.el = '<ul> ' + el.el + '</ul>';
		return el;  //  返回生成的 HTML 目录
	}

	//  调用生成目录的函数，从第 0 个 h2 开始
	var el = atalog(2, 0);
	//  把生成的目录插入到文章的开头
	$('#article_tree_content').html('<div class="atalog">' + el.el + '</div>');
	//  给生成的目录添加点击事件
	$('#article_tree_content .atalog a').on('click', function () {
		//  设置滚动条的高度为标题的 offsetTop
		$(document).scrollTop($('.content-title').eq($(this).attr('data-index')).offset().top);
	});
	
	if($('#article-content-wrap h2').length == 0) {
		$('#article_tree li ul').css("margin-left", "0");
	}
}