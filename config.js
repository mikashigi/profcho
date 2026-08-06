"use strict";

window.PROFILE_CONFIG = {
  textColor: "#142a4a",
  fontFamily: '"Hiragino Maru Gothic ProN", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif',
  storageKey: "jaws-profile-maker-v1",
  sections: [
    { title: "基本プロフィール", fields: ["name","nickname","birthMonth","birthDay","personalityOthers","personalitySelf","charmPoint","dayOff"] },
    { title: "活動について", fields: ["sns","location","skill","hobby"] },
    { title: "好きなもの", fields: ["favoriteGame","favoriteRta","favoriteColor","favoriteFood","favoriteAnimal"] },
    { title: "JAWS PLAYERS", fields: ["challenge","message","favoriteWords","freeSpace","deadline"] },
    { title: "画像・能力値", fields: ["portrait","str","int","vit","dex","agi"] }
  ],
  fields: [
    ["name","名前",.105,.083,.09,.03,.018,.012,"center","middle",12,false,.004,"例：じゃわ太郎"],
    ["nickname","呼ばれたい名前",.210,.083,.14,.03,.018,.012,"center","middle",14,false,.004,"例：じゃわちゃん"],
    ["birthMonth","誕生月",.052,.116,.034,.028,.017,.012,"center","middle",2,false,.002,"例：8","number",1,12],
    ["birthDay","誕生日",.104,.116,.034,.028,.017,.012,"center","middle",2,false,.002,"例：7","number",1,31],
    ["personalityOthers","よく言われる性格",.150,.145,.160,.03,.016,.011,"center","middle",20,false,.004,"例：いつも明るくて好奇心旺盛"],
    ["personalitySelf","自分で思う性格",.113,.179,.170,.03,.016,.011,"center","middle",20,false,.004,"例：マイペースで負けず嫌い"],
    ["charmPoint","チャームポイント",.164,.213,.150,.03,.016,.011,"center","middle",20,false,.004,"例：笑うと細くなる目"],
    ["dayOff","休みの日にしていること",.153,.246,.145,.03,.015,.010,"center","middle",24,false,.004,"例：ゲームとカフェ巡り"],
    ["sns","SNS",.048,.352,.168,.080,.015,.009,"left","middle",80,true,.008,"例：X @jaws_player\n配信：example.com"],
    ["location","住んでいるところ",.229,.352,.168,.080,.015,.009,"left","middle",50,true,.008,"例：東京都（海の近く）"],
    ["skill","特技",.048,.473,.168,.080,.015,.009,"left","middle",60,true,.008,"例：初見ゲームの謎解き"],
    ["hobby","趣味",.229,.473,.168,.080,.015,.009,"left","middle",60,true,.008,"例：RTA観戦、料理、散歩"],
    ["challenge","JAWS PLAYERSでやりたいこと・挑戦したいこと",.530,.075,.410,.205,.020,.010,"left","middle",180,true,.012,"例：みんなと新しいゲームに挑戦して、楽しい企画を作りたいです。"],
    ["message","みんなへひとこと",.585,.425,.170,.150,.017,.009,"left","middle",80,true,.009,"例：たくさん遊んで仲良くなりましょう！"],
    ["favoriteWords","好きな言葉",.815,.645,.100,.040,.015,.010,"center","middle",30,true,.004,"例：楽しんだ者勝ち"],
    ["favoriteGame","好きなゲーム",.050,.675,.175,.145,.017,.009,"left","middle",40,true,.010,"例：アクション、パズルゲーム"],
    ["favoriteRta","好きなRTA",.227,.668,.162,.140,.017,.009,"left","middle",40,true,.010,"例：好きなタイトルやカテゴリ"],
    ["favoriteColor","好きな色",.360,.700,.130,.095,.016,.009,"center","middle",30,true,.008,"例：海のような青"],
    ["favoriteFood","好きな食べ物",.060,.843,.232,.120,.018,.009,"left","middle",40,true,.010,"例：カレー、プリン"],
    ["favoriteAnimal","好きな動物",.324,.826,.147,.145,.017,.009,"left","middle",40,true,.010,"例：ねこ、ペンギン"],
    ["freeSpace","フリースペース",.515,.743,.435,.200,.018,.009,"left","middle",400,true,.012,"例：自己紹介、イラストの説明など自由にどうぞ。"],
    ["deadline","書き終える期限",.815,.970,.110,.030,.014,.009,"center","middle",20,false,.004,"例：8月31日まで"]
  ].map(([id,label,x,y,width,height,fontSize,minFontSize,align,verticalAlign,maxLength,multiline,padding,placeholder,type="text",min,max]) => ({id,label,x,y,width,height,fontSize,minFontSize,lineHeight:1.35,align,verticalAlign,maxLength,multiline,padding,placeholder,type,min,max})),
  portrait: { points: [[.380,.079],[.488,.102],[.469,.285],[.361,.263]] },
  radar: { centerX:.8605, centerY:.525, radius:.075, labels:["STR","INT","VIT","DEX","AGI"] }
};

