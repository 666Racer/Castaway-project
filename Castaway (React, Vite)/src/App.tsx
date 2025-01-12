import { Header } from './components/Layout/Header'
import { PageBlock } from './components/Layout/PageBlock'
import { Footer } from './components/Layout/Footer'
import { Episodes } from './sections/Episodes'
import { HeroMain } from './sections/HeroMain'
import { HostDetails } from './sections/HostDetails'
import { Reviews } from './sections/Reviews'
import { Subscribe } from './sections/Subscribe'


export const App = () => {
  return (
    <body>
      <div className="app-wrapper">
        <PageBlock className="site-header">
          <Header />
        </PageBlock>
        <main>
          <HeroMain />
          <Episodes />
          <HostDetails />
          <Subscribe />
          <Reviews />
        </main>
        <Footer />
      </div>
    </body>
  )
}
