type Props = {
    activeTab: string;
    setTab: Function;
    tabs: Array<{
        id: string;
        title: string;
    }>;
};

const Tabs = (props: Props) => {
    return (
        <div className="tabs">
            {props.tabs.map((tab) => (
                <div
                    onClick={() => props.setTab(tab.id)}
                    key={tab.id}
                    className={
                        props.activeTab === tab.id ? "tab active" : "tab"
                    }
                >
                    {tab.title}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
