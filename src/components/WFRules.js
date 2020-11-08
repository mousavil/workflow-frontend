import React from 'react';
export default function WfRules(props) {
    const { addDbRuleToNewRules, isAdminWantToAddRule, dbRules } = props;
    return (
        <div >
            <table className="flex flex-col bg-orange-200">
                <thead>
                    <tr className="border-l-2 border-red-500 h-12">
                        <th>rules</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col">
                    {
                        dbRules.map(rule =>
                            <tr className="border-l-2 border-red-500 h-12 mt-4 flex flex-row" key={rule.id}>
                                <td className="mt-3">{rule.name}</td>
                                <If condition={isAdminWantToAddRule}>
                                    <button
                                        onClick={() => addDbRuleToNewRules(rule.id)}
                                        className="h-8 w-8 my-2 rounded-full border-red-500 hover:border-red-900 border-2"
                                    >+</button>
                                </If>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
function If(props) {
    if (props.condition) {
        return <td className="ml-auto"> {props.children}</td>
    } else {
        return <></>
    }
}