import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component
({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit
{

  @ViewChild("image")
  image: ElementRef;

  imageHeight: number;
  wrapperHeight: number;

  constructor() { }

  ngOnInit()
  {
  }

  public CenterImage()
  {
    this.imageHeight = this.image.nativeElement.offsetHeight;
    this.wrapperHeight = this.image.nativeElement.parentNode.offsetHeight;
    this.image.nativeElement.style.top = "-" + (this.imageHeight - this.wrapperHeight)/2 + "px";
  }

}
