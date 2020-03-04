(function() {
  var status = "short";
  var read_more = document.getElementById("read_more");
  var training_list = document.getElementById("training_list");

  read_more.addEventListener("click", function() {
    if (status == "short") {
      training_list.classList.remove("training_list_short");
      training_list.classList.add("training_list_long");
      read_more.innerText = "↥ close";
      status = "long";
    } else {
      training_list.classList.remove("training_list_long");
      training_list.classList.add("training_list_short");
      read_more.innerText = "↧read more";
      status = "short";
    }
  });
})();

(function() {
  var photo_gallery_text = [
    [
      "先付け",
      "<span>しんとり菜と</span><span>うすあげの</span><span>おひたし</span>"
    ],
    ["前菜", "<span>金目鯛の</span><span>サラダ焼き</span>"],
    [
      "前菜",
      "<span>ささみの香り揚げ、</span><span>いわしの梅煮、</span><span>慈姑せんべい</span>"
    ],
    ["前菜", "<span>だし巻き玉子</span>"],
    ["吸物", "<span>いわしつみれ</span><span>のお吸い物</span>"],
    ["造り", "<span>旬の魚介の</span><span>お造り</span>"],
    ["焼き物", "<span>牡蠣の</span><span>みぞれ焼き</span>"],
    ["煮物", "<span>海老芋と</span><span>にしんの炊き合わせ</span>"],
    ["揚げ物", "<span>芝海老の</span><span>かきあげ</span>"],
    ["酢の物", "<span>あじの砧巻き</span><span>黄身酢かけ</span>"],
    ["食事", "<span>五目ご飯、</span><span>赤だし</span>"],
    ["甘味", "<span>抹茶</span><span>ババロア</span>"]
  ];
  var status = "0";
  var thumbnail_wrap_status = "left";
  var main_photo_wrapper = document.getElementById("main_photo_wrapper");
  var foodType = document.getElementById("photo_gallery_food_type");
  var foodTitle = document.getElementById("photo_gallery_food_title");
  var button_1_left = document.getElementById("button_1_left");
  var button_1_right = document.getElementById("button_1_right");
  var thumbnail_0 = document.getElementById("thumbnail_0");
  var thumbnail_1 = document.getElementById("thumbnail_1");
  var thumbnail_2 = document.getElementById("thumbnail_2");
  var thumbnail_3 = document.getElementById("thumbnail_3");
  var thumbnail_4 = document.getElementById("thumbnail_4");
  var thumbnail_5 = document.getElementById("thumbnail_5");
  var thumbnail_6 = document.getElementById("thumbnail_6");
  var thumbnail_7 = document.getElementById("thumbnail_7");
  var thumbnail_8 = document.getElementById("thumbnail_8");
  var thumbnail_9 = document.getElementById("thumbnail_9");
  var thumbnail_10 = document.getElementById("thumbnail_10");
  var thumbnail_11 = document.getElementById("thumbnail_11");
  var button_2_left = document.getElementById("button_2_left");
  var button_2_right = document.getElementById("button_2_right");
  var humbnail_wrap = document.getElementById("humbnail_wrap");

  function photoGallery(num, direction) {
    if (num) {
      foodType.innerText = photo_gallery_text[num][0];
      foodTitle.innerHTML = photo_gallery_text[num][1];
      main_photo_wrapper.classList.remove("main_photo_wrapper_" + status);
      main_photo_wrapper.classList.add("main_photo_wrapper_" + num);
      status = num;
    }
    if (direction) {
      main_photo_wrapper.classList.remove("main_photo_wrapper_" + status);
      if (direction == "left" && status > 0) {
        status--;
        //console.log("left" + status);
      }
      if (direction == "right" && status < 11) {
        status++;
        //console.log("right" + status);
      }
      //console.log("main_photo_wrapper_" + status);
      foodType.innerText = photo_gallery_text[status][0];
      foodTitle.innerHTML = photo_gallery_text[status][1];
      main_photo_wrapper.classList.add("main_photo_wrapper_" + status);
    }
  } //function

  function thumbnailSlide(direction) {
    if (direction != thumbnail_wrap_status) {
      if (direction == "left") {
        thumbnail_wrap.classList.remove("thumbnail_wrap_right");
        thumbnail_wrap.classList.add("thumbnail_wrap_left");
        thumbnail_wrap_status = "left";
      } else {
        thumbnail_wrap.classList.remove("thumbnail_wrap_left");
        thumbnail_wrap.classList.add("thumbnail_wrap_right");
        thumbnail_wrap_status = "right";
      } //if
    } //if
  } //function

  button_1_left.addEventListener("click", function() {
    photoGallery(null, "left");
  });
  button_1_right.addEventListener("click", function() {
    photoGallery(null, "right");
  });
  thumbnail_0.addEventListener("click", function() {
    photoGallery("0");
  });
  thumbnail_1.addEventListener("click", function() {
    photoGallery(1);
  });
  thumbnail_2.addEventListener("click", function() {
    photoGallery(2);
  });
  thumbnail_3.addEventListener("click", function() {
    photoGallery(3);
  });
  thumbnail_4.addEventListener("click", function() {
    photoGallery(4);
  });
  thumbnail_5.addEventListener("click", function() {
    photoGallery(5);
  });
  thumbnail_6.addEventListener("click", function() {
    photoGallery(6);
  });
  thumbnail_7.addEventListener("click", function() {
    photoGallery(7);
  });
  thumbnail_8.addEventListener("click", function() {
    photoGallery(8);
  });
  thumbnail_9.addEventListener("click", function() {
    photoGallery(9);
  });
  thumbnail_10.addEventListener("click", function() {
    photoGallery(10);
  });
  thumbnail_11.addEventListener("click", function() {
    photoGallery(11);
  });
  button_2_left.addEventListener("click", function() {
    thumbnailSlide("left");
  });
  button_2_right.addEventListener("click", function() {
    thumbnailSlide("right");
  });
})();

