/**
 * 重写订单校验
 * 禁止弹出拥挤提示
 */

var data = {
    "success" : true,
    "code" : 0,
    "msg" : "",
    "data" : {
    }
}

$done({ body: JSON.stringify(data) });
