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
  portrait: { points: [[.374,.074],[.490,.094],[.472,.284],[.355,.267]] },
  radar: { centerX:.860, centerY:.520, radius:.078, labels:["STR","INT","VIT","DEX","AGI"] }
};
