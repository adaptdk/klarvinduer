import { useHook, useMutationHook } from '../utils/use-hook'
import { mutationFetcher } from '../utils/default-fetcher'
import type { MutationHook, HookFetcherFn, AnyObject } from '../utils/types'
import type { Provider } from '../index'

export type UseLogin<
  H extends MutationHook<any, any, any> = MutationHook<
    null,
    AnyObject,
    AnyObject
  >
> = ReturnType<H['useHook']>

export const fetcher: HookFetcherFn<null, AnyObject> = mutationFetcher

const fn = (provider: Provider) => provider.auth.useLogin

const useLogin: UseLogin = (...args) => {
  const hook = useHook(fn)
  return useMutationHook({ fetcher, ...hook })(...args)
}

export default useLogin
