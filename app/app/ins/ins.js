/**
 * Created by xzp08573 on 2017/10/5.
 */
//此文件是处理输入数据的文件，放的是对upper文件里面的方法的使用，upper方法的参数数据由此文件产生,并插入lower导入的数据。
var  upper = require('../upper/upper');
upper = new upper();

function ins() {

}
ins.prototype = {
    index:function () {

        var aa = {
            "container":"<div></div>",
            "html":[
                {
                    "container":'<ul  id="chat" style="height: 60%;overflow-y: scroll;"></ul>',
                    "html":[]
                },{
                    "container":'<textarea  style="width: 100%;margin: 0 auto; height: 100px;display: block;border:1px solid #333" id="message"></textarea>',
                    "html":[]
                },{
                    "container":'<div  id="send" type="button" style="border:1px solid #333;display: block;width:100%;height: 50px;margin: 0 auto;text-align: center;line-height: 50px;">提交</div>',
                    "html":[]
                }
                ,{
                    "container":'<script>'+setTimeout(function() {var socket = io.connect('ws://www.youlaikang.com:3000');var html=upper.htmljson(aa).container;upper.insertshtml(["index"],html);var text=document.getElementById("message");var chat=document.getElementById("chat");var send=document.getElementById("send");send.onclick=function(e){socket.emit("value",{"value":text.value})};var value="";socket.on("value",function(a){if(a.value.indexOf("{")>-1&&a.value.indexOf("}")>-1){var gg=JSON.parse(a.value);value=upper.htmljson(gg).container}else{value=value+"<li>"+a.value+"</li>"};chat.innerHTML=value;setTimeout(function(){upper.script(value)},50)}); },500)+'</script>',
                    "html":[]
                }
            ]
        };
    }
}

module.exports = ins