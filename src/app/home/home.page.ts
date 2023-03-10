import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title="exercice 3";

  prenom:"";
  taille:number; 
  poid:number;
  IMC:number;
  message="";
  erreur="";



  constructor() {}

  calculer(IMC){

    this.erreur="";
    if(this.taille==null || this.poid==null) {
      this.erreur="Veuillez saisir des valeurs";
      return;
    }


    this.IMC=this.poid/(this.taille*this.taille);


        if (this.IMC<16.5){
          this.message="famine";
        }
        else if(this.IMC<=18.5 && this.IMC>16.5){
          this.message="maigreur";
        }
        else if(this.IMC<=25 && this.IMC>18.5){
          this.message="corpulence normale";
        }

        else if(this.IMC<=30 && this.IMC>25){
          this.message="surpoids";
        }
        else if(this.IMC<=35 && this.IMC>30){
          this.message="obesite modérée";
        }

        else if(this.IMC<=40 && this.IMC>35){
          this.message="obesite sévère";
        }


    

     
    }
    
   

  }



