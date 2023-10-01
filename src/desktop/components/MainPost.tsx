import MainPostItem from './MainPostItem';

type MainPostPropsType = {
  posts: string[];
  buttonsKey: 'exams' | 'tests';
  roll: boolean;
};
export default function MainPost({ posts, buttonsKey, roll }: MainPostPropsType) {
  return (
    <div className="main__posts-wrapper">
      <div className="main__posts">
        {posts.map((el) => {
          return <MainPostItem fb_id={el} buttonsKey={buttonsKey} roll={roll} />;
        })}
      </div>
    </div>
  );
}
