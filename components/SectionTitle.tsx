interface Props {
  title: string;
  titleNo: string;
  subtitle?: string;
}

const SectionTitle = ({ title, titleNo, subtitle }: Props) => {
  return (
    <div>
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        <span className="text-base md:text-lg text-textGreen mr-2">
          {titleNo}.
        </span>
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
      </h2>
      {subtitle && (
        <h3 className="font-subtitleFont text-lg font-medium mt-2">
          {subtitle}
        </h3>
      )}
    </div>
  );
};
export default SectionTitle;
