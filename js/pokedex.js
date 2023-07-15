const PokeName = document.querySelector('.poke_name')
const PokeNumber = document.querySelector('.poke_number')
const PokeImage = document.querySelector('.pokemon_image')
const PokeForm = document.querySelector('.Pesquisa')
const Input = document.querySelector('.input-search')
const Back = document.querySelector('.btn-prev')
const Next = document.querySelector('.btn-next')


let ProcuraP = 1;

const fetchPokemon = async (pokemon) =>{

    const ApiResposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(ApiResposta.status === 200){
        const dados = await ApiResposta.json();

        return dados;
    }
 
   
    
}

const renderPokemon =  async (pokemon) =>{

    PokeName.innerHTML = "Pesquisando..."

    const dados = await fetchPokemon(pokemon);

    if(dados){
    PokeName.innerHTML = dados.name;
    PokeNumber.innerHTML = dados.id;
    PokeImage.src = dados['sprites']['versions']['generation-v']['black-white']['animated']
    ['front_default']

    Input.value = '';

    ProcuraP = dados.id;

    } 
    
    else{
        PokeImage.style.display = 'none';
        PokeName.innerHTML = 'Não encontrado'; 
        PokeNumber.innerHTML = '';
    }

}

PokeForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    renderPokemon(Input.value.toLowerCase())
    
 
})
Back.addEventListener('click', () =>{
    if(ProcuraP > 1){
ProcuraP -= 1;
renderPokemon(ProcuraP)
 
    }
 
})
Next.addEventListener('click', () =>{
ProcuraP += 1;
renderPokemon(ProcuraP)
 
    
 
})



renderPokemon(ProcuraP)


