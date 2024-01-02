import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {
  formulaire: any;
tabVariable:any;
touslesVariables:Subscription;
private todo : FormGroup;
  constructor(private alertCtrl: AlertController,public activatedRoute:ActivatedRoute,private formBuilder: FormBuilder,public serviceapi:CartService) {
   
    this.todo = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: [''],
      Tel: [''],
      Adresse: [''],
      email: ['']
    });
   }

  ngOnInit() {
   this.touslesVariables= this.activatedRoute.paramMap.subscribe(p=>{
    
    this.tabVariable=p.get('total')});
console.log(this.tabVariable);

  }
  async logForm(){
    console.log(this.todo.value)
    this.serviceapi.postinfoClient(this.todo.value).subscribe(data=>{
      console.log("insérer avec succès");
      
    });
    let alert = await this.alertCtrl.create({
      header: 'Merci pour votre commande',
      message: 'Nous vous livrerons votre commande',
      buttons: ['OK']
    });
    alert.present().then(() => {
    
    });
  }

}
