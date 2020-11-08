import React from 'react';
import Body from '../layouts/Body';
import WFEditor from '../components/WFEditor';
import useGetApi from '../api/useGet';
import useEdit from '../api/useEdit';
import { useParams } from 'react-router-dom';
import useGetListApi from '../api/useGetList';

export default function EditWorkflow() {
    const { id } = useParams();
    const [{ data, isLoading, isError }] = useGetApi(`/workflows/${id}`, { data: { id } });
    const [{ data1, isLoading1, isError1 }] = useGetListApi('/rules/');

    const updateWF = useEdit(id, `/workflows/edit/${id}`);

    return (
        <Body>
            {(isError || isError1) && <p>something is wrong ...</p>}
            {
                (isLoading || isLoading1) ?
                    (<p>loading</p>)
                    :
                    (<WFEditor isWantToBuild={false} operation={updateWF} workflow={data.workflow} dbRules={data1.rules} />)
            }
        </Body>
    );
} 