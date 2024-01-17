import { useCaptchaHook } from '@business-layer/business-logic/lib/friendlyCaptcha';
import { useEffect, useState } from 'react';
import { useVerifySolution } from '@business-layer/business-logic/lib/friendlyCaptcha';

const useFriendlyCaptcha = ({
  onSuccessVerify,
}: {
  onSuccessVerify: () => void;
}): {
  CaptchaWidget: React.ReactElement;
  getIsSolution: () => boolean;
} => {
  const sitekey = process.env.NEXT_PUBLIC_FRIENDLY_SITE_KEY || '';
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const captchaHook = useCaptchaHook({
    siteKey: sitekey,
    endpoint: 'GLOBAL1',
    language: 'en',
    startMode: 'none',
    showAttribution: true,
  });
  const { onVerifySolution, isLoading } = useVerifySolution();

  useEffect(() => {
    if (captchaHook.captchaStatus.solution !== null && !isVerified) {
      onVerifySolution(captchaHook.captchaStatus.solution)
        .then((msg) => {
          onSuccessVerify();
          setIsVerified(true);
        })
        .catch((error) => {});
    }
  }, [captchaHook.captchaStatus]);

  return {
    CaptchaWidget: (
      <>
        {captchaHook.CaptchaWidget({
          className: 'px-2 py-4 rounded w-full',
        })}
        <p
          className="font-semibold"
          style={{ display: isLoading ? 'block' : 'none' }}
        >
          Đang xác thực cấp 2...
        </p>
      </>
    ),
    getIsSolution: () => {
      return captchaHook.captchaStatus.solution &&
        captchaHook.captchaStatus.error === null
        ? true
        : false;
    },
  };
};

export default useFriendlyCaptcha;
