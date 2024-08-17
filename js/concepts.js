import { selectStatements } from './concepts/selectStatements.js';
import { whereClause } from './concepts/whereClause.js';
import { joinOperations } from './concepts/joinOperations.js';
import { aggregateFunctions } from './concepts/aggregateFunctions.js';
import { groupByClause } from './concepts/groupByClause.js';
import { createTable } from './concepts/createTable.js';
import { insertInto } from './concepts/insertInto.js';
import { unionAndUnionAll } from './concepts/unionAndUnionAll.js';
import { havingClause } from './concepts/havingClause.js';
import { subqueries } from './concepts/subqueries.js';
import { commonTableExpressions } from './concepts/commonTableExpressions.js';
import { windowFunctions } from './concepts/windowFunctions.js';
import { caseStatement } from './concepts/caseStatement.js';
import { pivot } from './concepts/pivot.js';
import { views } from './concepts/views.js';
import { indexing } from './concepts/indexing.js';
import { transactions } from './concepts/transactions.js';
import { recursiveQueries } from './concepts/recursiveQueries.js';
import { storedProcedures } from './concepts/storedProcedures.js';
import { jsonOperations } from './concepts/jsonOperations.js';
import { dateOperations } from './concepts/dateOperations.js';
import { salesAnalysis } from './concepts/salesAnalysis.js';
import { customerSegmentation } from './concepts/customerSegmentation.js';
import { inventoryManagement } from './concepts/inventoryManagement.js';
import { marketBasketAnalysis } from './concepts/marketBasketAnalysis.js';
import { cohortAnalysis } from './concepts/cohortAnalysis.js';
import {orderByClause} from "./concepts/orderByClause.js";


export const concepts = [
    selectStatements,
    whereClause,
    joinOperations,
    aggregateFunctions,
    groupByClause,
    orderByClause,
    createTable,
    insertInto,
    whereClause,
    unionAndUnionAll,
    aggregateFunctions,
    havingClause,
    subqueries,
    commonTableExpressions,
    windowFunctions,
    caseStatement,
    pivot,
    views,
    indexing,
    transactions,
    recursiveQueries,
    storedProcedures,
    jsonOperations,
    dateOperations,
    salesAnalysis,
    customerSegmentation,
    inventoryManagement,
    marketBasketAnalysis,
    cohortAnalysis
];

export function showConcept(index) {
    const conceptContent = document.getElementById('concept-content');
    const currentConcept = document.getElementById('current-concept');

    const concept = concepts[index];
    conceptContent.innerHTML = concept.content;
    currentConcept.textContent = concept.title;

    // Update CodeMirror instead of the textarea
    if (window.sqlEditor) {
        window.sqlEditor.setValue(concept.practice || '');
        window.sqlEditor.refresh();
    } else {
        const sqlEditor = document.getElementById('sql-editor');
        if (sqlEditor) {
            sqlEditor.value = concept.practice || '';
        }
    }
}

export function populateTopicList(onSelectTopic) {
    const topicList = document.getElementById('topic-list');
    concepts.forEach((concept, index) => {
        const li = document.createElement('li');
        li.textContent = concept.title;
        li.addEventListener('click', () => onSelectTopic(index));
        topicList.appendChild(li);
    });
}