
export default [
  {
    "name": "rediseno-2023",
    "state": {
      "frontity": {
        "url": "https://seunonoticias.net/",
      }
    },
    
    "packages": [
      {
        name: "@frontity/google-ad-manager",
        state: {
          fills: {
            googleAdManager: {
              slidebar1: {
                slot: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna",
                library: "googleAdManager.GooglePublisherTag",
                props: {
                  id: "div-gpt-ad-1657314904838-0",
                  unit: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna",
                  size: [300, 600],
                },
              },
              slidebar2: {
                slot: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna-2",
                library: "googleAdManager.GooglePublisherTag",
                props: {
                  id: "div-gpt-ad-1657315214599-0",
                  unit: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna-2",
                  size: [300, 600],
                },
              },
              slidebar3: {
                slot: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna-3",
                library: "googleAdManager.GooglePublisherTag",
                props: {
                  id: "div-gpt-ad-1657315284772-0",
                  unit: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna-3",
                  size: [300, 600],
                },
              },
              slidebar4: {
                slot: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna-4",
                library: "googleAdManager.GooglePublisherTag",
                props: {
                  id: "div-gpt-ad-1657315344031-0",
                  unit: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna-4",
                  size: [300, 600],
                },
              },
              slidebar5: {
                slot: "/21802911858/Anuncios-AdSense-SeUno-300x600-Interna-5",
                library: "googleAdManager.GooglePublisherTag",
                props: {
                  id: "div-gpt-ad-1657315403132-0",
                  unit: "/21802911858/Anuncios-AdSense-SeUno-300x600-Bloque8",
                  size: [300, 600],
                },
              },
              home1: {
                slot: "/21802911858/Anuncios-AdSense-SeUno-300x600-Bloque8",
                library: "googleAdManager.GooglePublisherTag",
                props: {
                  id: "div-gpt-ad-1657314178563-0",
                  unit: "/21802911858/Anuncios-AdSense-SeUno-300x600-Bloque8",
                  size: [300, 600],
                },
              },
              home2: {
                slot: "/21802911858/Anuncios-AdSense-SeUno-300x250-Bloque10",
                library: "googleAdManager.GooglePublisherTag",
                props: {
                  id: "div-gpt-ad-1657314751748-0",
                  unit: "/21802911858/Anuncios-AdSense-SeUno-300x250-Bloque10",
                  size: [300, 250],
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
