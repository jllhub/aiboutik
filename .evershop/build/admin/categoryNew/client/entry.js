
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e87ef197077083d79ce0a28278ccfe76d from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e51f8f98ab3359028eb8d9d690b0fd4c1 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e60c147b63cf400f2369404eb3b7c3569 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import eb32c4384a19b4c65e60bacb49a195fae from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/FormContent.js';
import e315f33d37981ded584ca3980983a903c from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/General.js';
import e8910d33c6cae91fb0b083ceec4fbc8eb from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Image.js';
import e7ab5fed99b364cde3683ffeba07904e7 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/PageHeading.js';
import e0b7e654f5857f3d2efb0d85287ce614b from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Seo.js';
import ee9cda73468a10e4208bff82f104b3ea6 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryEdit+categoryNew/Status.js';
import e5a59a7991afb6ad90a2fde7ca97390f7 from 'file:///C:/projects/aiboutikeshop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/categoryNew/CategoryNewForm.js';
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
  categoryForm: {
    eb32c4384a19b4c65e60bacb49a195fae: {
      id: 'eb32c4384a19b4c65e60bacb49a195fae',
      sortOrder: 10,
      component: { default: eb32c4384a19b4c65e60bacb49a195fae }
    }
  },
  leftSide: {
    e315f33d37981ded584ca3980983a903c: {
      id: 'e315f33d37981ded584ca3980983a903c',
      sortOrder: 10,
      component: { default: e315f33d37981ded584ca3980983a903c }
    },
    e0b7e654f5857f3d2efb0d85287ce614b: {
      id: 'e0b7e654f5857f3d2efb0d85287ce614b',
      sortOrder: 60,
      component: { default: e0b7e654f5857f3d2efb0d85287ce614b }
    }
  },
  rightSide: {
    e8910d33c6cae91fb0b083ceec4fbc8eb: {
      id: 'e8910d33c6cae91fb0b083ceec4fbc8eb',
      sortOrder: 10,
      component: { default: e8910d33c6cae91fb0b083ceec4fbc8eb }
    },
    ee9cda73468a10e4208bff82f104b3ea6: {
      id: 'ee9cda73468a10e4208bff82f104b3ea6',
      sortOrder: 15,
      component: { default: ee9cda73468a10e4208bff82f104b3ea6 }
    }
  },
  content: {
    e7ab5fed99b364cde3683ffeba07904e7: {
      id: 'e7ab5fed99b364cde3683ffeba07904e7',
      sortOrder: 5,
      component: { default: e7ab5fed99b364cde3683ffeba07904e7 }
    },
    e5a59a7991afb6ad90a2fde7ca97390f7: {
      id: 'e5a59a7991afb6ad90a2fde7ca97390f7',
      sortOrder: 10,
      component: { default: e5a59a7991afb6ad90a2fde7ca97390f7 }
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