export default function MainButtonsHint({ text, count }: { text: string; count: number }) {
  return (
    <div className="main__buttons-hint">
      {count}
      <div></div>
      {text}
    </div>
  );
}
