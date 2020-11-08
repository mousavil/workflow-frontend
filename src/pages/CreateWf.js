import React from 'react';
import '../tailwind.output.css';
import Body from '../layouts/Body';
import WFEditor from '../components/WFEditor';
import useGetListApi from '../api/useGetList';
import useCreate from '../api/useCreate';

export default function CreateWorkflow() {
    

    const [{ data, isLoading, isError }] = useGetListApi('/rules/');
    const createWorkFlow = useCreate('/workflows/create');
    return (
        <Body>
            {isError && <p>something is wrong ...</p>}
            {
                isLoading ?
                    (<p>loading</p>)
                    :
                    (<WFEditor isWantToBuild={true} operation={createWorkFlow} dbRules={data.rules} />)
            }
        </Body>
    );
}
