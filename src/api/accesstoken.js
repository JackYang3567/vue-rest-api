
/**
 * Created at 2019-06-04
 * Author: Jack
 */

 const axios = require('axios');
 const {AIP} = require('../../config.json.js')
 const API_LIST = `${AIP}/accesstoken/index.php/AccessToken`

export default {
   
     getAccesstokens (cb ) {
      // axios是response.data里才是数据
     return axios.get(`${API_LIST}`)
      .then(function (res) {
        // handle success  
        if (res.data.success) {
            console.log("AccessToken store===res.data.====>",res.data)   
            setTimeout(() => cb(res.data.data), 1)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });     
    }
}
  

 