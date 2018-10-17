import { FormControl } from "@angular/forms";

export const passwordValidator = () =>
  '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}'  
  

