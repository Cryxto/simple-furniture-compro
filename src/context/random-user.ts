import { Dispatch, SetStateAction, createContext } from "react";

export interface RandomUserInterface {
  testimonies ?: [],
  setTestimonies ? : Dispatch<SetStateAction<[]>>,
  teams ?: [],
  setTeams ? : Dispatch<SetStateAction<[]>>,

}


export const RandomUserContext = createContext<RandomUserInterface>({ 
  testimonies:[],
  setTestimonies:()=>{},
  teams:[],
  setTeams:()=>{}
});
