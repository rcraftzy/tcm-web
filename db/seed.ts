import { Videos, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Videos).values([
    {
      id: "WbcR9c7fI-4",
      title: "SAMSUNG A12 cambio de GLASS",
      description: "",
      link: "https://youtu.be/WbcR9c7fI-4",
      published: "Mar 15 2023",
      viewTime: "02:30",
      tags: [{name: "hola"}, {name:"reparación"}] 
    },
    {
      id: "ZgVzy7VhDmg",
      title: "Publicidad Mando",
      description: "",
      link: "https://youtu.be/ZgVzy7VhDmg",
      published: "Mar 7, 2023",
      viewTime: "00:30",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "tdwLM0vPQAI",
      title: "IPHONE 12 PRO MAX!!! CAMBIO DE LENTE DE CÁMARA..!!!",
      description: "",
      link: "https://youtu.be/tdwLM0vPQAI",
      published: "Feb 25 2023",
      viewTime: "03:11",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "qYTHmRiwrqI",
      title: "iPhone 12 Pro Max..!! CAMBIO de TAPA",
      description: "",
      link: "https://youtu.be/qYTHmRiwrqI",
      published: "Mar 4 2023",
      viewTime: "08:03",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "HL8d82fDpyM",
      title: "iPhone 11 Pro Max..!! CAMBIO de TAPA",
      description: "",
      link: "https://youtu.be/HL8d82fDpyM",
      published: "Feb 18, 2023",
      viewTime: "03:31",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "YxPfx-W9ktc",
      title: "ALARGA la VIDA a tus DIPOSITIVOS.. la PROTECCIÒN es PRIMERO..!!",
      description: "",
      link: "https://youtu.be/YxPfx-W9ktc",
      published: "Feb 11 2023",
      viewTime: "02:54",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "dgXIwP5iuEQ",
      title: "SAMSUNG Galaxy J6 Plus..!! CAMBIO de GLASS",
      description: "",
      link: "https://youtu.be/dgXIwP5iuEQ",
      published: "Feb 4 2023",
      viewTime: "02:56",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "kt-8lKni8VQ",
      title: "NO DESCUIDES tu TELÉFONO de estos CARNAVALES..!!!",
      description: "",
      link: "https://youtu.be/kt-8lKni8VQ",
      published: "Jan 29 2023",
      viewTime: "01:10",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "8zCC7D4Mm9M",
      title: "iPhone 8 Plus MOJADO...!! ELIMINACIÓN de HUMEDAD y cambio BLACKLIGTH marcado por LÍQUIDO.",
      description: "",
      link: "https://youtu.be/8zCC7D4Mm9M",
      published: "Jan 28, 2023",
      viewTime: "02:46",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "27MnzhfPNk4",
      title: "HUAWEI Y5 2019..!! DIGITALIZADOR de TOUCH no responde a solicitud de SENSIBILIDAD.",
      description: "",
      link: "https://youtu.be/27MnzhfPNk4",
      published: "Jan 21 2023",
      viewTime: "02:37",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "3AUvRBm5syU",
      title: "IPHONE 6..!! como PASAR de tener 16GB a tener 128GB...!!",
      description: "",
      link: "https://youtu.be/3AUvRBm5syU",
      published: "Jan 14 2023",
      viewTime: "00:59",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "jGrTIRpoqO0",
      title: "SAMSUNG A10 MOJADO!!! CORRE a TeamCellmania INMEDIATAMENTE..!!!!",
      description: "",
      link: "https://youtu.be/jGrTIRpoqO0",
      published: "Jan 7 2023",
      viewTime: "03:44",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "4XV68KfelDA",
      title: "iPhone 8 Plus... cambio de BATERIA & GLASS!!",
      description: "",
      link: "https://youtu.be/4XV68KfelDA",
      published: "Jan 2 2023",
      viewTime: "03:45",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "9Vd0kAX0IFM",
      title: "Llego la Navidad a TeamCellmania!!!",
      description: "",
      link: "https://youtu.be/9Vd0kAX0IFM",
      published: "Dec 24 2022",
      viewTime: "06:35",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "8LH2URpp5Uw",
      title: "SAMSUNG A32 no FUNCIONA el TACTIL!!! EXPLICACIÓN y SOLUCIÓN!!!",
      description: "",
      link: "https://youtu.be/8LH2URpp5Uw",
      published: "Dec 17 2022",
      viewTime: "06:33",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
    {
      id: "H7k1CIp9WFs",
      title: "iPhone X con PROBLEMAS en FLASH y CAMARA!!!",
      description: "",
      link: "https://youtu.be/H7k1CIp9WFs",
      published: "Dec 10 2022",
      viewTime: "11:16",
      tags: [{name: "ecudacion"}, {name:"reparación"}] 
    },
  ])
}
