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

var res = JSON.parse($response.body);

console.log("重写订单校验")


if (!res.success) {
    $done({ body: JSON.stringify(data) });
    console.log($response.body)
} else {
    $done({ body: $response.body });
}


