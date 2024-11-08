
interface TaskProps{
  name: string;
  selected: boolean;
  onClick: ()=>void;
  closeEditMode: ()=>void;
}
const Task = ({ name, selected, onClick, closeEditMode }:TaskProps) => {
  
  const handleOnClick=()=>{
    closeEditMode();
    onClick();
  };

  return (
    <button onClick={handleOnClick} className={`flex items-center justify-center p-[0.2rem] xs:rounded-md text-[#c3b3d1] border-none cursor-pointer lg:min-w-[15rem] lg:w-[15rem] min-w-[10.25rem] w-[10.25rem] min-h-[2.6rem] h-[2.6rem] ${selected?"bg-[#9965dd] text-[#150722]":"bg-[#433352] hover:bg-[#9965dd] hover:text-[#150722]"}  transition-all ease-in-out duration-200`}>
      <span className="font-medium">{name}</span>
    </button>
  );
};

export default Task;
