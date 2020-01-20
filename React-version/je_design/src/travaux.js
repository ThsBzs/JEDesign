//Liste du mobilier, utilisée pour remplir les pages
const travaux = {
    listeMobilier: 'mobilier/console/console1, mobilier/chevet/chevet1, mobilier/fauteuil/fauteuil, mobilier/sdb/sdb',
    listeProduits: '',
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
            modele2Content:'Pyrrhos est un poêle à bois conçu pour venir épouser le coin d’une pièce. Le foyer à toujours possédé un rôle central dans l’habitat. Il rassemble et confère une ambiance rassurante. Se servir de ses caractéristiques pour dynamiser les angles de l’habitat qui selon G. Bachelard ne sont que froideur et répulsifs, apporte une solution pour réhabiliter des espaces rarement mis à profit. Pyrrhos, plus qu’un poêle,intègre les usages et rituels de l’homme autour de l’élément feu. Venir s’asseoir autour du foyer à la manière d’un feu de camp, choisir la distance d’assise pour être plus ou moins réchauffé, instaurer un espace convivial… Ces éléments ont inspiré la forme de ce poêle. La structure séparée en deux branches permet à plusieurs personnes de bénéficier d’une chaleur indirecte, et de chauffer plus rapidement les murs de l’habitation. Cette chaleur retransmise en partie par les assises est également mise à profit pour servir de rangement du bois. Elle garde et fait sécher les buches pour une combustion idéale. La forme du poêle est constituée de formes simples, répétées entre elles, réfléchies pour simplifier le moulage et diminuer le coût de production.'
        },
    },
    interiorDesign:{
        joy:{
            modele2: 'design_interieur/JOY-3.jpg',
            modele2Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Ornare lectus sit amet est placerat. Arcu bibendum at varius vel pharetra vel turpis. Massa massa ultricies mi quis hendrerit. At imperdiet dui accumsan sit amet nulla facilisi morbi. Maecenas sed enim ut sem viverra aliquet eget sit. Quisque non tellus orci ac auctor. Viverra accumsan in nisl nisi scelerisque eu ultrices. Massa id neque aliquam vestibulum morbi blandit cursus risus. Maecenas ultricies mi eget mauris pharetra et.em'
        }
    }
}

export default travaux