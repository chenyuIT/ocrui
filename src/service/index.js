//引入封装好的 service
import service from "@/service/service";
 
//声明一个基础接口变量
let baseURL = "http://192.168.0.85:5002";
 
//配置开发环境
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://192.168.0.85:5002';
}
 
// 配置生产环境
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://192.168.0.85:5002';
}
 
//设置请求头（如果请求头统一的话可以在axios文件设置，则无须从这里传过去）
const header = {
  Accept: 'application/json;charset=UTF-8',
}
 
//根据自身需求
let _service={
    getUpload(data) {
        const url = baseURL + '/get_ocr';
        return service.get(url, data, header);
    }
}
 
 
//导出
export default _service