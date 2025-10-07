import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects:[
      {
        id: 1,
        title: 'ул. Оптимистов 10',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRAFo0" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/1/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/1/2.jpg'),
            source: 'https://pastvu.com/p/1416768'
          },
          {
            url: require('../assets/images/1/3.jpg'),
            source: 'https://pastvu.com/p/1439550'
          },
          {
            url: require('../assets/images/1/4.jpg'),
            source: 'https://pastvu.com/p/1417996'
          },
          {
            url: require('../assets/images/1/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/1/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 2,
        title: 'ул. Оптимистов 9',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRYL5N" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/2/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/2/2.jpg'),
            source: 'https://pastvu.com/p/1416768'
          },
          {
            url: require('../assets/images/2/3.jpg'),
            source: 'https://pastvu.com/p/1439550'
          },
          {
            url: require('../assets/images/2/4.jpg'),
            source: 'https://pastvu.com/p/1417996'
          },
          {
            url: require('../assets/images/2/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/2/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 3,
        title: 'ул. Оптимистов 8',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRaUMv" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/3/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/3/2.jpg'),
            source: 'https://pastvu.com/p/1416768'
          },
          {
            url: require('../assets/images/3/3.jpg'),
            source: 'https://pastvu.com/p/1439550'
          },
          {
            url: require('../assets/images/3/4.jpg'),
            source: 'https://pastvu.com/p/1417996'
          },
          {
            url: require('../assets/images/3/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/3/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 4,
        title: 'ул. Оптимистов 7',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRa6-I" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/4/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/4/2.jpg'),
            source: 'https://pastvu.com/p/1416768'
          },
          {
            url: require('../assets/images/4/3.jpg'),
            source: 'https://pastvu.com/p/1439550'
          },
          {
            url: require('../assets/images/4/4.jpg'),
            source: 'https://pastvu.com/p/1417996'
          },
          {
            url: require('../assets/images/4/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/4/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 5,
        title: 'ул. Оптимистов 6',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFReEkX" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/5/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/5/2.jpg'),
            source: 'https://pastvu.com/p/1416768'
          },
          {
            url: require('../assets/images/5/3.jpg'),
            source: 'https://pastvu.com/p/1439550'
          },
          {
            url: require('../assets/images/5/4.jpg'),
            source: 'https://pastvu.com/p/1417996'
          },
          {
            url: require('../assets/images/5/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/5/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 6,
        title: 'ул. Оптимистов 5',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRiF2L" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/6/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/6/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/6/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 7,
        title: 'ул. Оптимистов 4',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRuG~r" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/7/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/7/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/7/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 8,
        title: 'ул. Оптимистов 3',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRyAmj" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/8/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/8/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/8/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 9,
        title: 'ул. Оптимистов 2',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRyZzJ" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/9/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/9/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/9/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
      {
        id: 10,
        title: 'ул. Оптимистов 1',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLFRyX~d" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/10/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/10/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/10/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[
          // {
          // text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          // author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          // },
        ]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
