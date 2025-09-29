export default function MainNumbers(){
    return(
        <div className="main-number">
            <div className="main-number__heading">
                <p>SINCE 2019</p>
                <h2>In numbers</h2>
            </div>
            <div className="main-number__bloack-info">
                <hr />
                <div className="block-info__block">
                    <div>
                        <h3>Happy clients</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.</p>
                    </div>
                    <div>
                        <span>1000+</span>
                    </div>
                </div>
                <hr />
                <div className="block-info__block">
                    <div>
                        <h3>Products created</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.</p>
                    </div>
                    <div>
                        <span>20+</span>
                    </div>
                </div>
                <hr />
                <div className="block-info__block">
                    <div>
                        <h3>Investments received</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.</p>
                    </div>
                    <div className="info__block-num">
                        <span>$5M+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}