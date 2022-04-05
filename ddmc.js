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
var stationId = $request.header.ddmc-station-id;

console.log(stationId);
var data = {
    "success": true,
    "code": 0,
    "msg": "success",
    "data": [
        {
            "station_delay_text": null,
            "default_select": false,
            "time": [
                {
                    "date_str": "今天(来自Max破解)",
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
                            "start_timestamp": strToTimestamp("08:30:00"),
                            "end_timestamp": strToTimestamp("10:30:00"),
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
                            "start_timestamp": strToTimestamp("10:30:00"),
                            "end_timestamp": strToTimestamp("14:30:00"),
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
                            "start_timestamp": strToTimestamp("14:30:00"),
                            "end_timestamp": strToTimestamp("18:30:00"),
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
                            "start_timestamp": strToTimestamp("18:30:00"),
                            "end_timestamp": strToTimestamp("22:00:00"),
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
            "station_id": stationId,
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