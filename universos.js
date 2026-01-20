const UNIVERSOS = [
  {
    id: "batalla-del-barajaverso",
    title: "Guerra De Los Juegos De Mesa: Barajaverso",
    description: "Te has preguntado que universo de Barajas es el mejor, en este universo ambos entran en batalla, pero solo uno ganará.",
    image: "images/batalla-del-barajaverso.jpg"
  },
  {
    id: "batalla-del-cheesverso",
    title: "Guerra de Los Juegos de Mesa: Cheesverse",
    description: "Te has preguntado que universo de Ajedrez es el mejor, en este universo ambos entran en batalla, pero solo uno ganará.",
    image: "images/batalla-del-cheesverse.jpg"
  },
  {
    id: "detective-among-us",
    title: "Among Us: La Historia Del Detective",
    description: "Detective piensa que crear un among us en la vida real es una idea buena pero conocerá las consecuencias de creerse Dios.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "angeles-y-demonios",
    title: "Ángeles y Demonios",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "guerra-de-tanques",
    title: "Guerra de Tanques",
    description: "Alguien misterio reune a un gran numero de personas para pelear entre ellos con tanques de guerra a cambio de dinero, aqui es donde el prota debe dar lo mejor de si para ganar, ¿lo logrará?.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "supervivencia-zombie",
    title: "Jengas Zombies",
    description: "Un grupo de sobrevivientes debe resistir ante un mundo lleno de zombies el cual hay algunos mas rapidos y mas hagiles y deben hebitar morir en un intento de escapar.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "guerra-de-armas",
    title: "Jenga War Fire",
    description: "Un grupo de asesinos se cazan entre si por un premio.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "power-gems",
    title: "Jenga Gems",
    description: "Un grupo de jovenes encuentran unas gemas que son capaces de dar poderes elementales a acualquiera que las porte.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "barjas-lions",
    title: "Barajas: Leones",
    description: "Las Barajas del Leon: oro, espada, copa y bast, las 4 naciones vivian en armonia, pero todo cambio cuando la nacion de oro atacó.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "barajas-hawks",
    title: "Barajas: Hálcones",
    description: "Sin descripcion disponible.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "ajedrez-madera",
    title: "Ajedrez: Madera",
    description: "Un grupo de caballeros es brutalemnte asesinados pero uno logra sobrevivir y es rescatado por un caballero del reino enemigo que siente compasion por el, ahora le tocara vivir infiltrado para no ser descubierto.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "ajedrez-plastico",
    title: "Ajedrez: Plastico",
    description: "Un grupo de caballeros es brutalemnte asesinados pero uno logra sobrevivir y es rescatado por un caballero del reino enemigo que siente compasion por el, ahora le tocara vivir infiltrado para no ser descubierto.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "detellos",
    title: "Destellos",
    description: "Los Destellos son seres con grandes poderes que viven bajo el mandato de 3 reyes y un principe que se vuelve pirata, pero la paz acaba cuando llegan los focus.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "domino",
    title: "Domino",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "jenga",
    title: "Jenga",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "cars-aventure",
    title: "Hot Wheels Adventures",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "turista-mundial",
    title: "Turista Mundial",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/turista-mundial.png"
  },
  {
    id: "powercheesrangers",
    title: "Power Cheess Rangers",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "zombieschees",
    title: "Zombie chess",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "damas",
    title: "Damas",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "cronicas-de-calavera-y-skeleton",
    title: "Crónicas",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "princess-flowers",
    title: "Princess Flowers",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "chess-vs-domino",
    title: "Guerra de Los Juegos de Mesa: Chess vs. Domino",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "guerra-de-tanques",
    title: "Guerra de Los Juegos de Mesa: Barajas vs. Jengas",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "chess-vs-barajas-lions",
    title: "Guerra de Los Juegos de Mesa: Chess vs. Barajas",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "damas",
    title: "Guerra de Los Juegos de Mesa: Chess vs. Damas",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  },
  {
    id: "chess-vs-barajas-hawks",
    title: "Guerra de Los Juegos de Mesa: Chess vs. Barajas",
    description: "Survivor es un personaje de un videojuego(Soldiers vs. Terror) que lucha constantemente contra los personajes enemigos; lo demonios, pero es el sólo contra ellos.",
    image: "images/detective-among-us.jpg"
  }
  ]