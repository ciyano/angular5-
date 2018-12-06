import { Component, OnInit } from '@angular/core';
import { MembresService } from '../services/membres.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  email: string;
  password: string;

  constructor(public membresService: MembresService) { }

  ngOnInit() {
  }
  insertionUser(nom, prenom, adresse, telephone, email, password)
  {
      console.log ("nom: "+ nom);
      this.membresService.addUser(this.nom, this.prenom, this.adresse, this.telephone, this.email, this.password).subscribe();
      console.log("fin de l'ajout");



  }


}
