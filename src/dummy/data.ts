import * as Actions from '../features/http/actions'
export const HttpActions = {
  '0': Actions.httpReadyAction(),
  '1': Actions.httpRequestingAction(),
  '2': Actions.httpSuccessAction(),
  '3': Actions.httpFailureAction([{ message: `server downside`}])
}
