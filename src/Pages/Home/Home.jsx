import { useEffect, useState } from "react"
import AdvertisementModal from "../../components/AdvertisementModal"
import Ebook from "../../components/Ebook"
import Banner from "../../components/Shared/Header/Banner/Banner"


const Home = () => {
  const [showmodal, setShowModal] = useState(false);

  useEffect(() => {
    const isModalShown = localStorage.getItem("modal");
    const checkModalState = () => {
      if(isModalShown === 'false' || !isModalShown) {
        setShowModal(true);
        localStorage.setItem("modal", "true")
      }
    }
    checkModalState();

    const resetTimer = setTimeout(() => {
      localStorage.setItem("modal", "false");
      checkModalState();
    }, 5000);

    return () => clearTimeout(resetTimer);
  }, [showmodal])
  return (
    <div>
      <Banner />
      <Ebook />
      <AdvertisementModal showModal={showmodal} setShowModal={setShowModal} />
    </div>
  )
}

export default Home