import { Outlet, useNavigation } from "react-router-dom"
import Header from "../components/Shared/Header/Header"
import Footer from "../components/Shared/Footer/Footer"
import Loading from "../components/Shared/Loading"



const MainLayout = () => {
  const navigation = useNavigation()
  return (
    <div className="container mx-auto">
        <Header />
        <div className="min-h-screen">
            {navigation.state === 'loading' ? <Loading /> : <Outlet />}
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout