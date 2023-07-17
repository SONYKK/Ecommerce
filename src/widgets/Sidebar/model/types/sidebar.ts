import React from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
export interface TypeOfDeviceInt {
    path: string;
    text: string;
}
