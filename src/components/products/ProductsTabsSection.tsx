import { useState } from "react";
import BannerInCol from "../common/BannerInCol";
import Tabs from "../common/Tabs";
import ProductInCol from "./ProductInCol";

type Props = {
    tabs: Array<{
        id: string;
        title: string;
    }>;
    bannerTitle: string;
    bannerImageURL: string;
};

const ProductsTabsSection = (props: Props) => {
    const [activeTab, setActiveTab] = useState(props.tabs[0]?.id);

    return (
        <div className="container products-tabs-section">
            {props.tabs.length >= 1 ? (
                <>
                    <Tabs
                        tabs={props.tabs}
                        activeTab={activeTab}
                        setTab={setActiveTab}
                    />
                    {props.tabs.map(
                        (tab, key) =>
                            tab.id == activeTab && (
                                <div
                                    className="row"
                                    datatype={tab.id}
                                    key={key}
                                >
                                    {tab.id == props.tabs[0].id ? (
                                        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                            <BannerInCol
                                                title={props.bannerTitle}
                                                bannerURL={props.bannerImageURL}
                                            />
                                        </div>
                                    ) : (
                                        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                            <ProductInCol
                                                inStock={false}
                                                imageId="3"
                                            />
                                        </div>
                                    )}
                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <ProductInCol
                                            inStock={true}
                                            imageId="1"
                                        />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <ProductInCol
                                            inStock={false}
                                            imageId="3"
                                        />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <ProductInCol
                                            inStock={true}
                                            imageId="2"
                                        />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <ProductInCol
                                            inStock={true}
                                            imageId="4"
                                        />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <ProductInCol
                                            inStock={true}
                                            imageId="2"
                                        />
                                    </div>
                                </div>
                            )
                    )}
                </>
            ) : (
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <BannerInCol
                            title={props.bannerTitle}
                            bannerURL={props.bannerImageURL}
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <ProductInCol inStock={true} imageId="1" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <ProductInCol inStock={false} imageId="3" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <ProductInCol inStock={true} imageId="2" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <ProductInCol inStock={true} imageId="4" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <ProductInCol inStock={true} imageId="2" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsTabsSection;
