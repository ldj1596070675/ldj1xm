function getSent(url,cb){
    //创建ajax对象
    var xhr=new XMLHttpRequest()
    //配置请求信息
    xhr.open("get",url)
    //接受响应
    xhr.onload=function(){
        cb(xhr.responseText)
    }
    //发送请求
    xhr.send()
}


function postSent(url,cb,data){
    //创建 ajax 对象
    var xhr = new XMLHttpRequest()
    //配置请求信息
    xhr.open("post",url)
    //接受响应
    xhr.onload=function(){
        cb(xhr.responseText)
    }
    //设置请求头
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')

    //发送请求
    xhr.send(data)
}