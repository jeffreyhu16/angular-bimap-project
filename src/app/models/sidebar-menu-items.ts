export const MODULES = [ 
    { text: 'History Discover', value: 'historyDiscover' },
    { text: 'Report', value: 'report' },
    { text: 'Rule Engine', value: 'ruleEngine' },
    { text: 'Logger', value: 'logger' },
    { text: 'Warroom', value: 'warroom' },
    { text: 'xxx', value: 'xxx' }
]

export const HISTORY_DISCOVER = ['Discover', 'Other P1', 'Other P2'];

export const REPORT = [
    {
        id: 0,
        text: '資安部門',
        value: 'securityDepartment',
        items: [
            { text: 'Firewall', value: 'firewall' },
            { text: 'F5 WAF', value: 'f5Waf' },
            { text: 'ASA', value: 'asa' }
        ]
    },
    {
        id: 1,
        text: '網路部門',
        value: 'internetDepartment',
        items: [
            { text: 'IIS', value: 'iis' },  
            { text: 'Fortigate', value: 'ortigate' },
            { text: 'Solarwind', value: 'solarwind' }
        ]
    },
    {
        id: 2,
        text: '設定',
        value: 'settings',
        items: [
            { text: '儀表板來源設定', value: 'sourceSettings' },
            { text: '儀表板顯示設定', value: 'displaySettings' }
        ]
    }
];