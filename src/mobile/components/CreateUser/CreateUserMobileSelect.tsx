import React from 'react';
import classes from '../../modules/CreateUser.module.scss';
import arrowSelect from '../../images/arrowdown.svg';
import { groupsType } from '../../../@types';
const CreateUserMobileSelect = ({
  setGroup,
  group,
  groups,
  course,
}: {
  setGroup: React.Dispatch<React.SetStateAction<string>>;
  group: string;
  groups: groupsType[];
  course: string;
}) => {
  const groupsCourse1 = groups.filter((item) => item.course == 1);
  const groupsCourse2 = groups.filter((item) => item.course == 2);
  const groupsCourse3 = groups.filter((item) => item.course == 3);
  const groupsCourse4 = groups.filter((item) => item.course == 4);

  function sort(groupsCourse: groupsType[]) {
    groupsCourse.sort((a, b) => (a.group > b.group ? 1 : -1));
  }
  sort(groupsCourse1);
  sort(groupsCourse2);
  sort(groupsCourse3);
  sort(groupsCourse4);

  const groupsCourse = [groupsCourse1, groupsCourse2, groupsCourse3, groupsCourse4];
  function select(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setGroup(target.value);
  }
  return (
    <>
      <div className={classes['createUser__select-form']}>
        <div className={classes['createUser__select-block']}>
          <div className={classes['createUser__select-info']}>
            {groupsCourse[+course.charAt(0) - 1].map((item, index: number) => (
              <label key={index} className={classes['createUser__select-label']}>
                <input
                  type="button"
                  value={item.group}
                  className={classes['createUser__select-input']}
                  onClick={(event) => {
                    select(event);
                  }}
                />
                {group === item.group ? (
                  <img
                    src={arrowSelect}
                    alt="select"
                    className={classes['createUser__select-arrow']}
                  />
                ) : (
                  ''
                )}
                {index !== groupsCourse[+course.charAt(0) - 1].length - 1 ? (
                  <span className={classes['createUser__select-line']}></span>
                ) : (
                  ''
                )}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserMobileSelect;
