const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        className="w-full rounded-xl border-2 border-textColor3 font-medium text-[16px] mt-4 h-12 px-2"
      />
    </div>
  );
};

export default Input;
