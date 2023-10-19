import { Component } from '@angular/core';
import { ContactType } from 'src/app/enums/contactType';
import { Contact } from 'src/app/interfaces/contact';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-float-button-whatsapp',
  templateUrl: './float-button-whatsapp.component.html',
  styleUrls: ['./float-button-whatsapp.component.css']
})
export class FloatButtonWhatsappComponent {

  contact: Contact | undefined;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(): void {
    this.homeService.getData()
      .subscribe(data => this.contact = data[0].contacts
        .filter(contact => contact.type == ContactType.WHATSAPP)[0]
      )
  }

}
