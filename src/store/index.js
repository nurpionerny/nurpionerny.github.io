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
      {
        id: 11,
        title: 'ул. Северная 1',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV1ZWp5" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/11/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/11/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/11/3.jpg'),
            source: 'https://pastvu.com/p/1556940'
          },
          {
            url: require('../assets/images/11/4.jpg'),
            source: 'https://pastvu.com/p/1232603'
          },
        ],
        comments:[]
      },
      {
        id: 12,
        title: 'ул. Северная 3',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV1fOPF" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 15',
        images:[
          {
            url: require('../assets/images/12/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/12/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
        ],
        comments:[]
      },
      {
        id: 13,
        title: 'ул. Северная 3А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV1v4iZ" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 16',
        images:[
          {
            url: require('../assets/images/13/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/13/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
        ],
        comments:[]
      },
      {
        id: 14,
        title: 'ул. Набережная 22',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9IDJG" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/14/1.jpg'),
            source: 'https://vk.com/wall-192852794_5475'
          },
        ],
        comments:[]
      },
      {
        id: 15,
        title: 'ул. Набережная 23',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9UJ5n" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/15/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/15/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
        ],
        comments:[]
      },
      {
        id: 16,
        title: 'ул. Набережная 24',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9YD~W" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/16/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/16/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
        ],
        comments:[]
      },
      {
        id: 17,
        title: 'ул. Набережная 25',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV94VOw" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/17/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/17/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/17/3.jpg'),
            source: 'https://pastvu.com/p/1434637'
          },
        ],
        comments:[]
      },
      {
        id: 18,
        title: 'ул. Набережная 26',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9aTZx" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/18/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/18/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/18/3.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/18/4.jpg'),
            source: 'https://pastvu.com/p/1474383'
          },
          {
            url: require('../assets/images/18/5.jpg'),
            source: 'https://pastvu.com/p/1434637'
          },
        ],
        comments:[]
      },
      {
        id: 19,
        title: 'Памятник Оруджеву С.А.',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9bUYC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/19/1.jpg'),
            source: 'https://pastvu.com/p/1100747'
          },
          {
            url: require('../assets/images/19/2.jpg'),
            source: 'https://pastvu.com/p/1361756'
          },
          {
            url: require('../assets/images/19/3.jpg'),
            source: 'https://pastvu.com/p/1300975'
          },
        ],
        comments:[]
      },
      {
        id: 20,
        title: 'ул. Первопроходцев 6А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9jE7q" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/20/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/20/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
        ],
        comments:[]
      },
      {
        id: 21,
        title: 'ул. Оптимистов',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9r6yI" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/21/1.jpg'),
            source: 'https://pastvu.com/p/1416767'
          },
          {
            url: require('../assets/images/21/3.jpg'),
            source: 'https://pastvu.com/p/1439550'
          },
          {
            url: require('../assets/images/21/5.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/21/6.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
        ],
        comments:[]
      },
      {
        id: 22,
        title: 'ул. Набережная 27',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLV9zA6-" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Магазин',
        images:[
          {
            url: require('../assets/images/21/1.jpg'),
            source: 'https://pastvu.com/p/1474383'
          },
        ],
        comments:[]
      },
      {
        id: 23,
        title: 'ул. Первопроходцев 8А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVH52L-" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[]
      },
      {
        id: 24,
        title: 'ул. Первопроходцев 8',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVHyB9y" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/24/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/24/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/24/3.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/24/4.jpg'),
            source: 'https://pastvu.com/p/1631146'
          },
          {
            url: require('../assets/images/24/5.jpg'),
            source: 'https://pastvu.com/p/1678194'
          },
          {
            url: require('../assets/images/24/6.jpg'),
            source: 'https://pastvu.com/p/1085128'
          },
        ],
        comments:[]
      },
      {
        id: 25,
        title: 'ул. Первопроходцев 6',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVHJC3-" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 1',
        images:[
          {
            url: require('../assets/images/25/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/25/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/25/3.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/25/4.jpg'),
            source: 'https://pastvu.com/p/894363'
          },
        ],
        comments:[]
      },
      {
        id: 26,
        title: 'ул. Первопроходцев 4',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVHRLMU" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 2',
        images:[
          {
            url: require('../assets/images/26/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/26/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/26/3.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/26/4.jpg'),
            source: 'https://pastvu.com/p/894363'
          },
        ],
        comments:[]
      },
      {
        id: 27,
        title: 'ул. Первопроходцев 2',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVHfU7M" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 3',
        images:[
          {
            url: require('../assets/images/27/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/27/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/27/3.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/27/4.jpg'),
            source: 'https://pastvu.com/p/894363'
          },
        ],
        comments:[]
      },
      {
        id: 28,
        title: 'ул. Набережная 28',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVHrEkW" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/28/1.jpg'),
            source: 'https://pastvu.com/p/1417976'
          },
          {
            url: require('../assets/images/28/2.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/28/3.jpg'),
            source: 'https://pastvu.com/p/1631121'
          },
          {
            url: require('../assets/images/28/4.jpg'),
            source: 'https://pastvu.com/p/1085128'
          },
          {
            url: require('../assets/images/28/5.jpg'),
            source: 'https://pastvu.com/p/1085146'
          },
          {
            url: require('../assets/images/28/6.jpg'),
            source: 'https://pastvu.com/p/1284410'
          },
        ],
        comments:[]
      },
      {
        id: 29,
        title: 'ул. Набережная 29',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVLyHlp" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[]
      },
      {
        id: 30,
        title: 'ул. Первопроходцев 3',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVLZUPv" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 4',
        images:[
          {
            url: require('../assets/images/30/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/30/2.jpg'),
            source: 'https://pastvu.com/p/1085128'
          },
          {
            url: require('../assets/images/30/3.jpg'),
            source: 'https://pastvu.com/p/1175590'
          },
          {
            url: require('../assets/images/30/4.jpg'),
            source: 'https://pastvu.com/p/1085146'
          },
        ],
        comments:[]
      },
      {
        id: 31,
        title: 'ул. Первопроходцев 1',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVLJI37" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 2',
        images:[
          {
            url: require('../assets/images/31/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/31/2.jpg'),
            source: 'https://pastvu.com/p/1085128'
          },
          {
            url: require('../assets/images/31/4.jpg'),
            source: 'https://pastvu.com/p/1085146'
          },
        ],
        comments:[]
      },
      {
        id: 32,
        title: 'ул. им. Журнала Смена 9',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPAOmo" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 6',
        images:[
          {
            url: require('../assets/images/32/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/32/2.jpg'),
            source: 'https://pastvu.com/p/1631139'
          },
        ],
        comments:[]
      },
      {
        id: 33,
        title: 'ул. им. Журнала Смена 8',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPAD1T" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 30',
        images:[
          {
            url: require('../assets/images/33/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
        ],
        comments:[]
      },
      {
        id: 34,
        title: 'пр. Губкина 9',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPIOli" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 60',
        images:[],
        comments:[]
      },
      {
        id: 35,
        title: 'ул. Набережная 30',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPMPlR" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/35/2.jpg'),
            source: 'https://pastvu.com/p/1263373'
          },
        ],
        comments:[]
      },
      {
        id: 36,
        title: 'ул. Набережная 30А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPYJIm" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/36/1.jpg'),
            source: 'https://pastvu.com/p/2017257'
          },
        ],
        comments:[]
      },
      {
        id: 37,
        title: 'ул. Строителей 5А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVP4Gm9" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 9, общежитие 9',
        images:[
          {
            url: require('../assets/images/37/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
        ],
        comments:[]
      },
      {
        id: 38,
        title: 'ул. Строителей 5',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVP40iY" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 10, общежитие 10',
        images:[
          {
            url: require('../assets/images/38/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
        ],
        comments:[]
      },
      {
        id: 39,
        title: 'ДК "Солнышко"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPeENc" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Изначально первое здание школы №1',
        images:[
          {
            url: require('../assets/images/39/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
        ],
        comments:[]
      },
      {
        id: 40,
        title: 'ДК',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPeFmR" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/40/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
        ],
        comments:[]
      },
      {
        id: 41,
        title: 'пр. Губкина 7',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVPmY7y" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 62',
        images:[
          {
            url: require('../assets/images/41/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/41/2.jpg'),
            source: 'https://pastvu.com/p/1169459'
          },
        ],
        comments:[]
      },
      {
        id: 42,
        title: 'Кафе "Ева-Яха"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVTzX2d" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/42/1.jpg'),
            source: 'https://pastvu.com/p/1631127'
          },
          {
            url: require('../assets/images/42/2.jpg'),
            source: 'hhttps://pastvu.com/p/1278907'
          },
        ],
        comments:[]
      },
      {
        id: 43,
        title: 'Лыжная база',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXA44W" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/43/1.jpg'),
            source: 'https://pastvu.com/p/1121181'
          },
          {
            url: require('../assets/images/43/2.jpg'),
            source: 'hhttps://pastvu.com/p/1278907'
          },
        ],
        comments:[]
      },
      {
        id: 44,
        title: 'ул. Набережная 31',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXEMmU" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 11, общежитие 11',
        images:[
          {
            url: require('../assets/images/44/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
        ],
        comments:[]
      },
      {
        id: 45,
        title: 'ул. Набережная 31А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXI0--" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 12, общежитие 12',
        images:[
          {
            url: require('../assets/images/45/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
        ],
        comments:[]
      },
      {
        id: 46,
        title: 'ул. Строителей 3А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXMV~u" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 21',
        images:[
          {
            url: require('../assets/images/46/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/46/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
        ],
        comments:[]
      },
      {
        id: 47,
        title: 'ул. Строителей 3',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXQC~L" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 20',
        images:[
          {
            url: require('../assets/images/47/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/47/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
        ],
        comments:[]
      },
      {
        id: 48,
        title: 'ул. Строителей 4',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXQC~L" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 19',
        images:[
          {
            url: require('../assets/images/48/1.jpg'),
            source: 'https://pastvu.com/p/1085075'
          },
          {
            url: require('../assets/images/48/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
        ],
        comments:[]
      },
      {
        id: 49,
        title: 'Детская библиотека',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXa6oo" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/49/1.jpg'),
            source: 'https://pastvu.com/p/1088253'
          },
          {
            url: require('../assets/images/49/2.jpg'),
            source: 'https://pastvu.com/p/1242461'
          },
          {
            url: require('../assets/images/49/3.jpg'),
            source: 'https://pastvu.com/p/1242460'
          },
          {
            url: require('../assets/images/49/4.jpg'),
            source: 'https://pastvu.com/p/1080142'
          },
        ],
        comments:[]
      },
      {
        id: 50,
        title: 'Стоматология',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXiM9a" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/50/1.jpg'),
            source: 'https://pastvu.com/p/1442540'
          },
          {
            url: require('../assets/images/50/2.jpg'),
            source: 'https://pastvu.com/p/1631124'
          },
        ],
        comments:[]
      },
      {
        id: 51,
        title: 'пр. Губкина 5',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXqWmW" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 61',
        images:[
          {
            url: require('../assets/images/51/1.jpg'),
            source: 'https://pastvu.com/p/1315802'
          },
          {
            url: require('../assets/images/51/2.jpg'),
            source: 'https://pastvu.com/p/1144524'
          },
        ],
        comments:[]
      },
      {
        id: 52,
        title: 'ул. Набережная 32',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXBDk0" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Общежитие 13 , строение 13',
        images:[
          {
            url: require('../assets/images/52/1.jpg'),
            source: 'https://pastvu.com/p/1197712'
          },
          {
            url: require('../assets/images/52/2.jpg'),
            source: 'https://pastvu.com/p/1372347'
          },
        ],
        comments:[]
      },
      {
        id: 53,
        title: 'ул. Набережная 32',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXBDk0" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Общежитие 14 , строение 14',
        images:[
          {
            url: require('../assets/images/53/1.jpg'),
            source: 'https://pastvu.com/p/1197712'
          },
        ],
        comments:[]
      },
      {
        id: 54,
        title: 'ул. Надымская 6',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXRKmE" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 38',
        images:[
          {
            url: require('../assets/images/54/1.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
          {
            url: require('../assets/images/54/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
        ],
        comments:[]
      },
      {
        id: 55,
        title: 'ул. Надымская 4',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXVGNb" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 25',
        images:[
          {
            url: require('../assets/images/55/1.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
          {
            url: require('../assets/images/55/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
          {
            url: require('../assets/images/55/3.jpg'),
            source: 'https://pastvu.com/p/1344448'
          },
        ],
        comments:[]
      },
      {
        id: 56,
        title: 'ул. Надымская 2',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXZOOw" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 24',
        images:[
          {
            url: require('../assets/images/56/1.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
          {
            url: require('../assets/images/56/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
          {
            url: require('../assets/images/56/3.jpg'),
            source: 'https://pastvu.com/p/1344448'
          },
          {
            url: require('../assets/images/56/4.jpg'),
            source: 'https://pastvu.com/p/1347339'
          },
        ],
        comments:[]
      },
      {
        id: 57,
        title: 'ул. Строителей 1',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXr44k" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 23',
        images:[
          {
            url: require('../assets/images/57/1.jpg'),
            source: 'https://pastvu.com/p/1344448'
          },
          {
            url: require('../assets/images/57/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
          {
            url: require('../assets/images/57/3.jpg'),
            source: 'https://pastvu.com/p/1347339'
          },
        ],
        comments:[]
      },
      {
        id: 58,
        title: 'ул. Строителей 2',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLVXr44k" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 23',
        images:[
          {
            url: require('../assets/images/58/1.jpg'),
            source: 'https://pastvu.com/p/1344448'
          },
          {
            url: require('../assets/images/58/2.jpg'),
            source: 'https://pastvu.com/p/1631135'
          },
          {
            url: require('../assets/images/58/3.jpg'),
            source: 'https://pastvu.com/p/1347339'
          },
          {
            url: require('../assets/images/58/4.jpg'),
            source: 'https://pastvu.com/p/1144330'
          },
        ],
        comments:[]
      },
      {
        id: 59,
        title: 'Школа №1',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbErO-8" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Второе здание',
        images:[
          {
            url: require('../assets/images/59/1.jpg'),
            source: 'https://pastvu.com/p/1088621'
          },
          {
            url: require('../assets/images/59/2.jpg'),
            source: 'https://pastvu.com/p/1088616'
          },
          {
            url: require('../assets/images/59/3.jpg'),
            source: 'https://pastvu.com/p/1088628'
          },
        ],
        comments:[]
      },
      {
        id: 60,
        title: 'ул. им Журнала Смена 2',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIiV7R" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Строение 26',
        images:[
          {
            url: require('../assets/images/60/1.jpg'),
            source: 'https://pastvu.com/p/1360734'
          },
          {
            url: require('../assets/images/60/2.jpg'),
            source: 'https://pastvu.com/p/1236300'
          },
        ],
        comments:[]
      },
      {
        id: 61,
        title: 'пр. Губкина 3',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIqHnt" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Общежитие Автомобилист, строение 63',
        images:[
          {
            url: require('../assets/images/61/1.jpg'),
            source: 'https://pastvu.com/p/1315802'
          },
          {
            url: require('../assets/images/61/2.jpg'),
            source: 'https://pastvu.com/p/1144524'
          },
          {
            url: require('../assets/images/61/3.jpg'),
            source: 'https://pastvu.com/p/1117806'
          },
        ],
        comments:[]
      },
      {
        id: 62,
        title: 'пр. Губкина 1',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIyM1F" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Взрослая библиотека',
        images:[
          {
            url: require('../assets/images/62/1.jpg'),
            source: 'https://pastvu.com/p/1389706'
          },
          {
            url: require('../assets/images/62/2.jpg'),
            source: 'https://pastvu.com/p/1639880'
          },
          {
            url: require('../assets/images/62/3.jpg'),
            source: 'https://pastvu.com/p/1390642'
          },
          {
            url: require('../assets/images/62/4.jpg'),
            source: 'https://pastvu.com/p/1390184'
          },
        ],
        comments:[]
      },
      {
        id: 63,
        title: 'Памятный знак',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbI6W7~" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Уренгой - Всесоюзная ударная комсомольская стройка',
        images:[
          {
            url: require('../assets/images/63/1.jpg'),
            source: 'https://pastvu.com/p/1639880'
          },
        ],
        comments:[]
      },
      {
        id: 64,
        title: 'Роддом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIbR2T" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/64/1.jpg'),
            source: 'https://pastvu.com/p/1121336'
          },
          {
            url: require('../assets/images/64/2.jpg'),
            source: 'https://pastvu.com/p/1347348'
          },
        ],
        comments:[]
      },
      {
        id: 64,
        title: 'Роддом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIbR2T" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/64/1.jpg'),
            source: 'https://pastvu.com/p/1121336'
          },
          {
            url: require('../assets/images/64/2.jpg'),
            source: 'https://pastvu.com/p/1347348'
          },
        ],
        comments:[]
      },
      {
        id: 65,
        title: 'ул. Железнодорожная 8',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIf-Jh" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Больничный комплекс',
        images:[
          {
            url: require('../assets/images/65/1.jpg'),
            source: 'https://pastvu.com/p/1417972'
          },
        ],
        comments:[]
      },
      {
        id: 66,
        title: 'Больничный комплекс',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIf-Jh" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/66/1.jpg'),
            source: 'https://pastvu.com/p/1417972'
          },
        ],
        comments:[]
      },
      {
        id: 67,
        title: 'ул. Железнодорожная 8А',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CLbIrIo6" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Больничный комплекс',
        images:[
          {
            url: require('../assets/images/67/1.jpg'),
            source: 'https://pastvu.com/p/1417972'
          },
        ],
        comments:[]
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
