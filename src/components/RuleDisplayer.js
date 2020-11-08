export default function RuleDisplayer({ rule }) {

    const RULE_TYPE = {
        wfTime: <p>{`The desired step should be completed after ${rule.condition} days`}</p>,
        stepTime: <p>{`The desired workflow should be completed after ${rule.condition} days`}</p>,
        stepsFasele: <p>{`The interval between 2 steps is ${rule.condition} days`}</p>
    };

    return (
        <table className="border-pink-700 border-4 mx-auto w-11/12">
            <tbody>
                <tr className="border-pink-300 border-b-2">
                    <td className="border-pink-100 border-r-2"><b>name</b></td>
                    <td>{rule.name}</td>
                </tr>
                <tr className="border-pink-300 border-b-2">
                    <td className="border-pink-100 border-r-2"><b>description</b></td>
                    <td>{rule.description}</td>
                </tr >
                <tr className="border-pink-300 border-b-2">
                    <td className="border-pink-100 border-r-2"><b>condition</b></td>
                    <td>
                        {
                            RULE_TYPE[rule.type]
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    )

}

