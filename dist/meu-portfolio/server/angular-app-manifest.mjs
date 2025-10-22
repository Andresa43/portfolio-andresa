
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contato"
  },
  {
    "renderMode": 2,
    "route": "/sobre"
  },
  {
    "renderMode": 2,
    "route": "/poesias"
  },
  {
    "renderMode": 2,
    "route": "/downloads"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2538, hash: '1fea412c6a5847c517a2544a1b120eae44b5283bbd0a92c8b1ab4904c876c54d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2642, hash: '77e9476e6e4ecd73ccdb9d7599a6301c56ff21eb70389cabeab5a206cbe0b06b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'poesias/index.html': {size: 21135, hash: '7268c13681497675bac9e5da0a34071ddaf0929bc5cfedc761077dfb3dd9f91a', text: () => import('./assets-chunks/poesias_index_html.mjs').then(m => m.default)},
    'contato/index.html': {size: 14641, hash: '356cda0fdb2e6f9f1174e902bcbf08b02e8d12da06eaa1bb46fe4e82e3801222', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27132, hash: 'f4303d692d759d00d4078f6739ab6bde2d90ca60e5a7faf2d9ef6c087d54df1f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobre/index.html': {size: 44292, hash: '605c3dce04777c78378b0997b86fcb502ee436d9a78b8ba2153849d361579e84', text: () => import('./assets-chunks/sobre_index_html.mjs').then(m => m.default)},
    'downloads/index.html': {size: 19406, hash: '9f268e804fb161da78af7c420907f103c740519137d5576ee1609bd52e322211', text: () => import('./assets-chunks/downloads_index_html.mjs').then(m => m.default)},
    'styles-I3OUDI4E.css': {size: 291, hash: 'C3dwZYj9YXY', text: () => import('./assets-chunks/styles-I3OUDI4E_css.mjs').then(m => m.default)}
  },
};
