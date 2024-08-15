import { selectStatements } from './concepts/selectStatements.js';
import { whereClause } from './concepts/whereClause.js';
import { joinOperations } from './concepts/joinOperations.js';
import { aggregateFunctions } from './concepts/aggregateFunctions.js';
import { groupByClause } from './concepts/groupByClause.js';

export const concepts = [
    selectStatements,
    whereClause,
    joinOperations,
    aggregateFunctions,
    groupByClause
];

export function showConcept(index) {
    const conceptContent = document.getElementById('concept-content');
    const currentConcept = document.getElementById('current-concept');
    const sqlEditor = document.getElementById('sql-editor');

    const concept = concepts[index];
    conceptContent.innerHTML = concept.content;
    currentConcept.textContent = concept.title;
    sqlEditor.value = concept.practice;
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