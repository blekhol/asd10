document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/test.json');
    const data = await response.json();


    const tbody = document.getElementById('tbody');
    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add('table-light');
        tr.innerHTML = `
            <td>${item.nev.split(' ')[0]}</td>
            <td>${item.nev.split(' ')[1]}</td>
            <td>${item.vernyomas}</td>
        `;
        tbody.appendChild(tr);
    });
});