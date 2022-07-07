export const createAction = (type: string, feature: string, payload: any, subSlice?: string) => ({
  type,
  payload,
  meta: {
    feature,
    subSlice
  }
})
