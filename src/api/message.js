
/**
 * Created at 2019-06-10
 * Author: Jack
 */
import * as io from 'socket.io-client'
 const {SOCKET} = require('../../config.json.js')
 const SOCKET_API = `http:${SOCKET}`

const socket = io(SOCKET_API);
export default { 
    getMessages (cb) {
      // axios是response.data里才是数据
      return socket.on('new_msg', (msg)=> {
          // console.log('api ==  收到消息===',unescape(msg) )
           cb(msg)       
      });
    
    }
}
  

 

