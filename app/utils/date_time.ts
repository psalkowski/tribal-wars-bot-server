import { DateTime } from 'luxon'

/**
 * Converts the milliseconds to datetime in 'yyyy-MM-dd HH:mm:ss.SSS' format.
 *
 * @param {number} value - The time value in milliseconds.
 * @returns {string} The formatted date time string.
 */
export const prepareDateTime = (value: number | DateTime): string | null => {
  const format = 'yyyy-MM-dd HH:mm:ss.SSS'

  if (typeof value === 'number') {
    return DateTime.fromMillis(value).toFormat(format)
  }

  if (!value) {
    return null
  }

  return value.toFormat(format)
}

/**
 * Serializes the date time value.
 *
 * If the value is already a number, it assumes that it's a milliseconds value and returns it as is.
 * If the value is a DateTime object, it calls `toMillis()` function on it to convert it into milliseconds.
 *
 * @param {number | DateTime} value - The value to serialize. Can either be a number (milliseconds) or a DateTime object.
 *
 * @returns {number} The serialized value in milliseconds.
 */
export const serializeDateTime = (value: number | DateTime): number => {
  if (typeof value === 'number') {
    return value
  }

  return value?.toMillis()
}
