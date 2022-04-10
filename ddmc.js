/**
 * 自动选择时间
 * {
 *     "success": true,
 *     "code": 0,
 *     "msg": "success",
 *     "data": [
 *         {
 *             "station_delay_text": null,
 *             "default_select": true,
 *             "time": [
 *                 {
 *                     "date_str": "今天",
 *                     "date_str_timestamp": 1680123600,
 *                     "day": "today",
 *                     "times": [
 *                         {
 *                             "type": 4,
 *                             "fullFlag": false,
 *                             "disableType": 0,
 *                             "disableMsg": "",
 *                             "textMsg": "",
 *                             "start_time": "5:59",
 *                             "end_time": "23:00",
 *                             "start_timestamp": 1680123600,
 *                             "end_timestamp": 1680188400,
 *                             "arrival_time_msg": "自动尝试可用时段",
 *                             "arrival_time": false,
 *                             "select_msg": "自动尝试可用时段"
 *                         }
 *                     ],
 *                     "is_invalid": false,
 *                     "invalid_prompt": null,
 *                     "time_full_text_tip": null
 *                 }
 *             ],
 *             "station_id": "",
 *             "is_new_rules": true,
 *             "busy_soon_arrival_text": "",
 *             "eta_trace_id": "",
 *             "area_level": 1
 *         }
 *     ],
 *     "tradeTag": "success",
 *     "server_time": 1680037200,
 *     "is_trade": 1
 * }
 */

var nowTime = Date.parse(new Date())/1000;

// 获取时间戳
function strToTimestamp(time) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var pushDate =  year + "/" + month + "/" + day+" "+time;
    return Date.parse(new Date(pushDate)) / 1000;
}


// 获取当前站点id
var res = JSON.parse($response.body);
var stationId = res.success ? res.data[0].station_id : "";

console.log("重写叮咚配送时间开始....")

var data = {
    "server_time" : nowTime,
    "data" : [
        {
            "station_delay_text" : null,
            "time" : [
                {
                    "invalid_prompt" : null,
                    "date_str_timestamp" : nowTime,
                    "day" : "today",
                    "date_str" : "今天(来自Max破解)",
                    "times" : [
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "08:00",
                            "arrival_time_msg" : "08:00-08:30",
                            "select_msg" : "今天08:00-08:30",
                            "end_time" : "08:30",
                            "end_timestamp" : strToTimestamp("08:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("08:00")
                        },
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "08:30",
                            "arrival_time_msg" : "08:30-10:30",
                            "select_msg" : "今天08:30-10:30",
                            "end_time" : "10:30",
                            "end_timestamp" : strToTimestamp("10:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("08:30")
                        },
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "10:30",
                            "arrival_time_msg" : "10:30-12:30",
                            "select_msg" : "今天10:30-12:30",
                            "end_time" : "12:30",
                            "end_timestamp" : strToTimestamp("12:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("10:30")
                        },
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "12:30",
                            "arrival_time_msg" : "12:30-14:30",
                            "select_msg" : "今天12:30-14:30",
                            "end_time" : "14:30",
                            "end_timestamp" : strToTimestamp("14:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("12:30")
                        },
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "14:30",
                            "arrival_time_msg" : "14:30-16:30",
                            "select_msg" : "今天14:30-16:30",
                            "end_time" : "16:30",
                            "end_timestamp" : strToTimestamp("16:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("14:30")
                        },
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "16:30",
                            "arrival_time_msg" : "16:30-18:30",
                            "select_msg" : "今天16:30-18:30",
                            "end_time" : "18:30",
                            "end_timestamp" : strToTimestamp("18:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("16:30")
                        },
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "18:30",
                            "arrival_time_msg" : "18:30-20:30",
                            "select_msg" : "今天18:30-20:30",
                            "end_time" : "20:30",
                            "end_timestamp" : strToTimestamp("20:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("18:30")
                        },
                        {
                            "disableType" : 0,
                            "fullFlag" : false,
                            "disableMsg" : "",
                            "textMsg" : "",
                            "type" : 4,
                            "start_time" : "20:30",
                            "arrival_time_msg" : "20:30-22:30",
                            "select_msg" : "今天20:30-22:30",
                            "end_time" : "22:30",
                            "end_timestamp" : strToTimestamp("22:30"),
                            "arrival_time" : false,
                            "start_timestamp" : strToTimestamp("20:30")
                        }
                    ],
                    "is_invalid" : false,
                    "time_full_text_tip" : null
                }
            ],
            "is_new_rules" : true,
            "interval_minute" : -1,
            "default_select" : true,
            "eta_trace_id" : "",
            "station_id" : "5b988449c0a1ea8f1c8b5a6b",
            "area_level" : 1,
            "busy_soon_arrival_text" : ""
        }
    ],
    "code" : 0,
    "success" : true,
    "msg" : "success",
    "is_trade" : 1,
    "tradeTag" : "success"
}

var defaultData = {
    "success": true,
    "code": 0,
    "msg": "success",
    "data": [
        {
            "station_delay_text": null,
            "default_select": true,
            "time": [
                {
                    "date_str": "今天(来自Max破解)",
                    "date_str_timestamp": nowTime,
                    "day": "today",
                    "times": [
                        {
                            "type": 4,
                            "fullFlag": false,
                            "disableType": 0,
                            "disableMsg": "",
                            "textMsg": "",
                            "start_time": "5:59",
                            "end_time": "23:00",
                            "start_timestamp": 1680123600,
                            "end_timestamp": 1680188400,
                            "arrival_time_msg": "自动尝试可用时段",
                            "arrival_time": false,
                            "select_msg": "自动尝试可用时段"
                        }
                    ],
                    "is_invalid": false,
                    "invalid_prompt": null,
                    "time_full_text_tip": null
                }
            ],
            "station_id": "",
            "is_new_rules": true,
            "busy_soon_arrival_text": "",
            "eta_trace_id": "",
            "area_level": 1
        }
    ],
    "tradeTag": "success",
    "server_time": nowTime,
    "is_trade": 1
}

// 判断是否是自动选择时间  默认选中可配送的时间
if (res.success && res.data[0].time[0].times[0].arrival_time_msg == "自动尝试可用时段") {
    $done({body: JSON.stringify(defaultData)});
} else {
    $done({body: JSON.stringify(data)});
}

