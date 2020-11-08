import React from 'react';
import Body from '../layouts/Body';
import RuleBuilder from '../components/RuleBuilder';
import useEdit from '../api/useEdit';
import { useParams } from 'react-router-dom';
import useGetApi from '../api/useGet';

export default function EditRule() {
    const {id} = useParams();
    const [{ data, isLoading, isError }] = useGetApi(`/rules/${id}`, { data: { id } });
    const updateRule = useEdit(id, `/rules/edit/${id}`);

    return (
        <Body>
            {isError && <p>something is wrong ...</p>}
            {
                isLoading ?
                    (<p>loading</p>)
                    :
                    (<RuleBuilder isWantToBuild={false} operation={updateRule} rule={data.rule} />)
            }
        </Body>
    );
}
