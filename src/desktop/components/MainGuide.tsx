import React from 'react';
import { metaType, teachersType } from '../../@types';
type MainGuidePropsType = {
  teachers: teachersType | null;
  id: 'exams' | 'tests' | 'docs' | 'API' | 'history' | null;
  meta: metaType;
  func: (list: string[]) => void;
};
export default function MainGuide({ id, meta, func }: MainGuidePropsType) {
  const [selectedKey, setSelectedKey] = React.useState<string>('');
  if (!meta) {
    return <>123</>;
  }
  if (id === 'docs' || id === 'API' || id === 'history' || id === null) {
    return <>docs</>;
  }
  return (
    <div className="main__guide">
      {Object.keys(meta[id]).map((el) => {
        const elSplit = el.split('-');
        return (
          <div
            className={selectedKey && selectedKey === el ? 'main__comp active' : 'main__comp'}
            onClick={() => {
              setSelectedKey(el);
              func(meta[id][el]);
            }}
          >
            <div className="main__comp-table">
              <div>{elSplit[2]}</div>
              <div>{elSplit[3]}</div>
            </div>
            <div className="main__comp-tap">
              <div>{elSplit[0]} курс</div>
              <div>{elSplit[1]} семестр</div>
            </div>
          </div>
        );
      })}
      <div className="main__tip">Листай вниз</div>
    </div>
  );
}
