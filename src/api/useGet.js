import { useEffect, useReducer, useState } from 'react';
import API from './api';
import apiStatusReducer from './statusReducer';

export default function useGetApi(initurl, urlData) {
    const [url, setUrl] = useState(initurl);
    const [status, dispatch] = useReducer(apiStatusReducer, { data: {} });
    useEffect(() => {
        let unMounted = false;
        const fetch = async () => {
            try {
                dispatch({ type: "INIT" });
                const result = await API.get(url, urlData);
                if (!unMounted) {
                    dispatch({ type: "SUCCESSFUL", data: result.data });
                }
            } catch (err) {
                if (!unMounted) {
                    dispatch({ type: "FAIL" });
                }
            }
        }
        fetch();

        return () => {
            unMounted = true;
        };
    }, [url, urlData]);
    return [status, setUrl];
}