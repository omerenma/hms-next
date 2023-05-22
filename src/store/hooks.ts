import {useDispatch, useSelector} from 'react-redux'
import {TypedUseSelectorHook} from 'react-redux'
import {RootState, AppDispatch} from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSeletor: TypedUseSelectorHook<RootState> = useSelector
