import { useEffect, useState } from 'react';
import { WAVE_APK_NAME, WAVE_RELEASE_API_URL } from '@/data/site';

type ReleaseAsset = {
  name: string;
  download_count: number;
};

type ReleaseResponse = {
  assets?: ReleaseAsset[];
};

export function useWaveDownloadCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(WAVE_RELEASE_API_URL, {
          headers: { Accept: 'application/vnd.github+json' },
        });
        if (!res.ok) return;
        const data = (await res.json()) as ReleaseResponse;
        const asset = data.assets?.find((item) => item.name === WAVE_APK_NAME);
        if (!cancelled && typeof asset?.download_count === 'number') {
          setCount(asset.download_count);
        }
      } catch {
        // Keep the UI quiet if GitHub is unreachable.
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}
