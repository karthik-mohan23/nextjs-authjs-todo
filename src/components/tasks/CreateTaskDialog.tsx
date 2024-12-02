import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTask } from "@/lib/actions";

function CreateTaskDialog({ userId }: { userId: string }) {
  console.log(userId, "createTaskPage");
  const createTaskWithId = createTask.bind(null, userId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new task</DialogTitle>
          <DialogDescription>
            Add new task here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          action={createTaskWithId}
          id="createTaskForm"
          className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskTitle" className="text-right">
              Title
            </Label>
            <Input id="taskTitle" name="taskTitle" className="col-span-3" />
          </div>
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button form="createTaskForm" type="submit">
              Save
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default CreateTaskDialog;
