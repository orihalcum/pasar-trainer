/* eslint-disable */

export const isQuantity = value => { // Only numbers are allowed, min 1
  let isRight = false
  const quantityRegex = /^(1|[1-9][0-9]*)$/
  if ((!Number.isNaN(value) && quantityRegex.test(value)) || value === "") {
    isRight = true
  }
  return isRight
}

export const isQuantityBAP = value => { // Only numbers are allowed, min 0
  let isRight = false
  const quantityRegex = /^(0|[1-9][0-9]*)$/
  if ((!Number.isNaN(value) && quantityRegex.test(value)) || value === "") {
    isRight = true
  }
  return isRight
}

// Only numbers and single dot are allowed, min 0. Basically floats or integers
export const isWeight = value => {
  let isRight = false
  const weightRegex = /^(0|[1-9]\d*)(.\d*)?$/
  if ((!Number.isNaN(value) && weightRegex.test(value)) || value === "") {
    isRight = true
  }
  return isRight
}

export const isFloat = value => {
  let isRight = false
  const floatRegex = /\d+(\.\d+)?$/
  if (floatRegex.test(value)) {
    isRight = true
  }
  return isRight
}

export const getIntValue = value => {
  value = parseInt(value)
  if(!isQuantity(value)) return 0
  if(!isNaN(value))
    value = value < 1 ? 0 : value
  else
    value = 0
  return value
}

export const checkDotInputFloat = value => {
  let substrLast = value.substr(0, value.length -1)
  return substrLast.indexOf('.') === -1 ? value : parseFloat(value)
}

export const getFloatValue = value => {

  const quantityRegex = /^(0|[1-9][0-9]*)$/
    
  if(value !== '' && !isNaN(value)){
    if(value.length === 1)
      return quantityRegex.test(value) ? value : 0
    else if(value.length === 2){
      if(value[value.length - 1] === '.') return checkDotInputFloat(value)
      else return parseInt(value)
    }else {
      if(value[value.length - 1] === '.') return checkDotInputFloat(value)
      else return parseFloat(value)
    }
  }else{
    return 0
  }
}