/* eslint-disable */

import dayjs from 'dayjs'

const timezones = {
  7: 'WIB',
  8: 'WITA',
  9: 'WIT',
}

// oks
const commonDateFormat = 'DD MMM YYYY'
const completeDateFormat = 'DD MMMM YYYY'
const commonDateTimeFormat = 'DD MMM YYYY, HH:mm'

export const commonAPIDateFormat = 'YYYY-MM-DD'
export const commonAPIDateTimeFormat = 'YYYY-MM-DD HH:mm'

// ok
export const getTimezoneNew = () => {
  const date = new Date()
  return date.getTimezoneOffset() / 60
}

// ok
export const datetimeToLocal = datetime => datetime
  && `${dayjs(datetime).format(commonDateTimeFormat)}`

// unused
export const datetimeToLocalDetail = datetime => datetime
  && `${dayjs(datetime).format('dddd')}, ${dayjs(datetime).format(commonDateFormat)} ${dayjs(datetime).format('HH:mm')}`

// ok
export const dateToLocal = datetime => datetime
  && `${dayjs(datetime).format(commonDateFormat)}`

// ok
export const datetimeToLocalTimeZone = datetime => datetime
  && (`${dayjs(datetime).format(commonDateFormat)} ${dateTimeToLocalTime(datetime)}`)

  // ok
export const datetimeToLocalDetailTimeZone = datetime => datetime
&& (`${dayjs(datetime).format(completeDateFormat)} ${dateTimeToLocalTime(datetime)}`)

// unused
export const dateToLocalDetail = datetime => datetime
  && `${dayjs(datetime).format('dddd')}, ${dayjs(datetime).format(commonDateFormat)}`

// unused
export const monthToLocal = month => month && `${dayjs(month, 'YYYY-MM').format('MMMM YYYY')}`

// unused
export const customFormat = (date, format) => dayjs(date).format(format)

// unused
export const getTimezoneName = timezone => timezones[timezone]
export const getTimezone = (datetime) => {
  const defaultTimezone = 7
  if (!datetime) return defaultTimezone
  const timezone = dayjs(datetime)
    .format('Z')
    .substring(1, 3)
  return parseInt(timezone, 10) || defaultTimezone
}

// unused
export const calculateTimezoneName = datetime => getTimezoneName(getTimezone(datetime))

// unused
export const dateTimeToLocalTime = datetime => datetime
  && `${customFormat(datetime, 'HH:mm')} ${calculateTimezoneName(datetime)}`

// ok
export const formatFromToUntilDateTime = dateRange => {
  for (let i = 0; i < dateRange.length; i++) {
    if (i === 0) {
      dateRange[i]._d.setHours(0)
      dateRange[i]._d.setMinutes(0)
      dateRange[i]._d.setSeconds(0)
      dateRange[i]._d.setMilliseconds(0)
    } else {
      dateRange[i]._d.setHours(23)
      dateRange[i]._d.setMinutes(59)
      dateRange[i]._d.setSeconds(59)
      dateRange[i]._d.setMilliseconds(999)
    }
  }

  return dateRange
}

// ok
export const formatFromToUntilDate = dateRange => {
  for (let i = 0; i < dateRange.length; i++) {
    dateRange[i]._d.setHours(0)
    dateRange[i]._d.setMinutes(0)
    dateRange[i]._d.setSeconds(0)
    dateRange[i]._d.setMilliseconds(0)
  }

  return dateRange
}