import axios from 'axios';
export default ajax = function (url = "http://localhost:4000", data = {}, type = "GET") {
  return new Promise(function (reslove, reject) {

    let promise;
    if (type === "GET") {

      let dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      })

      if (dataStr != "") {
        url = url + "?" + dataStr.substring(0, dataStr.lastIndexOf("&"));
      }

      promise = axios.get(url);

    } else {

      promise = axios.post(url, data);

    }

    promise.then((response) => {

      reslove(response.data);

    }).catch((error) => {

      reject(error);

    })

  })
}