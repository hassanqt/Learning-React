const Right = () => {
  return <div className="basis-[50%] border-l-2 border-white p-8 flex flex-col gap-10">
    <h2 className="text-2xl font-semibold text-white">Recent Notes:</h2>
    <div className="flex flex-col justify-start gap-6 flex-wrap">
      <div className="w-full h-20 bg-black/60 text-white flex items-center px-8 cursor-pointer rounded-xl">Web Dev Note</div>
      <div className="w-full h-20 bg-black/60 text-white flex items-center px-8 cursor-pointer rounded-xl">Gen AI Note</div>
      <div className="w-full h-20 bg-black/60 text-white flex items-center px-8 cursor-pointer rounded-xl">Untitled Note</div>

    </div>
  </div>;
};

export default Right;
