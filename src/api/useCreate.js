import API from "./api";

export default function useCreate(url) {
    return async (objectData, initMessege) => {
        try {
            const confirm = window.confirm(initMessege);
            if (!confirm) return;
            const result = await API.post(url, objectData);
            const messageObject = result.data.message;
            const { message } = messageObject;
            window.alert(message);

        } catch (err) {
            console.log(err);
        }

    }
}

