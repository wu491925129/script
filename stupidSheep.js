var res = JSON.parse($response.body);
if(res.err_code == 0){
    console.log("开始重写羊了个羊...")
    res.data = "046ef1bab26e5b9bfe2473ded237b572";
    $done({body: JSON.stringify(res)});
} else {
console.log("重写羊了个羊失败...")
    $done({body: JSON.stringify(res)});
}
