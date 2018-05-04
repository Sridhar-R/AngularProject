import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  btnOne: string = "Home";
  btnTwo: string = "About Us"
  btnThree: string = "Contact Us"
  btnFour: string ="Submit"
  display="none"

  abc : any;
  pqr : any;
  xyz: any;
  line1: any;
  line2: any;
  line3: any;
  phn:any;
  mail:any;
  frstnme:any;
  lstnme:any;
  thanksmsg:any;
  constructor() { }

  ngOnInit() {
    
  }
  homeDescription() {
    console.log("Hi hello")
    this.abc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  }
  abtDescription() {
    console.log("Hi Buddy")
    this.pqr = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }
  cnctDescription() {
    console.log("Hi Dude")
    this.xyz="Contact US"
    this.line1 = ["No6, Vivekanadar illam"]
    this.line2 = "Dubai kuruku theru"
    this.line3 = "Dubai Bustand-600 097"
    this.phn="+09658755644"
    this.mail="example@abc.com"
    this.frstnme ="First Name" 
    this.lstnme ="Last Name"
  }
  sub() {
        console.log("Submitted")
        this.thanksmsg="Submit"
  }
}

