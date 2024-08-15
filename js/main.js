import { initializeDB, runQuery } from './database.js';
import { concepts, showConcept } from './concepts.js';

let currentConceptIndex = 0;

document.addEventListener('DOMContentLoaded', async () => {
    await initializeDB();
    
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');
    const runQueryBtn = document.getElementById('run-query');

    prevBtn.addEventListener('click', () => navigateConcept(-1));
    nextBtn.addEventListener('click', () => navigateConcept(1));
    runQueryBtn.addEventListener('click', handleRunQuery);

    showConcept(currentConceptIndex);
});

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