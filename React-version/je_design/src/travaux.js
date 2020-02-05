//Liste du mobilier, utilisée pour remplir les pages
const travaux = {
    mobilierHome: {
        name:'Mobilier',
        images: 'mobilier/console/WSconsole1.jpg, mobilier/chevet/WSchevet1.jpg, mobilier/sdb/WSsdb1.jpg, mobilier/fauteuil/WSfauteuil1.jpg',
    },
    mobilier:{
        mobilier1: {
            title: 'TABLE DE CHEVET',
            name : 'Table de chevet',
            images: 'mobilier/chevet/WSchevet1.jpg, mobilier/chevet/WSchevet2.jpg',
            verticale:'mobilier/chevet/WSchevet3V.jpg',
            content: 'Table de chevet, noyer américain et plateau ardoise. © Ynot'
        },
        mobilier2: {
            title: 'CONSOLE LINES',
            name : 'Console Lines, bois de noyer',
            images: 'mobilier/console/WSconsole1.jpg, mobilier/console/WSconsole2.jpg',
            verticale:'mobilier/console/WSconsoleV.jpg',
            content: 'Console multi-rangements façon secrétaire. Mise en place d’une rythmique au niveau des poignées de tiroirs afin de créer une perspective à l’objet. Les poignées tendent à s’effacer en devenant motifs. © Ynot'
        },
        mobilier3: {
            title: 'FAUTEUIL ET SOFA ANGULAR',
            name : 'Fauteuil Angular, bois de noyer et textile.',
            images: 'mobilier/fauteuil/WSfauteuil1.jpg, mobilier/fauteuil/WSfauteuil2.jpg',
            verticale:'mobilier/fauteuil/WSsofa5.jpg',
            content: 'Conçu pour l’espace boudoir d’un fumoir à cigare au sein d’un restaurant. Les accoudoirs en bois permettent de réduire l’usure de passage et donnent une touche contemporaine. La structure en retrait apporte une légèreté au niveau esthétique et vient renforcer les accoudoirs. © Ynot'
        },
        mobilier4: {
            title: 'MEUBLE DE SALLE DE BAIN',
            name : 'Meuble de salle de bains, bois de noyer.',
            images: 'mobilier/sdb/WSsdb1.jpg, mobilier/sdb/WSsdb2.jpg',
            verticale:'mobilier/sdb/WSsdb3.jpg',
            content: 'Vasque en céramique et plateau en marbre noir (veinage blanc). Tiroirs centraux conçus en U afin d’accueillir le tuyau d’évacuation de l’évier. © Ynot'
        },
        mobilier5: {
            title: 'CHAISE JALI',
            name : 'Concept de chaise en métal et rotin',
            images: 'mobilier/chaise/WSchaise1.jpg, mobilier/chaise/WSchaise2.jpg',
            verticale:'mobilier/chaise/WSchaise3.jpg',
            content: 'Inspirée par les motifs du cannage, la chaise Jalî (moucharabieh en Hindi) joue sur la transparence et s’inspire des qualités physiques du matériau. A la fois léger et résistant, le cannage laisse passer la lumière. Son tressage caractéristique offre un motif hexagonal repris dans le dossier de la chaise de manière plus contemporaine. Elément graphique, il cloisonne et crée une ouverture sur l’espace à la manière d’un moucharabieh.'
        },
        mobilier6: {
            title: 'TABLE BASSE SAPA',
            name : 'MDF et laque',
            images: 'mobilier/sapa/WSSapatable1.jpg, mobilier/sapa/WSSapatable2.jpg',
            verticale:'mobilier/sapa/WSSapatable3v.jpg',
            modele2: 'mobilier/sapa/WSSapatable8.jpg',
            content: 'Inspirée par les rizières en terrasse, la table basse Sapa reprend les motifs caractéristiques formés par les cultures de riz des hauts plateaux de Sapa. A la fois minérale et organique, sa forme est comme un monolithe sculptural qui vient habiller l’espace en cassant les perspectives. La finition laquée mat ou brillante vient mettre en valeur les sillons et jouer avec la lumière. La gamme Sapa comporte un modèle de miroir, une lampe de chevet, une console et une table basse. Cet ensemble reprend les mêmes codes avec une esthétique complémentaire, pour être assorti de manière harmonieuse. Designé pour Ynot ©'
        },
        mobilier7: {
            images: 'mobilier/sapa/WSSapatable6.jpg, mobilier/sapa/WSSapatable7.jpg, mobilier/sapa/WSSapatable8.jpg',
            verticale:'mobilier/sapa/WSSapatable8v.jpg',
            content: 'Entièrement réalisée à la main, la gamme Sapa reprend les techniques de fabrication ancestrale de laquage et fait perdurer un artisanat local. Les modèles sont conçus à partir de strates suivant les plans techniques, assemblés à l’identique, préparés et enduits de plusieurs couches de laque. Le laquage est poncé méticuleusement pour atteindre son aspect lisse final. Designé pour Ynot ©'
        },
        mobilier8: {
            title: 'CONSOLE WHITE',
            name : 'Console en bois de noyer, tiroirs peints.',
            images: 'mobilier/console-white/WSconsoleWhite1.jpg, mobilier/console-white/WSconsoleWhite3.jpg',
            verticale:'mobilier/console-white/WSconsoleWhite2.jpg',
            content: 'Avec son look 50’s, cette console apporte une esthétique rétro-revisité. Son système d’ouverture de tiroirs en poignées encastrées en forme de croissant offre un côté graphique et épuré. Piétement incliné avec barreaux renforts en traverse apparents.'
        }
    },
    produits:{
        produit1:{
            title: 'PYRRHOS',
            name: 'Poêle à bois',
            images: 'produits/pyrros/WSpyrros1.jpg, produits/pyrros/WSpyrros2.jpg',
            verticale:'produits/pyrros/WSpyrros3v.jpg',
            content: 'Ce poêle à bois est une réflexion sur la place du foyer au sein de l’habitat. Il est conçu pour se placer dans les coins de la maison afin de rompre avec la connotation d’espace mort des angles. Les deux branches latérales peuvent servir d’assises et peuvent abriter les bûches tout en les séchant pour réduire leur taux d’humidité. ',
            modele2: 'produits/pyrros/WSpyrros4.jpg',
            modele2Content:'Pyrrhos est un poêle à bois conçu pour venir épouser le coin d’une pièce. Le foyer à toujours possédé un rôle central dans l’habitat. Il rassemble et confère une ambiance rassurante. Se servir de ses caractéristiques pour dynamiser les angles de l’habitat qui selon G. Bachelard ne sont que froideur et répulsifs, apporte une solution pour réhabiliter des espaces rarement mis à profit. Pyrrhos, plus qu’un poêle,intègre les usages et rituels de l’homme autour de l’élément feu. Venir s’asseoir autour du foyer à la manière d’un feu de camp, choisir la distance d’assise pour être plus ou moins réchauffé, instaurer un espace convivial… Ces éléments ont inspiré la forme de ce poêle. La structure séparée en deux branches permet à plusieurs personnes de bénéficier d’une chaleur indirecte, et de chauffer plus rapidement les murs de l’habitation. Cette chaleur retransmise en partie par les assises est également mise à profit pour servir de rangement du bois. Elle garde et fait sécher les buches pour une combustion idéale. La forme du poêle est constituée de formes simples, répétées entre elles, réfléchies pour simplifier le moulage et diminuer le coût de production.',
            recherches: 'produits/pyrros/WSplanche1.jpg, produits/pyrros/WSplanche2.jpg, produits/pyrros/WSplanche3.jpg'
        },
    },
    interiorDesign:{
        joy:{
            images: 'interiorDesign/joy/WSJoy3.jpg, interiorDesign/joy/WSJoy2.jpg',
            images3:'interiorDesign/joy/WSJoy12.jpg, interiorDesign/joy/WSJoy10.jpg, interiorDesign/joy/WSJoy11.jpg',
            content: 'Le bâtiment est composé de 4 étages. Une entrée en bois accueille le visiteur et vient créer un sentiment de mystère avec un corridor filant jusqu’à la porte en verre à l’entrée du restaurant. Deux petites terrasses extérieures sont situées de chaque côté du couloir en bois et accessibles par deux ouvertures latérales. Le rez-de-chaussée est dédié au bar et a une salle de restaurant commune. Le premier et deuxième étage possèdent chacun deux salles privatives et commodités. Le quatrième étage est réservé aux cuisines.',
            content3:'1 er ETAGE : Salles de restaurant fournissant un espace supplémentaire pour la clientèle. On retrouve les matériaux utilisés pour le rez-de-chaussée avec les murs en brique naturelle, Le béton ciré pour le sol, le bois brut et le métal noir pour les plafonds. Afin de reprendre l’aspect graphique, un mur reprend le motif du bar et de l’entrée du restaurant avec des morceaux de bois assemblés. Des étagères viennent s’y incruster discrètement pour recevoir de la décoration. De grandes photographies de vin apportent une touche de couleur contemporaine. Chaque salle possède un espace de préparation pour permettre au personnel de stocker les outils, bouteilles et de faire de la préparation d’appoint.',
            modele2: 'interiorDesign/joy/WSJoy1.jpg',
            modele2Content: 'Restaurant / Bar à vin. Yen Hoa, Hanoï. Conception de l’intérieur design du restaurant gastronomique Joy +. Mise en place d’ambiances et d’atmosphères en rapport avec le domaine du vin. Ambiances tamisées, voûtes, matériaux bruts (béton ciré, briques, bois, métal).  Designé pour Ynot ©',
            verticale: 'interiorDesign/joy/WSJoy0.jpg',
            verticales:'interiorDesign/joy/WSJoyV1.jpg, interiorDesign/joy/WSJoyV2.jpg, interiorDesign/joy/WSJoyV3.jpg, interiorDesign/joy/WSJoyV4.jpg',
            modele4Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Ornare lectus sit amet est placerat.'
        },
        joy2:{
            modele2: 'interiorDesign/joy/WSJoy4.jpg',
            modele2Carousel: 'interiorDesign/joy/carousel/WSJoyC4.jpg, interiorDesign/joy/carousel/WSJoyC5.jpg',
            modele2Content: `REZ-DE-CHAUSSEE : L’espace étant disposé en enfilade, le concept a été de déstructurer les perspectives avec des motifs créés par le parquet au sol. Les tables sont réparties dans des espaces définis par les 3 alcôves latérales et par des démarcations de parquet au sol. Le design est structuré autour de 4 éléments principaux : le bar, la cave à vin, les voûtes et l’escalier. Le bar en bois et laiton accueille et ouvre la perspective de la salle avec ses motifs filés en quinconce. Contenant les grands crus du restaurant, la cave à vin possède une place centrale dans la pièce. Elle permet de ritualiser le service des grands crus par les sommeliers. Chaque geste devient visible, les bouteilles sont comme dans un écrin de verre. Pour renforcer l’importance de la cave à vin, la hauteur de plafond a été abaissée et prolongée jusqu’au bar. Un plaquage en bois a aussi été intégré pour l’encadrer visuellement. Au fond de la salle, l’escalier permet d’accéder aux étages supérieurs. Il a bénéficié d’une attention particulière pour s’intégrer au design global. Dessiné comme prolongement de la pièce, il reprend le béton ciré des murs et intègre une rampe en bois brut. Le motif créé par la découpe de l’escalier participe à la déstructuration de l’espace.`
        }
    }
}

export default travaux