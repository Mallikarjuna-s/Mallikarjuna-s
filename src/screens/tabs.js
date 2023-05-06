import React, {useState} from 'react'
import Tabs from '../coustumtabs/tabs/tabs'
import ResponsiveDrag from './drag'
import ListView from './screen'
// import GetLoder from './CustomLoader'

const tabs = [
    {
        label: 'Tab One',
        index: 1,
        Component: ResponsiveDrag,
    },
    {
        label: 'Tab Two',
        index: 2,
        Component: ListView,
    },
    // {
    //   label: "Tab Three",
    //   index: 3,
    //   Component: GetLoder
    // }
]

const TabsRender = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].index)

    return (
        <Tabs selectedTab={selectedTab} onPress={setSelectedTab} tabs={tabs} />
    )
};

export default TabsRender;

