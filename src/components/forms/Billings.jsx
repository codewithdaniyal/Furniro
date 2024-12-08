import Input from "../shared/Input";

const Billings = () => {
  return (
    <div>
      <h1 className="font-semibold md:text-[36px] text-[24px] md:text-start text-center">
        Billing details
      </h1>
      <div className="flex justify-between space-x-2 mt-8">
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>
      <div className="mt-8">
        <Input label="Company Name (Optional)" />
      </div>
      <div className="mt-8">
        <Input label="Country / Region" />
      </div>
      <div className="mt-8">
        <Input label="Street Address" />
      </div>
      <div className="mt-8">
        <Input label="Town / City" />
      </div>
      <div className="mt-8">
        <Input label="Zip Code" />
      </div>
      <div className="mt-8">
        <Input label="Email Address" />
      </div>
      <div className="mt-8">
        <Input label="Additional Information" />
      </div>
    </div>
  );
};

export default Billings;
