import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pictures } from "./components/Pictures";
import { WhatItIs } from "./components/WhatItIs";
import { RuffRiders } from "./components/RuffRiders";
import { Join } from "./components/Join";
import { Sponsors } from "./components/Sponsors";
import { FeatureImage } from "./components/FeatureImage";

const PICTURES_SECTION_1 = [
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430317/IMG_3528_px48ui.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538081/DSC06620_b8tpmm.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430317/IMG_4669_bevlkg.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538081/DSC06710_jupy0m.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430317/IMG_3527_fwlr3t.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538081/DSC06635_jbhbed.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430315/IMG_3519_wya3sq.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538080/DSC06578_w1exps.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430314/IMG_0212_er7rjp.jpg",
];

const PICTURES_SECTION_2 = [
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430314/IMG_4677_vtzjum.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538078/DSC06733_n1xt81.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430314/IMG_0215_rvopj6.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538078/DSC06757_droi7i.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430313/IMG_0224_xauolo.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538077/DSC06730_xlaoot.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430309/IMG_0229_eeorvq.jpg",
  "https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771430011/846F210C-4309-47A4-B244-44BFEEC56410_q2bwcs.jpg",
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Pictures images={PICTURES_SECTION_1} maxWidth={600} />
      <WhatItIs />
      <RuffRiders />
      <Join />
      <Pictures images={PICTURES_SECTION_2} maxWidth={600} />
      <Sponsors />
      <FeatureImage
        src="https://res.cloudinary.com/dxwf2hzpd/image/upload/v1771538082/DSC06754_laqwcg.jpg"
        width={2000}
        alt="Megawalk event photo"
      />
      <Header />
    </>
  );
}

export default App;
