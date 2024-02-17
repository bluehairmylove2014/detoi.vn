function ScreenLoader() {
  const circle = 'w-3 h-3 rounded-full bg-blue animate-bounce';
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-white/60 z-50 cursor-wait">
      <div className="flex flex-row gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={`${circle}`}></div>
        <div className={`${circle} [animation-delay:-.3s]`}></div>
        <div className={`${circle} [animation-delay:-.5s]`}></div>
      </div>
    </div>
  );
}

export default ScreenLoader;
