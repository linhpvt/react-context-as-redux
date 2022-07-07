import { ResourcesPage } from './reducer'
const Create = `Create`
const Read = `Read`
const Update = `Update`
const Delete = `Delete`
export const ResourcesActions = {
  [`${Create}`]: (payload: any, meta: any) => ({type: `${ResourcesPage}/${Create}`, payload, meta }),
  [`${Read}`]: (payload: any, meta: any) => ({type: `${ResourcesPage}/${Read}`, payload, meta}),
  [`${Update}`]: (payload: any, meta: any) => ({type: `${ResourcesPage}/${Update}`, payload, meta}),
  [`${Delete}`]: (payload: any, meta: any) => ({type: `${ResourcesPage}/${Delete}`, payload, meta })
}
