function doRequest(URL,data,succallback,errcallback){
    axios.get(URL,{
        params:data
    })
    .then(function(result){
        succallback(result.data)
    })
    .catch(function(error){
        errcallback(error)
    })
}
var host = ''
if(window.location.hostname=='localhost'||window.location.hostname=='127.0.0.1'){
	host = 'http://localhost:3000'
}else{
	host = 'http://localhost:3000'
}
function doRequest_select_user(data,succallback,errcallback){
    var URL = host+ '/select/info'
    doRequest(URL,data,succallback,errcallback)
}

function doRequest_update_name(data,succallback,errcallback){
    var URL = host+ '/update/name'
    doRequest(URL,data,succallback,errcallback)
}

function doRequest_delete_user(data,succallback,errcallback){
    var URL = host+ '/delete/user'
    doRequest(URL,data,succallback,errcallback)
}


