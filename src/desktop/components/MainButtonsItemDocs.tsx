import React from 'react';
import { docsType } from '../../@types';
import checkingSpecial from '../../utils/checkingSpecial';
type MainButtonsItemDocsPropsType = {
  doc: docsType;
  func: (list: string[]) => void;
  selectedIdDocs: string;
  setSelectedIdDocs: React.Dispatch<React.SetStateAction<string>>;
};
export default function MainButtonsItemDocs({
  doc,
  func,
  selectedIdDocs,
  setSelectedIdDocs,
}: MainButtonsItemDocsPropsType) {
  return (
    <div
      className={selectedIdDocs === doc.fb_id ? 'main__buttons-docs active' : 'main__buttons-docs'}
      onClick={() => {
        setSelectedIdDocs(doc.fb_id);
        func([doc.fb_id]);
      }}
    >
      <div className="main__buttons-docs-left">
        {doc.subject ? <div>{doc.subject}</div> : ''}
        {doc.teacher ? <div>{doc.teacher}</div> : ''}
        {doc.title ? (
          <div className="main__buttons-title">{doc.title}</div>
        ) : checkingSpecial(doc.fb_id) ? (
          <div className="main__buttons-bylldan">by lldan</div>
        ) : (
          ''
        )}
      </div>
      <div className="main__buttons-docs-right">
        {doc.course ? <div>{doc.course} курс</div> : ''}
        {doc.semestr ? <div>{doc.semestr} семестр</div> : ''}
        <div className="main__buttons-year">{doc.year}</div>
      </div>
    </div>
  );
}
