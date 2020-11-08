import React, { useState } from "react";
import SubmitFormInput from './inputs/SubmitFormInput';
import Body from '../layouts/Body';
import Aside from '../layouts/Aside';
import WFRules from './WFRules';
import TextInput from './inputs/TextInput';
import WFRuleAdderButton from "./WFRuleAdderButton";
export default function WFEditor({ isWantToBuild, operation, workflow, dbRules }) {

    const [isAdminWantToAddRule, setIsAdminWantToAddRule] = useState(false);
    const [name, setName] = useState(isWantToBuild ? '' : workflow.name);
    const [rules, setRules] = useState(isWantToBuild ? [] : workflow.rules);
    const [steps, setSteps] = useState(isWantToBuild ? [] : workflow.steps);
    function addDbRuleToNewRules(id) {
        const newRule = dbRules.filter(rule => rule.id === id)[0];
        const simillarRule = rules.filter(rule => rule.id === newRule.id)[0];
        if (!simillarRule) {
            setRules(rules => rules.concat(newRule));
        } else {
            window.alert('This rule already exists');
        }
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newWorkFlow = {
            name: name,
            steps: steps,
            rules: rules
        };
        if (!isWantToBuild) {
            operation({ workflow: newWorkFlow }, 'are you sure for edit this workflow ?');
        } else {
            operation({ workflow: newWorkFlow }, 'are you sure for create this workflow ?');
        }
    }
    return (
        <div className="box-content w-full h-full flex flex-row">
            <Body>
                <form onSubmit={handleSubmit} className="flex flex-col w-11/12 border-blue-900 border-2 mx-auto">

                    <TextInput className="flex flex-col border-red-700 border-l-4 w-64 h-16 ml-1"
                        handleChange={handleNameChange} id="wf-name" value={name} name="work flow name"
                    />

                    {/* <WFStepBuilder /> */}

                    <WFRuleAdderButton isAdminWantToAddRule={isAdminWantToAddRule} setIsAdminWantToAddRule={setIsAdminWantToAddRule}/>
                    <SubmitFormInput />
                </form>
            </Body>
            <Aside>
                <WFRules addDbRuleToNewRules={addDbRuleToNewRules} dbRules={dbRules} isAdminWantToAddRule={isAdminWantToAddRule} />
            </Aside>
        </div>
    );
}