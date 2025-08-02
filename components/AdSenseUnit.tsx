'use client';

import { useEffect, useRef, useState, useId } from 'react';

interface AdSenseUnitProps {
  adSlot: string;
  adFormat?: string;
  adStyle?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSenseUnit({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = ''
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const uniqueId = useId();
  const adId = `adsense-${adSlot}-${uniqueId.replace(/:/g, '-')}`;

  useEffect(() => {
    if (adLoaded || !adRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        // AdSense 스크립트가 로드될 때까지 기다림
        const checkAdSense = () => {
          if (window.adsbygoogle && !adLoaded) {
            // 이미 광고가 로드된 요소인지 확인
            const hasAd = adRef.current?.getAttribute('data-adsbygoogle-status');
            if (!hasAd) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              setAdLoaded(true);
            }
          } else if (!window.adsbygoogle) {
            // AdSense 스크립트가 아직 로드되지 않은 경우 재시도
            setTimeout(checkAdSense, 100);
          }
        };

        checkAdSense();
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adLoaded]);

  return (
    <div className={`adsense-container ${className}`} id={adId}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-4728610817834974"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        key={adId}
      />
    </div>
  );
}