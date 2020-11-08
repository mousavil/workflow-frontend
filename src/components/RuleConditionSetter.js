import React from 'react';

export default function RuleConditionSetter({ type, ruleCondition, setRuleCondition }) {
    switch (type) {
        case 'wfTime':
            return (
                <Rule1 setRuleCondition={setRuleCondition} ruleCondition={ruleCondition}/>
            )

        case 'stepTime':
            return (
                <Rule2 setRuleCondition={setRuleCondition} ruleCondition={ruleCondition}/>
            )

        case 'stepsFasele':

            return (
                <Rule3 setRuleCondition={setRuleCondition} ruleCondition={ruleCondition}/>
            )

        default:

            return (<></>)
    }

}

function Rule1({ ruleCondition, setRuleCondition }) {
    const handleConditionChange = (e) => {
        setRuleCondition(e.target.value);
    }
    return (
        <div className="flex flex-col border-gray-500 border-2">
            <p className="mr-auto mb-2">please specify the maximum time a work flow can be running.</p>
            <RuleInput
                handleChange={handleConditionChange} id="rule-cond" value={ruleCondition} name="day"
            />
        </div>
    )
}

function Rule2({ ruleCondition, setRuleCondition }) {
    const handleConditionChange = (e) => {
        setRuleCondition(e.target.value);
    }
    return (
        <div className="flex flex-col border-gray-500 border-2">
            <p className="mr-auto mb-2">please specify the maximum time that a particular step can be in progress . </p>
            <p className="mr-auto mb-2">once you have created the workflow you can add this rule to any custom step . </p>
            <RuleInput
                handleChange={handleConditionChange} id="rule-cond" value={ruleCondition} name="day"
            />
        </div>
    )
}

function Rule3({ ruleCondition, setRuleCondition }) {
    const handleConditionChange = (e) => {
        setRuleCondition(e.target.value);
    }
    return (
        <div className="flex flex-col border-gray-500 border-2">

            <p className="mr-auto mb-2">please specify the maximum time each step can be running.</p>

            <RuleInput
                handleChange={handleConditionChange} id="rule-cond" value={ruleCondition} name="day"
            />
        </div>
    )
}

function RuleInput({
    id, name, handleChange, value
}) {
    return (
        <label className="flex flex-row border-l-4 border-red-700" htmlFor={id}>

            <strong>{name} : </strong> <input
                className="border-2 border-red-600"
                id={id}
                onChange={handleChange}
                value={value}
            />
        </label>
    )

}