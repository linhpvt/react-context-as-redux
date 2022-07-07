import { EMPTY_OBJ } from '../../consts';
import { HttpTypes, HttpStatus, HttpFeature } from './types';

export const httpReadyAction = () => ({
  type: HttpTypes.READY,
  payload: { code: 0, status: HttpStatus.READY, errors: EMPTY_OBJ },
  meta: { feature: HttpFeature }
})

export const httpRequestingAction = () => ({
  type: HttpTypes.REQUESTING,
  payload: { code: 0, status: HttpStatus.REQUESTING, errors: EMPTY_OBJ },
  meta: { feature: HttpFeature }
})

export const httpSuccessAction = () => ({
  type: HttpTypes.SUCCESS,
  payload: { code: 0, status: HttpStatus.SUCCESS, errors: EMPTY_OBJ },
  meta: { feature: HttpFeature }
})

export const httpFailureAction = (errors: any[]) => ({
  type: HttpTypes.FAILURE,
  payload: { code: 100, status: HttpStatus.FAILURE, errors },
  meta: { feature: HttpFeature }
})
