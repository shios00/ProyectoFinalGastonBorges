

function Cancion(nombre, acordes) {
    this.nombre = nombre;
    this.acordes = acordes;
    
}

const cancion1 = new Cancion("Californication", 
                              "Verso: Am - F - C - G - Dm // Estribillo C - G - Dm - Am"
                             );

                                                  
const cancion2 = new Cancion("Dani California", 
                             "Verso: Am - G - Dm - Am  // Estribillo F - C - D - G"
                            );

const cancion3 = new Cancion( "Dark Necessities", 
                            "Verso: Cm - Ab7 - Cm7 - F - Cm7 // Estribillo Eb - Db - Fm - Ab"
                           )

const cancion4 = new Cancion( "GoodBye Angel", 
                           "Verso: Dm - Bn7 - C7 - Gm - Gm7 // Estribillo G - A - Fm - Db",
                          )

const cancion5 = new Cancion( "Taste the Pain", 
                           "Verso: Em - Dm - C7 - B"
                         )


const cancionesRHCP = [cancion1, cancion2, cancion3, cancion4, cancion5];
localStorage.setItem("canciones",JSON.stringify (cancionesRHCP))
 