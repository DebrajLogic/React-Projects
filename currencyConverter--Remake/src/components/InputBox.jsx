/* eslint-disable react/prop-types */
function InputBox({
    label,
    value,
    disabled = false,
    options = [],
    onAmountChange,
    onCurrencyChange,
    currencySelected,
  }) {
    return (
      <div className="bg-white p-4 rounded-lg w-96 m-4">
        <div className="flex justify-between mb-4">
          <h3 className="text-gray-500">{label}</h3>
          <h3 className="text-gray-500">Currency Type</h3>
        </div>
  
        <div className="flex justify-between">
          <input
            value={value}
            onChange={onAmountChange}
            disabled={disabled}
            className="bg-gray-200 rounded-md px-2 border-0 outline-none text-green-900"
            type="number"
          />
          <select
            onChange={onCurrencyChange}
            className="rounded-md bg-gray-200 px-2"
            name="currency"
            id=""
            value={currencySelected}
          >
            <option value="">select</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  export default InputBox;
  