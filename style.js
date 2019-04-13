const d = document;
(function () {
  var ripple, ripples, RippleEffect, loc, cover, coversize, style, x, y, i, num;

  //クラス名rippleの要素を取得
  ripples = d.querySelectorAll('.ripple');

  //位置を取得
  RippleEffect = function (e) {
    ripple = this;//クリックされたボタンを取得
    cover = d.createElement('span');//span作る
    coversize = ripple.offsetWidth;//要素の幅を取得
    loc = ripple.getBoundingClientRect();//絶対座標の取得
    x = e.pageX - loc.left - window.pageXOffset - (coversize / 2);
    y = e.pageY - loc.top - window.pageYOffset - (coversize / 2);
    pos = 'top:' + y + 'px; left:' + x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;';

    //spanを追加
    ripple.appendChild(cover);
    cover.setAttribute('style', pos);
    cover.setAttribute('class', 'rp-effect');//クラス名追加

    //しばらくしたらspanを削除
    setTimeout(function () {
      var list = d.getElementsByClassName("rp-effect");
      for (var i = list.length - 1; i >= 0; i--) {//末尾から順にすべて削除
        list[i].parentNode.removeChild(list[i]);
      }
    }, 2000)
  };
  for (i = 0, num = ripples.length; i < num; i++) {
    ripple = ripples[i];
    ripple.addEventListener('mousedown', RippleEffect);
  }
}());
var doc_btn = d.getElementById("doc");
var his_btn = d.getElementById("history")
var set_btn = d.getElementById("settings")
var doc_area = d.getElementById("document_area")
var his_area = d.getElementById("history_area")
var set_area = d.getElementById("set_area")
var sta_page = d.getElementById("start")
var sta_btn = d.getElementById("sta_btn")
var sta2_btn = d.getElementById("sta2_btn")
var sta3_btn = d.getElementById("sta3_btn")
var emoji_area = d.getElementById("emoji_area")
var emoji_btn = d.getElementById("emoji_btn")
var sta4_btn = d.getElementById("sta4_btn")
doc_btn.addEventListener("click", function () {
  sta_page.style.display = "none"
  doc_area.style.display = "block"
  his_area.style.display = "none"
  set_area.style.display = "none"
  emoji_area.style.display = "none"
})
his_btn.addEventListener("click", function () {
  sta_page.style.display = "none"
  doc_area.style.display = "none"
  his_area.style.display = "block"
  set_area.style.display = "none"
  emoji_area.style.display = "none"
})
set_btn.addEventListener("click", function () {
  sta_page.style.display = "none"
  doc_area.style.display = "none"
  his_area.style.display = "none"
  set_area.style.display = "block"
  emoji_area.style.display = "none"
})
sta_btn.addEventListener("click", function () {
  sta_page.style.display = "block"
  doc_area.style.display = "none"
  his_area.style.display = "none"
  set_area.style.display = "none"
  emoji_area.style.display = "none"
})
sta2_btn.addEventListener("click", function () {
  sta_page.style.display = "block"
  doc_area.style.display = "none"
  his_area.style.display = "none"
  set_area.style.display = "none"
  emoji_area.style.display = "none"
})
sta3_btn.addEventListener("click", function () {
  sta_page.style.display = "block"
  doc_area.style.display = "none"
  his_area.style.display = "none"
  set_area.style.display = "none"
  emoji_area.style.display = "none"
})
sta4_btn.addEventListener("click", function () {
  sta_page.style.display = "block"
  doc_area.style.display = "none"
  his_area.style.display = "none"
  set_area.style.display = "none"
  emoji_area.style.display = "none"
})
emoji_btn.addEventListener("click", function () {
  sta_page.style.display = "none"
  doc_area.style.display = "none"
  his_area.style.display = "none"
  set_area.style.display = "none"
  emoji_area.style.display = "block"
})
var copy_btn = d.getElementById("copy");
var paste_btn = d.getElementById("paste")
function rightclick() {
  var myContextMenu = d.getElementById('js-contextmenu');
  d.body.addEventListener('contextmenu', function (e) {
    var posX = e.pageX;
    var posY = e.pageY;
    myContextMenu.style.left = posX + 'px';
    myContextMenu.style.top = posY + 'px';
    myContextMenu.classList.add('show');
  });
  d.body.addEventListener('click', function () {
    if (myContextMenu.classList.contains('show')) {
      myContextMenu.classList.remove('show');
    }
  });
}
function pasute(text) {
  var dataftomdata = datafrom.value;
  var vack = dataftomdata.slice(-1);
  if (vack == ")") {
      datafrom.value = strIns(dataftomdata, -1, text);
  } else {
      datafrom.value = dataftomdata + text
  }
}
document.addEventListener('paste', event => {
  event.preventDefault();
  navigator.clipboard.readText().then(text => {
     pasute(text)
  });
});

rightclick()
copy_btn.addEventListener("click", function () {
  var select = window.getSelection().toString();
  navigator.clipboard.writeText(select);
})
paste_btn.addEventListener("click", function () {
  navigator.clipboard.readText()
  .then(text => {
    pasute(text)
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
});
d.getElementById("delete_btn").addEventListener("click", function () {

  d.getElementById("consolearea").innerHTML = ""

})

