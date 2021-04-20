import { useHook, useMutationHook } from '../utils/use-hook'
import { mutationFetcher } from '../utils/default-fetcher'
import type { AnyObject, HookFetcherFn, MutationHook } from '../utils/types'
import type { Cart, CartItemBody, AddCartItemBody } from '../types'
import type { Provider } from '../index'

export type UseAddItem<
  H extends MutationHook<any, any, any> = MutationHook<
    Cart,
    AnyObject,
    CartItemBody
  >
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<
  Cart,
  AddCartItemBody<CartItemBody>
> = mutationFetcher

const fn = (provider: Provider) => provider.cart.useAddItem

const useAddItem: UseAddItem = (...args) => {
  const hook = useHook(fn)
  return useMutationHook({ fetcher, ...hook })(...args)
}

export default useAddItem
