import React from 'react';

// Hello コンポーネントの属性（プロパティ）
export interface HelloProps {
  name?: string;
}

// Hello コンポーネントの定義
export class Hello extends React.Component<HelloProps> {
  public render(): React.ReactNode {
    const name = this.props.name ?? 'Mr. Unknown';
    return (
        <h1>Hello {name} in Electron</h1>
        );
  }
}
