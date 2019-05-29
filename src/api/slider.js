/**
 * Created at 2019-04-09
 * Author: Jack
 */
const _sliders = [
  { 'id': 1,
    'pic': 'images/slider-1.jpg',
    'caption': {
      'span_text': '1 WELCOME TO Vue.js',
      'h2_text': 'NATURAL PLACE',
      'p_text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.'
    }
  },
  { 'id': 2,
    'pic': 'images/slider-2.jpg',
    'caption': {
      'span_text': '2 WELCOME TO Vue.js',
      'h2_text': 'NATURAL PLACE',
      'p_text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.'
    }
  },
  { 'id': 3,
    'pic': 'images/slider-3.jpg',
    'caption': {
      'span_text': '3 WELCOME TO Vue.js',
      'h2_text': 'NATURAL PLACE',
      'p_text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elite. Neque, iusto.'
    }
  }
]
export default {
  getSliders (cb) {
    setTimeout(() => cb(_sliders), 10)
  }
}
