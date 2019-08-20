var mobiles = {
  Samsung: [
    {
      model: 'Note 10 Plus',
      ram: 12,
      price: 90000
    },
    {
      model: 'Note 9',
      ram: 8,
      price: 70000
    },
    {
      model: 'Galaxy S10 Plus',
      ram: 8,
      price: 65000
    },
    {
      model: 'Galaxy S10',
      ram: 8,
      price: 60000
    },
    {
      model: 'Galaxy S9 Plus',
      ram: 6,
      price: 65000
    },
    {
      model: 'Note 10 Plus',
      ram: 12,
      price: 90000
    },
    {
      model: 'Note 9',
      ram: 8,
      price: 70000
    },
    {
      model: 'Galaxy S10 Plus',
      ram: 8,
      price: 65000
    },
    {
      model: 'Galaxy S10',
      ram: 8,
      price: 60000
    },
    {
      model: 'Galaxy S9 Plus',
      ram: 6,
      price: 65000
    },
    {
      model: 'Note 10 Plus',
      ram: 12,
      price: 90000
    },
    {
      model: 'Note 9',
      ram: 8,
      price: 70000
    },
    {
      model: 'Galaxy S10 Plus',
      ram: 8,
      price: 65000
    },
    {
      model: 'Galaxy S10',
      ram: 8,
      price: 60000
    },
    {
      model: 'Galaxy S9 Plus',
      ram: 6,
      price: 65000
    }
  ],
  Apple: [
    {
      model: 'iphone Xr',
      ram: 6,
      price: 90000
    },
    {
      model: 'iphone Xs',
      ram: 6,
      price: 85000
    },
    {
      model: 'iphone 8 plus',
      ram: 4,
      price: 70000
    },
    {
      model: 'iphone 8',
      ram: 3,
      price: 65000
    },
    {
      model: 'iphone Xr',
      ram: 6,
      price: 90000
    },
    {
      model: 'iphone Xs',
      ram: 6,
      price: 85000
    },
    {
      model: 'iphone 8 plus',
      ram: 4,
      price: 70000
    },
    {
      model: 'iphone 8',
      ram: 3,
      price: 65000
    },
    {
      model: 'iphone Xr',
      ram: 6,
      price: 90000
    },
    {
      model: 'iphone Xs',
      ram: 6,
      price: 85000
    },
    {
      model: 'iphone 8 plus',
      ram: 4,
      price: 70000
    },
    {
      model: 'iphone 8',
      ram: 3,
      price: 65000
    }
  ],
  Oneplus: [
    {
      model: 'OnePlus 7 Pro',
      ram: 12,
      price: 53000
    },
    {
      model: 'OnePlus 7',
      ram: 8,
      price: 40000
    },
    {
      model: 'OnePlus 6 Pro',
      ram: 8,
      price: 40000
    },
    {
      model: 'OnePlus 6',
      ram: 6,
      price: 35000
    },
    {
      model: 'OnePlus 7 Pro',
      ram: 12,
      price: 53000
    },
    {
      model: 'OnePlus 7',
      ram: 8,
      price: 40000
    },
    {
      model: 'OnePlus 6 Pro',
      ram: 8,
      price: 40000
    },
    {
      model: 'OnePlus 6',
      ram: 6,
      price: 35000
    },
    {
      model: 'OnePlus 7 Pro',
      ram: 12,
      price: 53000
    },
    {
      model: 'OnePlus 7',
      ram: 8,
      price: 40000
    },
    {
      model: 'OnePlus 6 Pro',
      ram: 8,
      price: 40000
    },
    {
      model: 'OnePlus 6',
      ram: 6,
      price: 35000
    }
  ]
}
var mobileWrapper = document.querySelector('.wrapper-template');
var mobileHeader = document.querySelector('.header-template');
var mobileCardTemplate = document.querySelector(".mobile-card-template");
var mobileSection = document.querySelector(".mobile-section");
var pagination = document.querySelector(".pagination");
var paginationContent = document.querySelector(".pagination-content");

for (var obj in mobiles) {
 // console.log(mobiles[obj].length);
  var mobileWrapperNode = mobileWrapper.cloneNode(false);
  mobileWrapperNode.classList.remove('wrapper-template');
  var mobileHeaderNode = mobileHeader.cloneNode(true);
  mobileHeaderNode.classList.remove('header-template');
  mobileHeaderNode.innerText = obj;
  mobileWrapperNode.appendChild(mobileHeaderNode);
  
  var len = mobiles[obj].length;
  var display = 6;
  var toDisplay = Math.ceil(len/6);
  console.log(toDisplay);
  var PaginationNode = pagination.cloneNode(false);
  
  for(var temp=1;temp<toDisplay+1;temp++){
    var PaginationContentNode =  paginationContent.cloneNode(true);
    PaginationContentNode.innerText=temp;

    console.log(PaginationContentNode);
    PaginationNode.appendChild(PaginationContentNode);
  }

  for(var val=0;val<display;val++){
    var mobileTemplate = mobileCardTemplate.cloneNode(true);
    mobileTemplate.classList.remove("mobile-card-template");
    mobileTemplate.querySelector(".mobile-name").innerText = mobiles[obj][val]["model"];
    mobileTemplate.querySelector(".mobile-ram").innerText = mobiles[obj][val]["ram"];
    mobileTemplate.querySelector(".mobile-price").innerText = mobiles[obj][val]["price"];
    mobileWrapperNode.appendChild(mobileTemplate);
  }

  
  // mobiles[obj].forEach(function (item) {
  //   var mobileTemplate = mobileCardTemplate.cloneNode(true);
  //   mobileTemplate.classList.remove("mobile-card-template");
  //   mobileTemplate.querySelector(".mobile-name").innerText = item["model"];
  //   mobileTemplate.querySelector(".mobile-ram").innerText = item["ram"];
  //   mobileTemplate.querySelector(".mobile-price").innerText = item["price"];
  //   mobileWrapperNode.appendChild(mobileTemplate);
  // })

  
  // mobiles[obj].forEach(function (item) {
  //   var mobileTemplate = mobileCardTemplate.cloneNode(true);
  //   mobileTemplate.classList.remove("mobile-card-template");
  //   mobileTemplate.querySelector(".mobile-name").innerText = item["model"];
  //   mobileTemplate.querySelector(".mobile-ram").innerText = item["ram"];
  //   mobileTemplate.querySelector(".mobile-price").innerText = item["price"];
  //   mobileWrapperNode.appendChild(mobileTemplate);
  // })

  // mobiles[obj].forEach(function (item) {
  //   var mobileTemplate = mobileCardTemplate.cloneNode(true);
  //   mobileTemplate.classList.remove("mobile-card-template");
  //   mobileTemplate.querySelector(".mobile-name").innerText = item["model"];
  //   mobileTemplate.querySelector(".mobile-ram").innerText = item["ram"];
  //   mobileTemplate.querySelector(".mobile-price").innerText = item["price"];
  //   mobileWrapperNode.appendChild(mobileTemplate);
  // })
  mobileWrapperNode.appendChild(PaginationNode);
  mobileSection.appendChild(mobileWrapperNode);
}



