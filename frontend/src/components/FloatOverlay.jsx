export default function({children, hidden = false}) {
  return (
    <div className={`${hidden ? "hidden" : ""} absolute flex flex-col justify-center place-items-center w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.6)] z-100`}>
      {children}
    </div>
  );
}
