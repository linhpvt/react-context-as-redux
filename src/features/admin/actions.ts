import { AdminPage } from './reducer'
const Create = `Create`
const Read = `Read`
const Update = `Update`
const Delete = `Delete`
export const AdminActions = {
  [`${Create}`]: (payload: any, meta: any) => ({type: `${AdminPage}/${Create}`, payload, meta }),
  [`${Read}`]: (payload: any, meta: any) => ({type: `${AdminPage}/${Read}`, payload, meta}),
  [`${Update}`]: (payload: any, meta: any) => ({type: `${AdminPage}/${Update}`, payload, meta}),
  [`${Delete}`]: (payload: any, meta: any) => ({type: `${AdminPage}/${Delete}`, payload, meta })
}
