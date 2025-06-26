let alien = {
    name: 'Hannah',
    tech: 'JS',
    laptop: {
        cpu : 'i7',
        ram : 4,
        brand1 : 'Asus'
    }
}

for(let key in alien)
{
    console.log(key, alien[key]);
}

let alien1 ={
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand1: 'Asus'
    }
}

for (let key in alien1.laptop) 
{
    console.log(key, alien1.laptop[key]);
    
}
