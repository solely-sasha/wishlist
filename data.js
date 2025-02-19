const { v4: uuidv4 } = require("uuid");

const categories = [
  { _id: uuidv4(), name: "electronics" },
  { _id: uuidv4(), name: "books" },
  { _id: uuidv4(), name: "clothing" },
  { _id: uuidv4(), name: "toys" },
  { _id: uuidv4(), name: "home" },
  { _id: uuidv4(), name: "sports" },
  { _id: uuidv4(), name: "beauty" },
  { _id: uuidv4(), name: "health" },
  { _id: uuidv4(), name: "kitchen" },
  { _id: uuidv4(), name: "garden" },
  { _id: uuidv4(), name: "office supplies" },
  { _id: uuidv4(), name: "automotive" },
  { _id: uuidv4(), name: "pet supplies" },
  { _id: uuidv4(), name: "music" },
  { _id: uuidv4(), name: "movies" },
  { _id: uuidv4(), name: "video games" },
  { _id: uuidv4(), name: "travel" },
  { _id: uuidv4(), name: "food & drink" },
  { _id: uuidv4(), name: "art & craft" },
  { _id: uuidv4(), name: "jewelry" },
  { _id: uuidv4(), name: "baby products" },
];

const wishlist = [
  {
    _id: uuidv4(),
    name: "Laptop",
    price: 890,
    description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
    link: "https://www.amazon.com/SAMSUNG-Galaxy-Book4-Business-Accessories/dp/B0DN62HWYB/ref=sr_1_4?crid=2S3ZQB95WF9R5&dib=eyJ2IjoiMSJ9.2uflCJZP43bNatvqh_yNa0InvJNZ1iHdSR3MVdfk33j8ugS60iCUl6HRoyhC01XjMXIqITZcRVmPnmUw8scsb8BYfefFjbd55sHS_x3-CEyZdMf7hiU43sNehg_ncU90C78Rl3_w_5YYimZL6NbdDgyiUho9E97GLnQ92ySA1zc_AEJ5rajY9SkbjsxFdUsBjlaXBuplFJ4g4j_ZzdkeNQ3P7TFZd3P1o8RiXifXGCk.qNAl8SbaiYaECyuWApV_QL3B7H9nP2McV2n4FX6cFZA&dib_tag=se&keywords=laptop+samsung+for+software+development&qid=1736791072&sprefix=laptop+samsung+for+software+development%2Caps%2C134&sr=8-4",
    image: "https://m.media-amazon.com/images/I/611pjyX-RKL._AC_UY218_.jpg",
    category: "electronics",
    dateAdded: new Date(),
    received: false,
  },
  {
    _id: uuidv4(),
    name: "Dining Room Table",
    price: 300.99,
    description: "A beautiful wooden dining room table that seats six.",
    link: "https://www.amazon.com/Recaceik-Dinner-Farmhouse-Kitchen-Apartment/dp/B0DKBGGJYN/ref=sxin_14_sbv_search_btf?content-id=amzn1.sym.7032aefd-3c59-4a1e-aaf4-8d3a944207a4%3Aamzn1.sym.7032aefd-3c59-4a1e-aaf4-8d3a944207a4&crid=2YUM6HL1QFIXC&cv_ct_cx=dining%2Broom%2Bset&keywords=dining%2Broom%2Bset&pd_rd_i=B0DKBGTVDG&pd_rd_r=7af7e96c-9a93-416e-a022-b8dde7928f19&pd_rd_w=UGaar&pd_rd_wg=SCci3&pf_rd_p=7032aefd-3c59-4a1e-aaf4-8d3a944207a4&pf_rd_r=S9A1PCFX979DCMZ7EKRW&qid=1736791482&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=dining%2Broom%2Bset%2Caps%2C174&sr=1-1-5190daf0-67e3-427c-bea6-c72c1df98776&th=1",
    image: "https://m.media-amazon.com/images/I/81JOnb-6TXL._AC_SX679_.jpg",
    category: "home",
    dateAdded: new Date(),
    received: false,
  },
  {
    _id: uuidv4(),
    name: "You Are A Badass Everyday by Jen Sincero",
    price: 11.99,
    description: "A motivational book to help you achieve your goals.",
    link: "https://www.amazon.com/You-Are-Badass-Every-Transformation/dp/0525561641/ref=sr_1_1?dib=eyJ2IjoiMSJ9.e28qMnqEWWo2jGfn7eb2S_qX-aMLSpBEKOScSwBIH7GjEf96wYt4hziHAewVP6TjXFy1p4jASGY4--MoygWGROg8LtkEN4eL7-wxOserePDH2CpLbmoEZIplKeKYct_DwkGcSd1XU1hbtvrOyA4cJddw4qsehxeWVNMlRfmUhC4DJy_D0rgSGwKs9LFQ5Q0pCdeKWgrDS7FY8F6GerLm_heuroG7fL83Y45BYpdikzQ.vrXxzLrAx_OMBZiurACFqPqMwWlIa5AY1l_bv8zgrd0&dib_tag=se&keywords=you+are+a+badass+everyday+book&qid=1736791624&sr=8-1",
    image: "https://m.media-amazon.com/images/I/71c4qvJ2bFL._AC_UY218_.jpg",
    category: "books",
    dateAdded: new Date(),
    received: false,
  },
  {
    _id: uuidv4(),
    name: "You Are A Badass At Making Money by Jen Sincero",
    price: 11.99,
    description: "A motivational book to help you achieve your goals.",
    link: "https://www.amazon.com/You-Are-Badass-Every-Transformation/dp/0525561641/ref=sr_1_1?dib=eyJ2IjoiMSJ9.e28qMnqEWWo2jGfn7eb2S_qX-aMLSpBEKOScSwBIH7GjEf96wYt4hziHAewVP6TjXFy1p4jASGY4--MoygWGROg8LtkEN4eL7-wxOserePDH2CpLbmoEZIplKeKYct_DwkGcSd1XU1hbtvrOyA4cJddw4qsehxeWVNMlRfmUhC4DJy_D0rgSGwKs9LFQ5Q0pCdeKWgrDS7FY8F6GerLm_heuroG7fL83Y45BYpdikzQ.vrXxzLrAx_OMBZiurACFqPqMwWlIa5AY1l_bv8zgrd0&dib_tag=se&keywords=you+are+a+badass+everyday+book&qid=1736791624&sr=8-1",
    image: "https://m.media-amazon.com/images/I/71c4qvJ2bFL._AC_UY218_.jpg",
    category: "books",
    dateAdded: new Date(),
    received: false,
  },
];

module.exports = { wishlist, categories };
