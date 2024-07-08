const ventas = [
    {
        nombre: 'Casa en Barcelona',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Tu nueva casa a pasos del estadio Camp Nou.',
        ubicacion: 'Barcelona',
        habitaciones: 5,
        banos: 3,
        costo: '355.000.000',
        credit: true,
        seller: true
    },
    {
        nombre: 'Departamento en Linares',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Departamentos en verde en la ciudad de Linares, Chile.',
        ubicacion: 'Barcelona',
        habitaciones: 2,
        banos: 1,
        costo: '140.000.000',
        credit: false,
        seller: false
    },
    {
        nombre: 'Terreno cordillerano',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Hectárea de 1000m2 en la cordillera de los Andes.',
        ubicacion: 'Chillán',
        habitaciones: 0,
        banos: 0,
        costo: '63.000.000',
        credit: true,
        seller: false
    },
    {
        nombre: 'Home Studio en Santiago',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Tu nuevo departamento individual en la capital de Chile.',
        ubicacion: 'Santiago',
        habitaciones: 1,
        banos: 1,
        costo: '90.000.000',
        credit: false,
        seller: true
    }
]

let html = '';
for(let item of ventas) {
    const permiteCredito = item.credit ? 
        `
            <p class="text-success">
                <i class="fa-brands fa-cc-amazon-pay"></i> Permitido crédito bancario
            </p>
        ` :
        `
            <p class="text-danger">
                <i class="fa-brands fa-cc-amazon-pay"></i> No se permite crédito
            </p>       
        `
    const vendedor = item.seller ? 
    `
        <p class="text-success">
            <i class="fa-solid fa-user-tie"></i> Venta por dueño
        </p>
    ` :
    `
        <p class="text-danger">
            <i class="fa-solid fa-user-tie"></i> Venta por corredor
        </p>      
    `
    html += `
        <div class="card">
            <img
            src="${item.src}"
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">
                ${item.nombre}
            </h5>
            <p class="card-text">
                ${item.descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i>
                ${item.ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${item.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${item.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>
            ${permiteCredito}
            ${vendedor}
            </div>
        </div>
    `;
};

const secti0n = document.querySelector("#venta");
secti0n.innerHTML = html;