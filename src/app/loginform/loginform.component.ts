import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit } from '@angular/core';
/* ModalDismissReasons for getting info about the action taken */
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],
})
export class LoginformComponent {

  @ViewChild('loginModal') loginModal: ElementRef | undefined;

  closeResult: string | undefined;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static'; // TODO: later switch to 'static'; when resolved logging in with spotify/asguest
		config.keyboard = false;
  }

  ngAfterViewInit() {
    this.openVerticallyCentered(this.loginModal);
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
