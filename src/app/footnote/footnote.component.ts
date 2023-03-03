import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-footnote',
  templateUrl: './footnote.component.html',
  styleUrls: ['./footnote.component.scss']
})
export class FootnoteComponent {

  constructor(private bottomSheet: MatBottomSheet) { }

  openSheet() {
    this.bottomSheet.open(ContactComponent);
  }
}
