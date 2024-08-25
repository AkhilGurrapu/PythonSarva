import { initializeDB, runQuery, getSchemaInfo } from './database.js';
import { concepts, showConcept, populateTopicList } from './concepts.js';
import { initERD } from './erd.js';

let currentConceptIndex = 0;
let sqlEditor;

document.addEventListener('DOMContentLoaded', async () => {
    await initializeDB();
    
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');
    const runQueryBtn = document.getElementById('run-query');
    const toggleTopicsBtn = document.getElementById('toggle-topics');
    const previewSchemaBtn = document.getElementById('preview-schema');
    const overlay = document.querySelector('.overlay');

    prevBtn.addEventListener('click', () => navigateConcept(-1));
    nextBtn.addEventListener('click', () => navigateConcept(1));
    runQueryBtn.addEventListener('click', handleRunQuery);
    
    toggleTopicsBtn.addEventListener('click', toggleTopicsSidebar);
    previewSchemaBtn.addEventListener('click', toggleSchemaSidebar);
    overlay.addEventListener('click', closeSidebars);

    currentConceptIndex = 0;  // Start with the introduction
    showConcept(currentConceptIndex);

    sqlEditor = CodeMirror.fromTextArea(document.getElementById("sql-editor"), {
        mode: "text/x-sql",
        theme: "dracula",
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    });

    populateTopicList(selectTopic);
    showConcept(currentConceptIndex);

    if (concepts[currentConceptIndex].practice) {
        sqlEditor.setValue(concepts[currentConceptIndex].practice);
        sqlEditor.refresh();
    }

    initializeNavigation();


    initERD();
});

function toggleTopicsSidebar() {
    const sidebar = document.getElementById('topics-sidebar');
    sidebar.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}


function toggleSchemaSidebar() {
    const schemaSidebar = document.getElementById('schema-sidebar');
    const erdSidebar = document.getElementById('data-model-sidebar');
    const overlay = document.querySelector('.overlay');

    // If schema sidebar is not active, activate it and deactivate ERD sidebar
    if (!schemaSidebar.classList.contains('active')) {
        schemaSidebar.classList.add('active');
        erdSidebar.classList.remove('active');
        overlay.classList.add('active');
        updateSchemaContent();
    } else {
        // If schema sidebar is already active, just close it
        schemaSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Ensure the overlay click event is properly set up
    overlay.removeEventListener('click', closeSidebars);
    overlay.addEventListener('click', closeSidebars);
}

function closeSidebars() {
    const topicsSidebar = document.getElementById('topics-sidebar');
    const schemaSidebar = document.getElementById('schema-sidebar');
    const erdSidebar = document.getElementById('data-model-sidebar');
    const overlay = document.querySelector('.overlay');

    topicsSidebar.classList.remove('active');
    schemaSidebar.classList.remove('active');
    erdSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Rest of your existing JavaScript
function selectTopic(index) {
    currentConceptIndex = index;
    showConcept(currentConceptIndex);
    toggleTopicsSidebar();
    resetOutputArea();
    updateNavigationButtons(); // Add this line
}


async function updateSchemaContent() {
    const schemaContent = document.getElementById('schema-content');
    const schemaInfo = await getSchemaInfo();
    schemaContent.innerHTML = formatSchemaInfo(schemaInfo);
}

function formatSchemaInfo(schemaInfo) {
    let html = '';
    for (const tableName in schemaInfo) {
        html += `<h3 class="table-name">${tableName}</h3><ul>`;
        schemaInfo[tableName].forEach(column => {
            let columnClass = 'column-name';
            if (column.primaryKey) columnClass += ' primary-key';
            if (column.foreignKey) columnClass += ' foreign-key';
            
            html += `<li>
                <span class="${columnClass}">${column.name}</span>
                <span class="column-type">${column.type}</span>
                ${column.notNull ? '<span class="not-null">NOT NULL</span>' : ''}
                ${column.primaryKey ? '<span class="primary-key-indicator">PK</span>' : ''}
                ${column.foreignKey ? '<span class="foreign-key-indicator">FK</span>' : ''}
            </li>`;
        });
        html += '</ul>';
    }
    return html;
}

function navigateConcept(direction) {
    const newIndex = currentConceptIndex + direction;
    
    // Check if the new index is within bounds
    if (newIndex >= 0 && newIndex < concepts.length) {
        currentConceptIndex = newIndex;
        showConcept(currentConceptIndex);
        resetOutputArea();
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');

    // Disable prev button if we're at the first concept
    prevBtn.disabled = currentConceptIndex === 0;

    // Disable next button if we're at the last concept
    nextBtn.disabled = currentConceptIndex === concepts.length - 1;

    // Optionally, you can also visually indicate the disabled state
    prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
}


function initializeNavigation() {
    showConcept(currentConceptIndex);
    updateNavigationButtons();
}

function resetOutputArea() {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML = '';
    if (concepts[currentConceptIndex].practice) {
        sqlEditor.setValue(concepts[currentConceptIndex].practice);
        sqlEditor.refresh();
    } else {
        sqlEditor.setValue('');
        sqlEditor.refresh();
    }
}


async function handleRunQuery() {
    const outputArea = document.getElementById('output-area');
    let query = sqlEditor.getValue();
    const selection = sqlEditor.getSelection();

    if (selection) {
        query = selection;
    }

    try {
        if (query.toLowerCase().includes('create procedure') || query.toLowerCase().includes('call')) {
            outputArea.innerHTML = `
                <p style="color: yellow;">
                    We cannot execute stored procedures here, the database does not support stored procedures.
                    The code provided is an example of how stored procedures might work in other database systems.
                </p>`;
        } else {
            const result = await runQuery(query);
            outputArea.innerHTML = formatResultAsTable(result);
        }
    } catch (error) {
        outputArea.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}



function formatResultAsTable(result) {
    if (result.length === 0) {
        return '<p>Query executed successfully, but returned no results.</p>';
    }

    let tableHtml = '<table class="result-table"><thead><tr>';
    
    // Add table headers
    result[0].columns.forEach(column => {
        tableHtml += `<th>${column}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    // Add table rows
    result[0].values.forEach(row => {
        tableHtml += '<tr>';
        row.forEach(cell => {
            tableHtml += `<td>${cell !== null ? cell : 'NULL'}</td>`;
        });
        tableHtml += '</tr>';
    });

    tableHtml += '</tbody></table>';
    return tableHtml;
}

