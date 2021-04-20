import dynamic from 'next/dynamic'
import LoginView from '@components/auth/LoginView'
import type { Page } from '@framework/common/get-all-pages'
import { closeModal, closeSidebar } from '@features/ui/uiSlice'
import { CommerceProvider } from '@framework'
import { Navbar, Footer } from '@components/common'
import { ReactNode } from 'react'
import { Sidebar, Modal } from '@components/ui'
import { useAppDispatch } from '@app/hooks'
import { useRouter } from 'next/router'
import { useUI } from '@features/ui'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <span>Loading..</span>
  </div>
)

const dynamicProps = {
  loading: () => <Loading />,
}

const SignUpView = dynamic(
  () => import('@components/auth/SignUpView'),
  dynamicProps
)

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  dynamicProps
)

interface Props {
  children: ReactNode
  pageProps: {
    pages?: Page[]
    commerceFeatures: Record<string, boolean>
  }
}

const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const { displaySidebar, displayModal, modalView } = useUI()
  const { locale = 'en-US' } = useRouter()

  return (
    <CommerceProvider locale={locale}>
      <div className="flex flex-col mx-auto min-h-screen max-w-[2560px]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        <Modal open={displayModal} onClose={() => dispatch(closeModal())}>
          {modalView === 'login' && <LoginView />}
          {modalView === 'signup' && <SignUpView />}
          {modalView === 'forgot_password' && <ForgotPassword />}
        </Modal>

        <Sidebar open={displaySidebar} onClose={() => dispatch(closeSidebar())}>
          Rendered in the sidebar
        </Sidebar>
      </div>
    </CommerceProvider>
  )
}

export default Layout
