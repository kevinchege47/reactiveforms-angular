import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  firstName = new FormControl;
  lastName = new FormControl;
  dateofBirth = new FormControl;
  favoritesRanking = new FormControl;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return
  }

  saveContact() {

  }
}
