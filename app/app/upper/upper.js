/**
 * Created by xzp08573 on 2017/10/5.
 */
//此文件为无差别方法，最终的方法，可以包含指定类型的任何对象产生对应功能，属于最终输出的方法
function upper() {

}
upper.prototype={
    insertshtml : function (id,html) {
        for(var i=0;i<id.length;id++){
            var ids=document.getElementById(id[i]);
        }
        ids.innerHTML=html;
    },//自定义html结构，插入制定节点，第一个参数是容器id（可以是数组），第二个参数是自定义的html结构
    htmljson : function (data) {
        function abc(data) {
            var datas=data;
            function abcd() {

            }
            var sz=[];
            abcd.prototype={
                abcde:function (data,index) {
                    index=index+1;
                    for(var i=0;i<data.html.length;i++){
                        if(data.html[i]){
                            this.abcde(data.html[i],index);
                        }
                    }
                    sz.push({container:data.container,index:index});
                },
                abcdf:function (data) {
                    var sz=[];
                    var num=null;
                    for(var i=0;i<data.length;i++){
                        if(i>0 && data[i].index == data[i-1].index){
                            data[i].container=data[i-1].container+data[i].container;
                        }else if(i>0 && data[i].index == data[i-1].index -1 ){
                            data[i].container=data[i].container.replace('><','>'+data[i-1].container+'<');
                        }else if(i>0 && data[i].index > data[i-1].index){
                            sz[0]=(data[i-1]);
                            num=data[i-1].index;
                        }
                        if(data[i].index == num){
                            data[i].container=sz[0].container+data[i].container;
                        }
                    }
                    return data[data.length-1]
                }
            }
            var abcd=new abcd();
            abcd.abcde(datas,0);
            return abcd.abcdf(sz);
        }
        return abc(data)
    },//将html，css，js放入一个对应格式json，并解析json形成对应html，css，js代码，并结合通过insertshtml输出执行前端效果。data的格式是
        // data={
        //     container:"<div></div>",
        //     html:[
        //       {
        //         container:"<ul></ul>",
        //         html:[
        //
        //         ]
        //       },{
        //         container:"<ul></ul>",
        //         html:[
        //             {
        //                 container:"<li></li>",
        //                 html:[]
        //             }
        //         ]
        //       }
        //     ]
        // }

    script:function (data) {
            var sz=/<script>[^<]*/gim;
            var szz=data.match(sz);
            var szs=[];
            if(szz instanceof Array && szz.length>0){
                for(var i=0;i<szz.length;i++){
                    szs.push(szz[i].replace('<script>',''))
                }
            }
            if(szs.length>0){
                for(var i=0;i<szs.length;i++){
                    eval(szs[i]);
                }
            }
    },//执行字符串脚本 data参数：<script>alert()</script>形式的字符串

}
module.exports = upper