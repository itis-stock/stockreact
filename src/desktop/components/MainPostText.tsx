const regex = /((http|https):\/\/[^\s]+)/g;

export default function MainPostText({ text }: { text: string | undefined }) {
  if (!text) {
    return <></>;
  }
  return (
    <>
      {text.split('$$').map((el) => {
        return (
          <div>
            {el.split(' ').map((e) => {
              if (regex.test(e)) {
                return <a href={e}>{new URL(e).hostname} </a>;
              } else {
                return <span>{e} </span>;
              }
            })}
          </div>
        );
      })}
    </>
  );
}
