import { TaskObj } from "../types";

interface MenuDescriptionProps {
  editMode: boolean;
  descriptionRef: React.RefObject<HTMLTextAreaElement>;
  task: TaskObj;
}

const MenuDescription = ({ editMode, descriptionRef, task }: MenuDescriptionProps ) => {
  return (
    <div className="p-3 pt-1 flex flex-col overflow-y-auto h-fit w-full">
      {editMode ? (
        <textarea
          ref={descriptionRef}
          defaultValue={task?.description}
          className="bg-[#C084FC] resize-none text-purple-950 outline-none"
          name="task_description"
          id="task_description"
          style={{ height: "400px" }}
        ></textarea>
      ) : (
        <p className="text-purple-950">{task?.description}</p>
      )}
    </div>
  );
};

export default MenuDescription;
