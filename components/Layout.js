import Header from './Header'
import Link from 'next/link'


const Layout = (props) => (
  <div>
    <Header />
    <main role="main">
        <div className="container">
          {props.children}
        </div>
    </main>
  </div>
)

export default Layout