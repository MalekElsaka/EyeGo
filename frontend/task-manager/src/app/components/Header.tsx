/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <header
      className="flex flex-col items-center justify-center gap-[1rem] sm:mb-[2rem] mb-[1rem] text-center p-[1rem] md:p-[2rem] xs:rounded-b-[12px]"
      style={{
        background: "linear-gradient(to bottom, #2c0a4c, #450d80)",
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.6)",
      }}
    >
      <img
        className="w-[3.5rem] md:w-[4.5rem] object-contain"
        src="/assets/task-management-logo.png"
        alt="Todo list"
      />    
      
      <div>
        <h1 className="text-[1.25rem] font-semibold md:text-[1.5rem]">
          EasyTask
        </h1>
        <p className="text-[1rem] font-medium">
          Enterprise-level task management without friction
        </p>
      </div>
    </header>
  );
};

export default Header;
