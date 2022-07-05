
export default [
  {
    "name": "rediseno-2023",
    "state": {
      "frontity": {
        "url": "https://test.frontity.org",
        "title": "Test Frontity Blog",
        "description": "WordPress installation for Frontity development"
      }
    },
    
    "packages": [
      {
        name: "@frontity/google-ad-manager",
        state: {
          fills: {
            googleAdManager: {
              belowHeaderAd: {
                slot: "Below-Header",
                library: "googleAdManager.GooglePublisherTag",
                priority: 5,
                props: {
                  id: "div-gpt-ad-1655843372707-0",
                  unit: "/21802911858/Anuncios-Interno-SeUno-300x600",
                  size: [300, 600],
                },
              },
            },
          },
        },
      },
      {
        name: "@frontity/google-tag-manager-analytics",
        state: {
          googleTagManagerAnalytics: {
            containerId: "GTM-K8LHWLT",
          },
        },
      },
    
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "url": "https://seunonoticias.net/",
            'params':{
              'per_page':8
            },
          }
        },
        
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      "@frontity/yoast",
      'macave-package',
      "@frontity/head-tags"
    ]
  }
]





// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-5SZSBB3');</script>
// <!-- End Google Tag Manager -->



// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SZSBB3"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->
