var Festival = [
    {
        title: "七夕",
        start: "2020-08-25" }
];

var THEIR_EventList = [
    {
        title: "初相見",
        start: "2020-05-26" }, 
    {
        title: "劇本圍讀 + 加微信紀念",
        start: "2020-05-28",
        bg_img: "https://raw.githubusercontent.com/y060/gjzzh_051129/main/pic/%E5%9C%8D%E8%AE%80%E6%9C%83.jpeg" },
    {
        title: "《天涯客》開機", 
        start: "2020-06-03" },
    {
        title: "微博互關", 
        start: "2020-06-03" },
    {
        title: "首次微博互動", 
        start: "2020-06-27", 
        description: 
        "2020.06.27 01:02</br>\
        周循天涯溫舒子，客行五湖覓故知。@張哲瀚瘋子</br>\
        2020.06.27 9點左右留言</br>\
        與子同為天涯客，尋尋覓覓遇知音。（ps：阿絮半夜少衝浪，早睡早起身體好[猫头]）</br>\
        </br>\
        前一天26日拍的應該是龍淵閣逃命，絮：「你這叫情場得意，戰場失意」，18集雙雙跳向崖對面山洞那段。</br>\
        當天27到28凌晨是動情版" 
     },
    {
        title: "定妝照拍攝",
        start: "2020-06-29" },
    {
        title: "LPL比賽打賭",
        start: "2020-07-11" },
    {
        title: "芭莎拍攝",
        start: "2020-08-18" },
    {
        title: "《天涯客》殺青",
        start: "2020-09-23" },
    {
        title: "《時尚芭莎》",
        start: "2020-09-24" }
];

var GJ_EventList = [
    {
        title: "漁粉vlog", 
        start: "2020-07-06" },
    {
        title: "[微博] 隨手拍",
        start: "2020-08-05",
        info: "俊哲愛情山，八面山！" },
    {
        title: "[微博] 不配過",
        start: "2020-08-25" },
    {
        title: "[微博] 偷得浮生半日閒",
        start: "2020-09-13" },
    {
        title: "[微博] 致我溫",
        start: "2020-09-23",
        description: 
        "致我溫：\
        與君初相識 猶如故人歸\
        同舟逆旅 並轡追光\
        待得山花燦漫時 天涯再會\
        \
        發殺青照 + 合照"
    },
    {
        title: "首唱會送花「龔俊祝張老師首唱會順利」",
        start: "2020-10-18" }
];

var ZZH_EventList = [
    {
        title: "[微博] 被人買斷了四個月的時間",
        start: "2020-06-09" },
    {
        title: "[綠洲] 一滴都沒有了",
        start: "2020-07-18" },
    {
        title: "工作室發雙人圖",
        start: "2020-07-19" },
    {
        title: "[微博] 我有鏡子了",
        start: "2020-08-02" },
    {
        title: "[IG] 你快樂嗎？我不快，我熱！",
        start: "2020-08-27" },
    {
        title: "[IG] 你教我做事呀？",
        start: "2020-09-05" },
    {
        title: "[微博] 「江湖再見」1.0",
        start: "2020-09-23" },
    {
        title: "首唱會",
        start: "2020-10-18" }
];

var GZP_EventList = [
    {
        title: "「浪浪釘」定名", 
        start: "2020-06-20" }
]


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {

        firstDay: 0,    // 從星期天開始
        selectable: false,    // 活動不能被拖曳

        // 回到2020-05-26的按鈕
        customButtons: {
            FirstMeetingBtn: {
                text: "回到初相見的那天", 
                click: function () {
                    calendar.gotoDate( "2020-05-26" );
                }
            }
        },

        headerToolbar: {
            left: "prev", 
            center: "title",
            right: "FirstMeetingBtn,today next"
        },

        buttonText:{
            prev: "<",
            next: ">",
            today: "今天",
        },

        // 月份&星期幾翻成中文
        locale: "zh-tw",

        // 活動
        eventOrder : "displayOrder",
        eventSources: [ 
            { events: Festival, displayOrder: 1, color: "#FFFFE1", textColor: "black" },
            { events: THEIR_EventList, displayOrder: 2, color: "#7c91d0" }, 
            { events: GJ_EventList, displayOrder: 3, color: "#FF2D32" }, 
            { events: ZZH_EventList, displayOrder: 4, color: "#5450FF" }, 
            { events: GZP_EventList, displayOrder: 5, color: "#FF9F54" }
        ],
        
        // 點擊
        eventClick: function(Ev){
            document.getElementById("event-title").innerHTML = Ev.event.title;
            console.log(Ev.event.title);
            if( Ev.event.extendedProps.description != null ){
                document.getElementById("event-info").innerHTML = Ev.event.extendedProps.description;
                console.log(Ev.event.extendedProps.description);
            }
            else{
                document.getElementById("event-info").innerHTML = "";
            }
            if( Ev.event.bg_img != null ){
                document.getElementById("body").style.backgroundImage = "url(" + Ev.event.bg_img + ")";
                console.log(Ev.event.bg_img);
            };
        }

    });
  
    calendar.render();

});
