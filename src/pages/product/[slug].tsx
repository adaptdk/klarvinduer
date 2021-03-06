import getAllPages from '@framework/common/get-all-pages'
import getAllProductPaths from '@framework/product/get-all-product-paths'
import getProduct from '@framework/product/get-product'
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { getConfig } from '@framework/api'
import { Layout } from '@components/common'
import { useRouter } from 'next/router'

export async function getStaticProps({
  params,
  locale,
  preview,
}: GetStaticPropsContext<{ slug: string }>) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  const { product } = await getProduct({
    variables: { slug: params?.slug ?? '' },
    config,
    preview,
  })

  if (!product) {
    throw new Error(`Product with slug '${params?.slug}' not found`)
  }

  return {
    props: {
      pages,
      product,
    },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const { products } = await getAllProductPaths()

  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // Add a product path for every locale
          products.forEach((product) => {
            arr.push(`/${locale}/product${product.node.path}`)
          })
          return arr
        }, [])
      : products.map((product) => `/product${product.node.path}`),
    fallback: 'blocking',
  }
}

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter()

  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <div>Render a product view here</div>
  )
}

Slug.Layout = Layout
