export default function TextInput(props: {
  height?: string | number;
  width?: string | number;
  ref?: string;
}) {
  return (
    <input
      type="text"
      className={`text-offWhite focus:border-darkTurqouise mx-4 h-4 w-[calc(100%-2rem)] rounded-lg bg-gray-800 px-3 py-3 pl-8 align-bottom focus:outline-none focus:ring-0`}
    ></input>
  );
}
