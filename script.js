function hideElements(){
    const element = document.getElementsByClassName('text');
    for(let i=0; i<element.length; i++){
        element(i).classList.add('hidden');
    }
}