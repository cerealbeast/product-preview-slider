(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"default","theme":"unstyled","fallback":true,"urls":{"impression":"https://codefund.io/display/796af42d-b639-4250-a3d7-f5280063f2b1.gif","campaign":"https://codefund.io/impressions/796af42d-b639-4250-a3d7-f5280063f2b1/click?campaign_id=804\u0026creative_id=710\u0026property_id=237\u0026template=default\u0026theme=unstyled","poweredBy":"https://codefund.io/invite/S4gfpTywkKY","adblock":"https://cdn2.codefund.app/assets/px.js","uplift":"https://codefund.io/impressions/796af42d-b639-4250-a3d7-f5280063f2b1/uplift?advertiser_id=735"},"creative":{"name":"Join CPN (Fallback)","headline":"Host a tech podcast?","body":"Learn the benefits of joining the CodeFund Podcast Network 🎧","cta":"See Benefits","imageUrls":{"icon":"https://cdn2.codefund.app/b0g7zp19jxzpfiu9lpxxzprmjtoj","small":"https://cdn2.codefund.app/u1gollegeqah6wclbvep1k5p0hg1","large":"https://cdn2.codefund.app/vsps0wsr3880bb1olpgncx6wb7qi","wide":"https://cdn2.codefund.app/21v8d4ba9pzb1eljng4lunahmatw"}}})
  }

  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId)) {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://codefund.io/packs/css/code_fund_ad-827a3690.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://codefund.io/packs/js/code_fund_ad-06dc4ae80aa01bd09201.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()
