import React from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api';
import useGetListApi from '../api/useGetList';
import Body from '../layouts/Body';

const drules = [
    { id: '1', name: '1', condition: '200', description: 'd4s5', type: 'wfTime' },
    { id: '2', name: '12', condition: '1', description: 'd4svc5', type: 'stepTime' },
    { id: '3', name: '13', condition: '5', description: 'd4svcx5', type: 'stepsFasele' },
    { id: '4', name: 'cfd1', condition: '2', description: 'd4vcs5', type: 'wfTime' },
    { id: '5', name: '1fdsfds', condition: '20', description: 'd4svcx5', type: 'stepsFasele' }


]
export default function Rules() {

    const [{ data, isLoading, isError }, setIsDeleted] = useGetListApi(`/rules/`);

    async function deleteRule(id) {
        try {
            const result = await API.delete(`/rules/delete/${id}`, { data: { id } });
            if (result) {
                setIsDeleted((isDeleted) => !isDeleted);
                window.alert('ok rule deleted successful');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Body>
            <RuleList /*rules={data.rules}*/ rules={drules} deleteRule={deleteRule} />
            {/* {isError && <p>something is wrong ...</p>} */}
            {
                // isLoading ?
                //     (<p>loading</p>)
                //     :
                //     (<RuleList /*rules={data.rules}*/ rules={drules} deleteRule={deleteRule} />)
            }
        </Body>
    );
}

function RuleList({ rules, deleteRule }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>edit</th>
                    <th>delete</th>

                </tr>
            </thead>
            <tbody>
                {
                    rules.map(rule => <RuleItem rule={rule} key={rule.id} deleteRule={deleteRule} />)
                }
            </tbody>
        </table>
    );
}

function RuleItem({ rule, deleteRule, editRule }) {
    return (
        <tr>
            <td><Link to={`/show-rule/${rule.id}`}>{rule.name}</Link></td>
            <td>
                <Link to={`/edit-rule/${rule.id}`}>
                    <button className="w-8 h-8 rounded-full border-2 border-indigo-700 hover:border-pink-700 focus:outline-none" onClick={editRule}>*</button>
                </Link>
            </td>
            <td>
                <button className="w-8 h-8 rounded-full border-2 border-indigo-700 hover:border-pink-700 focus:outline-none"
                    onClick={() => deleteRule(rule.id)}
                >-</button>
            </td>
        </tr>
    );
}