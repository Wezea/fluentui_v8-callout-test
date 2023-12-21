import {
  ContextualMenu,
  DetailsList,
  DetailsRow,
  IColumn,
  IContextualMenuItem,
  IDetailsRowProps,
} from "@fluentui/react";
import React from "react";

const menuItems: IContextualMenuItem[] = [
  {
    key: "newItem",
    text: "New",
    onClick: () => console.log("New clicked"),
  },
  {
    key: "edit",
    text: "Edit",
    onClick: () => console.log("Edit clicked"),
  },
];

const columns: IColumn[] = [
  {
    key: "column1",
    name: "Name",
    fieldName: "name",
    minWidth: 210,
    maxWidth: 350,
  },
];

const items = [
  {
    key: 1,
    name: "Name 1",
  },
  {
    key: 2,
    name: "Name 2",
  },
];

const DetailsListRow: React.FC<IDetailsRowProps> = (props) => {
  const linkRef = React.useRef(null);
  const [showContextualMenu, setShowContextualMenu] = React.useState(false);
  const [targetPoint, setTargetPoint] = React.useState({ left: 0, top: 0 });

  const onShowContextualMenu = React.useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault(); // don't navigate
      setShowContextualMenu(true);
      setTargetPoint({ left: ev.clientX, top: ev.clientY });
    },
    []
  );

  const onHideContextualMenu = React.useCallback(
    () => setShowContextualMenu(false),
    []
  );

  return (
    <>
      <div onContextMenu={onShowContextualMenu}>
        <DetailsRow {...props} />
      </div>
      {showContextualMenu && (
        <ContextualMenu
          items={menuItems}
          target={props.item.key === 2 ? targetPoint : linkRef}
          onItemClick={onHideContextualMenu}
          onDismiss={onHideContextualMenu}
        />
      )}
    </>
  );
};

export const SampleDetailsList = () => {
  const onRenderRow = (rowProps?: IDetailsRowProps) => {
    if (!rowProps) return null;
    return <DetailsListRow {...rowProps} />;
  };

  return (
    <DetailsList
      isHeaderVisible={false}
      columns={columns}
      items={items}
      onRenderRow={onRenderRow}
    />
  );
};
