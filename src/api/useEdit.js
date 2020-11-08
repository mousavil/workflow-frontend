import API from "../api/api"

export default function useEdit(id, url) {
    return async (dataObject,initMessege) => {
        try {
            const confirm = window.confirm(initMessege);
            if (!confirm) return;
            const result = await API.put(url, { id: id, ...dataObject });
            const messageObject = result.data.message;
            const { message } = messageObject;
            window.alert(message);

        } catch (err) {
            console.log(err);
        }

    }
}