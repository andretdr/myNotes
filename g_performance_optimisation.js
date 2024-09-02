Raw speed

  Server round trip time
  - upgrade server
  - have local servers physically closer
  - be specific with requests and only retrieve what you need (dont overload servers). this helps scale your app over time

User Experience

  - percieve that the program is working well
  - make sure app is working 99% of the time, when not, have to communicate issue clearly and meaningfully

Quantify Performance
web.dev
  metrics

CORE WEB VITALS
  - Largest Contentful Paint (LCP)
    largest item in webpage must take < 2.5s to load
      NextJS optimises these
        - image optimisation
        - code splitting and lazy loading
        - server side rendering n static site generation
    
  - Interaction to Next Paint (INP)
    when you click on something, how long it takes to respond

  - Cumulative layout shift (CLS)
    Dont want the page to shift when things are loading

SUPPORTING METRICS

  - Time to first byte (TTFB)
  - First Contentful Paint (FCP)
  - Total Blocking Time (TBT)

Use this to test

speed
https://pagespeed.web.dev/

lighthouse
https://developer.chrome.com/docs/lighthouse/overview

security
https://observatory.mozilla.org/

  
