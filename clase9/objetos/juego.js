const jugador = {
  nombre: null,
  energia: 100,
  vidas: 3,
  perderEnergia: function(danio) {
      if (this.energia - danio < 0) {
          this.energia = 0;
      } else {
          this.energia -= danio;
      }

      this.mostrarEstado();
  },
  recuperarEnergia: function(energiaRecuperada) {
      if(energiaRecuperada < 0) {
          console.log("No se puede recuperar energía negativa");
          return;
      }

      if(this.energia + energiaRecuperada > 100) {
          energiaRecuperada = 100;
      } else {
          this.energia += energiaRecuperada;
      }
      this.mostrarEstado();
  },
  perderVida: function(){
    if ( this.vidas > 0 ) {
      this.vidas -= 1;
    }
    this.mostrarEstado();
  },
  recuperarVida: function(){
    if ( this.vidas < 99 ) {
      this.vidas += 1;
    }
    this.mostrarEstado();
  },  
  mostrarEstado: function(){
    console.log(
      ` El jugador ${this.nombre} tiene ${this.energia}% de energia y ${this.vidas} vidas`
    );
    
  }
};

jugador.nombre = "Juan";


jugador.perderEnergia(10);
jugador.recuperarEnergia(10);
jugador.perderVida();
jugador.recuperarVida();