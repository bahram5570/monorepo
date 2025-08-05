import { LottieCanvas } from '@lib/LottieCanvas';

const LoginSuccess = () => {
  return (
    <div className="pt-4">
      <LottieCanvas src={'/assets/lottie/Checkmark.lottie'} autoplay={true} style={{ width: '48px', height: '48px' }} />
    </div>
  );
};

export default LoginSuccess;
