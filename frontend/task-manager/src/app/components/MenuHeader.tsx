import { TaskObj } from "../types";
import EditIcon from "./EditIcon";
import Xicon from "./Xicon";

interface MenuHeaderProps {
  task: TaskObj;
  editMode: boolean;
  headerRef: React.RefObject<HTMLInputElement>;
  dueDateRef: React.RefObject<HTMLInputElement>;
  toggleEditMode: () => void;
}

const MenuHeader = ({ task, editMode, headerRef, dueDateRef, toggleEditMode }: MenuHeaderProps) => {
  return (
    <div className="p-3 pb-2 border-b border-b-purple-950 flex flex-row">
      <div className="flex flex-col w-full">
        {!editMode ? (
          <h2 className="text-[1.8rem] font-bold text-purple-950">
            {task?.title}
          </h2>
        ) : (
          <input
            ref={headerRef}
            maxLength={29}
            type="text"
            defaultValue={task?.title}
            className="bg-[#C084FC] w-full text-[1.8rem] font-bold text-purple-950 outline-none"
          />
        )}
        <div className="flex flex-row w-full justify-between items-center">
          {!editMode ? (
            <p className="text-purple-950 w-fit font-medium">
              Due:{" "}
              {new Date(task?.dueDate).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          ) : (
            <input
              ref={dueDateRef}
              type="date"
              defaultValue={new Date(task?.dueDate).toISOString().split("T")[0]}
              className="bg-[#C084FC] text-black"
            />
          )}

          {editMode && (
            <p className="bg-purple-950 px-1 font-semibold rounded-md text-[15px] -mr-8 ">
              Edit Mode
            </p>
          )}
        </div>
      </div>

      <div
        onClick={toggleEditMode}
        className={`w-fit flex flex-row cursor-pointer h-fit rounded-full ${
          editMode ? "hover:bg-[#9965DD]" : ""
        } transition-all ease-in-out duration-200 ml-auto p-1 -mb-1 `}
      >
        {!editMode ? <EditIcon /> : <Xicon />}
      </div>
    </div>
  );
};

export default MenuHeader;
