import cn from "classnames";
import { ReactNode } from "react";

type NoteType = "info" | "success" | "hint" | "warning" | "error";

type NoteProps = {
  type: NoteType;
  children: ReactNode;
};

export const getClassname = (type: NoteType) => {
  switch (type) {
    case "info":
      return "bg-primary-50 dark:bg-primary-500/10 text-primary-800 dark:text-primary-100";
    case "success":
    case "hint":
      return "bg-green-50 dark:bg-green-500/10 text-green-800 dark:text-green-100";
    case "warning":
      return "bg-orange-100 dark:bg-orange-500/10 text-orange-800 dark:text-orange-100";
    case "error":
      return "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-100";
  }
};

const getLabel = (type: NoteType) => {
  switch (type) {
    case "info":
      return "Note";
    case "success":
    case "hint":
      return "Hint";
    case "warning":
      return "Warning";
    case "error":
      return "Warning!";
  }
};

export const Note = ({ type, children }: NoteProps) => {
  return (
    <div className={cn("note my-8 rounded-md p-4", getClassname(type))}>
      <div className="font-bold text-xs uppercase">{getLabel(type)}</div>
      <div className="-my-4">{children}</div>
    </div>
  );
};
