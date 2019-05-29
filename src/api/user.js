
/**
 * Created at 2019-04-09
 * Author: Jack
 */

const axios = require('axios');
const config = require('../../config.json')
const API_LIST = `${config.AIP_PREFIX}/user`

export default {
   
    getUsers (cb) {

      /* // fetch是成功的   res里就是数据
        fetch(`${API}`)
            .then(res => res.json()).then((res) => {
              //  commit('setUsers', res.data.rows)
              setTimeout(() => cb(res.data.rows), 10)
            }).then(function(err) {
                console.log(err)
        })
      */
      // axios是response.data里才是数据
      axios.get(`${API_LIST}`)
      .then(function (res) {
        // handle success
        console.log("res.data====>",res.data)
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
  

 