import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { home } from 'src/model/home.model';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService],
})
export class HomeComponent implements OnInit {

  data: any;
  homeService: HomeService;
  home = new home();
  homearray= [];
  public title= "submit";
  activeIndex = -1;
  constructor(private Homeservice: HomeService) { }

  ngOnInit() {
     this.getdata()
  } 
  
 
    getdata()
    { this.homeService = this.Homeservice;
      this.homeService.getdata().subscribe(
        data =>{this.homearray = data;
          console.log(this.data);
      })

    }
  
  
  TestClick()
  {
    if(this.activeIndex == -1){
      this.homeService.createdata(this.home).subscribe(data=>
        {
          this.getdata()
        })
      console.log(this.home)
      this.homearray.push(this.home);
      this.home = new home();
      
    }else
    {
      this.homeService.updateData(this.home).subscribe(data=>
        {
          this.getdata();
        })
      // this.homearray.splice(this.activeIndex,1,this.home)
    }
    this.home =new home();
    this.title= "submit";
    this.activeIndex= -1;
    
  }

  delete(j)
  {
    console.log(j)
    // this.homearray.splice(j);
    this.homeService.deleteData(j).subscribe(data=>
      {this.getdata()}
      )
  }

  update(obj,index)
  {
    
    // this.home = obj;
    this.home.employee_name = obj.employee_name;
    this.home.employee_salary=obj.employee_salary;
    this.home.employee_age=obj.employee_age;
    this.home.id=obj.id;
    this.title = "update"
    this.activeIndex = index;
    console.log(obj)
    
  }
}
