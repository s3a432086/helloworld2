import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {   //初始化
  


  title = 'helloworld';
  myModal: any;

  

  ngOnInit(): void {

    this.myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });

    $('#submit2').on('click', () => {
      this.myModal.show();
    });

    /*

    this.myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });

    $('#bu').on('click', () => {
      this.myModal.show();
    });

    $('#cu').on('click',function () {
      $('.aa').css('color','red');
    });

    // $('#bu').on('click',function () {
    //   alert('at');
    // });

   */ 

  }
 
  

}
