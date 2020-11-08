import Body from "../layouts/Body";
import { useParams } from 'react-router-dom';

import RuleDisplayer from '../components/RuleDisplayer';
import useGetApi from "../api/useGet";
const f = {
    id: '4', name: 'cfd1', condition: '2',
    description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy ' +
        'text of the printing and typesetting' +
        'industry Lorem Ipsum has been the industry' +
        'standard dummy text ever since the ' +
        'when an unknown printer took a galley of type' +
        'and scrambled it to make a type specimen book it has',
    type: 'wfTime'
}
export default function Rule() {
    const { id } = useParams();
    const [{ data, isLoading, isError }] = useGetApi(`/rules/${id}`, { id });
    return (
        <Body>
            {isError && <p>something is wrong ...</p>}
            {
                isLoading ?
                    (<p>loading</p>)
                    :
                    (<RuleDisplayer rule={f} /*rule={data.rule} *//> )
            }
        </Body>
    );
}
