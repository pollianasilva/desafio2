function adicionarTarefa(periodo) {   
    let inputElement;
    let ulTarefas;
    
    if (periodo === 'dia') {
        inputElement = document.getElementById('nova-tarefa-dia');
        ulTarefas = document.getElementById('tarefas-dia');
    } else if (periodo === 'noite') {
        inputElement = document.getElementById('nova-tarefa-noite');
        ulTarefas = document.getElementById('tarefas-noite');
    }

    let novaTarefa = inputElement.value.trim(); 
    
    if (novaTarefa !== '') {
       
        let li = document.createElement('li');
        li.className = 'list-group-item';
        
        let spanTexto = document.createElement('span');
        spanTexto.className = 'tarefa-texto';
        spanTexto.textContent = '• ' + novaTarefa;
        
        let btnSucesso = document.createElement('button');
        btnSucesso.className = 'btn btn-sm btn-success';
        btnSucesso.innerHTML = '✔️';
        btnSucesso.onclick = function () {
            toggleConcluida(btnSucesso);
        };
        
        let btnDark = document.createElement('button');
        btnDark.className = 'btn btn-sm btn-dark ml-2';
        btnDark.innerHTML = '❌';
        btnDark.onclick = function () {
            NaoConcluida(spanTexto, btnSucesso);
        };
        
        let btnRemover = document.createElement('button');
        btnRemover.className = 'btn btn-sm btn-danger ml-2';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function () {
            removerTarefa(btnRemover);
        };
        
        li.appendChild(spanTexto);
        li.appendChild(btnSucesso);
        li.appendChild(btnDark);
        li.appendChild(btnRemover);

       
        ulTarefas.appendChild(li);

        
        inputElement.value = '';
    }
}

function toggleConcluida(btnSucesso) {
    let li = btnSucesso.parentNode;
    let btnDark = li.querySelector('.btn-dark');

    
    li.classList.toggle('concluida');

    
    btnDark.remove();
}

function NaoConcluida(btnDark) {
    let li = btnDark.parentNode;
    let spanTexto = li.querySelector('.tarefa-texto');

    if (!spanTexto.textContent.includes(' 😞')) {
        spanTexto.textContent += ' 😞'; 
    }

    let btnSucesso = li.querySelector('.btn-success');
    if (btnSucesso) {
        btnSucesso.remove(); 
    }
}

function removerTarefa(btnRemover) {
    let li = btnRemover.parentNode;
    li.remove();
}
