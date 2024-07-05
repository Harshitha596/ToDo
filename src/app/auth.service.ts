import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  supabase: SupabaseClient;

  auth: any;
  from: any;
  //private loadingSubject = new BehaviorSubject<boolean>(false);
  //public isLoading$ = this.loadingSubject.asObservable()!;
  constructor() {
    this.supabase = createClient('https://lksssgxpeavormbmzrva.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrc3NzZ3hwZWF2b3JtYm16cnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMzgwMDgsImV4cCI6MjAzNDYxNDAwOH0.bm67g3rUTGDwYAK2PHpS8XqtphQQFW34fh3pZH6fvCo')
  }
  //setLoading(isLoading: boolean) {
    //console.log('loading called');
    //this.loadingSubject.next(isLoading);

  //}
     register(email: string, password: string) {
    //this.setLoading(true);
    const res = this.supabase.auth.signUp({
      email: email,
      password: password
    })
    console.log(res)
   // this.setLoading(false);
    return from(res)
  }
    login(email: string, password: string) {
    //this.setLoading(true);
    console.log(email, password)
    const res = this.supabase.auth.signInWithPassword(
      {
        email: email,
        password: password
      })
    return from(res).pipe(
      map((response: any) => {
      //  this.setLoading(false);
        if (response.error) {
          throw Error(response.error.message);
          console.log('login fail')
        }
        return response;
      })
    )
  }
   async addtask(task: string, date: Date) {
   // this.setLoading(true);
    console.log('function called');
    const val = localStorage.getItem('user_id');
    console.log(val);
    const 
    res = await this.supabase
      .from('Tasks')
      .insert({ task_name: task, date: date, user_id: val });
        // this.setLoading(false);
    return res;
  }
  async fetchtask() {
    //this.setLoading(true);
    console.log('function called')
    const { data, error } = await this.supabase.from('Tasks').select();
    console.log(data);
    //this.setLoading(false);
    return data;
  }
  async deletetask(primary: string) {
    //this.setLoading(true);
    console.log(' delete function called');
      const { data, error } = await this.supabase.from('Tasks').delete().eq('primary', primary);
    if (error) {
      console.error('error in deleting task', error);
    }
   // this.setLoading(false);
    return data;
  }
   updateTask(primary: string, updatedData: { task_name: string; date: string }) {
    //this.setLoading(true);
    const res =  this.supabase
      .from('Tasks')
      .update({ task_name: updatedData.task_name, date: updatedData.date })
      .eq('primary', primary);
      console.log(res);
return from(res);
   // if(res.status !== 204) {
    //  console.error('Error', res)
    }
   //console.log(res)
    //this.setLoading(false);
  
  }
