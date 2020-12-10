//function to fade in and out menu at the top
//(function($) {
  //  $(document).ready(function(){
    //    $(window).scroll(function(){
      //      if ($(this).scrollTop() > 200) {
        //        $('#menu').fadeIn(500);
        //    }
      //  });
//    });
//})(jQuery);

$(document).ready(function() {
  $('.burger-nav').on("click",function () {
    $('header nav ul').toggleClass('open');
  });
});

//animate moving to section when down arrow is clicked
$('.downArrow').on('click', function (e) {
  var targetSec=$(this).text();
  const navHeight = $("#navBar").height();
  $('html, body').animate({
      scrollTop: $('#whatIsRank' + targetSec).offset().top - navHeight
  }, 800);
});

$(document).ready(function(){
  $('.mainImage').parallax();
});

/*top button*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

$('#myBtn').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

function _(id){ return document.getElementById(id); }

function submitForm(){
	_("submitBtn").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	formdata.append( "e", _("e").value );
	formdata.append( "m", _("m").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "contactus.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("submitBtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}

function amazonClick() {
  gtag_report_conversion();
  window.location.href="https://www.amazon.com/gp/product/B07DN1SPHB";
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

//Funtion for Shopify button on top
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'mrk500.myshopify.com',
          storefrontAccessToken: '4de7775e89c25c71b8a3cb88074d72cb',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3546411302996],
            node: document.getElementById('product-component-38695bacd5c'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "PRE-ORDER NOW!"
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#c40b1d",
        "font-family": "Open Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "padding-left": "px",
        "padding-right": "px",
        ":hover": {
          "background-color": "#b00a1a"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#b00a1a"
        },
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#c40b1d",
        "font-family": "Open Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#b00a1a"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#b00a1a"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#c40b1d",
        "font-family": "Open Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "padding-left": "px",
        "padding-right": "px",
        ":hover": {
          "background-color": "#b00a1a"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#b00a1a"
        },
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Open Sans, sans-serif",
        "background-color": "#c40b1d",
        ":hover": {
          "background-color": "#b00a1a"
        },
        ":focus": {
          "background-color": "#b00a1a"
        },
        "font-weight": "normal"
      },
      "count": {
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        },
        "font-size": "18px"
      },
      "iconPath": {
        "fill": "#ffffff"
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/

//Function for middle shopify button
    (function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'mrk500.myshopify.com',
      storefrontAccessToken: '4de7775e89c25c71b8a3cb88074d72cb',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [3546411302996],
        node: document.getElementById('product-component-f699910afc6'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
"product": {
"variantId": "all",
"width": "240px",
"contents": {
  "img": false,
  "imgWithCarousel": false,
  "title": false,
  "variantTitle": false,
  "price": false,
  "description": false,
  "buttonWithQuantity": false,
  "quantity": false
},
"text": {
  "button": "PRE-ORDER NOW!"
},
"styles": {
  "product": {
    "text-align": "left",
    "@media (min-width: 601px)": {
      "max-width": "calc(25% - 20px)",
      "margin-left": "20px",
      "margin-bottom": "50px"
    }
  },
  "button": {
    "background-color": "#ffffff",
    "color": "#c40b1d",
    "font-family": "Open Sans, sans-serif",
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px",
    "padding-left": "px",
    "padding-right": "px",
    ":hover": {
      "background-color": "#e6e6e6",
      "color": "#c40b1d"
    },
    "border-radius": "10px",
    ":focus": {
      "background-color": "#e6e6e6"
    },
    "font-weight": "normal"
  },
  "quantityInput": {
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"cart": {
"contents": {
  "button": true
},
"styles": {
  "button": {
    "background-color": "#ffffff",
    "color": "#c40b1d",
    "font-family": "Open Sans, sans-serif",
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px",
    ":hover": {
      "background-color": "#e6e6e6",
      "color": "#c40b1d"
    },
    "border-radius": "10px",
    ":focus": {
      "background-color": "#e6e6e6"
    },
    "font-weight": "normal"
  },
  "footer": {
    "background-color": "#ffffff"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"modalProduct": {
"contents": {
  "img": false,
  "imgWithCarousel": true,
  "variantTitle": false,
  "buttonWithQuantity": true,
  "button": false,
  "quantity": false
},
"styles": {
  "product": {
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0px",
      "margin-bottom": "0px"
    }
  },
  "button": {
    "background-color": "#ffffff",
    "color": "#c40b1d",
    "font-family": "Open Sans, sans-serif",
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px",
    "padding-left": "px",
    "padding-right": "px",
    ":hover": {
      "background-color": "#e6e6e6",
      "color": "#c40b1d"
    },
    "border-radius": "10px",
    ":focus": {
      "background-color": "#e6e6e6"
    },
    "font-weight": "normal"
  },
  "quantityInput": {
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"toggle": {
"styles": {
  "toggle": {
    "font-family": "Open Sans, sans-serif",
    "background-color": "#ffffff",
    ":hover": {
      "background-color": "#e6e6e6"
    },
    ":focus": {
      "background-color": "#e6e6e6"
    },
    "font-weight": "normal"
  },
  "count": {
    "color": "#c40b1d",
    ":hover": {
      "color": "#c40b1d"
    },
    "font-size": "18px"
  },
  "iconPath": {
    "fill": "#c40b1d"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"productSet": {
"styles": {
  "products": {
    "@media (min-width: 601px)": {
      "margin-left": "-20px"
    }
  }
}
}
}
      });
    });
  }
})();
    /*]]>*/
