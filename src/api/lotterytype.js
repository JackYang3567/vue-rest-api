
/**
 * Created at 2019-05-20
 * Author: Jack
 */

const axios = require('axios');
const {AIP} = require('../../config.json.js')
const API_LIST = `${AIP}/lotterytype/index.php/LotteryType`

export default {
   
     getLotterytypes (cb) {
      // axios是response.data里才是数据
     return axios.get(`${API_LIST}`)
      .then(function (res) {
        // handle success
        console.log("LotteryType====>",res.data)
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
  

 