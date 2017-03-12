function Observer(data) {
  this.data=data;
  this.walk(data);
}
//在原型对象上创建属性方法
let pro = Observer.prototype;

pro.walk=function (obj) {
  let val;
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
        val=obj[key];
        if (typeof val ==='object'){
          new Observer(val);
        }
        this.convert(key,val);
    }
  }
};
pro.convert=function (key,val) {
  Object.defineProperty(this.data,key,{
    configurable:true,
    // writable:true,
    enumerable:true,
    get:function () {
      console.log('你访问了'+ key+'  '+'其值为：'+val);
      return  val;
    },
    set:function (newVal) {
       if(typeof newVal === 'object'){
        new Observer(val)
      }
      else{
      console.log('你设置了'+key);
      console.log('新的'+key+'='+newVal);
      val=newVal;
      }

    }
  })
};

