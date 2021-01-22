import React, { FC, useEffect } from 'react'
import { useStore } from '../../../store/store';
import ContentCard from '../UI/ContentCard/ContentCard'
import FieldCard from '../UI/FieldsCard/FieldCard'

interface Props {

}

const Repay: FC<Props> = (props) => {
    const state: any = useStore()[0];
    const dispatch: any = useStore(true)[1];
    useEffect(() => {
        dispatch('TOGGLE', {});
        console.log(props);
    }, [])
    const handleUpdate = () => {
        dispatch('TOGGLE', {});
        console.log(state)
    }
    return (
        <>
            <ContentCard>
                {/* <button onClick={handleUpdate}>Refresh</button> */}
                <FieldCard fieldLabel="You Repay" selectLabel="Balance: -" list={state.currency} />
                <div className="d-grid pt-4">
                    <button className="btn btn-lg btn-custom-primary" type="button">Connect Wallet</button>
                </div>
            </ContentCard>
        </>
    )
}

export default Repay;