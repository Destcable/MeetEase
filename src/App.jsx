import { Button, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Tree, TreeItemLayout } from "@fluentui/react-components";

const App = () => {
    return <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ width: 250, background: '#f3f2f1', padding: 10, borderRight: `1px solid #e1e1e1` }}>
            <Tree aria-label="Default">
                <TreeItemLayout>Schedule Meeting</TreeItemLayout>
                <TreeItemLayout>Meetings List</TreeItemLayout>
            </Tree>
            <Menu>
                <MenuTrigger>
                    <Button>Menu</Button>
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        <MenuItem>Schedule Meeting</MenuItem>
                        <MenuItem>Meetings List</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
        <div style={{ flexGrow: 1, padding: 20 }}>
            <h1>MeetEase</h1>
            {/* <MeetingForm /> */}
        </div>
    </div>
};

export default App;