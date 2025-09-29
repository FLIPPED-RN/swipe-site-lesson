export default function MainBlockTwo(){
    return(
        <div className="main-block__two">
            <div className="main-block__two-heading">
                <h2>Get to know our main features</h2>
                <button>Buy now</button>
            </div>
            <div className="main-block__two-info">
                <div className="info-block__main">
                    <h3>Simple</h3>
                    <p>Here you will not find complex technological solutions that will baffle you.</p>

                    <span className="info-blocks">
                        <img src="/settings.svg" alt="" />
                        <p>Save your resources on development</p>
                    </span>
                    <span className="info-blocks">
                        <img src="/block.svg" alt="" />
                        <p>Easy to understand</p>
                    </span>
                    <span className="info-blocks">
                        <img src="/user.svg" alt="" />
                        <p>User friendly</p>
                    </span>
                </div>
                <hr />
                <div className="info-block__main">
                    <h3>Customizable</h3>
                    <p>You can reuse blocks and individual elements to create something unique on your website.</p>

                    <span className="info-blocks">
                        <img src="/replace.svg" alt="" />
                        <p>Reuse the sections and create your own style</p>
                    </span>
                    <span className="info-blocks">
                        <img src="/time.svg" alt="" />
                        <p>Save your time</p>
                    </span>
                    <span className="info-blocks">
                        <img src="/settings.svg" alt="" />
                        <p>Save your resources on development</p>
                    </span>
                    <span className="info-blocks">
                        <img src="/molnia.svg" alt="" />
                        <p>Unique design</p>
                    </span>
                </div>
                <hr />
                <div className="info-block__main">
                    <h3>Stylish</h3>
                    <p>Right and without unnecessary tinsel, just scroll through this template and you will see.</p>

                    <span className="info-blocks">
                        <img src="/molnia.svg" alt="" />
                        <p>Unique design</p>
                    </span>
                    <span className="info-blocks">
                        <img src="/star.svg" alt="" />
                        <p>Unforgettable 3D elements and trendy glass-effect</p>
                    </span>
                    <div className="info-blocks">
                        <img src="/car.svg" alt="" />
                        <p>Design that drives an industry</p>
                    </div>
                </div>
            </div>
                <div className="background__one"></div>
                <div className="background__two"></div>
                <div className="background__three"></div>
        </div>
    )
}