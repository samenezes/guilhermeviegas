function Pagina(){

    function primaryRequest() {
        const valores= fetch('https://opentdb.com/api.php?amount=30&category=15').then(batata=>{

        batata.json().then(bacon=>{
  
            console.log(bacon.data)
            
            var btn=document.querySelector('#botao')

            btn.addEventListener('click',()=>{
                    var quest = document.querySelector('#question')

                    quest.src=bacon.data.category[Math.floor(Math.random()*100)].url
                    legenda()

            })

        }) 
  
        })
          
    }
    function legenda(){
        fetch('https://opentdb.com/api.php?amount=30&category=15').then(legenda=> legenda.json()
        .then(dados=>{

                     var legenda = document.querySelector("#difficulty")

                     legenda.innerHTML = `${dados.content}`

        }))
    }
    
    
    
    return(
    <>
        <h1>Prova</h1>
        <div>
            <button onClick={primaryRequest()} id="botao">CLICK HERE!</button>
        </div>
        <div>
            <figure>
                <figcaption id="legenda">olá</figcaption>

                <img src="" id="quest" alt="" />
            </figure>
                
        </div>

   
        <h2>Guilherme Viegas</h2>



</>



)
}
export default Pagina