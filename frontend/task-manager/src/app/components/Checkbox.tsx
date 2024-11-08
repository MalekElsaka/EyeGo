interface CheckboxProps {
  label: string;
  filterState: string;
  onFilterChange: (label: string) => void;
}

const Checkbox = ({ label, filterState, onFilterChange }: CheckboxProps) => {
  return (
    <div className="w-full ml-[2.5px] h-[50px] p-2">
      <p className="text-[12px]">{label}</p>
      <div className="bg-[#C084FC] flex items-center justify-center w-[90%] h-full">
        <input onChange={()=>onFilterChange(label)} checked={filterState===label} type="checkbox" className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Checkbox;
