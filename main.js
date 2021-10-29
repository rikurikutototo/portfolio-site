"use strict";

// ページ内遷移
jQuery('a[href^="#"]').on('click', function () {
	var id = jQuery(this).attr('href');
	var position = jQuery(id).offset().top;
	jQuery('html,body').animate({
		// padding-top分引く
		scrollTop: position
	},
		300);
});


//logoの表示
$(window).on('load', function () {
	$("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});



$('.slider').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	speed: 500,//スライドのスピード。初期値は300。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	centerMode: true,//要素を中央ぞろえにする
	variableWidth: true,//幅の違う画像の高さを揃えて表示
	dots: true,//下部ドットナビゲーションの表示
});


$(function () {
	$(window).scroll(function () {
		const wHeight = $(window).height();
		const scrollAmount = $(window).scrollTop();
		$('.scrollanime').each(function () {
			const targetPosition = $(this).offset().top;
			if (scrollAmount > targetPosition - wHeight + 60) {
				$(this).addClass("fadeInDown");
			}
		});
	});
});


// ドロワー
jQuery('.drawer-icon').on('click', function (e) {
	// aタグをクリックしてもページ遷移が起きないようにする
	e.preventDefault();

	// アイコンの処理
	jQuery(".drawer-icon").toggleClass("drawer-icon--open");
	// コンテントの処理
	jQuery(".drawer-content").toggleClass("drawer-content--open");
	// 背景色の処理
	jQuery('.drawer-background').toggleClass('drawer-background--open');
	return false;
});
jQuery('.drawer-content__link').on('click', function () {
	// アイコンの処理
	jQuery(".drawer-icon").removeClass("drawer-icon--open");
	// コンテントの処理
	jQuery(".drawer-content").removeClass("drawer-content--open");
	// 背景色の処理
	jQuery('.drawer-background').removeClass('drawer-background--open');
});






// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

	//ふわっと動くきっかけのクラス名と動きのクラス名の設定
	$('.fadeInUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
		var elemPos = $(this).offset().top - 50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeIn');
			// 画面内に入ったらfadeInというクラス名を追記
		}
	});
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
