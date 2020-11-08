import React from 'react';
import Body from '../layouts/Body';
import RuleBuilder from '../components/RuleBuilder';
import useCreate from '../api/useCreate';

export default function CreateRule() {

    const createRule = useCreate('/rules/create');

    return (
        <Body>
            <RuleBuilder isWantToBuild={true} operation={createRule} />
        </Body>
    );
}
