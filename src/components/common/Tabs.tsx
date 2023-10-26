type Props = {
    taxonomy: string;
    activeTab: string;
    setTab: Function;
    tabs: Array<{
        id: string;
        name: string;
        count: number;
        taxonomyName: string;
    }>;
};

const Tabs = (props: Props) => {
    return (
        <div className="tabs">
            {props.tabs.map(
                (tab) =>
                    tab?.taxonomyName === props.taxonomy && (
                        <div
                            onClick={() => props.setTab(tab?.id)}
                            key={tab?.id}
                            className={
                                props.activeTab == tab?.id
                                    ? "tab active"
                                    : "tab"
                            }
                        >
                            {tab?.name}
                        </div>
                    )
            )}
        </div>
    );
};

export default Tabs;
