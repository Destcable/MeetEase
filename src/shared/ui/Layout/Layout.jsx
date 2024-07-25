import { Tree, TreeItemLayout } from "@fluentui/react-components";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { SidebarWrapper } from "./components/SidebarWrapper";
import { ContentWrapper } from "./components/ContentWrapper";
import { Suspense } from "react";

export const Layout = () => {
    return <LayoutWrapper>
        <SidebarWrapper>
            <Tree aria-label="Default">
                <TreeItemLayout>Schedule Meeting</TreeItemLayout>
                <TreeItemLayout>Meetings List</TreeItemLayout>
            </Tree>
        </SidebarWrapper>
        <ContentWrapper>
            <Suspense fallback={<h1>Loading...</h1>}>
            </Suspense>
        </ContentWrapper>
    </LayoutWrapper>
};