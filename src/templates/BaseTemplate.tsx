import { type ReactNode } from 'react';

type IBaseTemplateProps = {
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => {
  return <main className="relative overflow-hidden">{props.children}</main>;
};

export { BaseTemplate };
