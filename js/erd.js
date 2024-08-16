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
    makeERDZoomable(svg);
}

function generateERDSVG() {
    return `
 <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet" style="font-family: Arial, sans-serif;">
    <rect width="100%" height="100%" fill="#16213e"/>
    
    <!-- Users table -->
    <g transform="translate(50, 50)">
        <rect width="200" height="120" fill="#1e293b" rx="5" ry="5" stroke="#3949ab" stroke-width="2"/>
        <text x="100" y="30" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Users</text>
        <line x1="10" y1="40" x2="190" y2="40" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="60" fill="#ecf0f1" font-size="12">id (PK)</text>
        <text x="15" y="80" fill="#ecf0f1" font-size="12">name</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="12">email</text>
    </g>

    <!-- Categories table -->
    <g transform="translate(300, 50)">
        <rect width="200" height="90" fill="#1e293b" rx="5" ry="5" stroke="#3949ab" stroke-width="2"/>
        <text x="100" y="30" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Categories</text>
        <line x1="10" y1="40" x2="190" y2="40" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="60" fill="#ecf0f1" font-size="12">id (PK)</text>
        <text x="15" y="80" fill="#ecf0f1" font-size="12">name</text>
    </g>

    <!-- Products table -->
    <g transform="translate(550, 50)">
        <rect width="200" height="140" fill="#1e293b" rx="5" ry="5" stroke="#3949ab" stroke-width="2"/>
        <text x="100" y="30" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Products</text>
        <line x1="10" y1="40" x2="190" y2="40" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="60" fill="#ecf0f1" font-size="12">id (PK)</text>
        <text x="15" y="80" fill="#ecf0f1" font-size="12">name</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="12">price</text>
        <text x="15" y="120" fill="#ecf0f1" font-size="12">category_id (FK)</text>
    </g>

    <!-- Orders table -->
    <g transform="translate(50, 250)">
        <rect width="200" height="120" fill="#1e293b" rx="5" ry="5" stroke="#3949ab" stroke-width="2"/>
        <text x="100" y="30" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Orders</text>
        <line x1="10" y1="40" x2="190" y2="40" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="60" fill="#ecf0f1" font-size="12">id (PK)</text>
        <text x="15" y="80" fill="#ecf0f1" font-size="12">user_id (FK)</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="12">total_amount</text>
    </g>

    <!-- Reviews table -->
    <g transform="translate(300, 250)">
        <rect width="200" height="140" fill="#1e293b" rx="5" ry="5" stroke="#3949ab" stroke-width="2"/>
        <text x="100" y="30" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Reviews</text>
        <line x1="10" y1="40" x2="190" y2="40" stroke="#3949ab" stroke-width="1"/>
        <text x="15" y="60" fill="#ecf0f1" font-size="12">id (PK)</text>
        <text x="15" y="80" fill="#ecf0f1" font-size="12">product_id (FK)</text>
        <text x="15" y="100" fill="#ecf0f1" font-size="12">user_id (FK)</text>
        <text x="15" y="120" fill="#ecf0f1" font-size="12">rating</text>
    </g>

    <!-- Relationships -->
    <!-- Users - Orders -->
    <path d="M150 170 L150 250 L50 250" fill="none" stroke="#ecf0f1" stroke-width="1"/>

    <!-- Users - Reviews -->
    <path d="M250 110 L275 110 L275 320 L300 320" fill="none" stroke="#ecf0f1" stroke-width="1"/>

    <!-- Products - Reviews -->
    <path d="M650 190 L650 340 L500 340" fill="none" stroke="#ecf0f1" stroke-width="1"/>

    <!-- Categories - Products -->
    <path d="M500 90 L550 90" fill="none" stroke="#ecf0f1" stroke-width="1"/>

    <!-- Legend -->
    <g transform="translate(550, 450)">
        <rect width="200" height="100" fill="#1e293b" rx="5" ry="5" stroke="#3949ab" stroke-width="2"/>
        <text x="10" y="30" fill="#ecf0f1" font-size="14" font-weight="bold">Legend:</text>
        <text x="10" y="50" fill="#ecf0f1" font-size="12">PK - Primary Key</text>
        <text x="10" y="70" fill="#ecf0f1" font-size="12">FK - Foreign Key</text>
        <path d="M10 85 L30 85 L30 95" fill="none" stroke="#ecf0f1" stroke-width="1"/>
        <text x="40" y="95" fill="#ecf0f1" font-size="12">Relationship</text>
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
    svg.addEventListener('wheel', zoom);

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

    function zoom(event) {
        event.preventDefault();
        const delta = event.deltaY;
        const point = getPointFromEvent(event);
        const factor = delta > 0 ? 1.1 : 1 / 1.1;
        scale *= factor;
        const viewBox = svg.viewBox.baseVal;
        viewBox.x += (point.x - viewBox.x) * (1 - factor);
        viewBox.y += (point.y - viewBox.y) * (1 - factor);
        viewBox.width *= factor;
        viewBox.height *= factor;
    }
}