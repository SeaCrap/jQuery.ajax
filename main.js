

window.jQuery.ajax = function({url,method,body}){
  return new Promise(function(resove,reject){
    let request = new XMLHttpRequest
    request.open(method,url)
    request.send(body)
  
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        //请求相应完毕
        if(request.status <= 200&& request.status < 300){
          //成功
          resove.call(undefined,request.responseText)
        }else if(request.status >= 400){
          //失败
          reject.call(undefined,request)
        }
      }
    }    
  })
  
}

button.addEventListener('click',(e)=>{
  
  $.ajax({
    url: '/zzz',
    method: 'post',
    success: (responseText)=>{console.log(responseText)},
    fail: (request)=>{request}
  }).them(
    (text)=>{
      console.log(text)
    },
    (request)=>{
      console.log(request)
    }
  )
})
