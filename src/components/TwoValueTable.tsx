interface TwoValueTableProps {
  data: Record<string, string>;
}
export const TwoValueTable = ({ data }: TwoValueTableProps) => {
  return (
    <div className="min-w-80 w-full flex flex-col gap-y-[18px]">
      {Object.keys(data).map((key, index) => {
        return (
          <div key={index} className="flex flex-col gap-y-[18px]">
            <div className="flex ">
              <p className="basis-1/2">{key}</p>
              <p>{data[key]}</p>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        );
      })}
    </div>
  );
};
