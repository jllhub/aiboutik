
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e87ef197077083d79ce0a28278ccfe76d from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e51f8f98ab3359028eb8d9d690b0fd4c1 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e60c147b63cf400f2369404eb3b7c3569 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ef6e30e10b2b51266d5fdbef68594d264 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit/CollectionEditForm.js';
import e699db0c1a1db3850811d05a004c1ea3e from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit/Products.js';
import e24dc391ada015e751ad95ae6b2e25342 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/FormContent.js';
import e5fd07410b81c7c6de160eac1fc5e0384 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/General.js';
import e191bc7132b51a766bea293af873165c1 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/PageHeading.js';
import e1326fd2a7da37fb852b56b871401d097 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import ece014cdb47a246db579cfaeb4762344a from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e068b6138ff8d5cc3cba56171a37933a9 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import ee20e360d6cb63050d21f14a88e1e2c09 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import ee2d489e3c4e0a7e1e0d7ddd8359772be from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e8355e24c50c23448f23815833093a23f from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e886aa0fb0c72e910008ff538969c4b72 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import eadc1b356c43acb350307cbb2c24a5928 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e1868968f6d6d89d85cd3d22feba92372 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e4fd750b8e1fa45fa2e0d025c89ff0c64 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ef949ec72175ea90987db424d1a961d4c from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e218824cb9f2f95069f46a62763fc2a02 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e549f0eb2a2684f1bd2d886271e9f15c2 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e0bc8745359e304ef46d40ea22da0f223 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e172ea4d4fc6edf20c3966a512880aea7 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ee380db561c5cff5681de52b8210dc737 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import ea66c94bda7fb9f53a8e349779cbd90f9 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e124b816f591b3cfcd0f6e3fefe0ae71c from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e9974a18fe787a0f0e2120a6d9e7b0be3 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    e87ef197077083d79ce0a28278ccfe76d: {
      id: 'e87ef197077083d79ce0a28278ccfe76d',
      sortOrder: 50,
      component: { default: e87ef197077083d79ce0a28278ccfe76d }
    },
    ee2d489e3c4e0a7e1e0d7ddd8359772be: {
      id: 'ee2d489e3c4e0a7e1e0d7ddd8359772be',
      sortOrder: 10,
      component: { default: ee2d489e3c4e0a7e1e0d7ddd8359772be }
    },
    e4fd750b8e1fa45fa2e0d025c89ff0c64: {
      id: 'e4fd750b8e1fa45fa2e0d025c89ff0c64',
      sortOrder: 20,
      component: { default: e4fd750b8e1fa45fa2e0d025c89ff0c64 }
    }
  },
  adminMenu: {
    e51f8f98ab3359028eb8d9d690b0fd4c1: {
      id: 'e51f8f98ab3359028eb8d9d690b0fd4c1',
      sortOrder: 20,
      component: { default: e51f8f98ab3359028eb8d9d690b0fd4c1 }
    },
    ece014cdb47a246db579cfaeb4762344a: {
      id: 'ece014cdb47a246db579cfaeb4762344a',
      sortOrder: 60,
      component: { default: ece014cdb47a246db579cfaeb4762344a }
    },
    e1868968f6d6d89d85cd3d22feba92372: {
      id: 'e1868968f6d6d89d85cd3d22feba92372',
      sortOrder: 10,
      component: { default: e1868968f6d6d89d85cd3d22feba92372 }
    },
    e218824cb9f2f95069f46a62763fc2a02: {
      id: 'e218824cb9f2f95069f46a62763fc2a02',
      sortOrder: 40,
      component: { default: e218824cb9f2f95069f46a62763fc2a02 }
    },
    e549f0eb2a2684f1bd2d886271e9f15c2: {
      id: 'e549f0eb2a2684f1bd2d886271e9f15c2',
      sortOrder: 30,
      component: { default: e549f0eb2a2684f1bd2d886271e9f15c2 }
    },
    e0bc8745359e304ef46d40ea22da0f223: {
      id: 'e0bc8745359e304ef46d40ea22da0f223',
      sortOrder: 50,
      component: { default: e0bc8745359e304ef46d40ea22da0f223 }
    },
    ea66c94bda7fb9f53a8e349779cbd90f9: {
      id: 'ea66c94bda7fb9f53a8e349779cbd90f9',
      sortOrder: 500,
      component: { default: ea66c94bda7fb9f53a8e349779cbd90f9 }
    }
  },
  quickLinks: {
    e60c147b63cf400f2369404eb3b7c3569: {
      id: 'e60c147b63cf400f2369404eb3b7c3569',
      sortOrder: 20,
      component: { default: e60c147b63cf400f2369404eb3b7c3569 }
    },
    e172ea4d4fc6edf20c3966a512880aea7: {
      id: 'e172ea4d4fc6edf20c3966a512880aea7',
      sortOrder: 30,
      component: { default: e172ea4d4fc6edf20c3966a512880aea7 }
    }
  },
  content: {
    ef6e30e10b2b51266d5fdbef68594d264: {
      id: 'ef6e30e10b2b51266d5fdbef68594d264',
      sortOrder: 10,
      component: { default: ef6e30e10b2b51266d5fdbef68594d264 }
    },
    e191bc7132b51a766bea293af873165c1: {
      id: 'e191bc7132b51a766bea293af873165c1',
      sortOrder: 5,
      component: { default: e191bc7132b51a766bea293af873165c1 }
    }
  },
  collectionFormInner: {
    e699db0c1a1db3850811d05a004c1ea3e: {
      id: 'e699db0c1a1db3850811d05a004c1ea3e',
      sortOrder: 20,
      component: { default: e699db0c1a1db3850811d05a004c1ea3e }
    },
    e5fd07410b81c7c6de160eac1fc5e0384: {
      id: 'e5fd07410b81c7c6de160eac1fc5e0384',
      sortOrder: 10,
      component: { default: e5fd07410b81c7c6de160eac1fc5e0384 }
    }
  },
  collectionForm: {
    e24dc391ada015e751ad95ae6b2e25342: {
      id: 'e24dc391ada015e751ad95ae6b2e25342',
      sortOrder: 10,
      component: { default: e24dc391ada015e751ad95ae6b2e25342 }
    }
  },
  settingPageMenu: {
    e1326fd2a7da37fb852b56b871401d097: {
      id: 'e1326fd2a7da37fb852b56b871401d097',
      sortOrder: 15,
      component: { default: e1326fd2a7da37fb852b56b871401d097 }
    },
    ee380db561c5cff5681de52b8210dc737: {
      id: 'ee380db561c5cff5681de52b8210dc737',
      sortOrder: 10,
      component: { default: ee380db561c5cff5681de52b8210dc737 }
    },
    e124b816f591b3cfcd0f6e3fefe0ae71c: {
      id: 'e124b816f591b3cfcd0f6e3fefe0ae71c',
      sortOrder: 5,
      component: { default: e124b816f591b3cfcd0f6e3fefe0ae71c }
    },
    e9974a18fe787a0f0e2120a6d9e7b0be3: {
      id: 'e9974a18fe787a0f0e2120a6d9e7b0be3',
      sortOrder: 20,
      component: { default: e9974a18fe787a0f0e2120a6d9e7b0be3 }
    }
  },
  footerLeft: {
    e068b6138ff8d5cc3cba56171a37933a9: {
      id: 'e068b6138ff8d5cc3cba56171a37933a9',
      sortOrder: 10,
      component: { default: e068b6138ff8d5cc3cba56171a37933a9 }
    },
    ef949ec72175ea90987db424d1a961d4c: {
      id: 'ef949ec72175ea90987db424d1a961d4c',
      sortOrder: 20,
      component: { default: ef949ec72175ea90987db424d1a961d4c }
    }
  },
  body: {
    ee20e360d6cb63050d21f14a88e1e2c09: {
      id: 'ee20e360d6cb63050d21f14a88e1e2c09',
      sortOrder: 10,
      component: { default: ee20e360d6cb63050d21f14a88e1e2c09 }
    },
    eadc1b356c43acb350307cbb2c24a5928: {
      id: 'eadc1b356c43acb350307cbb2c24a5928',
      sortOrder: 10,
      component: { default: eadc1b356c43acb350307cbb2c24a5928 }
    }
  },
  head: {
    e8355e24c50c23448f23815833093a23f: {
      id: 'e8355e24c50c23448f23815833093a23f',
      sortOrder: 5,
      component: { default: e8355e24c50c23448f23815833093a23f }
    }
  },
  adminNavigation: {
    e886aa0fb0c72e910008ff538969c4b72: {
      id: 'e886aa0fb0c72e910008ff538969c4b72',
      sortOrder: 10,
      component: { default: e886aa0fb0c72e910008ff538969c4b72 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );