/**
 * Created by xzp08573 on 2017/10/5.
 */
//此文件是输入的文件，是程序设计的终端部分，主要管理整个程序的执行流程，以及数据接口的调用是数据的入口和程序顺序的组合管理部分,负责事件代理。可以形成不同的入口负责不同的页面。
var  ins = require('../ins/ins');
ins = new ins();
window.onload=function () {
    ins.index();
}
