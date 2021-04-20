import { AnyObject } from '@commerce/utils/types'
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { BigcommerceConfig, getConfig } from '../index'

export type BigcommerceApiHandler<
  T = any,
  H extends BigcommerceHandlers = AnyObject<BigcommerceHandler<any, any>>,
  Options = AnyObject
> = (
  req: NextApiRequest,
  res: NextApiResponse<BigcommerceApiResponse<T>>,
  config: BigcommerceConfig,
  handlers: H,
  // Custom configs that may be used by a particular handler
  options: Options
) => void | Promise<void>

export type BigcommerceHandler<T = any, Body = null> = (options: {
  req: NextApiRequest
  res: NextApiResponse<BigcommerceApiResponse<T>>
  config: BigcommerceConfig
  body: Body
}) => void | Promise<void>

export type BigcommerceHandlers<T = any> = {
  [k: string]: BigcommerceHandler<T, any>
}

export type BigcommerceApiResponse<T> = {
  data: T | null
  errors?: { message: string; code?: string }[]
}

export default function createApiHandler<
  T = any,
  H extends BigcommerceHandlers = AnyObject<BigcommerceHandler<any, any>>,
  Options = AnyObject
>(
  handler: BigcommerceApiHandler<T, H, Options>,
  handlers: H,
  defaultOptions: Options
) {
  return function getApiHandler({
    config,
    operations,
    options,
  }: {
    config?: BigcommerceConfig
    operations?: Partial<H>
    options?: Options extends AnyObject ? Partial<Options> : never
  } = {}): NextApiHandler {
    const ops = { ...operations, ...handlers }
    const opts = { ...defaultOptions, ...options }

    return function apiHandler(req, res) {
      return handler(req, res, getConfig(config), ops, opts)
    }
  }
}
