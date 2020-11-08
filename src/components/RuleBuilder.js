import React, { useState } from 'react';
import SubmitFormInput from './inputs/SubmitFormInput';
import TextAreaInput from './inputs/TextAreaInput';
import TextInput from './inputs/TextInput';
import RuleSelectorButton from './RuleSelectorButton';
import RuleConditionSetter from './RuleConditionSetter';

export default function RuleEditor({ isWantToBuild, rule, operation }) {

    const [ruleName, setRuleName] = useState(isWantToBuild ? '' : rule.name);
    const [ruleDesc, setRuleDesc] = useState(isWantToBuild ? '' : rule.description);
    const [ruleCondition, setRuleCondition] = useState(isWantToBuild ? '' : rule.condition);
    const [type, setType] = useState('workflowTime');
    function handleNameChange(event) {
        setRuleName(event.target.value);
    }

    function handleDescChange(event) {
        setRuleDesc(event.target.value);
    }

    function handleConditionsChange(event) {
        setRuleCondition(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newRule = {
            name: ruleName,
            description: ruleDesc,
            condition: ruleCondition
        };
        if (!isWantToBuild) {
            operation({ rule: newRule }, 'are you sure for edit this rule ?');
        } else {
            operation({ rule: newRule }, 'are you sure for create this rule ?');
        }
    }

    function g(){
        console.log(ruleCondition);
        console.log(ruleDesc);
        console.log(ruleName);
        console.log(type);

    }
    return (
        <div className="flex flex-col">
            <h2>create new rule</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">

                <TextInput className="flex flex-col border-red-700 border-l-4 w-64 h-16 ml-1"
                    handleChange={handleNameChange} id="rule-name" value={ruleName} name="rule name"
                />

                <TextAreaInput className="flex flex-col border-red-700 border-l-4 w-3/5 h-64 ml-1"
                    handleChange={handleDescChange} id="rule-desc" value={ruleDesc} name="rule description"
                />

                <RuleSelectorButton setType={setType} />

                <RuleConditionSetter type={type} setRuleCondition={setRuleCondition} />

                <SubmitFormInput />
            </form>
            <button onClick={g}>+++</button>
        </div>
    );
}

