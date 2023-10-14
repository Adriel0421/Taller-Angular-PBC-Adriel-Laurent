import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Calculadora de IMC';
  option = 'Sexo';
  men = 'Masculino';
  fem = 'Femenino';
  otro = 'Otro';
  

  persona = {
    nombre: "",
    edad: "",
    peso: 0,
    altura: 0,
    IMC: 0 ,
    rango: "",
  };

  

  sexo = {
    none:"",
    mas : "",
    fem: "",
    otro: "",
  };

   
    calcularIMC(){
      console.log('Calcular IMC..')
      console.log('Calculando IMC..');
      this.persona.IMC = this.persona.peso / (this.persona.altura)**2;
      this.persona.IMC = Math.round(this.persona.IMC);

      if (this.persona.IMC < 18.5) {
        this.persona.rango = "Peso bajo.";
      } else if (this.persona.IMC >= 18.5 && this.persona.IMC <= 24.9) {
        this.persona.rango = "Normal.";
      } else if (this.persona.IMC >= 25 && this.persona.IMC <= 29.9) {
        this.persona.rango = "Sobrepeso.";
      } else if (this.persona.IMC >= 30) {
        this.persona.rango = "Obesidad. Deberías consultar con un médico.";
      }
      

      
      
    
    }
  
    

}

