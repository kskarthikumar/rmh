import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'header',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data () {
    return {
      sliderPath: [
          'src/assets/slider1.jpeg',
          'src/assets/slider2.jpeg',
          'src/assets/slider3.jpeg'
      ],    
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    }
  }
}