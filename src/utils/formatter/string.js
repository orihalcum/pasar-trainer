/* eslint-disable */

export const encodeSlug = (txt, separator) => {
  return txt.split(separator).join('_').toLowerCase()
}

export const decodeSlug = (txt, separator) => {
  return txt.split('_').join(separator).toLowerCase()
}

export const firstCapital = text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()

export const wordsFirstCapital = text => {
  return text.toLowerCase().replace(/\b[a-z]/g, char => char.toUpperCase())
}

export const stringOrNumber = qs => {
  return !isNaN(+qs) ? +qs : qs
}

export const getFirstName = (name) => {
  let names = name.split(' ')
  return names[0]
} 

export const getLastName = (name) => {
  let names = name.split(' ')
  return names[names.length -1]
} 