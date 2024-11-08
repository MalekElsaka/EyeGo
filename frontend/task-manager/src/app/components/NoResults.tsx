const NoResults = () => {
  return (
    <div className=" flex-row lg:-ml-8 -ml-4 flex bg-[#04090A] h-fit w-fit py-4 rounded-lg items-center px-3 mt-3">
      <img
        src="https://www.redditstatic.com/shreddit/assets/telescope-snoo.svg"
        className="w-32 mr-4 min-w-32 h-32"
      ></img>

      <div className="flex flex-col w-full">
        <h1 className="text-[17px] text-[#B7C5C8] font-medium mt-2">
          Hm... we couldn't find any results for this filter
        </h1>
      </div>
    </div>
  );
};

export default NoResults;
