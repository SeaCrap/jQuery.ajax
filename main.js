window.jQuery = function(){}

window.$ = window.jQuery

window.jQuery.ajax = function({url,method,body,success, fail}){
  let request = new XMLHttpRequest
  request.open(method,url)
  request.send(body)
  
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      //请求相应完毕
      if(request.status <= 200&& request.status < 300){
        //成功
        success.call(undefined,request.responseText)
      }else if(request.status >= 400){
        //失败
        fail.call(undefined,request)
      }
    }
  }  
}

button.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url: '/zzz',
    method: 'post',
    success: (responseText)=>{console.log(responseText)},
    fail: (request)=>{request}
  })
})
