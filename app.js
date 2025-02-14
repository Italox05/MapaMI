var map = L.map('mapid').setView([-12.1265, -77.0214], 13);

// Agregar capa de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Definir los puntos con imagen
var puntos = [
    {
        lat: -12.129864,
        lon: -76.9870307,
        titulo: "Parque del beso",
        descripcion: "Nuestro segundo primer beso. Hacía mucho frío, pero yo estaba bien, porque aunque temblaba, tú estabas tranquila, y eso era lo único que me importaba en ese momento. Besarte esa vez se sintió muy diferente a la primera. Estábamos abrazados, escuchando música… Besarte siempre se siente bien, pero esa vez fue muy especial. <3<br>Sí, esa es la misma banca donde nos sentamos",
        imagen: "/imgs/ParqueBeso.png"
    },
    {
        lat: -12.132041,
        lon: -76.982528,
        titulo: "Parque de la Amistad",
        descripcion: "Aquí fue donde muchas veces nos encontramos algunas veces para salir juntos.<br>Donde se me atoró la pierna (sin querer).<br>Donde se cayo mi melody (tambien sin querer).<br>Y Donde caminamos y hablamos muchas cosas juntitos.",
        imagen: "/imgs/parqueAmistad.jpg"
    },
    {
        lat: -12.160821,
        lon: -76.956628,
        titulo: "El tren",
        descripcion: "Estaba muy nervioso y feliz por verte de nuevo. Cuando te vi de espaldas, reconocí tus zapatitos y mi corazón empezó a latir muy fuerte, te diste vuelta, y lo primero que pensé fue: 'se ve demasiado perfecta'. Te habías vestido preciosa; tu maquillaje, tu sonrisa, tus ojos, todo me encantó, Meli. Luego corriste hacia mí, me abrazaste y me besaste. Me sentí muy afortunado.",
        imagen: "/imgs/mariaAuxiliadora.jpg"
    },
    {
        lat: -12.1544234,
        lon: -76.9827659,
        titulo: "Mall",
        descripcion: "Fuimos un par de veces, pero las que más recuerdo fueron cuando fuimos al cine a ver Los Minions asdkjjkasd, y la otra vez cuando cambiamos tu regalo. Estuvimos en la tiendita rosa y te regalé la cadenita, que te queda preciosa.",
        imagen: "/imgs/mall.jpg"
    },
    {
        lat: -12.152094,
        lon: -76.986791,
        titulo: "Chanchito",
        descripcion: "Aquí fue donde te perseguí con el chanchito en la mano. No sé qué pasó por mi mente, pero fue muy divertido y queda como un recuerdo muy bonito, asdjkkjasd. Luego me dijiste: Y si el chanchito tiene familia y tiene que llegar a su casa? Ahí también me reí muchísimo. Eres muy divertida, Meli.",
        imagen: "/imgs/chanchito.png"
    },
    {
        lat: -12.1302489,
        lon: -76.9827509,
        titulo: "Wong",
        descripcion: "Recuerdo mucho esta vez porque fue la primera vez que compramos algo juntos. Fue bonito estar ahí contigo y comprar las cosas para la tortita.",
        imagen: "/imgs/wong.jpg"
    },
    {
        lat: -12.143006,
        lon: -76.990273,
        titulo: "Zapatillas y Tacos",
        descripcion: "Fue exactamente aquí donde te di mis zapatillas porque estabas muy cansada con esos taquitos que te quedaban preciosos y no podías caminar. Me encantó hacerlo por tí, y también me encantó que te haya gustado que lo haga.",
        imagen: "/imgs/zapatillas.png"
    },
    {
        lat: -12.147064,
        lon: -76.986866,
        titulo: "403",
        descripcion: "En este lugar pasaron muchas cosas. no hay mucho mas que se pueda decir, solo que cada momento fue hermoso y me gustó demasiado, en serio. Me encantas por completo. Sabrás dónde es por la foto (mi favorita hasta ahora). jasdjkasdjk",
        imagen: "/imgs/bereal.png"
    },
    {
        lat: -12.023778,
        lon: -77.107418,
        titulo: "Aeropuerto",
        descripcion: "Recuerdo estar demasiado nervioso por verte. Fue tan lindo verte con el globito, corriendo hacia mí y abrazarnos y besarnos en medio de todo el mundo. Fue algo muy único, mi amor. En ese momento, me olvidé de todo lo que me pasaba y solo fui feliz.",
        imagen: "imgs/aeropuerto.jpg"
    },
    {
        lat: -12.1303448,
        lon: -76.9812035,
        titulo: "McDonalds",
        descripcion: "Sabía que te haría ilusión ir y quería que vivieras eso conmigo. Fuimos y tuvimos a nuestras segundas hijitas, asdkjkjasd. Me diste tu yogurt y pregunté para cambiar los peluchitos. Valió completamente la pena y me regalaste tu yogurt.",
        imagen: "imgs/mcDonads.jpg"
    },
    {
        lat: -12.1304628,
        lon: -76.9809916,
        titulo: "Bembos",
        descripcion: "Cuando comimos heladitos, que tú invitaste, también me diste unas papas jalapeño y estuvimos un rato hablando sentaditos. Meli, ahí me gustabas mucho, y también me gustó mucho que me invitaras ese helado. <3",
        imagen: "imgs/bembos.png"
    },
    {
        lat: -12.190169,
        lon: -76.925615,
        titulo: "Taxi de la primera Cita",
        descripcion: "La primera vez que salimos, te recogí en el trabajo y fuimos a tener nuestra primera cita. Pero antes te regalé a Melita, y también recuerdo que me contaste cómo conseguiste la entrada al concierto de Feid (Recuerdo hasta el lugar donde estábamos cuando me lo contaste).",
        imagen: "/imgs/taxiPrimeraCita.jpg"
    },
    {
        lat: -12.0994512,
        lon: -77.0022327,
        titulo: "Primera cita en Riu",
        descripcion: "Aquí fue nuestra primera cita. Recuerdo lo linda que te veías y lo nervioso que estaba, pero me sentí muy cómodo contigo también. Me contabas de tus cositas, probé el ramen y luego de eso caminamos muchísimo. Pasamos por el Mass, donde el cajero me dijo mano jdkaksja. Ese día fue el inicio de algo muy grande y muy hermoso, mi Meli. Estoy muy feliz de haberte pedido esa cita y que hayas aceptado.",
        imagen: "imgs/riu.jpg"
    },
    {
        lat: -12.149583,
        lon: -77.0208293,
        titulo: "Miniso",
        descripcion: "La primera vez que te acompañé a un Miniso, después de haber estado en la playa y habernos abrazado creo que por primera vez. También recuerdo que, cuando bajamos a la playa, me hablaste sobre las bugambilias y lo mucho que te gustaban. Esa vez fue muy linda.",
        imagen: "imgs/miniso.jpg"
    },
    {
        lat: -12.138197,
        lon: -76.987112,
        titulo: "Loma Amarilla",
        descripcion: "Recuerdo regalarte dos flores aquí, pero lo que más recuerdo es ver un montón de gatitos y tu toda linda, te acercabas a acariciarlos y verlos. Me encanta que seas tan dulce con todo y con los animalitos. Te ves muy linda y en serio me encanta tu forma tal dulce y linda de ser.",
        imagen: "imgs/lomaAmarilla.jpg"
    },
    {
        lat: -12.129876,
        lon: -76.994239,
        titulo: "Parque",
        descripcion: "La última vez que nos vimos la primera que viajé, tú estabas muy hermosa, como siempre y recuerdo como me miraban tus ojitos lindos. Me regalaste la pulsera de Kuromi, que no me he quitado desde que la tengo, el globo de Steve, la toallita para la cara y, sobre todo, tu cartita, que me gustó en serio mucho. Me hiciste sentir muy especial con todo eso, amor. Me hizo muy feliz que te hayas tomado el tiempo para darme todo eso.",
        imagen: "imgs/Parquedemicasa.jpg"
    },
    {
        lat: -12.1456173,
        lon: -77.0125283,
        titulo: "Taxi a Dizco",
        descripcion: "La foto de aquí es muy especial, es una de mis favoritas. Contigo, Meli, soy muy feliz, y se nota por mi cara, asdjkasd. Estar contigo me hace sentir completo, mi amor, y no pude pedir una novia mejor <3.",
        imagen: "imgs/TaxiDizco.jpg"
    },
    {
        lat: -12.142872,
        lon: -77.026245,
        titulo: "Taxi del Aeropuerto",
        descripcion: "En el taxi que todo eran besos y besos, creo que hasta nos besamos mas de lo que hablamos pero fue uno de los momentos mas bonitos que estuvimos juntos. Sí, el punto en el mapa es exactamente donde nos empezamos a tomar las fotos.",
        imagen: "imgs/TaxiAeropuerto.jpg"
    },
    {
        lat: -12.129597,
        lon: -76.983457,
        titulo: "Casa de Luchito",
        descripcion: "Esto también me parece importante porque es un voto de confianza muy grande. Conociste a mis amigos más cercanos, a quienes conozco desde hace más de 10 años. Quiero que sepas que eso te hace especial, Meli. Siento que podemos lograr mucho juntos, y quiero que así sea. Te adoro mi amor, en serio. <3",
        imagen: "imgs/casaLuchito.jpg"
    },
    {
        lat: -12.126072,
        lon: -77.037591,
        titulo: "Noche en la costa verde",
        descripcion: "Este fue el día que me mostraste mucha música, comimos chocotejas y estuvimos hablando mientras veíamos el mar, algo que me encanta. También fue el día en que te puse una florcita en el cabello y pensé: Wow, qué bien le quedan las flores, tengo que regalarle mil más. <3 (Tenía muchas pero muchas ganas de besarte). El punto está exactamente donde nos sentamos esa vez.",
        imagen: "imgs/nocheCostaVerde.png"
    },
    {
        lat: -12.1222302,
        lon: -77.0293832,
        titulo: "Exposición Hello Kitty",
        descripcion: "Otro momento de la date más bonita que hemos tenido. En ese momento, te vi como una chiquita muy feliz, ilusionada y sorprendida por estar ahí admirando todo el arte de algo que te gusta muchísimo, y yo amé estar ahí contigo, siempre besándote y abrazándote. Eres una chiquita muy dulce y cariñosa, me gustan muchas cosas de ti.",
        imagen: "imgs/expoHelloKitty.jpg"
    },
    {
        lat: -12.1209904,
        lon: -77.0330691,
        titulo: "Noodles",
        descripcion: "Me gustó mucho ir a ese lugar, es que todo contigo me gusta, especialmente pasar mucho tiempo juntos. También creo que ha sido lo más picante que he comido, pero estaba riquísimo, djaskjkasd. A mí me gustó mucho, y el heladito de después también. Te quiero, Melita. Cada momento contigo es hermoso. <3",
        imagen: "imgs/noodles.jpg"
    },
    {
        lat: -12.129430,
        lon: -77.036263,
        titulo: "Playa y Cremolada",
        descripcion: "Aquí estuvimos en la que yo considero la date más linda de todas. Estuvimos sentaditos en un pasto que salió de la nada, asjdkkjasd. Comimos raspadilla, hablamos y caminamos, nos besamos y abrazamos mucho. Fue, en serio, un día lindo y especial <3.",
        imagen: "imgs/playa.jpg"
    },
    {
        lat: -12.1364463,
        lon: -77.0174336,
        titulo: "Dizco",
        descripcion: "Mi amor, aquí nos conocimos. Sé que fue un poco raro y rápido sadjkjkasdk, pero igual, para mí fue bonito, porque yo te vi y me gustaste. Desde ese momento, todo fue escalando y cada vez me gustabas más y más. GRACIAS DIZCO.",
        imagen: "/imgs/dizco.jpg"
    },
    {
        lat: -12.137995,
        lon: -76.997265,
        titulo: "Parque de tus regalitos",
        descripcion: "Mi amor, aunque tú no lo creas, cada regalito tuyo lo aprecio mucho. Que me des cositas me hace sentir muy bien. Veo tu esfuerzo y, en serio, valoro todo lo que haces por mí. Soy muy feliz contigo, preciosa.",
        imagen: "imgs/regalos.jpg"
    },
    {
        lat: -12.582931,
        lon: -76.647693,
        titulo: "Casa de playa",
        descripcion: "Mi Meli, solo para poder estar contigo hice cosas chistosas, sobre todo la forma en la que llegué a la casa, que ya sabes la historia, ajsdjkasdjk. Pero valió demasiado la pena solo para estar contigo y vivir ese día juntos, mi amor. No nos despegamos en todo el día, nos divertimos mucho, bailamos y dormimos. Todo ese día fue hermoso, pero no por lo que hice, sino porque lo que hice, lo hice contigo. Contigo todo es especial, mi amor, todo es mejor, y quiero vivir muchas más cosas parecidas y aún mejores contigo. <br><br> Mi amor, en serio, me gusta hacerte sentir bien, y tú también me haces sentir muy bien. Me haces muy feliz, me haces sentir querido, me haces bien en general. Quiero estar contigo, quiero que duremos muchísimo tiempo, quiero estar contigo a diario, quiero conocer cada partecita de tu vida. Meli, te quiero a ti. No, no te quiero, te adoro. En serio, te has ganado mi corazón. Eres una chica que vale totalmente la pena. Te adoro, mi princesa. <3",
        imagen: "imgs/CasaPlaya.jpg"
    },
    {
        lat: -12.0971729,
        lon: -77.0026425,
        titulo: "Sweet 7",
        descripcion: "Vinimos aquí porque era una de las cosas que aún no habíamos hecho, y también fue la última vez que nos vimos hasta ahora. Amor, ese día me sentí de verdad muy triste porque me iba, pero pasar ese tiempito contigo me hizo muy bien. Hablamos y nos tomamos fotitos que me gustan mucho. <br><br> Mi amor, te juro que eres muy especial para mí, y eso no cambiará por nada del mundo. Te adoro, preciosa, y gracias por ser como eres. <3",
        imagen: "imgs/sweet72.jpg"
    }
];

// Colores para los corazones
var colores = ['#ffffff', '#000000', '#F3C4Cf']; // Blanco, negro, rosa claro

// Agregar marcadores personalizados
puntos.forEach(function(punto, index) {
    var color = colores[index % colores.length];
    
    // Crear ícono personalizado con FontAwesome
    var icono = L.divIcon({
        className: 'custom-marker',
        html: `<i class="fas fa-heart" style="color: ${color}; font-size: 24px; text-shadow: 0 0 3px #000;"></i>`
    });

    var marker = L.marker([punto.lat, punto.lon], { icon: icono }).addTo(map);
    
    // Popup con información
    marker.bindPopup(`
        <b>${punto.titulo}</b><br>
        ${punto.descripcion}<br>
        <img src="${punto.imagen}" alt="${punto.titulo}" style="width:100%; height:auto; border-radius:10px;">
    `);
});
