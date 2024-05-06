import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState,AppDispatch } from './client-store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useClientDispatch: () => AppDispatch = useDispatch
export const useClientSelector: TypedUseSelectorHook<RootState> = useSelector