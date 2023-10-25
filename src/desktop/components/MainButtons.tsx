import React from "react";
import { metaType, teachersType } from "../../@types";
import { buttonsId } from "../MainDesktop";
import joinTeachers from "../../utils/joinTeachers";
import getSemestr from "../../utils/getSemestr";
import MainButtonsHint from "./MainButtonsHint";
import MainButtonsItemDocs from "./MainButtonsItemDocs";
import MainButtonItem from "./MainButtonItem";
import Skeleton from "./Skeleton";
type MainButtonsPropsType = {
  meta: metaType | null;
  teachers: teachersType | null;
  buttonsKey: buttonsId;
  func: (posts: string[]) => void;
};
export default function MainButtons({
  meta,
  teachers,
  buttonsKey,
  func,
}: MainButtonsPropsType) {
  const [relevantIdDocs, setRelevantIdDocs] = React.useState<string[]>([]);
  const [relevantId, setRelevantId] = React.useState<string[]>([]);

  const [selectedIdDocs, setSelectedIdDocs] = React.useState("");
  const [selectedId, setSelectedId] = React.useState("");

  React.useEffect(() => {
    setSelectedId("");
    setSelectedIdDocs("");
    const teachersJoin: string[] = [];
    if (teachers) {
      if (buttonsKey === "docs" || buttonsKey === "exams") {
        teachers.lecture.map((el) => {
          teachersJoin.push(
            joinTeachers(teachers.course, getSemestr(), el.subject, el.name),
          );
        });
      } else if (buttonsKey === "tests") {
        teachers.practice.map((el) => {
          teachersJoin.push(
            joinTeachers(teachers.course, getSemestr(), el.subject, el.name),
          );
        });
      }
    }
    if (meta && buttonsKey === "docs") {
      const relevantIdDocsBuffer: string[] = [];
      meta["docs"].map((el) => {
        if (el.course && el.semestr && el.subject && el.teacher) {
          if (
            teachersJoin.includes(
              joinTeachers(el.course, el.semestr, el.subject, el.teacher),
            )
          ) {
            relevantIdDocsBuffer.push(el.fb_id);
          }
        }
      });
      setRelevantIdDocs(relevantIdDocsBuffer);

      // console.log(meta['docs']);
    } else if (meta && (buttonsKey === "exams" || buttonsKey === "tests")) {
      const relevantIdBuffer: string[] = [];
      Object.keys(meta[buttonsKey]).map((el) => {
        const elem = el.split("-");
        if (
          teachersJoin.includes(
            joinTeachers(Number(elem[0]), Number(elem[1]), elem[2], elem[3]),
          )
        ) {
          relevantIdBuffer.push(el);
        }
      });
      setRelevantId(relevantIdBuffer);
    }
  }, [buttonsKey, meta, teachers]);
  if (!buttonsKey) {
    return <></>;
  }
  if (!meta || !teachers) {
    return (
      <div className="main__buttons">
        <div className="main__buttons-wrapper">
          <Skeleton width={400} height={40} radius={9} />
          <Skeleton width={400} height={80} radius={9} />
          <Skeleton width={400} height={80} radius={9} />
          <Skeleton width={400} height={40} radius={9} />
          <Skeleton width={400} height={80} radius={9} />
          <Skeleton width={400} height={80} radius={9} />
          <Skeleton width={400} height={80} radius={9} />
          <Skeleton width={400} height={80} radius={9} />
        </div>
      </div>
    );
  }

  if (buttonsKey === "docs") {
    return (
      <div className="main__buttons">
        <div className="main__buttons-wrapper">
          <MainButtonsHint
            text="Релевантные результаты"
            count={relevantIdDocs.length}
          />
          {meta["docs"].map((el, i) => {
            if (relevantIdDocs.includes(el.fb_id)) {
              return (
                <MainButtonsItemDocs
                  key={i}
                  doc={el}
                  func={func}
                  setSelectedIdDocs={setSelectedIdDocs}
                  selectedIdDocs={selectedIdDocs}
                />
              );
            }
          })}
          <MainButtonsHint
            text="Остальные результаты"
            count={meta["docs"].length - relevantIdDocs.length}
          />
          {meta["docs"].map((el, i) => {
            if (!relevantIdDocs.includes(el.fb_id)) {
              return (
                <MainButtonsItemDocs
                  key={i}
                  doc={el}
                  func={func}
                  setSelectedIdDocs={setSelectedIdDocs}
                  selectedIdDocs={selectedIdDocs}
                />
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="main__buttons">
        <div className="main__buttons-wrapper">
          <MainButtonsHint
            text="Релевантные результаты"
            count={relevantId.length}
          />
          {Object.keys(meta[buttonsKey]).map((el, i) => {
            if (relevantId.includes(el)) {
              return (
                <MainButtonItem
                  key={i}
                  list={meta[buttonsKey][el]}
                  ke={el}
                  func={func}
                  setSelectedId={setSelectedId}
                  selectedId={selectedId}
                />
              );
            }
          })}
          <MainButtonsHint
            text="Остальные результаты"
            count={Object.keys(meta[buttonsKey]).length - relevantId.length}
          />
          {Object.keys(meta[buttonsKey]).map((el, i) => {
            if (!relevantId.includes(el)) {
              return (
                <MainButtonItem
                  key={i}
                  list={meta[buttonsKey][el]}
                  ke={el}
                  func={func}
                  setSelectedId={setSelectedId}
                  selectedId={selectedId}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}
