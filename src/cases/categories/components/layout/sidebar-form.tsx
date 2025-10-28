import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode, MouseEvent } from "react";

type SidebarFormProps = {
    title: string;
    children:ReactNode;
    onSave?: ()=>void;

};

export function SidebarForm({
    title,
    children
}: SidebarFormProps) {
  const navigate=useNavigate();
  const location=useLocation();

  function handleCloseForm(open:boolean){
    if (!open){
      const currentPath = location.pathname;
      const newPath = currentPath.substring(0,currentPath.lastIndexOf('/'));
      navigate(newPath);
    }
  }

  function onSave(_event: MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Sheet open={true}onOpenChange={handleCloseForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em salvar.
          </SheetDescription>
        </SheetHeader>
         {children}
        <SheetFooter>
            <div className="flex flex-row gap-1">

                <Button
                  onClick={onSave}
                >
                    Salvar
                </Button>

                <SheetClose asChild>
                    <Button
                    variant={"outline"}
                    >
                        Cancelar
                    </Button>
                </SheetClose>

            </div>
        </SheetFooter>

      </SheetContent>
    </Sheet>
  );
}