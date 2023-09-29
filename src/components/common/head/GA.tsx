import Script from 'next/script';

const GA = () => (
  <>
    {/* Google tag (gtag.js) */}
    <Script src="https://www.googletagmanager.com/gtag/js?id=UA-287385863-1" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-287385863-1');
          `}
    </Script>
  </>
);

export default GA;
