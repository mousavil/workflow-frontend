import React from 'react';

export default function WFRuleAdderButton({ isAdminWantToAddRule, setIsAdminWantToAddRule }) {
    return (
        <>
            {
                isAdminWantToAddRule ? (
                    <button type="button"
                        className="w-20 h-16 boreder-2 border-orange-200 hover:border-orange-900"
                        onClick={() => setIsAdminWantToAddRule(false)}
                    >cancel adding rule</button>
                ) : (
                        <button type="button"
                            className="w-20 h-16 boreder-2 border-orange-200 hover:border-orange-900"
                            onClick={() => setIsAdminWantToAddRule(true)}
                        >add rule</button>
                    )
            }
        </>
    )
}