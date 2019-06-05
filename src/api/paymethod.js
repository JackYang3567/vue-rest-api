
/**
 * Created at 2019-06-04
 * Author: Jack
 */

const axios = require('axios');
const {AIP} = require('../../config.json.js')
const API_LIST = `${AIP}/paymethod/index.php/Paymethod`

export default {
   
     getPaymethods (cb) {
      // axios是response.data里才是数据
     return axios.get(`${API_LIST}`)
      .then(function (res) {
        // handle success
        setTimeout(() => cb(res.data.data.rows.reverse()), 10)
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
  

 