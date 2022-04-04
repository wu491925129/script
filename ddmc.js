var nowTime = Date.parse(new Date())/1000;
let data = {
    "success": true,
    "code": 0,
    "msg": "success",
    "data": [
    {
        "station_delay_text": null,
        "default_select": false,
        "time": [
            {
                "date_str": "今天(脚本破解)",
                "date_str_timestamp": nowTime,
                "day": "today",
                "times": [
                    {
                        "type": 4,
                        "fullFlag": true,
                        "disableType": 0,
                        "disableMsg": null,
                        "textMsg": "",
                        "start_time": "08:30",
                        "end_time": "10:30",
                        "start_timestamp": strToTimestamp(getTodayStr("08:30:00")),
                        "end_timestamp": strToTimestamp(getTodayStr("10:30:00")),
                        "arrival_time_msg": "08:50-10:30",
                        "arrival_time": false,
                        "select_msg": "今天08:50-10:30"
                    },
                    {
                        "type": 4,
                        "fullFlag": false,
                        "disableType": 0,
                        "disableMsg": null,
                        "textMsg": "",
                        "start_time": "10:30",
                        "end_time": "14:30",
                        "start_timestamp": strToTimestamp(getTodayStr("10:30:00")),
                        "end_timestamp": strToTimestamp(getTodayStr("14:30:00")),
                        "arrival_time_msg": "10:30-14:30",
                        "arrival_time": false,
                        "select_msg": "今天10:30-14:30"
                    },
                    {
                        "type": 4,
                        "fullFlag": true,
                        "disableType": 0,
                        "disableMsg": null,
                        "textMsg": "",
                        "start_time": "14:30",
                        "end_time": "18:30",
                        "start_timestamp": strToTimestamp(getTodayStr("14:30:00")),
                        "end_timestamp": strToTimestamp(getTodayStr("18:30:00")),
                        "arrival_time_msg": "14:30-18:30",
                        "arrival_time": false,
                        "select_msg": "今天14:30-18:30"
                    },
                    {
                        "type": 4,
                        "fullFlag": true,
                        "disableType": 0,
                        "disableMsg": null,
                        "textMsg": "",
                        "start_time": "18:30",
                        "end_time": "22:00",
                        "start_timestamp": strToTimestamp(getTodayStr("18:30:00")),
                        "end_timestamp": strToTimestamp(getTodayStr("22:00:00")),
                        "arrival_time_msg": "18:30-22:00",
                        "arrival_time": false,
                        "select_msg": "今天18:30-22:00"
                    }
                ],
                "is_invalid": false,
                "invalid_prompt": null,
                "time_full_text_tip": null
            }
        ],
        "station_id": "5b988449c0a1ea8f1c8b5a6b",
        "is_new_rules": true,
        "busy_soon_arrival_text": "",
        "eta_trace_id": "",
        "area_level": 1
    }
],
    "tradeTag": "success",
    "server_time": 1649033111,
    "is_trade": 1
}

$done({ body: JSON.stringify(data) });

// 获取今日时间字符串
function getTodayStr(time) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return year + "-" + month + "-" + day+" "+time;
}

// 时间字符串转时间戳
function strToTimestamp(str) {
    return Date.parse(new Date(str)) / 1000;
}