import classes from '../../modules/CreateUser.module.scss';
import React, { useState } from 'react';
const CreateUserMobileInput = ({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [inputData, setInputData] = useState(inputValue);
  if (inputData === 'Написать') {
    setInputData('');
  }

  return (
    <>
      <div className={classes['createUser__choose-form']}>
        <label className={classes['createUser__choose-label']}>
          <input
            type="text"
            value={inputData}
            placeholder="Введите что-то..."
            className={classes['createUser__choose-input']}
            onChange={(event) => {
              if (event.target.value.length <= 40) {
                setInputData(event.target.value);
                setInputValue(event.target.value);
              }
            }}
          />
          {inputData.length != 0 ? (
            <button
              className={classes['createUser__choose-reset']}
              onClick={() => {
                setInputData('');
                setInputValue('Написать');
              }}
            />
          ) : (
            ''
          )}
        </label>
      </div>
    </>
  );
};

export default CreateUserMobileInput;
