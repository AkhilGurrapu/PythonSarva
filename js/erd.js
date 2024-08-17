// erd.js

export function initERD() {
    const previewErdBtn = document.getElementById('preview-erd');
    const closeErdBtn = document.querySelector('#data-model-sidebar .close-button');
    const dataModelSidebar = document.getElementById('data-model-sidebar');
    const overlay = document.querySelector('.overlay');

    previewErdBtn.addEventListener('click', () => {
        const schemaSidebar = document.getElementById('schema-sidebar');
        schemaSidebar.classList.remove('active');
        dataModelSidebar.classList.add('active');
        overlay.classList.add('active');
        updateDataModelContent();
    });

    closeErdBtn.addEventListener('click', closeDataModelSidebar);
    overlay.addEventListener('click', closeDataModelSidebar);
}

function closeDataModelSidebar() {
    const dataModelSidebar = document.getElementById('data-model-sidebar');
    const overlay = document.querySelector('.overlay');
    dataModelSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function updateDataModelContent() {
    const dataModelContent = document.getElementById('data-model-content');
    dataModelContent.innerHTML = generateERDSVG();
    
    const svg = dataModelContent.querySelector('svg');
    makeERDResizable(svg);
    const zoomControls = makeERDZoomable(svg);
    addZoomButtons(dataModelContent, zoomControls);
}


function generateERDSVG() {
    return `
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" style="font-family: Arial, sans-serif;">
    <rect width="100%" height="100%" fill="#1a2639"/>
    
    <!-- Customers table -->
    <g transform="translate(50, 50)">
        <rect width="250" height="210" fill="#1e293b" rx="10" ry="10" stroke="#3949ab" stroke-width="2"/>
        <text x="125" y="30" text-anchor="middle" fill="white" font-size="18" font-weight="bold">Customers</text>
        <line x1="10" y1="45" x2="240" y2="45" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="70" fill="#ecf0f1" font-size="14">🔑 id (PK)</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="14">name</text>
        <text x="15" y="130" fill="#ecf0f1" font-size="14">email</text>
        <text x="15" y="160" fill="#ecf0f1" font-size="14">birth_date</text>
        <text x="15" y="190" fill="#ecf0f1" font-size="14">city, state, country</text>
    </g>

    <!-- Products table -->
    <g transform="translate(350, 50)">
        <rect width="250" height="210" fill="#1e293b" rx="10" ry="10" stroke="#3949ab" stroke-width="2"/>
        <text x="125" y="30" text-anchor="middle" fill="white" font-size="18" font-weight="bold">Products</text>
        <line x1="10" y1="45" x2="240" y2="45" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="70" fill="#ecf0f1" font-size="14">🔑 id (PK)</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="14">name</text>
        <text x="15" y="130" fill="#ecf0f1" font-size="14">category</text>
        <text x="15" y="160" fill="#ecf0f1" font-size="14">brand</text>
        <text x="15" y="190" fill="#ecf0f1" font-size="14">price</text>
    </g>

    <!-- Stores table -->
    <g transform="translate(650, 50)">
        <rect width="250" height="180" fill="#1e293b" rx="10" ry="10" stroke="#3949ab" stroke-width="2"/>
        <text x="125" y="30" text-anchor="middle" fill="white" font-size="18" font-weight="bold">Stores</text>
        <line x1="10" y1="45" x2="240" y2="45" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="70" fill="#ecf0f1" font-size="14">🔑 id (PK)</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="14">name</text>
        <text x="15" y="130" fill="#ecf0f1" font-size="14">city</text>
        <text x="15" y="160" fill="#ecf0f1" font-size="14">state, country</text>
    </g>

    <!-- Dates table -->
    <g transform="translate(950, 50)">
        <rect width="250" height="240" fill="#1e293b" rx="10" ry="10" stroke="#3949ab" stroke-width="2"/>
        <text x="125" y="30" text-anchor="middle" fill="white" font-size="18" font-weight="bold">Dates</text>
        <line x1="10" y1="45" x2="240" y2="45" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="70" fill="#ecf0f1" font-size="14">🔑 id (PK)</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="14">date</text>
        <text x="15" y="130" fill="#ecf0f1" font-size="14">day_of_week</text>
        <text x="15" y="160" fill="#ecf0f1" font-size="14">day_of_month</text>
        <text x="15" y="190" fill="#ecf0f1" font-size="14">month</text>
        <text x="15" y="220" fill="#ecf0f1" font-size="14">quarter, year</text>
    </g>

    <!-- Sales table -->
    <g transform="translate(450, 400)">
        <rect width="300" height="240" fill="#1e293b" rx="10" ry="10" stroke="#3949ab" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" fill="white" font-size="18" font-weight="bold">Sales</text>
        <line x1="10" y1="45" x2="290" y2="45" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="70" fill="#ecf0f1" font-size="14">🔑 sale_id (PK)</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="14">🔗 date_id (FK)</text>
        <text x="15" y="130" fill="#ecf0f1" font-size="14">🔗 customer_id (FK)</text>
        <text x="15" y="160" fill="#ecf0f1" font-size="14">🔗 product_id (FK)</text>
        <text x="15" y="190" fill="#ecf0f1" font-size="14">🔗 store_id (FK)</text>
        <text x="15" y="220" fill="#ecf0f1" font-size="14">quantity, total_price, discount</text>
    </g>

    <!-- Relationships (L-shaped lines with corrected Products line) -->
    <path d="M175 290 V 520 H 450" fill="none" stroke="#ecf0f1" stroke-width="2" stroke-dasharray="5,5"/>
    <path d="M475 260 V 400 H 450" fill="none" stroke="#ecf0f1" stroke-width="2" stroke-dasharray="5,5"/>
    <path d="M775 230 V 550 H 750" fill="none" stroke="#ecf0f1" stroke-width="2" stroke-dasharray="5,5"/>
    <path d="M1075 290 V 580 H 750" fill="none" stroke="#ecf0f1" stroke-width="2" stroke-dasharray="5,5"/>

    <!-- Legend -->
    <g transform="translate(50, 700)">
        <rect width="300" height="80" fill="#1e293b" rx="10" ry="10" stroke="#3949ab" stroke-width="2"/>
        <text x="10" y="30" fill="#ecf0f1" font-size="16" font-weight="bold">Legend:</text>
        <text x="10" y="55" fill="#ecf0f1" font-size="14">🔑 Primary Key (PK)</text>
        <text x="160" y="55" fill="#ecf0f1" font-size="14">🔗 Foreign Key (FK)</text>
        <line x1="10" y1="65" x2="50" y2="65" stroke="#ecf0f1" stroke-width="2" stroke-dasharray="5,5"/>
        <text x="60" y="70" fill="#ecf0f1" font-size="14">Relationship</text>
    </g>
</svg>
    `;
}


function makeERDResizable(svg) {
    const content = document.getElementById('data-model-content');
    const resizeObserver = new ResizeObserver(() => {
        svg.setAttribute('width', content.clientWidth);
        svg.setAttribute('height', content.clientHeight);
    });
    resizeObserver.observe(content);
}

function makeERDZoomable(svg) {
    let scale = 1;
    let panning = false;
    let start = { x: 0, y: 0 };
    let origin = { x: 0, y: 0 };

    svg.addEventListener('mousedown', startPan);
    svg.addEventListener('mousemove', pan);
    svg.addEventListener('mouseup', endPan);
    svg.addEventListener('mouseleave', endPan);
    svg.addEventListener('wheel', handleScroll);

    function getPointFromEvent(event) {
        const point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        return point.matrixTransform(svg.getScreenCTM().inverse());
    }

    function startPan(event) {
        panning = true;
        start = getPointFromEvent(event);
    }

    function pan(event) {
        if (!panning) return;
        const point = getPointFromEvent(event);
        origin.x += point.x - start.x;
        origin.y += point.y - start.y;
        const viewBox = svg.viewBox.baseVal;
        viewBox.x = -origin.x;
        viewBox.y = -origin.y;
        start = point;
    }

    function endPan() {
        panning = false;
    }

    function handleScroll(event) {
        event.preventDefault();
        const delta = event.deltaY;
        const factor = delta > 0 ? 1.02 : 1 / 1.02; // Even slower zoom factor
        zoom(factor, event);
    }

    function zoom(factor, event) {
        scale *= factor;
        const viewBox = svg.viewBox.baseVal;
        const mousePoint = event ? getPointFromEvent(event) : { x: viewBox.width / 2, y: viewBox.height / 2 };
        
        viewBox.x += (mousePoint.x - viewBox.x) * (1 - factor);
        viewBox.y += (mousePoint.y - viewBox.y) * (1 - factor);
        viewBox.width *= factor;
        viewBox.height *= factor;
    }

    return {
        zoomIn: () => zoom(0.95),
        zoomOut: () => zoom(1.05)
    };
}

function addZoomButtons(container, zoomControls) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'zoom-button-container';
    
    const zoomInBtn = createZoomButton('+', zoomControls.zoomIn);
    const zoomOutBtn = createZoomButton('-', zoomControls.zoomOut);
    
    buttonContainer.appendChild(zoomOutBtn);
    buttonContainer.appendChild(zoomInBtn);
    container.appendChild(buttonContainer);
}

function createZoomButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = 'zoom-button';
    button.addEventListener('click', onClick);
    return button;
}