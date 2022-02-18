/*
  2022/02/18
  Voicy.jpの再生スピードを、任意のショートカットキー押下でUP・DOWNできる様にするスクリプト。
  by rtyaoke

  chrome拡張の「ScriptAutoRunner」等での使用がおすすめ。
  https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm?hl=ja-jp
*/
window.onload=function(){

  // shortcut.jsのインポート用に、DOM要素を作成
  let script = document.createElement('script');
  script.src = 'https://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js';

  // shortcut.jsが読み込み完了してからショートカット登録
  script.onload = function() {
    let op = {
      'type':'keydown',
      'propagate':false,
      'disable_in_input':true,
      'target':document
    }
    // 再生スピードUP用。↓の"E"を任意のショートカットキーに変更する。
    shortcut.add("E",function() {
      let speed_btn = document.querySelector("button.speed");
      speed_btn.click();
    },op);
    // 再生スピードDOWN用。↓の"Q"を任意のショートカットキーに変更する。
    shortcut.add("Q",function() {
      let speed_btn = document.querySelector("button.speed");
      speed_btn.click();
      speed_btn.click();
      speed_btn.click();
    },op);
  }

  // shortcut.jsのインポート用のDOM要素を<head>内に追加
  document.head.appendChild(script);

}
