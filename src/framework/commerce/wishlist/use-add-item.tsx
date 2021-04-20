import { useHook, useMutationHook } from '../utils/use-hook'
import { mutationFetcher } from '../utils/default-fetcher'
import type { AnyObject, MutationHook } from '../utils/types'
import type { Provider } from '../index'

export type UseAddItem<
  H extends MutationHook<any, any, any> = MutationHook<
    any,
    AnyObject,
    AnyObject
  >
> = ReturnType<H['useHook']>

export const fetcher = mutationFetcher

const fn = (provider: Provider) => provider.wishlist.useAddItem

const useAddItem: UseAddItem = (...args) => {
  const hook = useHook(fn)
  return useMutationHook({ fetcher, ...hook })(...args)
}

export default useAddItem
