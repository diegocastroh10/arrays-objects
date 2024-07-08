const arriendos = [
    {
        nombre: 'Casa en Linares',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Casa en el centro de Linares con conexión a toda la ciudad.',
        ubicacion: 'Linares',
        habitaciones: 3,
        banos: 2,
        costo: '35.990',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa en la Monte Oscuro',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Hermosa casa en la montaña para una escapada espectacular.',
        ubicacion: 'Cordillera de Linares',
        habitaciones: 4,
        banos: 2,
        costo: '89.990',
        smoke: true,
        pets: false
    },
    {
        nombre: 'Departamento en Santiago Centro',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Departamento en el corazón de Santiago ideal para parejas.',
        ubicacion: 'Santiago',
        habitaciones: 2,
        banos: 1,
        costo: '59.990',
        smoke: false,
        pets: false
    },
    {
        nombre: 'Home Studio en Chuchunco',
        src: '../assets/img/img-main.jpeg',
        descripcion: 'Habitación individual en Chuchunco para una escapada personal.',
        ubicacion: 'Chuchunco',
        habitaciones: 1,
        banos: 1,
        costo: '30.000',
        smoke: false,
        pets: true
    }
]

let html = '';
for(let item of arriendos) {
    const permitidoFumar = item.smoke ? 
        `
            <p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
            </p>
        ` :
        `
            <p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
            </p>       
        `
    const mascotas = item.pets ? 
    `
        <p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>
    ` :
    `
        <p class="text-danger">
            <i class="fas fa-ban"></i> No se permiten mascotas
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
            ${permitidoFumar}
            ${mascotas}
            </div>
        </div>
    `;
};

const secti0n = document.querySelector("#alquiler");
secti0n.innerHTML = html;