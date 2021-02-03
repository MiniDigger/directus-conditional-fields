import InterfaceComponent from './interface.vue';

export default {
    id: 'go-conditional-fields',
    name: 'Conditional Fields',
    description: 'Allows conditionally switching other fields',
    icon: 'box',
    component: InterfaceComponent,
    types: ['json'],
    options: [
        {
            field: "conditions",
            name: "Conditions",
            type: "json"
        },
        {
            field: "debug",
            name: "Debug",
            type: "boolean"
        }
    ]
};