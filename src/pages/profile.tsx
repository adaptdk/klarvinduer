import getAllPages from '@framework/common/get-all-pages'
import type { GetStaticPropsContext } from 'next'
import useCustomer from '@framework/customer/use-customer'
import { Container } from '@components/ui'
import { getConfig } from '@framework/api'
import { Layout } from '@components/common'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: { pages },
  }
}

export default function Profile() {
  const { data } = useCustomer()
  return (
    <Container>
      <h2>My Profile</h2>
      {data && (
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-8 pr-4">
            <div>
              <p>Full Name</p>
              <span>
                {data.firstName} {data.lastName}
              </span>
            </div>

            <div className="mt-5">
              <p>Email</p>
              <span>{data.email}</span>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

Profile.Layout = Layout
