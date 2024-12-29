import { Carousel } from "@material-tailwind/react"
import BannerImage from "./BannerImage";

import image1 from "../../../../assets/images/cover/image.png"
import image2 from "../../../../assets/images/cover/image2.png"
import image3 from "../../../../assets/images/cover/image3.png"
import image4 from "../../../../assets/images/cover/img1.png"
import image5 from "../../../../assets/images/cover/img4.webp"
import image6 from "../../../../assets/images/cover/img5.webp"


const Banner = () => {
  return ( 
    <Carousel autoplay autoplayDelay={4000} loop={true} className="h-[400px] my-20">
      <BannerImage src={image1} alt={"Image 1"} />
      <BannerImage src={image2} alt={"Image 2"} />
      <BannerImage src={image3} alt={"Image 3"} />
      <BannerImage src={image4} alt={"Image 4"} />
      <BannerImage src={image5} alt={"Image 5"} />
      <BannerImage src={image6} alt={"Image 6"} />
    </Carousel>
  )
}

export default Banner