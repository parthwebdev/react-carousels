import Carousel from "./components/Carousel 02/Carousel";

import image1 from "./components/Carousel 02/assets/01.jpg";
import image2 from "./components/Carousel 02/assets/02.jpg";
import image3 from "./components/Carousel 02/assets/03.jpg";
import image4 from "./components/Carousel 02/assets/04.jpg";
import image5 from "./components/Carousel 02/assets/05.jpg";
import image6 from "./components/Carousel 02/assets/06.jpg";

const imgs = [image1, image2, image3, image4, image5, image6];

const App = () => {
  return <Carousel slides={imgs} />;
};

export default App;