(function() {
  var event = document.getElementById("event");
  var news = document.getElementById("news");

  var float_event = document.getElementById("float_event");
  var float_news = document.getElementById("float_news");

  var close_event = document.getElementById("close_event");
  var close_news = document.getElementById("close_news");
  var float_event_status = "invisible";
  var float_news_status = "invisible";

  ////// event ///////
  event.addEventListener("mouseover", function() {
    floatPanel("visible", "event");
  });
  event.addEventListener("touchstart", function() {
    floatPanel("visible", "event");
    if ((float_news_status = "visible")) {
      floatPanel("invisible", "news");
    }
  });
  close_event.addEventListener("click", function() {
    floatPanel("invisible", "event");
  });
  event.addEventListener("mouseout", function() {
    floatPanel("invisible", "event");
  });

  ////// news ///////
  news.addEventListener("mouseover", function() {
    floatPanel("visible", "news");
  });
  news.addEventListener("touchstart", function() {
    floatPanel("visible", "news");
    if ((float_event_status = "visible")) {
      floatPanel("invisible", "event");
    }
  });
  close_news.addEventListener("click", function() {
    floatPanel("invisible", "news");
  });
  news.addEventListener("mouseout", function() {
    floatPanel("invisible", "news");
  });

  function floatPanel(visibility, title) {
    if (title == "event" && visibility == "visible") {
      float_event.classList.remove("invisible");
      float_event.classList.add("visible");
    }
    if (title == "event" && visibility == "invisible") {
      float_event.classList.remove("visible");
      float_event.classList.add("invisible");
    }
    if (title == "news" && visibility == "visible") {
      float_news.classList.remove("invisible");
      float_news.classList.add("visible");
    }
    if (title == "news" && visibility == "invisible") {
      float_news.classList.remove("visible");
      float_news.classList.add("invisible");
    }
    if (title == "instagram" && visibility == "visible") {
      float_instagram.classList.remove("invisible");
      float_instagram.classList.add("visible");
    }
    if (title == "instagram" && visibility == "invisible") {
      float_instagram.classList.remove("visible");
      float_instagram.classList.add("invisible");
    }
  } //function
})();

(function() {
  var thumbnails_status = "close";
  var kouza_more_btn = document.getElementById("kouza_more_btn");
  var thumbnails = document.getElementById("thumbnails");

  kouza_more_btn.addEventListener("click", function() {
    if (thumbnails_status == "close") {
      thumbnails.classList.remove("sp_invisible");
      thumbnails.classList.add("sp_visible");
      kouza_more_btn.innerHTML = "<span>料理画像一覧を閉じる</span>";
      thumbnails_status = "open";
    } else {
      thumbnails.classList.remove("sp_visible");
      thumbnails.classList.add("sp_invisible");
      kouza_more_btn.innerHTML = "<span>料理画像を全て見る</span>";
      thumbnails_status = "close";
    }
  });
})();