// shuusei で確定した描画設定
const PROFILE_FIELD_ADJUSTMENTS = [{"id":"name","label":"名前","x":0.101,"y":0.074,"width":0.097,"height":0.03,"fontSize":0.018,"minFontSize":0.012,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":12,"multiline":false,"padding":0.004,"placeholder":"例：さめパペ太","type":"text"},{"id":"nickname","label":"呼ばれたい名前","x":0.205,"y":0.074,"width":0.065,"height":0.03,"fontSize":0.018,"minFontSize":0.012,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":8,"multiline":false,"padding":0.004,"placeholder":"例：パペ太","type":"text"},{"id":"birthMonth","label":"誕生月","x":0.048,"y":0.107,"width":0.034,"height":0.028,"fontSize":0.017,"minFontSize":0.012,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":2,"multiline":false,"padding":0.002,"placeholder":"例：8","type":"number","min":1,"max":12},{"id":"birthDay","label":"誕生日","x":0.09,"y":0.107,"width":0.034,"height":0.028,"fontSize":0.017,"minFontSize":0.012,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":2,"multiline":false,"padding":0.002,"placeholder":"例：7","type":"number","min":1,"max":31},{"id":"personalityOthers","label":"よく言われる性格","x":0.149,"y":0.139,"width":0.102,"height":0.03,"fontSize":0.016,"minFontSize":0.011,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":18,"multiline":false,"padding":0.004,"placeholder":"例：いつも明るくて好奇心旺盛","type":"text"},{"id":"personalitySelf","label":"自分で思う性格","x":0.112,"y":0.175,"width":0.164,"height":0.03,"fontSize":0.016,"minFontSize":0.011,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":20,"multiline":false,"padding":0.004,"placeholder":"例：マイペースで負けず嫌い","type":"text"},{"id":"charmPoint","label":"チャームポイント","x":0.162,"y":0.205,"width":0.15,"height":0.03,"fontSize":0.016,"minFontSize":0.011,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":20,"multiline":false,"padding":0.004,"placeholder":"例：笑うと細くなる目","type":"text"},{"id":"dayOff","label":"休みの日にしていること","x":0.149,"y":0.235,"width":0.102,"height":0.03,"fontSize":0.015,"minFontSize":0.01,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":16,"multiline":false,"padding":0.004,"placeholder":"例：ゲームとカフェ巡り","type":"text"},{"id":"sns","label":"SNS","x":0.055,"y":0.348,"width":0.161,"height":0.08,"fontSize":0.015,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":80,"multiline":true,"padding":0.008,"placeholder":"例：X @jaws_player\n配信：example.com","type":"text"},{"id":"location","label":"住んでいるところ","x":0.234,"y":0.348,"width":0.161,"height":0.08,"fontSize":0.015,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":80,"multiline":true,"padding":0.008,"placeholder":"例：東京都（海の近く）","type":"text"},{"id":"skill","label":"特技","x":0.055,"y":0.471,"width":0.161,"height":0.08,"fontSize":0.015,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":80,"multiline":true,"padding":0.008,"placeholder":"例：初見ゲームの謎解き","type":"text"},{"id":"hobby","label":"趣味","x":0.234,"y":0.471,"width":0.161,"height":0.08,"fontSize":0.015,"minFontSize":0.009,"lineHeight":1.35,"align":"left","verticalAlign":"middle","maxLength":80,"multiline":true,"padding":0.008,"placeholder":"例：RTA観戦、料理、散歩","type":"text"},{"id":"favoriteGame","label":"好きなゲーム","x":0.044,"y":0.68,"width":0.169,"height":0.11,"fontSize":0.017,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":44,"multiline":true,"padding":0.01,"placeholder":"例：アクション、パズルゲーム","type":"text"},{"id":"favoriteRta","label":"好きなRTA","x":0.211,"y":0.66,"width":0.138,"height":0.128,"fontSize":0.017,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":45,"multiline":true,"padding":0.01,"placeholder":"例：好きなタイトルやカテゴリ","type":"text"},{"id":"favoriteColor","label":"好きな色","x":0.349,"y":0.686,"width":0.111,"height":0.076,"fontSize":0.016,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":30,"multiline":true,"padding":0.008,"placeholder":"例：海のような青","type":"text"},{"id":"favoriteFood","label":"好きな食べ物","x":0.084,"y":0.843,"width":0.18,"height":0.119,"fontSize":0.018,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":44,"multiline":true,"padding":0.01,"placeholder":"例：カレー、プリン","type":"text"},{"id":"favoriteAnimal","label":"好きな動物","x":0.309,"y":0.821,"width":0.12,"height":0.145,"fontSize":0.017,"minFontSize":0.009,"lineHeight":1.35,"align":"left","verticalAlign":"middle","maxLength":40,"multiline":true,"padding":0.01,"placeholder":"例：サメ","type":"text"},{"id":"challenge","label":"JAWS PLAYERSでやりたいこと・挑戦したいこと","x":0.53,"y":0.093,"width":0.41,"height":0.214,"fontSize":0.02,"minFontSize":0.01,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":182,"multiline":true,"padding":0.012,"placeholder":"例：みんなと新しいゲームに挑戦して、楽しい企画を作りたいです。","type":"text"},{"id":"message","label":"みんなへひとこと","x":0.585,"y":0.42,"width":0.162,"height":0.139,"fontSize":0.017,"minFontSize":0.009,"lineHeight":1.35,"align":"center","verticalAlign":"middle","maxLength":84,"multiline":true,"padding":0.009,"placeholder":"例：たくさん遊んで仲良くなりましょう！","type":"text"},{"id":"freeSpace","label":"フリースペース","x":0.512,"y":0.766,"width":0.443,"height":0.189,"fontSize":0.018,"minFontSize":0.009,"lineHeight":1.35,"align":"left","verticalAlign":"middle","maxLength":324,"multiline":true,"padding":0.012,"placeholder":"なんでもかいていいし、なにもかかなくてもいい","type":"text"}];
window.PROFILE_CONFIG.fontFamily = '\"TanukiMagic\", \"Yu Gothic\", Meiryo, sans-serif';
PROFILE_FIELD_ADJUSTMENTS.forEach((adjustment) => {
  const field = window.PROFILE_CONFIG.fields.find((item) => item.id === adjustment.id);
  if (field) Object.assign(field, adjustment);
});

