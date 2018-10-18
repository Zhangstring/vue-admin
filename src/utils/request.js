import axios from 'axios'
import {getToken} from './auth'
const request = function (method, url, data) {
  let config = {
    url,
    data,
    method,
    header: {
      'Authorization': getToken()
    }
  }
  return new Promise ((resolve, reject) => {
    axios(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
export default request
