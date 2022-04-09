/**
 * 说明：
 * 下单返回失效页面会弹框，服务器繁忙不会弹框
 * 因此将失效改为繁忙  禁止弹框
 */

/**
 * 下单失效返回值
 * {
 *   "server_time" : 1649457085,
 *   "data" : {
 *     "tradeTag" : "TIME_DELIVERY",
 *     "station_id" : ""
 *   },
 *   "code" : 5004,
 *   "success" : false,
 *   "msg" : "您选择的送达时间已经失效了，请重新选择",
 *   "is_trade" : 1,
 *   "tradeTag" : "TIME_DELIVERY"
 * }
 */

/**
 * 服务器繁忙返回值
 * {
 *   "success" : false,
 *   "code" : -3001,
 *   "tips" : {
 *     "duration" : 300,
 *     "limitMsg" : "前方拥挤，请稍后再试..."
 *   },
 *   "msg" : "当前人多拥挤，请稍后尝试刷新页面",
 *   "data" : {
 *
 *   },
 *   "barrier" : {
 *     "maxCount" : 5,
 *     "passRatio" : 0.5
 *   }
 * }
 *
 */

var res = JSON.parse($response.body);

var data = {
    "success" : false,
    "code" : -3001,
    "tips" : {
        "duration" : 300,
        "limitMsg" : "前方拥挤，请稍后再试..."
    },
    "msg" : "当前人多拥挤，请稍后尝试刷新页面",
    "data" : {

    },
    "barrier" : {
        "maxCount" : 5,
        "passRatio" : 0.5
    }
}

if (res.success == false && res.code == 5004) {
    console.log("下单时间失效，开始数据替换...");
    $done({body: JSON.stringify(data)});
} else if (res.success == false && res.code == -3001) {
    console.log("服务器繁忙，正在重试...")
    $done({body: $response.body});
} else {
    $done({body: $response.body});
}