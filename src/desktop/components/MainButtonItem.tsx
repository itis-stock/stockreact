import React from 'react';
type MainButtonItemPropsType = {
  list: string[];
  ke: string;
  func: (list: string[]) => void;
  selectedId: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
};
export default function MainButtonItem({
  list,
  ke,
  func,
  selectedId,
  setSelectedId,
}: MainButtonItemPropsType) {
  return (
    <div
      className={selectedId === ke ? 'main__buttons-docs active' : 'main__buttons-docs'}
      onClick={() => {
        setSelectedId(ke);
        func(list);
      }}
    >
      <div className="main__buttons-docs-left">
        <div>{ke.split('-')[2] || ''}</div>
        <div>{ke.split('-')[3] || ''}</div>
      </div>
      <div className="main__buttons-docs-right">
        <div>{ke.split('-')[0] || ''} курс</div>
        <div>{ke.split('-')[1] || ''} семестр</div>
      </div>
    </div>
  );
}