//Function for bottom shopify button
    (function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'mrk500.myshopify.com',
      storefrontAccessToken: '4de7775e89c25c71b8a3cb88074d72cb',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [3546411302996],
        node: document.getElementById('product-component-18b722a4d4e'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
"product": {
"variantId": "all",
"width": "240px",
"contents": {
  "img": false,
  "imgWithCarousel": false,
  "title": false,
  "variantTitle": false,
  "price": false,
  "description": false,
  "buttonWithQuantity": false,
  "quantity": false
},
"text": {
  "button": "PRE-ORDER NOW!"
},
"styles": {
  "product": {
    "text-align": "left",
    "@media (min-width: 601px)": {
      "max-width": "calc(25% - 20px)",
      "margin-left": "20px",
      "margin-bottom": "50px"
    }
  },
  "button": {
    "background-color": "#c40b1d",
    "font-family": "Open Sans, sans-serif",
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px",
    "padding-left": "px",
    "padding-right": "px",
    ":hover": {
      "background-color": "#b00a1a"
    },
    "border-radius": "10px",
    ":focus": {
      "background-color": "#b00a1a"
    },
    "font-weight": "normal"
  },
  "quantityInput": {
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"cart": {
"contents": {
  "button": true
},
"styles": {
  "button": {
    "background-color": "#c40b1d",
    "font-family": "Open Sans, sans-serif",
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px",
    ":hover": {
      "background-color": "#b00a1a"
    },
    "border-radius": "10px",
    ":focus": {
      "background-color": "#b00a1a"
    },
    "font-weight": "normal"
  },
  "footer": {
    "background-color": "#ffffff"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"modalProduct": {
"contents": {
  "img": false,
  "imgWithCarousel": true,
  "variantTitle": false,
  "buttonWithQuantity": true,
  "button": false,
  "quantity": false
},
"styles": {
  "product": {
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0px",
      "margin-bottom": "0px"
    }
  },
  "button": {
    "background-color": "#c40b1d",
    "font-family": "Open Sans, sans-serif",
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px",
    "padding-left": "px",
    "padding-right": "px",
    ":hover": {
      "background-color": "#b00a1a"
    },
    "border-radius": "10px",
    ":focus": {
      "background-color": "#b00a1a"
    },
    "font-weight": "normal"
  },
  "quantityInput": {
    "font-size": "18px",
    "padding-top": "17px",
    "padding-bottom": "17px"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"toggle": {
"styles": {
  "toggle": {
    "font-family": "Open Sans, sans-serif",
    "background-color": "#c40b1d",
    ":hover": {
      "background-color": "#b00a1a"
    },
    ":focus": {
      "background-color": "#b00a1a"
    },
    "font-weight": "normal"
  },
  "count": {
    "color": "#ffffff",
    ":hover": {
      "color": "#ffffff"
    },
    "font-size": "18px"
  },
  "iconPath": {
    "fill": "#ffffff"
  }
},
"googleFonts": [
  "Open Sans"
]
},
"productSet": {
"styles": {
  "products": {
    "@media (min-width: 601px)": {
      "margin-left": "-20px"
    }
  }
}
}
}
      });
    });
  }
})();
    /*]]>*/


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
