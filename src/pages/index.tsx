import Image from "next/future/image";
import { useKeenSlider } from 'keen-slider/react';
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/2_explorer-t-shirt.jpg";
import shirt2 from "../assets/Camisa-Maratona.jpg";
import shirt3 from "../assets/IgniteLab-T-shirt.jpg";

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef, ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    mode: 'free-snap',
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="Camiseta" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="Camiseta" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="Camiseta" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="Camiseta" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="Camiseta" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
