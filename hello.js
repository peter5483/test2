let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let user_router = require('./routers/main_router.js')
// Number of periods(0,1,2,3,4,5,6), "https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg", "https://yt3.ggpht.com/ytc/AAUvwngZmr_qbKhGIvHaHwLRmKhKxdeFfM7ZbK316vFNSw=s88-c-k-c0x00ffffff-no-rj", "https://twitter.com/tokino_sora","https://upload.wikimedia.org/wikipedia/zh/9/9f/Twitter_bird_logo_2012.svg"
    // name, youtube, imgYoutube, twitter, imgTwitter
let holo = {
    "CEO":[
        ["Yagoo"]
    ],
    "零期生":[
        ["時乃空/ときのそら"],
        ["蘿蔔子/ロボ子さん"],
        ["櫻巫女/さくらみこ"],
        ["星街彗星/星街すいせい"]
    ],
    "一期生":[
        ["夜空梅露/夜空メル"],
        ["亞綺·羅森塔爾/アキ"],
        ["赤井心/赤井はあと"],
        ["夏色祭/夏色まつり"],
        ["白上吹雪/白上フブキ"]
    ],
    "二期生":[
        ["湊阿庫婭/湊あくあ"],
        ["紫咲詩音/紫咲シオン"],
        ["百鬼綾目/百鬼あやめ"],
        ["癒月巧可/癒月ちょこ"],
        ["大空昴/大空スバル"]
    ],
    "三期生":[
        ["兔田佩克拉/兎田ぺこら"],
        ["潤羽露西婭/潤羽るしあ"],
        ["不知火芙蕾雅/不知火フレア"],
        ["白銀諾艾爾/白銀ノエル"],
        ["寶鐘瑪琳/宝鐘マリン"]
    ],
    "四期生":[
        ["天音彼方/天音かなた"],
        ["桐生可可/桐生ココ"],
        ["角卷綿芽/角巻わため"],
        ["常闇永遠/常闇トワ"],
        ["姬森璐娜/姫森ルーナ"]
    ],
    "五期生":[
        ["雪花菈米/雪花ラミィ"],
        ["桃鈴音音/桃鈴ねね"],
        ["獅白牡丹/獅白ぼたん"],
        ["尾丸波爾卡/尾丸ポルカ"]
    ],
    "Gamer":[
        ["白上吹雪/白上フブキ"],
        ["大神澪/大神ミオ"],
        ["貓又小粥/猫又おかゆ"],
        ["戌神沁音/戌神ころね"]
    ]
}
app.get("/", (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("./routers/homepage.html", options)
    // var str="<body>";
    // for(let period in holo){
    //     str+="<h3>"+period+'</h3>';
    //     for(var vtb in holo[period]){
    //         for(var i=0;i<1;i++){
    //             str+=" <h4>"+vtb[i]+"</h4>"
    //         }
    //     }
    // }
    // str+="</body>"
    // res.end(str);
})

app.use("/user", user_router)

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});