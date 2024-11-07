
const getjoke = async ()=> {
    try {
        const response=await fetch("https://v2.jokeapi.dev/joke/Any");
        const data=await response.json();
        jokeDisplay(data);
        
    } catch (error) {
        console.log("error in fetching api: ",error);
        
    }
}

const jokeDisplay= (data)=>{
    try {
        let joke=document.getElementById("jokeDisplay");
        joke.innerText=(
            `${data.setup}
            ${data.delivery}`
        );
        let chr_count=document.getElementById("chr");
        let chr=data.setup+data.delivery;
        let chr_len=chr.length;
        chr_count.innerText=(`Character Count= ${chr_len}`);
        
    } catch (error) {
        console.log("error in displaying data: ",error)
        
    }
}

const clearjoke =()=>{
    try {
        let joke=document.getElementById("jokeDisplay");
        joke.innerText=(
            `Press the Button for Joke`
        );
        let chr_count=document.getElementById("chr");
        chr_count.innerText=(`Character Count = 0`);

        
    } catch (error) {
        console.log("error in clearing data ",error);
    }
}