import { FC, PropsWithChildren } from 'react'
import Saidebar from '../saidebar/Saidebar'
import Header from '../header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        className="grid"
        style={{
          gridTemplateColumns: '1fr 4fr'
        }}
      >
        <Saidebar />
        <main className=" p-12">{children}</main>
      </div>
    </div>
  )
}

export default Layout
