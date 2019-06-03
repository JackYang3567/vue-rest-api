
/**
 * Created at 2019-05-31
 * Author: Jack
 */

const axios = require('axios');
const {AIP} = require('../../config.json.js')
const API_LIST = `${AIP}/payamount/index.php/Payamount`

export default {
   
     getPayamounts (cb) {
      // axios是response.data里才是数据
     return axios.get(`${API_LIST}`)
      .then(function (res) {
        // handle success
        console.log("api/payamount.js====>",res.data)
        setTimeout(() => cb(res.data.data.rows), 10)
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
  

 