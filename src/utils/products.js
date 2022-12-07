const products = [
    {
        id: 1,
        nombre: "Proteina ENA 1KG",
        precio: 7500,
        stock: 150,
        image: [
            "https://http2.mlstatic.com/D_NQ_NP_699081-MLA51841389000_102022-O.webp"
          ],
        description: "Presentación :2.05 libras (930 gramos) en polvo. BENEFICIOS: Aporta los aminoácidos y micro nutrientes que son clave en la dieta de deportistas. Ademas favorece la recuperación y definición de la masa muscular, maximizando fuerza y potencia en el entrenamiento. Aporta los nueve aminoácidos esenciales para una mejor definición muscular.",
        cat: "proteina"
    },
    {
        id: 2,
        nombre: "Proteina Star 3kg",
        precio: 22000,
        stock: 60,
        image: [
            "https://www.demusculos.com/shop/883-large_default/proteina-premium-whey-protein-3-kg-star-nutrition.jpg"
        ],
        description: "Compuesto por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto. Su agradable sabor y alta disolución lo convierten en la opción inteligente a la hora de agregar proteínas de alto valor biológico a nuestra dieta o como parte de un programa nutricional deportivo. Producida con ultra concentrado de Suero Lácteo que cumple con normas ISO22000, HACCP, HALALAL (MUI) y GM",
        cat: "proteina"
    },
    {
        id: 3,
        nombre: "Whey Protein Gentech 5kgs",
        precio: 24999,
        stock: 20,
        image: [
            "https://www.gentech.com.ar/wp-content/uploads/2022/09/Proteina-7900-x-5-Kilos-Monster-Size-Gentech-Chocolate-Dorso.jpg"
          ],
        description: "Suplemento deportivo. Este tipo de suplemento ayuda a complementar la alimentación de personas con objetivos o requerimientos nutricionales específicos. Su consumo puede ser indicado por diversos factores, como la duración y la intensidad de la actividad física, el tipo de deporte, el ambiente en el que se practica, la edad, la composición corporal, el peso, entre otros. Es importante resaltar que su uso debe estar acompañado por una alimentación equilibrada y hábitos de vida saludable.",
        cat: "proteina"
    },
    {
        id: 4,
        nombre: "Creatina ENA 300Grs",
        precio: 6999.99,
        stock: 30,
        image: [
            "https://www.demusculos.com/shop/2674-medium_default/creatina-300-grs-ena.jpg"
          ],
        description: "Recomendado para deportes intensos. La creatina es uno de los complementos deportivos más conocidos y su principal objetivo es fortalecer el tejido muscular. Es producida de forma natural por el cuerpo y está presente en alimentos como el pescado, la carne, los lácteos y el huevo. Su consumo a través de suplementos puede contribuir a un mayor rendimiento en actividades físicas que requieran intervalos de fuerza cortos e intensos, como el levantamiento de pesas y otros deportes de alto desgaste que requieren una recuperación más rápida.",
        cat: "creatina"
    },
    {
        id: 5,
        nombre: "Creatina Star 300Grs",
        precio: 6800,
        stock: 20,
        image: [
            "https://www.nutrishop.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/372_800.jpg"
          ],
        description: "La creatina monohidrato ayuda a fabricar más combustible para el músculo en forma de ATP, esto asegura que los músculos trabajen más rápido durante más tiempo, y también que se recuperen más rápido luego del entrenamiento intenso. STAR NUTRITION CREATINE MONOHIDRATE es 100% pura creatina micronizada de máxima absorción USP grado farmacológico.",
        cat: "creatina"
    },
    {
        id: 6,
        nombre: "Creatina Gold Nutrition 300Grs",
        precio: 6000,
        stock: 80,
        image: [
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/306/768/products/creatina-gold1-6644a4a71eb95c3c3a16486513473245-1024-1024.png"
          ],
        description: "BENEFICIOS:- Aporte de Energía Rápida - Retrasa la Fatiga Muscular - Aumento de Fuerza y Potencia - Hidratación Celular",
        cat: "creatina"
    },
    {
      id: 7,
      nombre: "Multivitaminico 60 comprimidos- Body Advance",
      precio: 1200,
      stock: 90,
      image: [
          "https://i0.wp.com/laduvalina.com.ar/wp-content/uploads/2022/09/Sin-titulo.png?fit=1024%2C1024&ssl=1"
        ],
      description: "Su fórmula equilibrada, testeada y de rápida asimilación ayuda a aumentar el rendimiento, la energía y eleva naturalmente el sistema inmunológico. Su consumo aumenta la ingesta de nutrientes, permitiendo que las personas obtengan mayor cantidad de vitaminas y minerales cuando no pueden cubrir estas necesidades sólo con alimentos.",
      cat: "vitamina"
  },
  {
    id: 8,
    nombre: "Vitamina C + D + Zinc",
    precio: 800,
    stock: 240,
    image: [
        "https://farmacityar.vteximg.com.br/arquivos/ids/214544-1000-1000/223719_suplemento-dietario-pure-wellness-vitamina-c-triaccion-x-30-comp_imagen-1.jpg?v=637665304373330000"
      ],
    description: "Ayuda a mantener el sistema inmunológico saludable. Suplemento dietario en polvo dietético, a base de vitamiva c, d, zinc, sabor naranja.Libre de gluten.",
    cat: "vitamina"
},
{
  id: 9,
  nombre: "Multi-Vitamin 60 comprimidos- Gentech",
  precio: 1299,
  stock: 145,
  image: [
      "https://desuplementos.com/wp-content/uploads/2019/12/GENTECH-MULTI-VITAMIN-LADO-1-copia-504x504.jpg"
    ],
  description: "Potente multivitamínico que aporta las vitaminas y minerales necesarios en los procesos metabólicos, es decir transforma lo que comes en energía para realizar actividades, recuperarte más rápido y atenuar el agotamiento. Las vitaminas son compuestos orgánicos, que aunque en cantidades muy pequeñas, son esenciales. Debemos obtenerlas a través de los alimentos que ingerimos. Los minerales actúan como cofactores en el metabolismo corporal y están en todas las reacciones bioquímicas.",
  cat: "vitamina"
},
{
  id: 10,
  nombre: "Vitamina B- Vita Tech",
  precio: 2100,
  stock: 42,
  image: [
      "https://http2.mlstatic.com/D_NQ_NP_836484-MLA32880134584_112019-O.jpg"
    ],
  description: "Complejo B de Vitatech, está compuesto por una larga serie de vitaminas de la familia de las “B” que trabajan en conjunto para respaldar el funcionamiento saludable del corazón y del sistema nervioso, mientras que proveen de una nutrición necesaria para enfrentar el stress de la vida diaria y para la manutención de una función metabólica apropiada.",
  cat: "vitamina"
},
];

module.exports = {
    products,
  }