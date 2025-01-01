import { useEffect, useState } from "react"
import AdvertisementModal from "../../components/AdvertisementModal"
import Ebook from "../../components/Ebook"
import Banner from "../../components/Shared/Header/Banner/Banner"
import OfferTimer from "./OfferTimer"
import Categories from "./Categories/Categories"


const Home = () => {
  const [showmodal, setShowModal] = useState(false);
  const targetDate = "2025-01-05T00:00:00";

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
    }, 50000);

    return () => clearTimeout(resetTimer);
  }, [showmodal])
  return (
    <div>
      <Banner />
      <OfferTimer targetDate={targetDate} />
      <Categories />
      <Ebook />
      <AdvertisementModal showModal={showmodal} setShowModal={setShowModal} />
    </div>
  )
}

export default Home