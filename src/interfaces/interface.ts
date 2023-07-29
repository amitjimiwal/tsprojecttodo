import { Dispatch, SetStateAction } from "react";

export interface Props {
         children: React.ReactNode;
}
export interface todo{
         id:string,
         title:string,
         time:string,
         date:string,
         completed:boolean,
         status?:string ,
         key?:number
}
export interface Contextinterface{
         todos:todo[],
         fetchtodo:(type: string) => void | todo[],
         addTodo:(todo: todo) => void,
         deletetodo:(id: string) => void,
         settype:Dispatch<SetStateAction<string>>   ,
         updatetodo: (id:string)    => void
}