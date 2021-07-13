 let cards=[
    {
        image:"https://th.bing.com/th/id/OIP.d4jMI6P65lE-Hm4bl3oqiAHaMJ?w=195&h=320&c=7&o=5&dpr=1.25&pid=1.7",
        value:1,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.d4jMI6P65lE-Hm4bl3oqiAHaMJ?w=195&h=320&c=7&o=5&dpr=1.25&pid=1.7",
        value:1,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.PoOOjKA_PSKtwYXzzISe5AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:2,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.PoOOjKA_PSKtwYXzzISe5AHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:2,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.XEOgHYNH32oyoP1Y-Ub-DgHaNJ?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:3,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.XEOgHYNH32oyoP1Y-Ub-DgHaNJ?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:3,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.XChBOMnhujjlqwgRKRq7WgHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:4,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.XChBOMnhujjlqwgRKRq7WgHaNK?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:4,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.oMIbu77C_vVjCDVPJZ2J7wHaNL?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:5,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.oMIbu77C_vVjCDVPJZ2J7wHaNL?w=187&h=333&c=7&o=5&dpr=1.25&pid=1.7",
        value:5,
        status:"closed"
    },
        
]

console.log(cards);
let temp;
for(let i=cards.length-1;i>=0;i--) {
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
   console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over!!");
            location.reload();
        }
    }

    displayCards(cards);
    }