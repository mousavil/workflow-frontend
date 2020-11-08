import React from 'react';
import API from '../api/api';
import WFList from '../components/WFList';
import useGetListApi from '../api/useGetList';
import Body from '../layouts/Body';

export default function Workflows() {
    
    const [{ data, isLoading, isError }, setIsDeleted] = useGetListApi(`/workflows/`);

    async function deleteWF(id) {
        try {
            const result = await API.delete(`/workflows/delete/${id}`, { data: { id } });
            if (result) {
                setIsDeleted((isDeleted) => !isDeleted);
                window.alert('ok workflow deleted successful');
            }
        } catch (err) {
            window.alert(`JSON.stringify(err)`);
        }
    }

    return (
        <Body>
            {isError && <p>something is wrong ...</p>}
            {
                isLoading ?
                    (<p>loading</p>)
                    :
                    (<WFList workflows={data} deleteWF={deleteWF} />)
            }
        </Body>
    );
}