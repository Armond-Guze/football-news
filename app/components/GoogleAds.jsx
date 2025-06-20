'use client';
import { useEffect } from 'react';

export default function GoogleAds() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <>
      {/* Navbar Ad */}
      <div className="w-full flex justify-center bg-background py-4">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '90px' }}
          data-ad-client="ca-pub-7706858365277925"
          data-ad-slot="8764188470"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* Footer Ad */}
      <div className="w-full flex justify-center bg-background py-4">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '90px' }}
          data-ad-client="ca-pub-7706858365277925"
          data-ad-slot="6943307518"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </>
  );
}
