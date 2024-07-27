let count=0
let rcount=0
let i=5
const gam=["good move","awesome move","mindblwing move","are u a legend? of this game","what a move","fanstastic move",'are u a noob?','i became u r fan','sike move macha','devru thara thinking','choker move','champion move']
let randomCommentary="";
let randomCommentar="";



let aa = document.querySelector("#a")
let bb = document.querySelector('#b')
let cc = document.querySelector('#c')
let dd = document.querySelector('#d')
let ee = document.querySelector("#e")
let ff = document.querySelector('#f')
let gg = document.querySelector('#g')
let hh = document.querySelector('#h')
let ii = document.querySelector("#i")
let player1=0
let player2=0
let dplayer1=0
let dplayer2=0
let g=0
let g1=0


// console.log(document.querySelector(".d").data)
document.querySelectorAll('.box').forEach(e => {
    e.addEventListener('click', async() => {
        dplayer1=player1
        dplayer2=player2
        if(player1!=5 && player2!=5){
        if (count % 2 == 0 && count <= 11) {
            rcount++
            if(!e.querySelector("img")){
            let img = document.createElement('img')
            img.setAttribute('class','img')
            img.src = "a.svg"
            e.append(img)
            e.value = 0
            count++
            }
            if(g==0)
            {
                document.querySelector(".com").innerHTML="attacking start from player1"
                g++
            }
            else{
                    randomCommentary = gam[Math.floor(Math.random() * gam.length)];

                document.querySelector(".com").innerHTML=randomCommentary

            }
            console.log(e.value, count)
            if (count >= 5) {
                console.log("hello")
                console.log(a.value, e.value)
                if (((aa.value == 0) && (ee.value == 0) && (ii.value == 0)) || ((aa.value == 0) && (dd.value == 0) && (gg.value == 0)) || ((bb.value == 0) && (ee.value == 0) && (hh.value == 0)) || ((cc.value == 0) && (ff.value == 0) && (ii.value == 0)) || ((aa.value == 0) && (bb.value == 0) && (cc.value == 0)) || ((dd.value == 0) && (ee.value == 0) && (ff.value == 0)) || ((gg.value == 0) && (hh.value == 0) && (ii.value == 0)) || ((cc.value == 0) && (ee.value == 0) && (gg.value == 0))) {
                    count=1
                    player1++
                    g=0;g1=0
                    rcount=0
                    document.querySelector(".com").innerHTML="ee sala win nimde!!!"
                         document.querySelector('.player1').innerHTML=`player1:${player1}`
                         if(player1==5)
                         {
                            i=5;count=0;g=0;g1=0;rcount=0;player1=0;player2=0
                            setTimeout(()=>{
                                let st=setInterval(()=>{
                                    if(i<=-1){
                                        document.querySelector(".com").innerHTML=""
                                        document.querySelector('.player1').innerHTML=`player1:${player1}`
            document.querySelector('.player2').innerHTML=`player2:${player2}`
            document.getElementById("ab").style.visibility="visible"
                                        clearInterval(st)
                        
                                    }
                                    else{

                                document.querySelector(".com").innerHTML=`REStarting match in ${i} seconds`
                                i--
                                    }
                                },1000)
                    
                                document.querySelectorAll('img').forEach(e=>{
                                    e.remove()})
                                    document.getElementById("ab").style.visibility="hidden"
                        
                                
                                
                            },3000)
                            document.querySelector(".com").innerHTML="player1 party yelli!!anyway congratulations legend ankodbeda next match ge ready agu"
                        
                            
                         }
                         else if(player1<5){
                            setTimeout(() => {
                                console.log("player 1 won",player1)
                                document.querySelectorAll('img').forEach(e=>{
                                    e.remove()})
                                document.querySelectorAll(".box").forEach(e=>{
                                    e.value=2
        
                                })    
                                document.querySelector(".com").innerHTML="bega start madu guru"
                                 }, 1000);

                        }
                    }
                    }
                }


        else if (count%2 != 0 && count <= 10) {
            rcount++
            if(!e.querySelector("img")){
            let img = document.createElement('img')
            img.src = "b.svg"
            e.append(img)
            count++
            e.value = 1
        }
            if(g1==0)
            {
                document.querySelector(".com").innerHTML="awesome start from player2"
                g1++

            }
            else{
                randomCommentary = gam[Math.floor(Math.random() * gam.length)];

                document.querySelector(".com").innerHTML=randomCommentary

            }
            console.log(e.value, count)
            if (count >= 5) {
                console.log("hello")
                console.log(a.value, e.value)
                if (((aa.value == 1) && (ee.value == 1) && (ii.value == 1)) || ((aa.value == 1) && (dd.value == 1) && (gg.value == 1)) || ((bb.value == 1) && (ee.value == 1) && (hh.value == 1)) || ((cc.value == 1) && (ff.value == 1) && (ii.value == 1)) || ((aa.value == 1) && (bb.value == 1) && (cc.value == 1)) || ((dd.value == 1) && (ee.value == 1) && (ff.value == 1)) || ((gg.value == 1) && (hh.value == 1) && (ii.value == 1)) || ((cc.value == 1) && (ee.value == 1) && (gg.value == 1))) 
                {
                    setTimeout(()=>{
                    document.querySelector(".com").innerHTML="ee sala win nimde!!!"
                    },1000)
                    count = 2;
                    rcount=0
                    player2++
                    g=0;g1=0
                    document.querySelector('.player2').innerHTML=`player2:${player2}`
                    if(player2==5){
                            // document.querySelector(".com").innerHTML="player 2 won"
                            setTimeout(()=>{
                                let st2=setInterval(()=>{
                                    if(i<=-1){
                                        document.querySelector(".com").innerHTML=""
                                        document.querySelector('.player1').innerHTML=`player1:${player1}`
                                        document.querySelector('.player2').innerHTML=`player2:${player2}`
                                        document.getElementById("ab").style.visibility="visible"
                                    
                                        clearInterval(st2)
                                    }
                                    else{

                                document.querySelector(".com").innerHTML=`REStarting match in ${i} seconds`
                                i--
                                    }
                                },1000)
                                // document.querySelector(".player1").innerHTML=""
                                // document.querySelector(".player2").innerHTML=""
                                i=5

                                document.querySelectorAll('img').forEach(e=>{
                                    e.remove()})
                                    count=0;g=0;g1=0;rcount=0;player1=0;player2=0
                                    document.getElementById("ab").style.visibility="hidden"
                        
                                
                                
                            },3000)
                            setTimeout(()=>{
                            
                                document.querySelector(".com").innerHTML="player2 party yelli!!anyway congratulations legend ankodbeda next match ge ready agu"
                            },1000)
                    
            
            
                    }
                            else if(player2<5){
                                setTimeout(() => {
                                    console.log("player 1 won",player1)
                                    document.querySelectorAll('img').forEach(e=>{
                                        e.remove()})
                                    document.querySelectorAll(".box").forEach(e=>{
                                        e.value=2
            
                                    })    
                                    document.querySelector(".com").innerHTML="bega start madu guru"
                                     }, 1000);
    
                            }
                    
                }
            }

        }
    }
    if(player1==dplayer1&&player2==dplayer2&&rcount==9)
    {
        count=count-9;g=0;g1=0;rcount=0
        let dc=["ee match 6ke hogala 3ke mugiyala tied kandro!!!","bega match mugisi mane hogbeku tied kandro","ibru legends illa ibru noobs kandro","meenaksi meenaski nodidya devru kota makalu"]
        
        setTimeout(()=>{
        document.querySelectorAll('img').forEach(e=>{
            e.remove()
            e.value=2   

    })
        document.querySelector(".com").innerHTML="bega start madu guru"  

        },3000)
        // document.querySelector(".com").innerHTML=randomCommentar    
        randomCommentar = dc[Math.floor(Math.random() * dc.length)];

        document.querySelector(".com").innerHTML=randomCommentar
    }
})
})