// ペンタグラム（能力値グラフ）下、AGIの下側にある数値記入欄
window.PROFILE_CONFIG.fields = window.PROFILE_CONFIG.fields.filter((field) => field.id !== "favoriteWords");
window.PROFILE_CONFIG.fields.push({
  id: "agiExtra", label: "AGIの下の自由記入欄", x: 0.815, y: 0.645,
  width: 0.100, height: 0.040, fontSize: 0.015, minFontSize: 0.010,
  lineHeight: 1.35, align: "center", verticalAlign: "middle",
  maxLength: 1, multiline: false, padding: 0.004,
  placeholder: "1～5から選択", type: "select", min: 1, max: 5
});
const jawsSection = window.PROFILE_CONFIG.sections.find((section) => section.title === "JAWS PLAYERS");
if (jawsSection) jawsSection.fields = jawsSection.fields.filter((id) => id !== "favoriteWords" && id !== "agiExtra");
// 第6能力：項目名は利用者が入力し、値はほかの能力と同じ1～5。
window.PROFILE_CONFIG.fields = window.PROFILE_CONFIG.fields.filter((field) => field.id !== "agiExtra");
window.PROFILE_CONFIG.fields.push({
  id: "customStatLabel", label: "自由能力の項目名", x: 0.818, y: 0.644,
  width: 0.087, height: 0.035, fontSize: 0.014, minFontSize: 0.009,
  lineHeight: 1.2, align: "center", verticalAlign: "middle",
  maxLength: 8, multiline: false, padding: 0.003,
  placeholder: "例：LUCK", type: "text"
});
const imageSection = window.PROFILE_CONFIG.sections.find((section) => section.title === "画像・能力値");
if (imageSection) imageSection.fields = ["portrait", "str", "int", "vit", "dex", "agi", "customStatLabel", "customstat"];
window.PROFILE_CONFIG.radar.labels = ["STR", "INT", "VIT", "CUSTOMSTAT", "DEX", "AGI"];