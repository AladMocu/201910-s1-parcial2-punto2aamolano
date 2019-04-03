import {Component, ElementRef, ViewChild} from '@angular/core';


declare let $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})




export class AppComponent  {

  @ViewChild('detailModal')  modal : ElementRef;


  name = 'Angular';


  showDetail() : void
  {
        $(this.modal.nativeElement).modal('show');
  }

}
