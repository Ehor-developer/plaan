var login = document.cookie.indexOf("login=yes");
var kazu = 0
if (login !== -1) {
    const day3 = document.getElementById("3div");
    console.log('ログイン');
    document.cookie = ("login=yes" + ";max-age=432000");
    day3.style.display = "none";
}
else {
    const day3 = document.getElementById("3div");
    day3.style.display = "none";
    document.cookie = ("login=yes" + ";max-age=432000");
    if (day3.style.display == "block") {
        day3.style.display = "none";


    } else {
        day3.style.display = "block";
    }
}

const target = document.getElementById('3div');

target.addEventListener('click', () => {
    target.style.display = "none";
}, false);
//////////////////////////////////////////////////////////////////////////
/////表示時刻取得//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function times(num) {
    var timenow;
    if (num < 10) { timenow = "0" + num; }
    else { timenow = num; }
    return timenow;
}
function time() {
    var datatime = new Date();
    var hour = times(datatime.getHours());
    var minute = times(datatime.getMinutes());
    var timecolon = hour + ":" + minute;
    document.getElementById("time").innerHTML = timecolon;
    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    datenow = year + '年' + month + '月' + day + '日'
    document.getElementById("datenow").innerHTML = datenow;
}
setInterval('time()', 1000);
var val = 0
var kazu = 0
function gift() {
    if (kazu < 10000) {
        val++;
        document.getElementById("daytime").value = val;
    }
    if (kazu > 10000){
        val = 0
    }
}
setInterval('gift()',1000);
//////////////////////////////////////////////////////////////////////////
///集中タイマー/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
var timerdata = 0
var timerhour = 0
var timerminute = 0
var timertime = 0
function timer() {
    timerdata++;

    let timerhour = Math.floor(timerdata / 3600);
    if (timerhour < 10) { timerhour = "0" + timerhour; }
    let timerminute = Math.floor(timerdata % 3600 / 60);
    if (timerminute < 10) { timerminute = "0" + timerminute; }
    let timertime = timerdata % 60;
    if (timertime < 10) { timertime = "0" + timertime; }
    document.getElementById("timerhour").innerHTML = timerhour;
    document.getElementById("timerminute").innerHTML = ":" + timerminute;
    document.getElementById("timertime").innerHTML = ":" + timertime;


}
setInterval(timer, 1000);

/////////////////////////////////////////////////////////////////////////////
///ほかのアプリ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
let notapp = 0//データの初期化を行う。
window.addEventListener('blur', appnot, false);
function appnot() {
    notapp++;
    document.getElementById("notapp").innerHTML = "あらら..." + notapp + "回触ってしまいました...";
}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
today = new Date();
h = today.getHours();
if ((h >= 1) && (h < 3))
    document.getElementById("message").innerHTML = ("規則正しい生活をしましょう。深夜に作業は...良くない。");
else if ((h >= 4) && (h < 7))
    document.getElementById("message").innerHTML = ("おはよう。朝だよ！１日が始まったね！朝ご飯をたべよう！");
else if ((h >= 7) && (h < 9))
    document.getElementById("message").innerHTML = ("さあ、一日の始まりです。しっかり一日を無駄にしないようにがんばりましょう！");
else if ((h >= 9) && (h < 12))
    document.getElementById("message").innerHTML = ("さあ、午前にできるものをどんどん進めよう！後回しは禁物...");
else if ((h >= 12) && (h < 14))
    document.getElementById("message").innerHTML = ("お昼の時間です。一度目を休めて休憩をしましょう！！少し、飲み物を飲んで水分補給をしましょう。");
else if ((h >= 14) && (h < 15))
    document.getElementById("message").innerHTML = ("さあ、もうすぐ夕方になりますね....このまま頑張ってみましょう！！");
else if ((h >= 15) && (h < 16))
    document.getElementById("message").innerHTML = ("おやつでも食べませんか？少し頑張った自分に甘いものでリラックスをしましょう。");
else if ((h >= 17) && (h < 20))
    document.getElementById("message").innerHTML = ("もうすぐご飯の時間ですね...お風呂も入って明日の準備をしましょう...");
else if ((h >= 21) && (h < 23))
    document.getElementById("message").innerHTML = ("もうすぐ寝る時間ですね...やりたいことはすべて終わりましたか？急いでやらず、自分のペースを保ちましょう。");
else
    document.getElementById("message").innerHTML = ("もう夜中。睡眠大事です。ある程度区切りがついたら寝ましょう。");
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///ダークモード///////////////////////////////////////////////////////////////

function ivent() {
    if (check.checked == true) {
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");
    } else {
        document.body.classList.remove("darkmode");
        document.body.classList.add("lightmode");
    }
}
let onof = document.getElementById("check");
onof.addEventListener("click", ivent);


