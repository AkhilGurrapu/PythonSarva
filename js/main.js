import { initializeDB, runQuery, getSchemaInfo } from './database.js';
import { concepts, showConcept, populateTopicList } from './concepts.js';

let currentConceptIndex = 0;

document.addEventListener('DOMContentLoaded', async () => {
    await initializeDB();
    
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');
    const runQueryBtn = document.getElementById('run-query');
    const toggleTopicsBtn = document.getElementById('toggle-topics');
    const previewSchemaBtn = document.getElementById('preview-schema');

    prevBtn.addEventListener('click', () => navigateConcept(-1));
    nextBtn.addEventListener('click', () => navigateConcept(1));
    runQueryBtn.addEventListener('click', handleRunQuery);
    toggleTopicsBtn.addEventListener('click', toggleTopicsSidebar);
    previewSchemaBtn.addEventListener('click', toggleSchemaSidebar);

    populateTopicList(selectTopic);
    showConcept(currentConceptIndex);

    
});

function selectTopic(index) {
    currentConceptIndex = index;
    showConcept(currentConceptIndex);
    toggleTopicsSidebar();
}

function toggleTopicsSidebar() {
    const sidebar = document.getElementById('topics-sidebar');
    sidebar.classList.toggle('active');
}

function toggleSchemaSidebar() {
    const sidebar = document.getElementById('schema-sidebar');
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        updateSchemaContent();
    }
}

async function updateSchemaContent() {
    const schemaContent = document.getElementById('schema-content');
    const schemaInfo = await getSchemaInfo();
    schemaContent.innerHTML = formatSchemaInfo(schemaInfo);
}

function formatSchemaInfo(schemaInfo) {
    // Implement this function to format the schema info as HTML
    // You can create a table or list to display table names and their columns
}

function navigateConcept(direction) {
    currentConceptIndex = (currentConceptIndex + direction + concepts.length) % concepts.length;
    showConcept(currentConceptIndex);
}

async function handleRunQuery() {
    const sqlEditor = document.getElementById('sql-editor');
    const outputArea = document.getElementById('output-area');
    const query = sqlEditor.value;

    try {
        const result = await runQuery(query);
        outputArea.innerHTML = formatResultAsTable(result);
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