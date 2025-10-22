
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-andresa/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-andresa"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-andresa/contato"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-andresa/sobre"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-andresa/poesias"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-andresa/downloads"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2556, hash: '1ecd44bdd08295c04c972407daf2997aea2bd73abe5a0381ade61ce68f28ed22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2660, hash: '3c55501d4c5196f48c54e4a6c4d0480e40a394c0bbf755b3bffc7f332da424ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contato/index.html': {size: 14749, hash: '08e990a347790b3782e4595198d2cd5f640c4aff892d7978a7e3a716a4f6d01c', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)},
    'sobre/index.html': {size: 44418, hash: '5933e8e8bd75180e60896149c0fd6fc8de10728fbc3bd1a45b0989af0e05801c', text: () => import('./assets-chunks/sobre_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27258, hash: '434b3675c2ce19178fba1ca1e50af0c2492756918072cde1df9fd19523325365', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'downloads/index.html': {size: 19509, hash: 'e674551ef8dbcdafd655fb286c6e4911f77b47c93a088607f623e624b7b2c13e', text: () => import('./assets-chunks/downloads_index_html.mjs').then(m => m.default)},
    'poesias/index.html': {size: 21243, hash: '94f660609f96fbf011fa2fad74245e2e0b16a03cbfcc57884954b9e937483922', text: () => import('./assets-chunks/poesias_index_html.mjs').then(m => m.default)},
    'styles-I3OUDI4E.css': {size: 291, hash: 'C3dwZYj9YXY', text: () => import('./assets-chunks/styles-I3OUDI4E_css.mjs').then(m => m.default)}
  },
};
