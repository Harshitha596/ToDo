import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  taskform: FormGroup;
  supabase: any;
  array: any[] = [];
  task_name: any;
  date: any;
  primary!: string; 
  showCard: boolean = false; 
  updatedData = {
    task_name: '',
    date: '',
  };
  tasks: any;
  isLoading:boolean=false;
  
  constructor(private formBuilder: FormBuilder,private auth:AuthService){
    this.taskform = this.formBuilder.group({
    task:['', [Validators.required]],
    date:['',[Validators.required]]
    },
  );
   }
ngOnInit()
{this.isLoading=true;
  this.auth.fetchtask().then((res:any)=>{
    console.log(res)
    this.array=res;
    console.log(this.array);
    this.isLoading=false;
  })
}
  Onsubmit()
  {
    const task:string=this.taskform.value.task;
    const date:Date=this.taskform.value.date;
    console.log(task);
    console.log(date);
    const res=this.auth.addtask(task,date);
    this.auth.fetchtask().then((res:any)=>{
      console.log(res)
      this.array=res;
      console.log(this.array);
    })  
  }
 Onclick(primary : string)
{
const res=this.auth.deletetask(primary);
console.log(res)
this.auth.fetchtask().then((res:any)=>{
  console.log(res)
this.array=res;
console.log(this.array);
})
}
onEditTask(primary: string, taskName: string, taskDate: string) {
  this.primary = primary;
  this.updatedData.task_name = taskName;
  this.updatedData.date = taskDate;
  this.showCard = true;
}
onUpdateTask() {
  console.log('onUpdateFunction called');
  this.auth.updateTask(this.primary, this.updatedData).subscribe({
    next:(res:any)=>{
     // console.log(res);
     this.auth.fetchtask().then((res:any)=>{
      console.log(res)
    this.array=res;
    console.log(this.array);
    })
    }
  })
  
}
onCancelUpdate() {
  this.showCard = false;
}

}
