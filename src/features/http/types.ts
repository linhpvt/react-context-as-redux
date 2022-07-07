
// name of the page/feature/module
export const HttpFeature = 'http'

export const HttpStatus = {
  READY: 'READY',
  REQUESTING: 'REQUESTING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}
export const HttpTypes = {
  READY: `${HttpFeature}/${HttpStatus.READY}`,
  REQUESTING: `${HttpFeature}/${HttpStatus.REQUESTING}`,
  SUCCESS: `${HttpFeature}/${HttpStatus.SUCCESS}`,
  FAILURE: `${HttpFeature}/${HttpStatus.FAILURE}`
}
