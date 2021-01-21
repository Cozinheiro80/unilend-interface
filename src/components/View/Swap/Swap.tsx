import React, { FC } from 'react'
import ContentCard from '../UI/ContentCard/ContentCard';
import FieldCard from '../UI/FieldsCard/FieldCard';

import './Swap.scss'
import switchIcon from '../../../assets/switch.svg';
import { useStore } from '../../../store/store';
interface Props {

}

const Swap: FC<Props> = (props) => {
    const state: any = useStore()[0];
    return (
        <>
            <ContentCard>
                <div className="swap-root">
                    <FieldCard fieldLabel="Your Collateral" selectLabel="Balance: -" list={state.currency} />
                    <div className="switch-body py-3">
                        <button className="btn btn-icon align-center"><img src={switchIcon} alt="" /></button>

                    </div>
                    <FieldCard fieldLabel="Received" selectLabel="" list={state.currency} />
                    <div className="d-grid py-3">
                        <button className="btn btn-lg btn-custom-primary" type="button">Connect Wallet</button>
                    </div>
                    <div className="price_head">
                        <div className="price_aa">
                            <div className="price-list">Borrow APR <span className="price">-</span></div>
                            <div className="price-list">LTV <span className="price ltv">-</span></div>
                            <div className="price-list">LBV <span className="price lbv">-</span></div>
                            <div className="price-list">Liquidity Available <span className="price avail">-</span></div>
                        </div>
                    </div>
                </div>
            </ContentCard>
        </>
    )
}

export default Swap;