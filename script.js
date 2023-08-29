const gridContainer = document.querySelector('.grid-container')

for (let i = 0; i < 16; i++) { 
    const content = document.createElement('div');
    content.classList.add('col');    
    gridContainer.appendChild(content);
}

const cols = document.querySelectorAll('.col');
cols.forEach(element => {
    for (let i = 0; i < 16; i++) { 
        const content = document.createElement('div');
        content.classList.add('cell');
        content.textContent = i;
        
        element.appendChild(content);
    }
});