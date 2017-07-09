import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthComponent} from '../auth-dialog/auth.component';
import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public tokenAuthService: Angular2TokenService) {
  }

  ngOnInit() {
  }

}
