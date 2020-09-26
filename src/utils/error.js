import { message } from "antd"

export const getErrorMessage = err => {
  let errorMessage = "Terjadi kesalahan ..."  
  if(err instanceof Error){
    let { response } = err
    if(typeof response === 'object'){
      let { data, statusText } = response
      if(typeof data !== 'undefined'){
        errorMessage = data.hasOwnProperty('errors') ? statusText : data.detail
      }else{
        errorMessage = statusText
      }
    }else{
      let { message } = err
      switch(message){
        case 'Network Error' : errorMessage = 'Mohon periksa koneksi internet anda'; break;
        default : errorMessage = message
      }
    }
  }else if(typeof err === 'string') errorMessage = err
  return errorMessage;
}

export const showErrorMessage = (err, top) => {
  // message.config({
  //   top: top === undefined ? 120 : top
  // })
  message.error(getErrorMessage(err))
}

export const showSuccessMessage = (txt, top) => {
  // message.config({
  //   top: top === undefined ? 120 : top
  // })
  message.success(txt)
}