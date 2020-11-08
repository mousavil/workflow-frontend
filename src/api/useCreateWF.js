import API from './api';
export default function useCreateWF() {
    return async (workflow) => {
        const { name, steps, rules } = workflow;
        try {
            const result1 = await API.post('/workflows/create', { name });
            
            if (!result1) {
                return {
                    isOk:false,
                    messege:'somethimg is wrong. please try again'
                };
            }
            
            const result2 = await API.post('/steps/create', { workflowId: result1.data.id, steps });
            if (!result2) {
                return {
                    isOk:false,
                    messege:'somethimg is wrong. please try again'
                };
            }
            const r2Data = result2.data;
            
            if (!r2Data.isOk) {
                return{
                    isOk:false,
                    messege:r2Data.messege,
                    workflow:workflow
                };
            }
            
            const result3 = await API.post('workflows/addRules/', { workflowId: result1.data.id, rules });
            if (!result3) {
                return {
                    isOk:false,
                    messege:'somethimg is wrong. please try again'
                };
            }
            const r3Data = result3.data;
            
            if (!r3Data.isOk) {
                return r3Data.messege;
            }


        } catch (err) {
            console.log(err);
            return {
                isOk:false,
                messege:'somethimg is wrong. please try again'
            };
        }
    };
}