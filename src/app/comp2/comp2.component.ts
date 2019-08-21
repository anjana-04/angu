import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
name:string
age:number
email="fddsdffgg"
address;
hobbies:string[]
  constructor() { this.name="arun"
  this.age=43
  this.email="asfghhj@xyz"
  this.hobbies=["reading","travelling"]
  this.address={houseno:"fr678",street:"line1",district:"tvm"}
}

  ngOnInit() {
  }

}
